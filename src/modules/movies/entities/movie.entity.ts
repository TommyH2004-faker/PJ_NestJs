import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Genre } from '../../genres/entities/genre.entity';
import { Episode } from '../../episodes/entities/episode.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { Review } from '../../reviews/entities/review.entity';
import { Favorite } from '../../favorites/entities/favorite.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ unique: true })
  slug: string;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  release_date: Date;

  @Column({ nullable: true })
  duration: number;

  @Column()
  poster_url: string;

  @Column({ nullable: true })
  banner_url: string;

  @Column({ default: 'ongoing' })
  status: string;

  @Column({ default: 0 })
  views: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Genre, (genre) => genre.movies, { cascade: true })
  @JoinTable()
  genres: Genre[];

  @OneToMany(() => Episode, (episode) => episode.movie)
  episodes: Episode[];

  @OneToMany(() => Comment, (comment) => comment.movie)
  comments: Comment[];

  @OneToMany(() => Review, (review) => review.movie)
  reviews: Review[];

  @OneToMany(() => Favorite, (favorite) => favorite.movie)
  favorites: Favorite[];
}
