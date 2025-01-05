import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ColumnsController],
  providers: [PrismaService, ColumnsService],
})
export class ColumnsModule {}
