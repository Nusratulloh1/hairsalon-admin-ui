<template>
  <div class="wrapper">
    <TheHeader class="the-header border-b"></TheHeader>
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
  Postcard,
  Memo,
  User,
  Document,
  Bell,
  ChatRound,
} from "@element-plus/icons-vue";
import type { ISidebarItem } from "@/models/frontend";
const routes: ISidebarItem[] = [
  {
    route: "/admin",
    title: "Dashboard",
    icon: Menu,
  },
  {
    route: "/admin/applicants",
    title: "Applicants",
    icon: Postcard,
  },
  {
    route: "/admin/departments",
    title: "Departments",
    icon: Memo,
  },
  {
    route: "/admin/users",
    title: "Users",
    icon: User,
  },
  {
    route: "/admin/exam-dates",
    title: "Exam Dates",
    icon: Document,
  },
  {
    route: "/admin/notifications",
    title: "Notifications",
    icon: Bell,
  },
  {
    route: "/admin/sms",
    title: "Sms mailing",
    icon: ChatRound,
  },
];
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
</style>
