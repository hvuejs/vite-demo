/*
 * @Author: 清风
 * @Date: 2020-09-01 17:01:50
 * @Description: 
 */
import { createApp } from 'vue'
import App from '@/App.vue'
import './index.css'
import router from "./router"
import { createPinia } from "pinia";
import "./utils/big"

const app = createApp(App);

// import '@layui/layui-vue/lib/index.css'

import HappyUi from "../../component/src";
app.use(HappyUi);

app.use(router).use(createPinia()).mount('#app')
