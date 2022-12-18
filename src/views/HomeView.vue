<script setup lang="ts">
import timecom from '../components/time/Index.vue'

</script>

<template>
  <main class="d-flex j-center">
    <video autoplay muted loop>
      <source src="@/assets/video.mp4" type="video/mp4">
    </video>
    <timecom></timecom>
  </main>
</template>

<style lang="less" scoped>
main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
    position: absolute;
    z-index: -1;
  }
}
</style>
