import { Injectable, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateEvent } from './create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateEvent) {
    console.log('handle-userCreated - COMMUNICATION', data);
  }
  handleUserGet(data:any){
    console.log('handle-user-find - COMMUNICATION',data);
  }
  newPost(data:any){
      return data
  }
}
// return this.client.send<number>(pattern, payload);