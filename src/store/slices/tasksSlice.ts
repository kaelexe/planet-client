import { createSlice } from "@reduxjs/toolkit";
import type { Task } from "../constants/interfaces/task.interface";

interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { clearError } = tasksSlice.actions;
export default tasksSlice.reducer;
