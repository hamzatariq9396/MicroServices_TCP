import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  CreateUser(@Body() createuserdto: CreateUserDto) {
    return this.appService.createUser(createuserdto);
  }
  @Get('data')
  GetUser(){
    return this.appService.getUser()
  }
  
}
