import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    fullName: string;
    address: string;
    receiveEmails: boolean;
}
