<template>
  <div class="flex justify-end mb-4">
    <!-- <el-button type="primary" size="large" @click="openDepartmentFormDialog">Add Contact</el-button> -->
  </div>
  <div class="table-wrapper" v-loading="loading">
    <el-table :data="users" row-class-name="noHover" stripe style="width: 100%">
      <el-table-column type="index" label="№" min-width="50" align="left" />
      <el-table-column prop="phoneNumber" label="Phone" min-width="150" align="center">
        <template #default="{ row }">
          {{ row.firstName + ' ' + row.lastName }}
        </template>
      </el-table-column>
      <el-table-column prop="phoneNumber" label="Username" min-width="150" align="center" />
      <el-table-column prop="role" label="Role" min-width="200" align="center">
      </el-table-column>
      <el-table-column label="Operations" min-width="150" align="center">
        <template #default="{ row }">
          <div class="flex justify-center space-x-3">
            <el-button @click="confirm(row.phoneNumber)">
              Change role
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- <teleport to="#modal" v-if="showModal">
        <ContactForm :type="formType" :contact="contact" @on-submit="submitForm($event)" />
      </teleport> -->
  </div>
</template>
  
<script setup lang="ts">
import { usContactStore, useUsersStore } from "@/stores";
import { onMounted, computed, ref } from "vue";
import { Delete, Edit } from "@element-plus/icons-vue";
import { useModal } from "@/composables";
import { ElMessage, ElMessageBox } from "element-plus";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const userStore = useUsersStore()
const loading = ref(false);
const users = computed(() => userStore.users);
onMounted(() => {
  userStore.getUsers()
});


const confirm = (phoneNumber: string) => {
  ElMessageBox.confirm(
    "This action cannot be undone. Continue?",
    i18n.t("shared.warning"),
    {
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
      type: "warning",
      center: true,
    }
  )
    .then(async () => {
      try {
        loading.value = true;
        await userStore.changeRole({ phoneNumber });
        await userStore.getUsers()
        loading.value = false;
        ElMessage({
          type: "success",
          message: i18n.t("shared.created"),
        });
      } catch (error: any) {
        loading.value = false;
        console.log("error", error);
      }
    })
    .catch(() => { });
};

</script>
  
<style scoped></style>