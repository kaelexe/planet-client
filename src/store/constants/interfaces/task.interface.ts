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

// Type for querying tasks with optional filters
export type TasksQuery = Pick<Task, 'priority' | 'isComplete' | 'archived'>;

// Type for creating a new task (excluding fields that are auto-generated)
export type CreateTaskData = Omit<Task, "id" | "archived" | "createdAt" | "updatedAt">;

// Type for updating an existing task (all fields optional except id, createdAt, and updatedAt)
export type UpdateTaskData = Partial<Omit<Task, "id" | "createdAt" | "updatedAt">>;
