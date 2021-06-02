import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, OneToMany } from 'typeorm';
import { Project } from  "./Project"

@Entity()
export class File extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fieldname: string;

    @Column()
    originalname: string;

    @Column()
    encoding: string;

    @Column()
    mimetype: string;

    @Column()
    destination: string;

    @Column()
    filename: string;

    @Column()
    path: string;

    @Column()
    size: number;

    @CreateDateColumn()
    register_date: Date;

}