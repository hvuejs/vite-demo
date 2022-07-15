<!--
 * @Author: 清风浩
 * @Date: 2020-09-01 17:01:50
 * @LastEditors: 清风浩
 * @LastEditTime: 2022-07-14 15:26:25
 * @Description: 
-->
<template>
    <!-- <div class="container">
        <div class="nav">
            <router-link to="/">home</router-link> | 
            <router-link to="/naive-ui">NaiveUi</router-link> | 
            <router-link to="/layui-vue">Layuivue</router-link>
        </div>
    </div> -->
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";

import { RouterView } from "vue-router";

export default defineComponent({
    name: "App",
    components: {
        RouterView,
    },
    setup() {
        
        onMounted(() => {
            
        });
        let data = reactive<{ name: string }>({
            name: "测试人",
        });
        
        return {
            data
        };
    },
});
</script>

<style lang="scss">

</style>
