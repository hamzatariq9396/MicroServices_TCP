import { AppService } from './app.service';
import { CreateUserDto } from './create-user.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    CreateUser(createuserdto: CreateUserDto): number;
    DeleteData(createuserdto: CreateUserDto): import("rxjs").Observable<any>;
    GetUser(): void;
    getAnalytics(): import("rxjs").Observable<any>;
    getDeleteAnalytics(createuserdto: CreateUserDto): import("rxjs").Observable<any>;
    FindDataAnalytics(createuserdto: CreateUserDto): import("rxjs").Observable<any>;
    newData(data: string): import("rxjs").Observable<any>;
}
