import type { TaskPriority } from "../enums/task-priority.enum";

export interface Task {
  id: number;
  title: string;
  description?: string;
  isComplete: boolean;
  archived: boolean;
  priority: TaskPriority;
  dateDue?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TasksQuery = Pick<Task, 'priority' | 'isComplete' | 'archived'>;

export type CreateTaskData = Omit<Task, "id" | "archived" | "createdAt" | "updatedAt">;

export type UpdateTaskData = Partial<Omit<Task, "id" | "createdAt" | "updatedAt">>;
