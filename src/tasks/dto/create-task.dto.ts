export class CreateTaskDto {
  title: string;
  description: string;
  priority?: string;
  tag?: string;
  isComleted?: boolean;
  isPinned?: boolean;
  authorId: string;
  columnId?: number;
  boardId?: number;
}
