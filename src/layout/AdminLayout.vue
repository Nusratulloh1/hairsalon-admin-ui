<template>
  <div class="wrapper" :class="{ 'full-screen': drawer }">
    <TheHeader class="the-header border-b" @onBurgerClick="drawer = !drawer"></TheHeader>
    <div class="block md:hidden">
      <el-drawer v-model="drawer" :with-header="false" :show-close="false" direction="ltr" size="300px">
        <TheSidebar :routes="routes" @onRouteClick="drawer = false" />
      </el-drawer>
    </div>
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
import {
  Menu,
  User,
  PhoneFilled,
  UserFilled,
  Briefcase,
} from "@element-plus/icons-vue";
import type { ISidebarItem } from "@/models/frontend";
import { ref } from "vue";
const routes: ISidebarItem[] = [
  {
    route: "/dashboard",
    title: "Dashboard",
    icon: Menu,
  },
  {
    route: "/users",
    title: "Users",
    icon: UserFilled,
  },
  {
    route: "/barbers",
    title: "Barbers",
    icon: Briefcase,
  },
  {
    route: "/contact",
    title: "Contacts",
    icon: PhoneFilled,
  },
  // {
  //   route: "/404",
  //   title: "No",
  //   icon: Postcard,
  //   children: [
  //     {
  //       route: "/admin/applicants-programs",
  //       title: "By Programs",
  //     },
  //   ]
  // },
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
    overflow: auto;
  }

  .sidebar {
    grid-area: sidebar;
  }
}

.wrapper.full-screen {
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";

  .sidebar {
    display: none;
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
