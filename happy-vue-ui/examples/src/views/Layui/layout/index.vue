<!--
 * @Author: 清风浩
 * @Date: 2022-07-14 15:19:59
 * @LastEditors: 清风浩
 * @LastEditTime: 2022-07-15 14:53:53
 * @Description: 
-->
<script lang="ts" setup>
import Menu from "./Menu.vue";

</script>

<template>
    <lay-layout class="example">
        <lay-header>header</lay-header>
        <lay-layout>
            <lay-side>
                <Menu></Menu>
            </lay-side>
            <lay-body>
                <router-view></router-view>
            </lay-body>
        </lay-layout>
    </lay-layout>
</template>

<style lang="scss" >
.example {
    height: 100vh;
}
</style>