import api from '../api';
import type { Task,CreateTaskData,UpdateTaskData, TasksQuery } from '../constants/interfaces/task.interface';
import type { GetAllBaseQuery } from '../constants/interfaces/get-all-base-query.interface';


export type GetAllTasksQuery = GetAllBaseQuery & TasksQuery;


// Fetch all tasks with optional query params
export const fetchTasks = async (query?: GetAllTasksQuery): Promise<Task[]> => {
  const response = await api.get('/tasks', { params: query }).then((res) => res);
  return response.data;
};

// Fetch a single task by ID
export const fetchTaskById = async (id: number): Promise<Task> => {
  const response = await api.get(`/tasks/${id}`);
  return response.data;
};

// Create a new task
export const createTask = async (data: CreateTaskData): Promise<Task> => {
  const response = await api.post('/tasks', data);
  return response.data;
};

// Update an existing task
export const updateTask = async (id: number, data: UpdateTaskData): Promise<Task> => {
  const response = await api.put(`/tasks/${id}`, data);
  return response.data;
};

// Mark task as completed
export const completeTask = async (id: number): Promise<Task> => {
  const response = await api.patch(`/tasks/${id}/complete`);
  return response.data;
};

// Mark task as not completed
export const uncompleteTask = async (id: number): Promise<Task> => {
  const response = await api.patch(`/tasks/${id}/not-complete`);
  return response.data;
};

// Mark task as archived
export const archiveTask = async (id: number): Promise<Task> => {
  const response = await api.patch(`/tasks/${id}/archive`);
  return response.data;
};

// Mark task as unarchived
export const unarchiveTask = async (id: number): Promise<Task> => {
  const response = await api.patch(`/tasks/${id}/unarchive`);
  return response.data;
};

// Mark task as completed and archived
export const doneTask = async (id: number): Promise<Task> => {
  const response = await api.patch(`/tasks/${id}/done`);
  return response.data;
};

// Delete a task
export const deleteTask = async (id: number): Promise<void> => {
  await api.delete(`/tasks/${id}`);
};