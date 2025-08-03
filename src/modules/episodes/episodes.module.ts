import { Module } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { EpisodesController } from './episodes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episode } from './entities/episode.entity';

@Module({
  controllers: [EpisodesController],
  providers: [EpisodesService],
  imports: [TypeOrmModule.forFeature([Episode])],
})
export class EpisodesModule {}
