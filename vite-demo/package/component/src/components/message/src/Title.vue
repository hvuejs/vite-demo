<script lang="ts">
export default {
    name: "Title"
}
</script>
<script lang="ts" setup>

export interface HaederProps {
    title?: string | boolean | Function
}

defineProps<HaederProps>();

const renderContent = function (content: any) {
    if (typeof content === "function") {
        return content()
    }
    return content
}

</script>

<template>
    <div class="happy-message-title">{{ renderContent(title) }}</div>
</template>