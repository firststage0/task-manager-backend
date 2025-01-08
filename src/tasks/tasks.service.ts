import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: createTaskDto.title,
        urlName: createTaskDto.title.toLowerCase().replace(/ /g, '-'),
        description: createTaskDto.description,
        priority: createTaskDto.priority,
        tag: createTaskDto.tag,
        isComleted: createTaskDto.isComleted,
        isPinned: createTaskDto.isPinned,
        authorId: createTaskDto.authorId,
        columnId: createTaskDto.columnId,
        boardId: createTaskDto.boardId,
      },
    });
  }
}
