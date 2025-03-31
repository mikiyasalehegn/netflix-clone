import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      // Security headers for development
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:",
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Helps prevent MIME-type attacks
        assetFileNames: "assets/[name].[hash][extname]",
      },
    },
  },
});
