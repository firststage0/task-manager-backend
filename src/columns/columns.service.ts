import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateColumnDto } from './dto/create-column.dto';

@Injectable()
export class ColumnsService {
  constructor(private readonly prisma: PrismaService) {}

  findBoardColumns(boardId: number) {
    return this.prisma.columns.findMany({
      where: {
        boardId,
      },
    });
  }

  createColumn(createColumnDto: CreateColumnDto) {
    return this.prisma.columns.create({
      data: {
        name: createColumnDto.name,
        boardId: createColumnDto.boardId,
      },
    });
  }
}
