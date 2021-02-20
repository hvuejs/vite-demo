<template>
  <div class="home">
      首页
      <hello-world msg="Hello Vue 3.0 + Vite" />
      <router-link to='/login'>登录</router-link>
      <router-link to='/'>测试</router-link>
  </div>
</template>

<script lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import { defineComponent } from "vue"
export default defineComponent({
  name: 'Home',
  components: {
    "hello-world":HelloWorld
  }
})
</script>

<style lang="scss" scoped>
.home {
    button {
        background-color: #567FFA;
        color: #fff;
    }
}
</style>