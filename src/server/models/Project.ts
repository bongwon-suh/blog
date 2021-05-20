import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from "./User";

@Entity()
export class Project extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({type: "text"})
    content: string;

    @Column()
    description: string;

    @Column()
    dev_period: string;

    @Column()
    dev_tool: string;

    @CreateDateColumn()
    register_date: Date;

    @ManyToOne(()=> User, user => user.projects)
    author: User;
}