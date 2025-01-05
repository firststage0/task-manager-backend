import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BoardsController],
  providers: [PrismaService, BoardsService],
})
export class BoardsModule {}
