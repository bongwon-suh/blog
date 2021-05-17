import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, OneToMany } from 'typeorm';
import { Project } from  "./Project"

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    password: string;

    @CreateDateColumn()
    register_date: Date;

    @OneToMany(() => Project, project => project.author)
    projects: Project[]
}