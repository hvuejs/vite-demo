/*
 * @Author: 清风浩
 * @Date: 2022-07-14 14:35:37
 * @LastEditors: 清风浩
 * @LastEditTime: 2022-07-15 16:56:16
 * @Description: 
 */
import { App } from "vue";
import "./theme-chalk/src/index.scss";

import Message from "./components/message/index";
import { InstallOptions } from "./types";
console.log(Message);

const install = (app: App, options?: InstallOptions) => {
    
}

export default { install }