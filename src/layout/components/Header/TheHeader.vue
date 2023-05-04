<template>
  <div class="app-header">
    <div>
      <div>
        <el-button @click="emit('onBurgerClick')" text
          ><Fold class="h-6 w-6"></Fold
        ></el-button>
      </div>
    </div>
    <div class="flex space-x-6">
      <el-dropdown
        @command="handleProfileChange"
        trigger="click"
        class="flex justify-center"
      >
        <div class="flex items-center justify-center space-x-2 px-2">
          <UserIcon class="h-5 w-5 fill-gray-400" />
          <span class="text-gray-500 font-medium text-base"
            >{{ store.getUser?.first_name || " " }}
            {{ store.getUser?.last_name }}</span
          >
          <el-icon class="text-gray-500 text-base">
            <arrow-down class="text-gray-500" />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="purple-dropdown w-36">
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
import { UserIcon, LogoutIcon } from "@/components/icons";

import { ArrowDown, Fold } from "@element-plus/icons-vue";
import { ElMessageBox } from "element-plus";
import { useI18n } from "vue-i18n";
import { useUsersStore } from "@/stores/user";
import { useRoute, useRouter } from "vue-router";
const I18n = useI18n();
const store = useUsersStore();
const router = useRouter();
const route = useRoute();

const emit = defineEmits(["onBurgerClick"]);
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
  padding: 0 24px;
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
  // background-color: $bg-purple !important;
}
</style>
