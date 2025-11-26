import { createGroq } from '@ai-sdk/groq';
import { convertToModelMessages, streamText } from 'ai';

export const runtime = 'edge';

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  const reqJson = await req.json();

  const result = streamText({
    // Using Llama 3.3 70B - fast and capable (free tier)
    // Other options: 'llama-3.1-8b-instant', 'mixtral-8x7b-32768', 'gemma2-9b-it'
    model: groq('llama-3.3-70b-versatile'),
    system: `You are a helpful AI assistant for the Praxis documentation site.
You help users understand concepts related to AI interactions engineering,
trustworthy AI systems, and technical documentation best practices.
Be concise and helpful. If you don't know something, say so.`,
    messages: convertToModelMessages(reqJson.messages, {
      ignoreIncompleteToolCalls: true,
    }),
  });

  return result.toUIMessageStreamResponse();
}
