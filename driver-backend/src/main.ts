import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      protoPath: join(__dirname, '../proto/services.proto'),
      package: 'pb',
    },
  });
  await app.listen(() => console.log('Microservice is listening'));  

}
bootstrap();
