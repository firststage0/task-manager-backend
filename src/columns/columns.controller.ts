import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { CreateColumnDto } from './dto/create-column.dto';

@Controller('columns')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {}

  @Get()
  async findBoardColumns(@Param('boardId') boardId: number) {
    return this.columnsService.findBoardColumns(boardId);
  }

  @Post()
  async create(@Body() createColumnDto: CreateColumnDto) {
    return this.columnsService.createColumn(createColumnDto);
  }
}
