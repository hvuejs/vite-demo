<template>
    <div class="wrap">
        <RouterView></RouterView>
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
    </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from "vue";
import MessageApi from "@/components/message-api.vue";
import { RouterView } from "vue-router";
import Logo from "@/assets/logo.png";
import { NMessageProvider } from 'naive-ui';

export default defineComponent({
    name: "App",
    components: {
        RouterView,
        MessageApi,
        NMessageProvider
    },
    setup() {
        
        onMounted(() => {
            
        });
        let data = reactive({
            name: "测试人",
        });
        
        return {
            Logo,
            error () {
                window.$message.error('Once upon a time you dressed so fine')
            },
            success () {
                window.$message.success('Once upon a time you dressed so fine')
            },
        };
    },
});
</script>

<style></style>
