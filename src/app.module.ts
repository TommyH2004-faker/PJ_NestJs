import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './modules/movies/entities/movie.entity';
import { Auth } from './modules/auth/entities/auth.entity';
import { User } from './modules/user/entities/user.entity';
import { Review } from './modules/reviews/entities/review.entity';
import { Comment } from './modules/comments/entities/comment.entity';
import { Episode } from './modules/episodes/entities/episode.entity';
import { Genre } from './modules/genres/entities/genre.entity';
import { Favorite } from './modules/favorites/entities/favorite.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER || 'spring_04',
        password: process.env.DB_PASS || 'spring04',
        database: process.env.DB_NAME || 'movie_app',
        entities: [
          Movie,
          User,
          Auth,
          Review,
          Comment,
          Episode,
          Genre,
          Favorite,
        ],
        synchronize: process.env.DB_SYNCHRONIZE === 'true',
        logging: process.env.DB_LOGGING === 'true',
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('Database Configuration:', {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
  }
}
