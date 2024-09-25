import { Controller, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/ask')
  async postCompletion(@Body('content') content: string): Promise<string> {
    console.log(1111);
    const data = await this.appService.createChatCompletion(content);
    console.log(data);
    return data;
  }
}
