import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

import { User as UserModel } from '@prisma/client';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Post('user')
  async createUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
