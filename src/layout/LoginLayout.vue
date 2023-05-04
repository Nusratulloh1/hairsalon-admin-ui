<template>
  <div class="wrapper">
    <div class="content p-4 md:p-8">
      <RouterView />
    </div>
    <TheFooter class=" absolute bottom-0 w-full !hidden md:!flex"></TheFooter>
  </div>
</template>

<script setup lang="ts">
import TheFooter from "./components/Footer/TheFooter.vue";
</script>
<style scoped lang="scss">
.wrapper {
  height: 100vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // background: center / cover no-repeat url("@/assets/images/login-bg.png");
}
</style>
