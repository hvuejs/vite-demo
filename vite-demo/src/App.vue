<!--
 * @Author: 清风
 * @Date: 2020-09-01 17:01:50
 * @Description: 
-->
/*
 * @Author: 清风
 * @Date: 2020-09-01 17:01:50
 * @Description: 
 */
<template>
  <div class="wrap">
      <img :src="Logo" alt="" />
      <RouterView></RouterView>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { RouterView } from "vue-router";
import Logo from "@/assets/logo.png"
export default defineComponent({
    name: 'App',
    components: {
      RouterView
    },
    setup() {
        let data = reactive({
          name: "测试人"
        })
        return {
          Logo
        }
    }
    
})
</script>

<style>

</style>
