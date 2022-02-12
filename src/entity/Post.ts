import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    comment: string;

    @ManyToOne(() => User, (author: User) => author.posts)
    @JoinColumn({name: 'userId', referencedColumnName: 'id'})
    user: User;

    @Column({ nullable: false })
    userId: number;
}
