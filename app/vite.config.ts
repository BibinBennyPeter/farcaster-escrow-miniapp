import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
   resolve: {
    alias: [
      // Use browser-compatible Buffer instead of Node's core module
      { find: 'buffer', replacement: resolve(__dirname, 'node_modules/buffer/index.js') },
    ],
  },
  optimizeDeps: {
    // Pre-bundle buffer to ensure it's available at runtime
    include: ['buffer'],
  },
  define: {
    global: {}
  },

});
