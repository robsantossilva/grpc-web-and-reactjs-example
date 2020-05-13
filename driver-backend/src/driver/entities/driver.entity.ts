import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity({
    name:'drivers'
})
export class Driver {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({
        type: "varchar",
        default: null
    })
    name: string;

    @Column({
        type: "varchar",
        default: null
    })
    cell_phone_number: string;

    @Column({
        type: "varchar",
        default: null
    })
    cpf: string;

    @Column({
        type: "date",
        default: null
    })
    date_of_birth: Date;

    @Column({
        type: "varchar",
        default: null
    })
    address: string;

    @Column({
        type: "varchar",
        default: null
    })
    number: string;

    @Column({
        type: "varchar",
        default: null
    })
    neighborhood: string;

    @Column({
        type: "varchar",
        default: null
    })
    city: string;

    @Column({
        type: "varchar",
        default: null
    })
    state: string;

    @Column({
        type: "varchar",
        default: null
    })
    country: string;

    @CreateDateColumn()
    created_at: Date;
}
