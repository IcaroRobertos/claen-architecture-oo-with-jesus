import { Task } from '../entities/Task';
import { TaskDatabaseRepositoryInterface } from '../interfaces/TaskDatabaseRepositoryInterface';

export class TasksCases {
  private database: TaskDatabaseRepositoryInterface

  constructor(database: TaskDatabaseRepositoryInterface) {
    this.database = database;
  }

  public create(task: Task): Promise<Task> {
    return this.database.save(task);
  }
}
