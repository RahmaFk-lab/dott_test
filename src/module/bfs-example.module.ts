import { Module } from '@nestjs/common';
import { BfsExampleService } from '../bfs-example.service';
import { BfsExampleController } from '../controller/bfs-example.controller';

@Module({
  providers: [BfsExampleService],
  controllers: [BfsExampleController],
})
export class BfsExampleModule {}