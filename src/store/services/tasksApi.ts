import { api } from "./api";
import type {
  Task,
  CreateTaskData,
  TasksQuery,
} from "../constants/interfaces/task.interface";

export const tasksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // builder.query = GET    queryType, paramsType
    getAllTasks: builder.query<Task[], TasksQuery | void>({
      query: (params) => {
        const queryString = new URLSearchParams();
        Object.entries(params || {}).forEach(([key, value]) => {
          if (value !== undefined) {
            queryString.append(key, String(value));
          }
        });
        return {
          url: `tasks?${queryString.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Tasks"],
    }),
    // MUTATION meaning - POST, PUT, DELETE request
    createTask: builder.mutation<Task, CreateTaskData>({
      query: (body) => ({
        url: "tasks",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllTasksQuery, useCreateTaskMutation } = tasksApi;
