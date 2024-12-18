import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), viteCompression()],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
});
