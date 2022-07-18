import { withInstall, WithInstallPlugin } from "../../utils";

import Component from "./src/index.vue";

const component: WithInstallPlugin<typeof Component> = withInstall(Component);

export default component;
