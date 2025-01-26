import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5173-guboc11-blockblockdeved-3vnsplc86kz.ws-us117.gitpod.io',
    ],
  },
});
