import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchTasks as fetchTasksApi,
    fetchTaskById as fetchTaskByIdApi,
    createTask as createTaskApi,
    updateTask as updateTaskApi,
    completeTask as completeTaskApi,
    uncompleteTask as uncompleteTaskApi,
    archiveTask as archiveTaskApi,
    unarchiveTask as unarchiveTaskApi,
    doneTask as doneTaskApi,
    deleteTask as deleteTaskApi,
  } from '../services/tasksApi';

import type { GetAllTasksQuery } from "../services/tasksApi";
import type { Task, CreateTaskData, UpdateTaskData } from "../constants/interfaces/task.interface";

export const fetchTasks = createAsyncThunk<Task[], GetAllTasksQuery | undefined>(
    'tasks/fetchTasks',
    async (query?: GetAllTasksQuery) => {
      return await fetchTasksApi(query);
    }
  );
  
  export const fetchTaskById = createAsyncThunk(
    'tasks/fetchTaskById',
    async (id: number) => {
      return await fetchTaskByIdApi(id);
    }
  );
  
  export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (data: CreateTaskData) => {
      return await createTaskApi(data);
    }
  );
  
  export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async ({ id, data }: { id: number; data: UpdateTaskData }) => {
      return await updateTaskApi(id, data);
    }
  );
  
  export const completeTask = createAsyncThunk(
    'tasks/completeTask',
    async (id: number) => {
      return await completeTaskApi(id);
    }
  );
  
  export const uncompleteTask = createAsyncThunk(
    'tasks/uncompleteTask',
    async (id: number) => {
      return await uncompleteTaskApi(id);
    }
  );
  
  export const archiveTask = createAsyncThunk(
    'tasks/archiveTask',
    async (id: number) => {
      return await archiveTaskApi(id);
    }
  );
  
  export const unarchiveTask = createAsyncThunk(
    'tasks/unarchiveTask',
    async (id: number) => {
      return await unarchiveTaskApi(id);
    }
  );
  
  export const doneTask = createAsyncThunk(
    'tasks/doneTask',
    async (id: number) => {
      return await doneTaskApi(id);
    }
  );
  
  export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (id: number) => {
      await deleteTaskApi(id);
      return id;
    }
  );