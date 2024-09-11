import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {task } from './task.entity';
import {CreateTaskDto} from './create-task.dto'


@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(task)
        private taskRepository: Repository<task>,

    ){}

    createTask(
        createTaskDto:CreateTaskDto,)
        :Promise<task>{
            const newTask =new task();
            task.name=createTaskDto.name;
            task.description=createTaskDto.description;
            task.status=createTaskDto.status;
            return this.taskRepository.save(newTask);
    }

} 
