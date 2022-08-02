/*
 * @Author: 清风
 * @Date: 2021-02-18 17:39:33
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const inputDir = resolve(process.cwd(), './src/index.ts')

export default defineConfig({
    plugins: [
        vue(),
    ],
    // 配置别名
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "@happy-vue": resolve(__dirname, "src/theme-chalk")
        },
    },
    build: {
        outDir: "umd",
        cssCodeSplit: false,
        emptyOutDir: true,
        lib: {
            entry: inputDir,
            name: 'HappyVue',
            formats: ["umd"],
            fileName: (format) => `index.js`
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
              // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
              globals: {
                vue: 'Vue'
              },
              assetFileNames: "index.css"
            }
          }
    }
});
