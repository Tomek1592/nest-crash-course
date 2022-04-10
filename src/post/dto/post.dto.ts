import { Prisma } from '@prisma/client';

export class FindPostsRequestDto {
  skip?: number;
  take?: number;
  cursor?: Prisma.PostWhereUniqueInput;
  where?: Prisma.PostWhereInput;
  orderBy?: Prisma.PostOrderByWithRelationInput;
}

export class UpdatePostRequestDto {
  where: Prisma.PostWhereUniqueInput;
  data: Prisma.PostUpdateInput;
}
