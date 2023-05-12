import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";

import Components from "unplugin-vue-components/vite";
import { fileURLToPath } from "url";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true, // because typescript is enabled
      types: [
        {
          from: "vue-router",
          names: ["RouterLink", "RouterView"],
        },
      ],
      dirs: ["src/views"], // Config directories
    }),
    Pages({
      resolver: "vue",
      moduleId: "~ui",
      pagesDir: [
        {
          dir: "src/views",
          baseRoute: "",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
});
