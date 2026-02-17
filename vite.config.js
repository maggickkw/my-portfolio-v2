import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: fileURLToPath(new URL("./src/components", import.meta.url)),
      common: fileURLToPath(new URL("./src/common", import.meta.url)),
      assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
      hooks: fileURLToPath(new URL("./src/hooks", import.meta.url)),
      src: fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
