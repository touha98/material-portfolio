<template>
  <div class="loading white">
    <div class="icons-wrapper">
      <loading />
    </div>
  </div>
</template>

<script>
import Loading from "./Loading.vue"
export default {
  name: "LoadingScreen",
  components: { Loading },
}
</script>

<style>
.loading {
  z-index: 999;
  position: absolute;
  top: 0;
  height: 100vh;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icons-wrapper {
  font-size: 40px;
  display: block;
  max-width: 340px;
  text-align: center;
}
</style>
