<template>
  <div class="app-header">
    <TheLogo />
    <div class="flex space-x-6">
      <div class="white-card header-search">
        <el-input
          v-model="input"
          placeholder="Искать клиента, заказ, сотрудника"
          :prefix-icon="Search"
          size="large"
        />
      </div>
      <el-dropdown
        trigger="click"
        class="flex justify-center white-card"
        @command="handleLanChange"
      >
        <div class="flex items-center justify-center space-x-2 px-2">
          <LanguageIcon class="h-5 w-5 fill-purple" />
          <span class="text-purple">{{ activeLang }}</span>
          <el-icon class="text-purple">
            <arrow-down class="text-purple" />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="purple-dropdown">
            <el-dropdown-item
              command="ru"
              class="flex items-center space-x-3 !py-3"
            >
              <span class="text-purple">Русский</span>
            </el-dropdown-item>
            <el-dropdown-item
              command="uz"
              class="flex items-center space-x-3 !py-3"
            >
              <span class="text-purple">O'zbekcha</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown
        @command="handleProfileChange"
        trigger="click"
        class="flex justify-center white-card"
      >
        <div class="flex items-center justify-center space-x-2 px-2">
          <UserIcon class="h-5 w-5 fill-purple" />
          <span class="text-purple">{{ $t("app.profile") }}</span>
          <el-icon class="text-purple">
            <arrow-down class="text-purple" />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="purple-dropdown">
            <el-dropdown-item
              command="profile"
              class="flex items-center space-x-3 !py-3"
            >
              <UserIcon class="h-5 w-5 fill-purple" />
              <span class="text-purple">{{ $t("app.profile") }}</span>
            </el-dropdown-item>
            <el-dropdown-item
              command="subscription"
              class="flex items-center space-x-3 !py-3"
            >
              <DiamondIcon class="h-5 w-5 fill-purple" />
              <span class="text-purple">{{ $t("app.subscription") }}</span>
            </el-dropdown-item>
            <el-dropdown-item
              command="logout"
              class="flex items-center space-x-3 !py-3"
            >
              <LogoutIcon class="h-5 w-5 stroke-danger" />
              <span class="text-danger">{{ $t("app.logout") }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheLogo from "./TheLogo.vue";
import {
  DiamondIcon,
  UserIcon,
  LogoutIcon,
  LanguageIcon,
} from "@/components/icons";

import { Search, ArrowDown } from "@element-plus/icons-vue";
import { ref } from "vue";
import { setLocale, i18n } from "@/i18n";
import { ElMessageBox } from "element-plus";
import { useI18n } from "vue-i18n";
import { useUsersStore } from "@/stores/user";
import { useRoute, useRouter } from "vue-router";
const I18n = useI18n();
const store = useUsersStore();
const router = useRouter();
const route = useRoute();
const localeShorts: any = {
  uz: "Uz",
  ru: "Ру",
};
const activeLang = ref<string>(localeShorts[i18n.global.locale.value]);
const input = ref("");

const handleLanChange = (command: string) => {
  setLocale(command);
  activeLang.value = localeShorts[command];
};

const handleProfileChange = (command: string) => {
  if (command === "logout") {
    ElMessageBox.confirm(I18n.t("app.doYouwantLogOut"), I18n.t("app.warning"), {
      confirmButtonText: I18n.t("shared.yes"),
      cancelButtonText: I18n.t("shared.cancel"),
      type: "warning",
    }).then(() => {
      store.resetToken();
      router.push(`/login?redirect=${route.fullPath}`);
    });
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/colors.scss";
.app-header {
  background: $bg-white;
  padding: 0 89px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.white-card {
  background: $bg-white;
  box-shadow: 0px 14px 14px rgba(0, 0, 0, 0.02);
  border-radius: 10px;
  padding: 10px;
}
.header-search {
  width: 340px;
}
</style>
<style lang="scss">
@import "@/assets/styles/colors.scss";
.purple-dropdown .el-dropdown-menu__item:not(.is-disabled):focus {
  background-color: $bg-purple !important;
}
</style>
