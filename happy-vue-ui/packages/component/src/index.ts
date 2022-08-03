import { App } from "vue";

import "./theme/index.less";

import Button from "./components/button/index";
import Badge from "./components/badge/index"
// import Message from "./components/message/index";

export type InstallOptions = Record<string, unknown>
const components = [
    Button,
    Badge
]

const install = (app: App, options?: InstallOptions) => {
    for(const key of Object.keys(components)) {
        app.use(components[key], options)
    }
    
}

export {
    Button,
    Badge
}

export default { install }