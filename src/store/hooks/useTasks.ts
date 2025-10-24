import { useSelector, useDispatch } from 'react-redux';
import {
    fetchTasks,
    fetchTaskById,
    createTask,
    updateTask,
    completeTask,
    uncompleteTask,
    archiveTask,
  unarchiveTask,
  doneTask,
  deleteTask,
} from '../actions/taskActions';
import { clearError } from '../slices/tasksSlice';
import type { RootState, AppDispatch } from '../store';
import type { GetAllTasksQuery } from '../services/tasksApi';
import type { Task, CreateTaskData, UpdateTaskData } from '../constants/interfaces/task.interface';

export const useTasks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);

  const fetchAllTasks = (query?: GetAllTasksQuery) => {
    dispatch(fetchTasks(query));
  };

  const fetchSingleTask = (id: Task['id']) => {
    dispatch(fetchTaskById(id));
  };

  const addTask = (data: CreateTaskData) => {
    dispatch(createTask(data));
  };

  const editTask = (id: Task['id'], data: UpdateTaskData) => {
    dispatch(updateTask({ id, data }));
  };

  const markComplete = (id: Task['id']) => {
    dispatch(completeTask(id));
  };

  const markIncomplete = (id: Task['id']) => {
    dispatch(uncompleteTask(id));
  };

  const markArchived = (id: Task['id']) => {
    dispatch(archiveTask(id));
  };

  const markUnarchived = (id: Task['id']) => {
    dispatch(unarchiveTask(id));
  };

  const markDone = (id: Task['id']) => {
    dispatch(doneTask(id));
  };

  const removeTask = (id: Task['id']) => {
    dispatch(deleteTask(id));
  };

  const clearTasksError = () => {
    dispatch(clearError());
  };

  return {
    tasks,
    loading,
    error,
    fetchAllTasks,
    fetchSingleTask,
    addTask,
    editTask,
    markComplete,
    markIncomplete,
    markArchived,
    markUnarchived,
    markDone,
    removeTask,
    clearTasksError,
  };
};