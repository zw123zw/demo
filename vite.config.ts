import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteExternalsPlugin } from "vite-plugin-externals";
import path from "path";

function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteExternalsPlugin({
      BMAP_ANCHOR_BOTTOM_LEFT: "BMAP_ANCHOR_BOTTOM_LEFT",
      BMAP_ANCHOR_BOTTOM_RIGHT: "BMAP_ANCHOR_BOTTOM_RIGHT",
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': _resolve('src'),
    },
  },
});
