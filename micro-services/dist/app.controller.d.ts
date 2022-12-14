import { AppService } from './app.service';
import { CreateEvent } from './create-user.event';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    handleUserCreated(data: CreateEvent): void;
    handleUserGet(data: any): void;
    newpost(data: any): any;
}
