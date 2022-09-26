import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { CreateEvent } from './create-user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @EventPattern('user-created')
  handleUserCreated(data: CreateEvent) {
    this.appService.handleUserCreated(data);
  }
  @EventPattern('user-find')
  handleUserGet(data:any) {
    console.log(data)
    this.appService.handleUserGet(data);
  }
}
