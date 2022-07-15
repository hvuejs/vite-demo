<script lang="ts">
export default {
    name: "HyMessage"
}
</script>

<script lang="ts" setup>
import { computed, useSlots, VNodeTypes } from "vue";
import Title from "./Title.vue"

export interface HappyMsgProps {
    id?: string;
    title?: string | boolean | Function;
    icon?: string | number;
    skin?: string;
    zIndex?: number | Function;

    type?: 
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | "dialog"
        | "loading"
        | "notifiy";
    content?: string | Function | object | VNodeTypes

}

const props = withDefaults(defineProps<HappyMsgProps>(), {
    title: "标题",
    type: 1,

})


const slots = useSlots();

const showTitle = computed(() => {
    return props.title && props.type != 3 && props.type != 5 && props.type != 6
})


const iconClass = computed(() => {
    return ['happy-message-icon', `happy-message-icon__${props.icon}`]
})

</script>

<template>
    <div>
        <!-- 动画 -->
        <transition enter-active-class="" leave-active-class="">
            <!-- 弹出层 -->
            <div ref="happyMessage" class="happy-message ">
                <!-- 标题 -->
                <Title v-if="showTitle" :title="title"></Title>
                <!-- 内容 -->
                <div class="happy-message-content">
                    <template>
                        <i v-if="icon" :class="iconClass"></i>
                        <slot v-if="slots.default"></slot>
                    </template>

                </div>
            </div>
        </transition>
    </div>
</template>