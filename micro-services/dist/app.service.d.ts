import { CreateEvent } from './create-user.event';
export declare class AppService {
    getHello(): string;
    handleUserCreated(data: CreateEvent): void;
    handleUserGet(data: any): void;
    newPost(data: any): any;
}
