import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Boards } from '@prisma/client';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  async findUsersBoards(@Query('userId') userId: string): Promise<Boards[]> {
    return this.boardsService.findUsersBoards(userId);
  }

  @Post()
  async create(@Body() createBoardDto: CreateBoardDto) {
    console.log(createBoardDto);
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
}
