declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module "path";

declare module "big.js";

declare module 'uuid'

declare var window: Window & typeof globalThis;

interface Window {
    $message: any;
}
