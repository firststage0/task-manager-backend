export class CreateTaskDto {
  title: string;
  description: string;
  priority?: string;
  tag?: string;
  isComleted?: boolean;
  authorId: string;
}
