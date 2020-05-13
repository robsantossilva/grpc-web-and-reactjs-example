import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface DriverService {
  getDriver(data: {id: string}): Observable<any>;
  getListDriver ( data: {page: string, countPerPage: string} ): Observable<any>;
}

@Injectable()
export class AppService implements OnModuleInit{
  private driverService: DriverService;

  constructor(
    @Inject('SERVICES_PB')
    private client: ClientGrpc
  ){}

  onModuleInit(){
    this.driverService = this.client.getService('DriverService')
  }

  GetListDriver(){
    return this.driverService.getListDriver({page: '1', countPerPage: '10'});
  }

  /*GetDriver(): Observable<string> {
    return this.driverService.getDriver({
      id: '1'
    });
  }*/
}
