<template>
  <el-menu class="el-menu-vertical-demo" router :default-active="$route.path">
    <div class="flex items-center justify-center space-x-3 pt-2 pb-8">
      <LogoIcon classes="logo" />
      <h1 class="logo-text">Admission</h1>
    </div>
    <el-menu-item
      v-for="route of props.routes"
      :key="route.route"
      :index="route.route"
    >
      <el-icon class="icon"><component :is="route.icon" /></el-icon>
      <template #title>{{ route.title }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { LogoIcon } from "@/components/icons";
import type { ISidebarItem } from "@/models/frontend";
const props = defineProps<{
  routes: ISidebarItem[];
}>();
</script>

<style scoped lang="scss">
.logo {
  width: 51px;
  height: 80px;

  &-text {
    font-weight: 400;
    font-size: 30px;
    line-height: 54px;
    color: #000000;
    width: 189px;
  }
}
</style>
<style lang="scss">
.el-menu-item {
  font-weight: 700;
  font-size: 16px;
  line-height: 54px;
  color: #6a707e !important;

  .el-icon svg {
    width: 18px !important;
    height: 19px !important;
    color: #aaaaaa !important;
  }

  &.is-active {
    color: #d63c31 !important;

    .el-icon svg {
      color: #d63c31 !important;
    }
  }
}
</style>
