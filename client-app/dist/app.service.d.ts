import { CreateUserDto } from './create-user.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private readonly communicationClient;
    private readonly analyticsClient;
    private readonly users;
    constructor(communicationClient: ClientProxy, analyticsClient: ClientProxy);
    getHello(): string;
    createUser(createuserdto: CreateUserDto): number;
    getUser(): void;
    getAnalytics(): import("rxjs").Observable<any>;
    DeleteData(createuserdto: CreateUserDto): import("rxjs").Observable<any>;
    getDeleteData(createuserdto: CreateUserDto): import("rxjs").Observable<any>;
    FindDataAnalytics(createuserdto: CreateUserDto): import("rxjs").Observable<any>;
    newPostt(data: any): import("rxjs").Observable<any>;
}
