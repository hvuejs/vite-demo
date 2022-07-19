<script lang="ts">
export default {
    name: "HyButton"
}
</script>

<script lang="ts" setup>
import "./button.scss";

import { computed } from "vue";
import { ButtonNativeType, ButtonType, ButtonSize, ButtonEmits } from "./interface";

export interface HyButtonProps {
    type?: ButtonType;
    nativeType?: ButtonNativeType;
    loading?: boolean;
    disabled?: boolean;
    size?: ButtonSize,
    prefixIcon?: String;
    suffixIcon?: String;
}

const props = withDefaults(defineProps<HyButtonProps>(), {
    nativeType: "button",
    loading: false,
    disabled: false,
})

const classes = computed(() => {
    return [
        {
            "happy-btn--disabled" : props.disabled
        },
        props.type ? `happy-btn--${props.type}` : '',
        props.size ? `happy-btn--${props.size}` : ''
    ]
})

const emit = defineEmits(ButtonEmits);
const handleClick = (event: MouseEvent) => {
    emit("click", event)
}

</script>

<template>
    <button 
        class="happy-btn" 
        :class="classes" 
        :type="nativeType" 
        @click="handleClick">
        <i v-if="prefixIcon" :class="`happy-icon ${prefixIcon}`"></i>
        <i v-if="loading" class="happy-icon happy-icon--loading "></i>
        <slot v-else></slot>
        <i v-if="suffixIcon" :class="`happy-icon ${suffixIcon}`"></i>
    </button>
</template>
