import { TaskDatabaseRepositoryInterface } from '@interfaces/TaskDatabaseRepositoryInterface';
import { Task } from '@entities/Task';
import { TaskModel } from '@mongodb/models/TaskModel';

export class TaskDatabaseRepository implements TaskDatabaseRepositoryInterface {
  public async save(task: Task): Promise<Task> {
    const newTask = new TaskModel(task);
    await newTask.save();

    task.id = newTask._id;

    return task;
  }
}
