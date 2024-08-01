import { NestFactory } from '@nestjs/core';
 import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Sequelize } from 'sequelize-typescript';

 async function bootstrap() {
   const app = await NestFactory.create(AppModule);

   app.enableCors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials
  });

  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);


   // Get the Sequelize instance from the app
   const sequelize = app.get<Sequelize>(Sequelize);
  
   // Sync the database models
   await sequelize.sync({ force: false }); // Set force: true to drop existing tables
 

  await app.listen(8000);
  console.log(`Server is running on: http://localhost:8000/api-docs`);
}
bootstrap();