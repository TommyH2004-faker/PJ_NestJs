import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Genre } from './genre.entity';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  release_year: number;

  @Column({ nullable: true })
  duration: number;

  @Column({ type: 'float', default: 0 })
  rating: number;

  @Column({ nullable: true })
  poster_url: string;

  @Column({ nullable: true })
  trailer_url: string;

  @Column({ nullable: true })
  video_url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ManyToMany(() => Genre)
  @JoinTable({ name: 'movie_genres' })
  genres: Genre[];
}
