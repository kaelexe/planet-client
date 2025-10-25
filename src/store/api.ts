import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const DEBUG_API = import.meta.env.DEBUG === "true";

// 🟦 REQUEST INTERCEPTOR
api.interceptors.request.use(
  (config) => {
    if (DEBUG_API) {
      console.groupCollapsed(
        `📤 [Request] ${config.method?.toUpperCase()} ${config.url}`
      );
      console.log("Base URL:", config.baseURL);
      console.log("Full URL:", `${config.baseURL}${config.url}`);
      console.log("Headers:", config.headers);
      console.log("Data:", config.data);
      console.groupEnd();
    }
    return config;
  },
  (error) => {
    if (DEBUG_API) console.error("❌ [Request Error]", error);
    return Promise.reject(error);
  }
);

// 🟩 RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => {
    if (DEBUG_API) {
      console.groupCollapsed(
        `📥 [Response] ${response.status} ${response.config.url}`
      );
      console.log("Data:", response.data);
      console.log("Headers:", response.headers);
      console.groupEnd();
    }
    return response;
  },
  (error) => {
    if (DEBUG_API) {
      if (error.response) {
        console.groupCollapsed(
          `🚨 [Response Error] ${error.response.status} ${error.config.url}`
        );
        console.log("Data:", error.response.data);
        console.log("Headers:", error.response.headers);
        console.groupEnd();
      } else if (error.request) {
        console.error(
          "⚠️ [No Response] Request was made but no response received",
          error.request
        );
      } else {
        console.error("❌ [Axios Error] Setup issue", error.message);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
