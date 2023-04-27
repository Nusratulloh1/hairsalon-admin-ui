<template>
  <div class="wrapper">
    <TheHeader
      class="the-header border-b"
      @onBurgerClick="drawer = !drawer"
    ></TheHeader>
    <el-drawer
      v-model="drawer"
      :with-header="false"
      :show-close="false"
      direction="ltr"
      size="300px"
    >
      <TheSidebar :routes="routes" @onRouteClick="drawer = false" />
    </el-drawer>
    <TheSidebar class="sidebar" :routes="routes" />
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
import { Menu, WalletFilled } from "@element-plus/icons-vue";
import type { ISidebarItem } from "@/models/frontend";
import { ref } from "vue";
const routes: ISidebarItem[] = [
  {
    route: "/",
    title: "Dashboard",
    icon: Menu,
  },
  {
    route: "/tuition",
    title: "Tuition Fee",
    icon: WalletFilled,
  },
];

const drawer = ref(false);
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
  }
  .content {
    grid-area: main;
    overflow-x: hidden;
  }
  .sidebar {
    grid-area: sidebar;
  }
}
@media screen and (max-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header"
      "main"
      "footer";
  }
  .sidebar {
    display: none;
  }
}
</style>

<style>
.el-drawer__body {
  padding: 12px 0px !important;
}
</style>
