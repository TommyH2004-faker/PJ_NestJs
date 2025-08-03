import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/entity/movie.entity';
import { Genre } from 'src/entity/genre.entity';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService],
  imports: [TypeOrmModule.forFeature([Movie, Genre])],
})
export class MovieModule {}
