import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Movie } from '../../movies/entities/movie.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.comments)
  movie: Movie;

  @CreateDateColumn()
  created_at: Date;
}
