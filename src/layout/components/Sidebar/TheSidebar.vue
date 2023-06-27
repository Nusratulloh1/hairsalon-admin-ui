<template>
  <el-menu class="el-menu-vertical-demo" router :default-active="$route.path">
    <div class="flex items-center justify-center space-x-3 pt-6 pb-8 px-4">
      <LogoutIconWithName />
    </div>
    <div v-for="item of props.routes" :key="item.route">
      <el-menu-item v-if="!item.children" :index="item.route" @click="emit('onRouteClick')" class="navigation menu-item">
        <div class="flex items-center space-x-2">
          <component :is="item.icon" class="h-5 w-5"></component>
          <span>{{ item.title }}</span>
        </div>
      </el-menu-item>

      <el-sub-menu v-else :index="item.route">
        <template #title>
          <div class="flex items-center space-x-2 navigation">
            <component :is="item.icon" class="h-5 w-5"></component>
            <span>{{ item.title }}</span>
          </div>
        </template>
        <el-menu-item v-for="child of item.children" :key="child.route" :index="child.route" @click="emit('onRouteClick')"
          class="navigation submenu-item">
          <template #title>{{ child.title }}</template>
        </el-menu-item>
      </el-sub-menu>
    </div>

  </el-menu>
</template>

<script setup lang="ts">
import { LogoutIconWithName } from "@/components/icons";
import type { ISidebarItem } from "@/models/frontend";
const props = defineProps<{
  routes: ISidebarItem[];
}>();
const emit = defineEmits(["onRouteClick"]);
</script>
<style scoped lang="scss">
.logo {
  width: 51px;
  height: 75px;

  &-text {
    font-weight: 400;
    font-size: 34px;
    color: #000000;
    width: 189px;
    user-select: none;
  }
}

.sidebar {
  background: #ffffff;
  box-shadow: 1.5px 2.6px 10px rgba(119, 119, 119, 0.1);


  .el-menu-item {
    &:hover {
      background-color: #455378;
      color: #ffffff !important;
    }
  }

  .navigation {
    mix-blend-mode: normal;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 54px;
    color: #6a707e;

    &:hover {
      color: white;
    }
  }

  .menu-item {
    padding-left: 2rem;

    &.is-active {
      background: rgba(56, 56, 56, 0.1);
      color: #182857;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        width: 3px;
        background: #182857;
      }
    }

  }

  .submenu-item {
    &.is-active {
      color: #182857;
    }
  }
}
</style>
