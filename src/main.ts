import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);

  await app.listen(process.env.PORT || 3000);
  await prismaService.enableShutdownHooks(app);
}
bootstrap();
