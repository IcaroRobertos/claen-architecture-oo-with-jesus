import { Request, Response } from 'express';
import { Task } from '@entities/Task';
import { TasksCases } from '@use_cases/TasksCases';
import { TaskDatabaseRepository } from '@repository/TaskDatabaseRepository';

export class TaskController {
  private static getTaskCases() {
    return new TasksCases(new TaskDatabaseRepository());
  }

  public static async create({ body }: Request, res: Response): Promise<Response> {
    const { name, description, status } = body;
    const task = new Task({ name, description, status });
    const newTask = await TaskController.getTaskCases().create(task);

    return res.status(201).json({
      message: 'Task created',
      data: newTask,
    });
  }
}
