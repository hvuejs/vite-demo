/*
 * @Author: 清风浩
 * @Date: 2022-07-14 14:35:37
 * @LastEditors: 清风浩
 * @LastEditTime: 2022-07-18 11:54:56
 * @Description: 
 */
import { App } from "vue";
import "./theme-chalk/src/index.scss";

import Button from "./components/button/index"
import Message from "./components/message/index";

export type InstallOptions = Record<string, unknown>

console.log(Message);

const components = [
    Button
]

const install = (app: App, options?: InstallOptions) => {
    for(const key of Object.keys(components)) {
        app.use(components[key], options)
    }
    
}

export {
    Button
}

export default { install }