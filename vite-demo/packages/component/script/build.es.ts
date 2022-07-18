/*
 * @Author: 清风
 * @Date: 2021-02-18 17:39:33
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from 'vite-plugin-dts'

const inputDir = resolve(process.cwd(), './src/components');



export default defineConfig({
    plugins: [
        vue(),
        dts({
            outputDir: "types"
        })
    ],
    // 配置别名
    resolve: {
        alias: {
            "@": resolve(process.cwd(), "./"),
        },
    },
    build: {
        target: "modules",
        outDir: "es",
        // 压缩
        minify: true,
        // css 分离
        // cssCodeSplit: false,

        lib: {
            entry: inputDir,
            name: 'HappyVue',
            formats: ["es"],
            // fileName: (format) => `happy-vue.${format}.js`
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            input: ['src/index.ts'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                },
                format: 'es',
                //不用打包成.es.js,这里我们想把它打包成.js
                entryFileNames: '[name].js',
                //让打包目录和我们目录对应
                preserveModules: true,
                //配置打包根目录
                dir: 'es',
                preserveModulesRoot: 'src/components'
            }
        }
    }
});
