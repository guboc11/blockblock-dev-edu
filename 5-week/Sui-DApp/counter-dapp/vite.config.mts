import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5173-guboc11-blockblockdeved-okrruw37ij2.ws-us117.gitpod.io',
    ],
  },
});
