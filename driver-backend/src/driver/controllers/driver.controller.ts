import { Controller, Get } from '@nestjs/common';
import { DriverService } from '../services/driver.service';
import { Driver } from '../entities/driver.entity';
import { GrpcMethod } from '@nestjs/microservices';


/*
interface DriverRequestInterface {
    id: string;
}
interface DriverResponseInterface {
    driver: string;
}
interface DriverServiceInterface {
    GetDriver(request: DriverRequestInterface): Promise<DriverResponseInterface>;
}
*/

interface DriverInterface {
    name: string;
    cpf: string;
}

interface CreateDriverRequestInterface {
    driver: DriverInterface;
}
interface CreateDriverResponseInterface {
    id: string;
}

interface GetListDriverRequestInterface {
    page: string;
    countPerPage: string;
}
interface GetListDriverResponseInterface {
    driver: DriverInterface;
}

@Controller('driver')
export class DriverController {

    constructor(
        private readonly driverService: DriverService,
    ){}

    /*@GrpcMethod('DriverService', 'GetDriver')
    GetDriver(data: DriverRequestInterface, metadata: any): DriverResponseInterface{

        return {driver: '{"nome":"Aline"}' };
    }*/


    //rpc CreateDriver ( CreateDriverRequest ) returns (CreateDriverResponse) {}
    @GrpcMethod('DriverService', 'CreateDriver')
    async CreateDriver(data: CreateDriverRequestInterface, metadata: any): Promise<CreateDriverResponseInterface> {
        console.log('CreateDriver');

        console.log(data);

        const newDriver = await this.driverService.create(data.driver);

        return {
            id: newDriver.id.toString()
        }
    }

    //rpc GetListDriver ( GetListDriverRequest ) returns ( GetListDriverResponse ) {}
    @GrpcMethod('DriverService', 'GetListDriver')
    async GetListDriver(data: GetListDriverRequestInterface, metadata: any) {
        

        /*var drivers = [];
        drivers.push({ name: 'Robson dos Santos Silva', cpf: '123.456.789-09' });
        drivers.push({ name: 'Robson dos Santos Silva', cpf: '123.456.789-09' });
        console.log(drivers);
        console.log('GetListDriver');*/
        
        const drivers = await this.driverService.driversRepository.find()

        console.log(drivers);        

        return {driver: drivers};
    }
    
}
