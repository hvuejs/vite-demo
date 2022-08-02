import { ComponentCustomProperties } from "vue";
import { createStore } from "pinia";

declare module "@vue/runtime-core" {
    // Declare your own store states.
    interface State {
        count: number;
    }

    interface ComponentCustomProperties {
        $store: createStore<State>;
    }
}
