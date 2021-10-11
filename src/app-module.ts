import { Module } from '@nestjs/common';
import { BfsExampleModule } from './module/bfs-example.module';



@Module({
  imports: [BfsExampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}