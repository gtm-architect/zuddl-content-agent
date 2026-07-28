import axios from 'axios';

const TAVILY_API_URL = 'https://api.tavily.com/search';

export interface TavilySearchOptions {
  query: string;
  searchDepth?: 'basic' | 'advanced';
  maxResults?: number;
  includeDomains?: string[];
  excludeDomains?: string[];
}

export interface TavilySearchResult {
  title: string;
  url: string;
  content: string;
  score?: number;
}

export async function searchTavily(options: TavilySearchOptions): Promise<TavilySearchResult[]> {
  const apiKey = process.env.TAVILY_API_KEY;

  if (!apiKey) {
    throw new Error('TAVILY_API_KEY is not configured');
  }

  const response = await axios.post(TAVILY_API_URL, {
    api_key: apiKey,
    query: options.query,
    search_depth: options.searchDepth ?? 'basic',
    max_results: options.maxResults ?? 5,
    include_domains: options.includeDomains,
    exclude_domains: options.excludeDomains,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const results = response.data?.results ?? [];

  return results.map((item: any) => ({
    title: item.title ?? '',
    url: item.url ?? '',
    content: item.content ?? '',
    score: item.score,
  }));
}
