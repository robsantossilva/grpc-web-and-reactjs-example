import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './entities/driver.entity';
import { DriverService } from './services/driver.service';
import { DriverSubscriber } from './subscriber/driver.subscriber';
import { DriverController } from './controllers/driver.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Driver,
        ]),
    ],
    providers: [
        DriverService,
        DriverSubscriber,
    ],
    controllers: [DriverController],
})
export class DriverModule {}
