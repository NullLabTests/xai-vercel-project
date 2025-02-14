import fetch from 'node-fetch';

export async function POST(req) {
  const { message } = await req.json();
  const apiKey = process.env.XAI_API_KEY;

  if (!apiKey) {
    throw new Error('XAI_API_KEY is not set in environment variables');
  }

  const response = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "messages": [
        {
          "role": "user",
          "content": message
        }
      ],
      "model": "grok-2-latest"
    })
  });

  if (!response.ok) {
    throw new Error(`API request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return { 
    response: data.choices[0].message.content 
  };
}
