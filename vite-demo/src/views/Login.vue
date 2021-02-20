<!--
 * @Author: 清风
 * @Date: 2020-09-07 10:36:45
 * @Description: 
-->
<template>
  <div class="login">
    <form>
      <div>
        <label for="">用户名</label>
        <input type="text" v-model="userInfo.admin_name" />
      </div>
      <div>
        <label for="">密码</label>
        <input type="text" v-model="userInfo.admin_pwd" />
      </div>
      <div>
        <label for="">验证码</label>
        <input type="text" v-model="userInfo.code" />
        <img id="img" :src="codePic" alt="" onclick="this.src=this.src+'?'">
        <a href="#" onclick="document.getElementById('img').onclick()" @click.prevent>换一张?</a><br/>
      </div>
    </form>
      <div>
        <button @click="handleSubmit">登录</button>
      </div>

  </div>
</template>

<script lang="ts">
import { reactive, watchEffect, defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const userInfo: { [key: string]: any } = reactive({
        admin_name: '',
        admin_pwd: '',
        code: ''
    })
    watchEffect(() => {
        console.log(userInfo)
    })
    const handleSubmit = () => {
      if (!userInfo.admin_name) {
        alert("用户名不能为空")
        return
      }
      let data = "";
      Object.keys(userInfo).forEach(k => {
        data += k+"="+ userInfo[k]+"&";
      })
      data.length && (data = data.substring(0, data.length - 1));
      fetch("/manage/login?"+data, {
        method: "GET",
        // body: JSON.stringify(userInfo),
        credentials: "include",
        mode: "cors",
        cache: 'no-cache', 
        headers: {
          'content-type': 'application/json'
        },
      }).then(response => response.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
    return {
      userInfo,
      handleSubmit,
      codePic: "/manage/captcha"
    }
  }
})
</script>

<style scoped>

.login {
  width: 100%;
}
</style>