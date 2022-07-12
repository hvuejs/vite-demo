/*
 * @Author: 清风
 * @Date: 2021-02-18 17:39:33
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [NaiveUiResolver()],
        }),
    ],
    // 配置别名
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            views: resolve(__dirname, "src/views"),
            components: resolve(__dirname, "src/components"),
            assets: resolve(__dirname, "src/assets"),
            utils: resolve(__dirname, "src/utils"),
        },
    },
    server: {
        port: 8081,
        proxy: {
            // 进行跨域处理
            "/manage": {
                target: "http://test.api.yunyikang.net",
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, '')
            },
        },
    },
});
