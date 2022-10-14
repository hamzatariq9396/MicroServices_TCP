import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];
  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ) // This method is intended to call the microservice and returns an Observable with its response.
  {}

  getHello(): string {
    return 'Hello World!';
  }
  createUser(createuserdto: CreateUserDto) {
    // this.users.push(createuserdto)
    // console.log(createuserdto)
    this.communicationClient.emit(
      'user-created',
      new CreateEvent(createuserdto.email),
    );
    this.analyticsClient.emit(
      'user-created',
      new CreateEvent(createuserdto.email),
    );
    return this.users.push(createuserdto);
  }
  getUser() {
    console.log(this.users[0].email);
    this.communicationClient.emit(
      'user-find',
      new CreateEvent(this.users[0].email),
    );
  }
  getAnalytics() {
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }

  DeleteData(createuserdto: CreateUserDto) {
    //  return  console.log(createuserdto.email)
    return this.analyticsClient.emit(
      'delete-data',
      new CreateEvent(createuserdto.email),
    );
  }
  getDeleteData(createuserdto: CreateUserDto) {
    return this.analyticsClient.send({ cmd: 'DeleteAnaData' }, createuserdto);
  }
  FindDataAnalytics(createuserdto: CreateUserDto) {
    return this.analyticsClient.send({ cmd: 'Update-Data' }, createuserdto);
  }
  newPostt(data: any) {
    return this.communicationClient.send({ cmd: 'data-new' }, data);
  }
}

// You can register multiple event handlers for a single event pattern and all of them will be automatically triggered in parallel.
