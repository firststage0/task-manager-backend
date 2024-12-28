import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.task.findMany();
  }

  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: createTaskDto.title,
        description: createTaskDto.description,
        priority: createTaskDto.priority,
        tag: createTaskDto.tag,
        isComleted: createTaskDto.isComleted,
        authorId: createTaskDto.authorId,
      },
    });
  }
}
