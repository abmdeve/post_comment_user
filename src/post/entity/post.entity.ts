import { UserEntity } from 'src/user/entity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  createAt: string;

  @Column()
  updateAt: string;

  @ManyToOne(() => UserEntity, (user) => user.post, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  user: UserEntity;
}
