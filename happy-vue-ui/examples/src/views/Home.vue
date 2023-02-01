<template>
    <div class="home">
        <div>
            <router-link to="/login">登录</router-link> | 
            <router-link to="/layui-vue">LayuiVue</router-link> |
            <router-link to="/naive-ui">NaiveUi</router-link> |
            <router-link to="/happy-vue">happyVue</router-link>
        </div>
        <hello-world msg="Hello Vue 3.0 + Vite" />
        <input type="text" v-focus placeholder="ceshi" />
    </div>
</template>

<script lang="ts" setup>
import HelloWorld from "../components/HelloWorld.vue";
const vFocus = {
    mounted(el: HTMLElement) {
        el.focus();
    },
};
</script>

<style lang="scss" scoped>
.home {
    button {
        background-color: #567ffa;
        color: #fff;
    }
}
</style>
