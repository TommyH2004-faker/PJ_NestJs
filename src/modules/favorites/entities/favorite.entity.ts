import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

import { Movie } from '../../movies/entities/movie.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.favorites)
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.favorites)
  movie: Movie;

  @CreateDateColumn()
  created_at: Date;
}
