import { withInstall, WithInstallPlugin } from "../../utils"
import Component from "./button.vue";

const component: WithInstallPlugin<typeof Component> = withInstall(Component)

export default component;
