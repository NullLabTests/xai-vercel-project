import { createClient } from 'ai';
import { xai } from '@ai-sdk/xai';

// Create a client with your xAI provider
const xaiClient = createClient({
  provider: xai,
  apiKey: process.env.XAI_API_KEY, // Use the environment variable
});

// Example usage in an API route or server action
export async function POST(req) {
  const { message } = await req.json();
  
  // Use the client to make an API call
  const response = await xaiClient.generateText({
    model: 'grok-beta', // or whatever model you're using
    prompt: message,
  });

  return new Response(JSON.stringify({ response: response.text }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
