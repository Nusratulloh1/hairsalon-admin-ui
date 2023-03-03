<template>
  <div class="wrapper">
    <TheHeader class="the-header"></TheHeader>
    <div
      class="content max-w-screen-xl mx-auto pb-4 px-8 md:px-0 pt-12 md:pt-20 pb-8 md:pb-12"
    >
      <RouterView />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/Header/TheHeader.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
</script>

<style scoped lang="scss">
@import "@/assets/styles/colors.scss";
.wrapper {
  background: $app-bg-gradient;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";

  .the-header {
    height: 94px;
    background: $app-bg-gradient;
  }
  .content {
    grid-area: main;
    overflow: auto;
  }
}
</style>
