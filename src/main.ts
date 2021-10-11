import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app-module';
import * as dotenv from "dotenv";

async function bootstrap() {
  await dotenv.config()
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();