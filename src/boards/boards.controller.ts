import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Boards } from '@prisma/client';
import { CreateBoardDto } from './dto/create-board.dto';
import { DeleteBoardDto } from './dto/delete-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  async findUsersBoards(@Query('userId') userId: string): Promise<Boards[]> {
    return this.boardsService.findUsersBoards(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.boardsService.findOne(+id);
  }

  @Post()
  async create(@Body() createBoardDto: CreateBoardDto) {
    if (!createBoardDto.name) return { message: 'name is required' };
    if (!createBoardDto.authorId) return { message: 'authorId is required' };

    try {
      await this.boardsService.create(createBoardDto);
      return { message: 'success' };
    } catch (error) {
      console.log(error.message);
      return { message: 'something went wrong' };
    }
  }

  @Post('delete')
  async delete(@Body() deleteBoardDto: DeleteBoardDto) {
    if (!deleteBoardDto.id) return { message: 'id is required' };
    try {
      await this.boardsService.delete(deleteBoardDto);
      return { message: 'success' };
    } catch (error) {
      console.log(error.message);
      return { message: 'something went wrong' };
    }
  }
}
