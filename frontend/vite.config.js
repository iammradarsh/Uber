import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all requests starting with / to your backend
      "/backend": {
        target: "http://localhost:4000", // Your backend server
        changeOrigin: true,
      },
    },
  },
});
