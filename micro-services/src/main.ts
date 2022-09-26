import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const logger = new Logger('Main');
const microserviceoptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: '8877',
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
{
  transport: Transport.TCP,
}
  );
  await app.listen();
}
bootstrap();
