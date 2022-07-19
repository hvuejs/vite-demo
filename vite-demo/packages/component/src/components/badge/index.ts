import { withInstall, WithInstallPlugin } from "../../utils"
import Component from "./badge.vue";

const component: WithInstallPlugin<typeof Component> = withInstall(Component)

export default component;
