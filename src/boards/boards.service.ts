import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { DeleteBoardDto } from './dto/delete-board.dto';

@Injectable()
export class BoardsService {
  constructor(private readonly prisma: PrismaService) {}

  async findUsersBoards(userId: string) {
    return this.prisma.boards.findMany({
      where: {
        authorId: userId,
      },
      include: {
        columns: {
          include: {
            tasks: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.boards.findUnique({
      where: {
        id: id,
      },
      include: {
        columns: {
          include: {
            tasks: true,
          },
        },
      },
    });
  }

  async create(createBoardDto: CreateBoardDto) {
    return this.prisma.boards.create({
      data: {
        name: createBoardDto.name,
        urlName: createBoardDto.name.toLowerCase().replace(/ /g, '-'),
        authorId: createBoardDto.authorId,
      },
    });
  }

  async delete(deleteBoardDto: DeleteBoardDto) {
    return this.prisma.boards.delete({
      where: {
        id: deleteBoardDto.id,
      },
    });
  }
}
