import { connect } from 'mongoose';

export class MongoDB {
  public static async connect() {
    await connect(MongoDB.getConnectionUri());
    console.log('database connected');
  }

  public static getConnectionUri(): string {
    return 'mongodb://root:root@localhost:27017/todo_db?authSource=admin';
  }
}
