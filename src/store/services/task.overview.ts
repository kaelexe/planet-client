import { api } from "./api";
import type {
  TaskOverview,
  TaskOverviewQuery,
} from "../constants/interfaces/task.overview.interface";

export const taskOverviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTaskOverviewApi: builder.query<TaskOverview, TaskOverviewQuery>({
      query: (params) => {
        const queryString = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined) {
            queryString.append(key, String(value));
          }
        });
        return {
          url: `dashboard/task/overview?${queryString.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["TaskOverview"],
    }),
  }),
});

export const { useGetTaskOverviewApiQuery } = taskOverviewApi;
