<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="countAdd">count is: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue"
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
      let count = ref<number>(0);
      let countAdd = () => {
          count.value ++
      }
    return {
      count,
      countAdd
    }
  }
})
</script>
