import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
}, { strict: false });

export const TaskModel = model('tasks', taskSchema);
