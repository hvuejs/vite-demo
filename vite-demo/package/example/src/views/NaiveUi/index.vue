<!--
 * @Author: 清风浩
 * @Date: 2022-07-12 16:43:08
 * @LastEditors: 清风浩
 * @LastEditTime: 2022-07-12 16:49:23
 * @Description: 
-->
<template>
    <n-space>
        <n-button>Default</n-button>
        <n-button type="tertiary"> Tertiary </n-button>
        <n-button type="primary"> Primary </n-button>
        <n-button type="info"> Info </n-button>
        <n-button type="success" @click="success"> Success </n-button>
        <n-button type="warning"> Warning </n-button>
        <n-button type="error" @click="error"> Error </n-button>
    </n-space>
    <n-message-provider>
        <message-api />
    </n-message-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NMessageProvider } from "naive-ui";
import MessageApi from "@/components/message-api.vue";
export default defineComponent({
    components: {
        NMessageProvider,
        MessageApi,
    },
    setup() {
        return {
            error() {
                window.$message.error("Once upon a time you dressed so fine");
            },
            success() {
                window.$message.success("Once upon a time you dressed so fine");
            },
        };
    },
});
</script>
