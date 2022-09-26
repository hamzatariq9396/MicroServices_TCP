import { CreateUserDto } from './create-user.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private readonly communicationClient;
    private readonly users;
    constructor(communicationClient: ClientProxy);
    getHello(): string;
    createUser(createuserdto: CreateUserDto): void;
    getUser(): void;
}
