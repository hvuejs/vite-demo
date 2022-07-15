<script lang="ts" setup>
import { layer } from "@layui/layer-vue";
const loading0 = function () {
    layer.load(0, { time: 3000 });
};
const openSuccess = function () {
    layer.msg("成功消息", { icon: 1, time: 30000 });
};
</script>
<template>
    <Layout></Layout>
    <div class="layui-vue--wrapper">
        <lay-button type="primary" @click="loading0">原始按钮</lay-button>
        <lay-button>默认按钮</lay-button>
        <lay-button type="normal" @click="openSuccess">百搭按钮</lay-button>
        <lay-button type="warm">暖色按钮</lay-button>
        <lay-button type="danger">警告按钮</lay-button>
    </div>
</template>
