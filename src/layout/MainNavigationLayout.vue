<template>
  <div class="wrapper">
    <div>
      <TheHeader class="the-header"></TheHeader>
      <TheNavigation></TheNavigation>
    </div>
    <div
      class="content max-w-screen-xl w-full mx-auto py-4 px-8 md:px-0 md:py-8"
    >
      <TheBreadcrumb class="mb-4 md:mb-6" />
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/Header/TheHeader.vue";
import TheNavigation from "./components/Navigation/TheNavigation.vue";
import TheBreadcrumb from "./components/Breadcrumb/TheBreadcrumb.vue";
</script>

<style scoped lang="scss">
@import "@/assets/styles/colors.scss";
.wrapper {
  background: #fafafa;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "main";

  .the-header {
    height: 94px;
    background: $bg-white;
  }

  .content {
    grid-area: main;
    overflow: auto;
  }
}
</style>
