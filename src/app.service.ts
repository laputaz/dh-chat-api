import { Injectable } from '@nestjs/common';
import { openai } from '../ai';
import { DEFAULT_MODEL } from 'ai/const';

@Injectable()
export class AppService {
  async createChatCompletion(content: string): Promise<any> {
    console.log('content', content);
    const response = await openai.createChatCompletion({
      model: DEFAULT_MODEL,
      messages: [{ role: 'user', content }],
    });
    console.log(response);
    return response.data.choices[0].message;
  }
}
