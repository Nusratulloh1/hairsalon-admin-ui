<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: center / cover no-repeat url("@/assets/images/login-bg.png");
}
</style>
