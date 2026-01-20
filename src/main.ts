import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  /* TODO: Production code */
  // app.enableCors({
  //   origin: ['https://your-frontend.com', 'https://another-allowed.com'],
  //   credentials: true, // if you need cookies/auth
  // });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
