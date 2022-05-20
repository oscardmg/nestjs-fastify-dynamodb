import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);

async function bootstrap () {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true
    })
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
