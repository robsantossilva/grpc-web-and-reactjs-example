import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Driver } from '../entities/driver.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DriverService {
    constructor(
        @InjectRepository(Driver)
        public driversRepository: Repository<Driver>,
    ){}

    async create(driver={}): Promise<Driver> {
        const newDriver = this.driversRepository.create(driver);
        return await this.driversRepository.save(newDriver);
    }

    async findAll(): Promise<Driver[]> {
        return await this.driversRepository.find();
    }
    
    async findOne(id: string): Promise<Driver> {
        return await this.driversRepository.findOne(id);
    }
    
    async remove(id: string): Promise<void> {
        await this.driversRepository.delete(id);
    }
}
