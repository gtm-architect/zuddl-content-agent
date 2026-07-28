import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export async function generateChatCompletion(messages: ChatMessage[], model = 'gpt-4o-mini') {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured');
  }

  const completion = await client.chat.completions.create({
    model,
    messages,
  });

  return completion.choices[0]?.message?.content ?? '';
}
