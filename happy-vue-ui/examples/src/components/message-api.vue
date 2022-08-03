<template>
    <div class="message-wrap"></div>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui';

window.$message = useMessage();
</script>
