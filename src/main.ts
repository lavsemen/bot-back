import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const fs = require('fs');
  const keyFile = fs.readFileSync(__dirname + '/../../localhost.key');
  const certFile = fs.readFileSync(__dirname + '/../../localhost.crt');

  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: keyFile,
      cert: certFile,
    },
  });
  await app.listen(3000);
}
bootstrap();
