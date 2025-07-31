import { Injectable } from '@nestjs/common';
import { Movie } from '../../entity/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepo: Repository<Movie>,
  ) {}

  findAll() {
    return this.movieRepo.find({ relations: ['genres'] });
  }

  findOne(id: number) {
    return this.movieRepo.findOne({ where: { id }, relations: ['genres'] });
  }
}
