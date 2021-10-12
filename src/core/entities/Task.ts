type Status = 'todo' | 'doing' | 'done' | 'canceled'
type taskDTO = { id?: string, name: string, description: string, status: Status, date?: Date }

export class Task {
  id?: string

  name: string

  description: string

  date: Date

  status: Status

  constructor({
    id, name, description, status, date,
  }: taskDTO) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.date = date || new Date();
  }
}
