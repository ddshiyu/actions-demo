<template>
  <div class="t-center">
    <div>
      <button @click="start">开始</button>
      <!-- <input type="text"> -->
      <button @click="reset">休息</button>
      <!-- <input type="text"> -->
    </div>
    <div>
      {{ timeObj.min }} : {{ timeObj.sec }}
    </div>
    <div>
      <div class="outer">
        <div class="inner" :style="{ width: (time) / (60 * 25) * 100 + '%' }" v-if="showInner"></div>
        <div class="inner-rest" :style="{ width: (restTime) / (60 * 5) * 100 + '%' }" v-else></div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, onBeforeMount, onMounted, ref } from 'vue'
interface timeObj {
  min: number;
  sec: number;
  nowTime: number;
}
let time = ref<number>(60 * 25)
let restTime = ref<number>(60 * 5)
let timer = ref<number>(0)
let timerRest = ref<number>(0)
let timeObj = reactive<timeObj>({
  min: 0,
  sec: 0,
  nowTime: 60 * 25
})
let showInner: boolean = true
function showTime(): void {
  time.value -= 1
  timeObj.min = Math.floor(+time.value / 60)  //计算分钟数
  timeObj.sec = Math.floor(+time.value % 60)  //计算秒数
  console.log(time.value)
}
function showTime1(): void {
  restTime.value -= 1
  timeObj.min = Math.floor(+restTime.value / 60)  //计算分钟数
  timeObj.sec = Math.floor(+restTime.value % 60)  //计算秒数
  console.log(restTime.value)
}
function start(): void {
  if (timerRest.value) {
    clearInterval(timerRest.value)
  }
  showInner = true
  time.value = 60 * 25
  timer.value = window.setInterval(() => {
    if (time.value <= 0) {
      clearInterval(timer.value)
    }
    showTime()
  }, 1000)
}
function reset(): void {
  if (timer.value) {
    clearInterval(timer.value)
  }
  showInner = false
  restTime.value = 60 * 5
  timerRest.value = window.setInterval(() => {
    if (restTime.value <= 0) {
      clearInterval(timerRest.value)
    }
    showTime1()
  }, 1000)
}
onMounted(() => {
})
</script>
<style scoped lang='less'>
button {
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f60;
  color: #fff;
}

input {
  padding: 6px 10px;
  border-radius: 4px;
  width: 80px;
}

.outer {
  width: 60%;
  height: 40px;
  border-radius: 25px;
  border: 1px solid #333;
  margin: 0 auto;
  background: #fff;
}

.inner, .inner-rest {
  width: 60%;
  height: 38px;
  border-radius: 25px;
  background: lightblue;
}

.inner-rest {
  background: limegreen;
}
</style>