import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from "./Post";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    name: string;

    @OneToMany(() => Post, (post: Post) => post.user)
    posts: Post[];

}
