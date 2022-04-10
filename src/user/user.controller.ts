import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

import { User as UserModel } from '@prisma/client';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }
  
  // @Get('users')
  // async getSecondUser(
  //   @Query('skip') skip?: number,
  //   @Query('take') take?: number,
  // ): Promise<UserModel[]> {
  //   return this.userService.users({
  //     skip: Number(skip) || 0,
  //     take: Number(take) || 0,
  //   });
  // }

  @Post('user')
  async createUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
