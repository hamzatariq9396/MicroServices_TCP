import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];
  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
  createUser(createuserdto: CreateUserDto) {
   this.users.push(createuserdto);
  // this.users.push(createuserdto)
  // console.log(createuserdto)
  this.communicationClient.emit(
      'user-created',
      new CreateEvent(createuserdto.email),
    );
  }
 getUser() {
   console.log(this.users[0].email)
  this.communicationClient.emit(
    'user-find',
    new CreateEvent(this.users[0].email),
  );
 }

}
