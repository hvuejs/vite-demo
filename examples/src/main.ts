import { createApp } from 'vue'
import App from '@/App.vue'
import './index.css'
import router from "./router"
import { createPinia } from "pinia";
import "./utils/big"

const app = createApp(App);

// import '@layui/layui-vue/lib/index.css'

import HappyVue from "happy-vue";
app.use(HappyVue);

app.use(router).use(createPinia()).mount('#app')
