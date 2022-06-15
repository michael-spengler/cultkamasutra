import { HttpsOptions } from '@nestjs/common/interfaces/external/https-options.interface';
import { NestApplication, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { readFileSync } from 'fs';
import { AppModule } from './app.module';

const KEY_PATH = '/etc/letsencrypt/live/sport-kamasutra.org/';

async function bootstrap() {
  const httpsOptions: HttpsOptions = {};
  let app: NestApplication;

  try {
    httpsOptions.cert = readFileSync(KEY_PATH + 'fullchain.pem');
    httpsOptions.key = readFileSync(KEY_PATH + 'privkey.pem');
    app = await NestFactory.create(AppModule, { httpsOptions, cors: true });
    console.log('serving via https')
    await app.listen(8443);
  } catch (error) {
    app = await NestFactory.create(AppModule, { cors: true });

    const options = new DocumentBuilder()
      .setTitle('Sport Kamasutra API')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
  }
}

bootstrap();
