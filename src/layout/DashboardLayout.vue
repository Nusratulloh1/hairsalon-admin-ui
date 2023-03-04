<template>
  <div class="wrapper">
    <TheHeader class="the-header border-b"></TheHeader>
    <TheSidebar class="sidebar" />
    <div class="content p-4 md:p-8">
      <RouterView />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/Header/TheHeader.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
import TheSidebar from "./components/Sidebar/TheSidebar.vue";
</script>

<style scoped lang="scss">
@import "@/assets/styles/colors.scss";
.wrapper {
  background: #ffffff;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";

  .the-header {
    height: 90px;
    // background: $app-bg-gradient;
  }
  .content {
    grid-area: main;
    overflow: auto;
  }
  .sidebar {
    grid-area: sidebar;
  }
}
</style>
