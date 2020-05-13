import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register(
      [
        {
          name: 'SERVICES_PB',
          transport: Transport.GRPC,
          options: {
            url: 'envoy:9090',
            package: 'pb',
            protoPath: join(__dirname, '../proto/services.proto'),
          },
        },
      ]
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
