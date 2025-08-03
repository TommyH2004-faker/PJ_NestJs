import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Movie } from '../../movies/entities/movie.entity';

@Entity()
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  episode_number: number;

  @Column()
  title: string;

  @Column()
  video_url: string;

  @Column({ nullable: true })
  subtitle_url: string;

  @ManyToOne(() => Movie, (movie) => movie.episodes)
  movie: Movie;

  @CreateDateColumn()
  created_at: Date;
}
