const { execSync } = require("child_process");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Is this setup local or dockerized? (local/dockerized): ",
  (answer) => {
    const isDockerized = answer.toLowerCase() === "dockerized";

    try {
      // Always generate vite config
      console.log("Generating vite.config.ts...");
      execSync("node scripts/generate-vite-config.js", { stdio: "inherit" });

      if (isDockerized) {
        console.log("Generating Docker files...");
        execSync("node scripts/generate-docker-files.js", { stdio: "inherit" });
      } else {
        console.log("Skipping Docker files for local setup.");
      }

      console.log("Setup complete.");
    } catch (error) {
      console.error("Error during setup:", error.message);
    }

    rl.close();
  }
);
