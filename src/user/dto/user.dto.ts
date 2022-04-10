import { Prisma } from '@prisma/client';

export class FindUsersRequestDto {
  skip?: number;
  take?: number;
  cursor?: Prisma.UserWhereUniqueInput;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithRelationInput;
}

export class UpdateUserRequestDto {
  where: Prisma.UserWhereUniqueInput;
  data: Prisma.UserUpdateInput;
}
