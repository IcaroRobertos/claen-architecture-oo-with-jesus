import { Task } from '../entities/Task';

export interface TaskDatabaseRepositoryInterface {
  save(_task: Task): Promise<Task>
}
