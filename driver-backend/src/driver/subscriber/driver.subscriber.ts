import { EventSubscriber, EntitySubscriberInterface, Connection, InsertEvent } from "typeorm";
import { Driver } from "../entities/driver.entity";

@EventSubscriber()
export class DriverSubscriber implements EntitySubscriberInterface<Driver> {
    constructor(
        connection: Connection
    ){
        connection.subscribers.push(this);
    }

    listenTo(){
        return Driver;
    }

    beforeInsert(event: InsertEvent<Driver>){
        console.log(`BEFORE USER INSERTED: `, event.entity);
    }

    afterInsert(event: InsertEvent<Driver>){
        console.log(`AFTER USER INSERTED: `, event.entity);
    }
}
