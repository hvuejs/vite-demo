/*
 * @Author: 清风
 * @Date: 2020-09-01 17:01:50
 * @Description: 
 */
import { createApp } from 'vue'
import App from '@/App.vue'
import './index.css'
import router from "./router"
import { store } from './store'
createApp(App).use(router).use(store).mount('#app')
