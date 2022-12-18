<template>
  <div class="time m-20">{{t}}</div>
</template>

<script lang='ts' setup>
  import { reactive, toRefs, ref, onBeforeMount, onMounted } from 'vue'
  import dayjs from 'dayjs'
  let t = ref<string>(dayjs(new Date()).format('hh:mm:ss'))
  let timer = ref<number>(0)
  onBeforeMount(() => {
    console.log('2.组件挂载页面之前执行----onBeforeMount')
  })
  onMounted(() => {
    timer.value = window.setInterval(() => {
      t.value = dayjs(new Date()).format('hh:mm:ss')
    }, 1000)
  })
</script>
<style scoped lang='less'>
.time {
  font-size: 60px;
}
</style>