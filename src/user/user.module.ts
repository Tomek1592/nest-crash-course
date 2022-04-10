import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ValidUserMiddleware } from '../common/middlewares/validateUser.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidUserMiddleware).forRoutes({
      path: 'user',
      method: RequestMethod.POST,
    });
  }
}
