import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Points} from './Points';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(() => Points, points => points.user)
    points: Points[];

}
