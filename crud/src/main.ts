import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('CRUD')
    .setDescription('CRUD OPERADOR, MISSAO')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('Server running on http://localhost:3000');
  console.log('Swagger docs available at http://localhost:3000/api');

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://suhtprle:j8Cp4FsjEwZM6tP229VggQZBlHjH4UvZ@jackal.rmq.cloudamqp.com/suhtprle'],
      queue: 'campo_update',
      queueOptions: { durable: true },
    },
  });

  await app.startAllMicroservices();

  const port = process.env.PORT || 3000;
  console.log(`Updates rodando na porta ${port}`);
  console.log(`Escutando eventos na fila campo_update`);
}

bootstrap();