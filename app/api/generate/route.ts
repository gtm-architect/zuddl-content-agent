import { NextRequest, NextResponse } from 'next/server';
import { generateChatCompletion } from '@/lib/openai';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const prompt = body?.prompt ?? '';

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 },
      );
    }

    const response = await generateChatCompletion([
      {
        role: 'system',
        content: 'You are a helpful assistant that generates concise, high-quality content.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ]);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Generate API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 },
    );
  }
}
