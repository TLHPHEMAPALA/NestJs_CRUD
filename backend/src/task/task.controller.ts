import { Controller,Get, Post,Body } from '@nestjs/common';
import {CreateTaskDto} from './create-task.dto';

@Controller('task')
export class TaskController {
  @Post()
  async create (@Body() createTaskDto:CreateTaskDto){
    return 'create task';
  }

}
