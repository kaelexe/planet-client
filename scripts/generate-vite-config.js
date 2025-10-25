require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const path = require("path");
const readline = require("readline");

const port = process.env.PORT || 5173;
const host = process.env.HOST || "localhost";
const allowedHosts = JSON.parse(process.env.allowed_hosts || "[]");
const localApi = process.env.LOCAL_API || "http://localhost:3000";
const dockerApi = process.env.VITE_DOCKER_API_URL || "http://localhost:3000";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Is this setup local or dockerized? (local/dockerized): ",
  (answer) => {
    const isDockerized = answer.toLowerCase() === "dockerized";

    const viteConfigContent = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: ${isDockerized ? "true" : `"${host}"`},
    port: ${port},
    allowedHosts: ${JSON.stringify(allowedHosts)},
    watch: {
      usePolling: true,
    },
    proxy: {
      "/api": {
        target: "${isDockerized ? dockerApi : localApi}",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
`;

    const viteConfigPath = path.join(__dirname, "..", "vite.config.ts");
    if (fs.existsSync(viteConfigPath)) {
      console.log("vite.config.ts already exists. Skipping generation.");
    } else {
      fs.writeFileSync(viteConfigPath, viteConfigContent);
      console.log("vite.config.ts generated successfully.");
    }

    rl.close();
  }
);
