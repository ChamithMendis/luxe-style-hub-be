import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; // ← Add this import
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Fine for development; restrict in production
  });

  /* TODO: Production code */
  // app.enableCors({
  //   origin: ['https://your-frontend.com', 'https://another-allowed.com'],
  //   credentials: true,
  // });

  // ← Move global pipes BEFORE listen()
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip unknown properties
      forbidNonWhitelisted: true, // Throw error if unknown properties
      transform: true, // Auto-transform payloads to DTO instances
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
