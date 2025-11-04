import { api } from "./api";
import type {
  TaskOverview,
  TaskOverviewQuery,
} from "../constants/interfaces/task.overview.interface";

export const activityLogsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllActivityLogs: builder.query<TaskOverview[], TaskOverviewQuery>({
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

export const { useGetAllActivityLogsQuery } = activityLogsApi;
