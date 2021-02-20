import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
const history = createWebHashHistory();

import Home from "views/Home.vue";

const routes: RouteRecordRaw[] = [
  {
      path: '/',
      name: 'Home',
      component: Home
  },
  {
      path: '/login',
      name: 'Login',
      component: () => import("views/Login.vue")
  }
]
 const router = createRouter({
    history,
    routes
})

export default router;