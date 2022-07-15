import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
const history = createWebHashHistory();

import Home from "views/Home.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("views/Login.vue"),
    },
    {
        path: "/naive-ui",
        name: "NaiveUi",
        component: () => import("views/NaiveUi/index.vue"),
        
    },
    {
        path: "/layui-vue",
        name: "LayuiVue",
        component: () => import("views/Layui/index.vue"),
        children: [
            {
                path: "button",
                name: "Button",
                component: () => import("views/Layui/components/Button.vue")
            }
        ]
    },
];
const router = createRouter({
    history,
    routes,
});

export default router;
