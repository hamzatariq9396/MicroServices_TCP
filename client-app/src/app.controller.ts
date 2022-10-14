import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
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
  @Delete('analytics/delete')
  DeleteData(@Body() createuserdto: CreateUserDto) {
    return this.appService.DeleteData(createuserdto);
  }
  @Get('data')
  GetUser() {
    return this.appService.getUser();
  }
  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
  @Delete('analytics')
  getDeleteAnalytics(@Body() createuserdto: CreateUserDto) {
    return this.appService.getDeleteData(createuserdto);
  }
  @Get('ByEmail')
  FindDataAnalytics(@Body() createuserdto: CreateUserDto){
    return this.appService.FindDataAnalytics(createuserdto);
  }
  @Post('newData')
newData(@Body() data: string){
    return this.appService.newPostt(data);
  }
}
