import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   // Включаем CORS
   app.enableCors({
    origin: 'http://localhost:5173', // Разрешаем запросы только с этого origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Разрешаем только эти HTTP-методы
    credentials: true, // Разрешаем передачу cookies и заголовков авторизации
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
