// @ts-nocheck
import { pipeline } from '@xenova/transformers';

// Skip local model checks since we're running in browser
class MyPipeline {
  static task = 'text2text-generation';
  // Use a quantized version of Flan-T5 for better browser performance
  static model = 'Xenova/LaMini-Flan-T5-77M'; 
  static instance: any = null;

  static async getInstance(progress_callback: any = null) {
    if (this.instance === null) {
      this.instance = await pipeline(this.task, this.model, { 
        progress_callback 
      });
    }
    return this.instance;
  }
}

// Global context handling for worker
const ctx: Worker = self as any;

// Listen for messages from main thread
ctx.addEventListener('message', async (event) => {
  const { text } = event.data;

  try {
    // 1. Notify we are starting or ready (if just initialized)
    // For specific task processing:
    
    // Get the model pipeline
    const generator = await MyPipeline.getInstance((x: any) => {
      // Create progress updates if needed
      // console.log(x);
    });

    // Notify ready state first time
    if (!text) {
      ctx.postMessage({ status: 'ready' });
      return;
    }

    // 2. Generate response
    // Craft a prompt context to make it act like Rakesh's assistant
    const systemPrompt = `You are a helpful AI assistant for Rakesh Mohan, a Technology Evangelist. You know about VOIP, AI, Cloud, and Unified Communications. Answer politely and concisely. User question: ${text}`;

    const output = await generator(systemPrompt, {
      max_new_tokens: 100,
      temperature: 0.7,
      repetition_penalty: 1.2,
    });

    // 3. Send back result
    ctx.postMessage({
      status: 'complete',
      output: output[0].generated_text
    });

  } catch (err: any) {
    ctx.postMessage({
      status: 'error',
      output: "I'm having trouble thinking right now. Please try again."
    });
    console.error(err);
  }
});

// Notify that worker is alive
ctx.postMessage({ status: 'ready' });
