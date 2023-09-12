import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteExternalsPlugin } from "vite-plugin-externals";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteExternalsPlugin({
      BMAP_ANCHOR_BOTTOM_LEFT: "BMAP_ANCHOR_BOTTOM_LEFT",
      BMAP_ANCHOR_BOTTOM_RIGHT: "BMAP_ANCHOR_BOTTOM_RIGHT",
    }),
  ],
});
