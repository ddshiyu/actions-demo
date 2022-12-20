<template>
  <div>
    <button>开始</button>
    {{ min }} : {{ sec }}
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, onBeforeMount, onMounted, ref } from 'vue'
let time = ref<number>(60 * 25)
let timer = ref<number>(0)
let min = ref<number>(0)
let sec = ref<number>(0)
function showTime(): void {
  time.value -= 1
  min.value = Math.floor(+time.value / 60)  //计算分钟数
  sec.value = Math.floor(+time.value % 60)  //计算秒数
  console.log(time.value)
  // return `${leftm}:${lefts}`
}
onMounted(() => {
  timer.value = window.setInterval(() => {
    showTime()
  }, 1000)
})
</script>
<style scoped lang='less'>

</style>