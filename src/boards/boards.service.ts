import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(private readonly prisma: PrismaService) {}

  async findUsersBoards(userId: string) {
    return this.prisma.boards.findMany({
      where: {
        authorId: userId,
      },
    });
  }

  async create(createBoardDto: CreateBoardDto) {
    return this.prisma.boards.create({
      data: {
        name: createBoardDto.name,
        authorId: createBoardDto.authorId,
      },
    });
  }
}
