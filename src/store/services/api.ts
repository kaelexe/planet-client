import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    // credentials: 'include' - include this line if you need to send cookies with requests
  }),
  tagTypes: ["TaskOverview", "Tasks", "ActivityLogs"],
  endpoints: () => ({}), // Endpoints will be injected later
});
