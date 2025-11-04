import { api } from "./api";
import type {
  ActivityLog,
  ActivityLogsQuery,
} from "../constants/interfaces/activity-log.interface";

export const activityLogsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllActivityLogs: builder.query<ActivityLog[], ActivityLogsQuery | void>({
      query: (params) => {
        const queryString = new URLSearchParams();
        Object.entries(params || {}).forEach(([key, value]) => {
          if (value !== undefined) {
            queryString.append(key, String(value));
          }
        });
        return {
          url: `activity/logs?${queryString.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["ActivityLogs"],
    }),
  }),
});

export const { useGetAllActivityLogsQuery } = activityLogsApi;
