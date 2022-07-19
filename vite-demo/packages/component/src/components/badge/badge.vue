<script lang="ts">
export default {
    name: "HyBadge"
}
</script>

<script lang="ts" setup>
import "./badge.scss";
import { computed, StyleValue } from "vue";

export type HyBadgeProps = {
    type?: 'dot' | 'rim';
    theme?: string;
    color?: string;
    ripple?: boolean
}

const props = defineProps<HyBadgeProps>();

const classes = computed(() => {
    return [
        {
            "happy-badge": !props.type,
            "happy-badge-dot": props.type == "dot",
            "happy-badge-rim": props.type == "rim",
            "happy-badge-dot-ripple": props.ripple,
        },
        props.theme ? `happy-bg-${props.theme}`: '',
    ]
})

const styles = computed<StyleValue>(() => {
    return props.color ? `background-color: ${props.color}` : ''
})

</script>
<template>
    <span :class="classes" :style="styles">
        <span v-if="type === 'dot'" :class="props.theme ? `happy-bg-${props.theme}`:''" :style="styles"></span>
        <slot v-if="type != 'dot'"></slot>
    </span>
</template>