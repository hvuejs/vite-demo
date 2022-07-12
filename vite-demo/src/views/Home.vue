<template>
  <div class="home">
      首页
      <hello-world msg="Hello Vue 3.0 + Vite" />
      <router-link to='/login'>登录</router-link>
      <router-link to='/'>测试</router-link>
      <input type="text" v-focus placeholder="ceshi">
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from '../components/HelloWorld.vue';
 const vFocus = {
    mounted (el) {
        console.log(el)
        el.focus()
    }
 }
</script>

<style lang="scss" scoped>
.home {
    button {
        background-color: #567FFA;
        color: #fff;
    }
}
</style>