import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@tic-tac-toe/utils"]
  },
  build: {
    commonjsOptions: { exclude: ["@tic-tac-toe/utils"] }
  }
});
