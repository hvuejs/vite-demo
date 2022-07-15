import { withInstall, WithInstallPlugin } from "../../utils"
import Component from "./src/button.vue";

const component: WithInstallPlugin<typeof Component> = withInstall(Component)

export default component;
