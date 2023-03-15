<template>
  <div class="flex justify-end mb-4">
    <el-button type="primary" size="large" @click="openDepartmentFormDialog"
      >Add User</el-button
    >
  </div>
  <div class="table-wrapper" v-loading="loading">
    <el-table
      :data="users"
      stripe
      style="width: 100%"
      row-class-name="cursor-pointer"
    >
      <el-table-column
        prop="first_name"
        label="First Name"
        min-width="180"
        align="left"
      />
      <el-table-column
        prop="last_name"
        label="Last Name"
        min-width="180"
        align="left"
      />
      <el-table-column
        prop="email"
        label="Email"
        min-width="180"
        align="left"
      />
      <el-table-column prop="role" label="Role" min-width="180" align="left" />
      <el-table-column label="Operations" align="center">
        <template #default="{ row }">
          <div
            class="flex justify-center space-x-3"
            v-if="row.role !== 'super_admin'"
          >
            <EditPen class="h-4 w-4 text-blue-500" @click="onEditClick(row)" />
            <Delete
              class="h-4 w-4 text-primary"
              @click="confirmDelete(row.id)"
            />
          </div>
        </template>
      </el-table-column>
    </el-table>
    <teleport to="#modal" v-if="showModal">
      <UserForm :type="formType" :user="user" @on-submit="submitForm($event)" />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from "@/stores";
import { onMounted, computed, ref } from "vue";
import { Delete, EditPen } from "@element-plus/icons-vue";
import { useModal } from "@/composables";
import UserForm from "./components/UserForm.vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useI18n } from "vue-i18n";
const modal = useModal();
const formType = ref<"create" | "edit">("create");
const i18n = useI18n();

const showModal = computed(() => modal.show.value);
const loading = ref(false);
const userStore = useUsersStore();
const users = computed(() => userStore.users);
const user = ref(users.value[0]);

onMounted(() => {
  userStore.getUsers();
});
const openDepartmentFormDialog = () => {
  formType.value = "create";
  modal.setTitle("Add user");
  modal.setWidth("50%");
  modal.showModal();
};
const onEditClick = async (row: any) => {
  try {
    user.value = row;
    formType.value = "edit";
    modal.setTitle(i18n.t("Edit user"));
    modal.setWidth("50%");
    modal.showModal();
  } catch (error: any) {
    console.log("error", error.message);
  }
};
const confirmDelete = (id: string) => {
  ElMessageBox.confirm(
    "This action cannot be undone. Continue?",
    i18n.t("shared.warning"),
    {
      confirmButtonText: "Yes",
      cancelButtonText: "Cencel",
      type: "warning",
      center: true,
    }
  )
    .then(async () => {
      try {
        loading.value = true;
        await userStore.remoevUser(id);
        loading.value = false;
        ElMessage({
          type: "success",
          message: i18n.t("shared.deleteCompleted"),
        });
      } catch (error: any) {
        loading.value = false;
        console.log("error", error);
      }
    })
    .catch(() => {});
};
const submitForm = async (data: any) => {
  try {
    loading.value = true;
    if (formType.value === "edit" && user.value) {
      data["id"] = user.value.id;
      await userStore.updateUser(data);
      ElMessage({
        message: i18n.t("shared.updated"),
        type: "success",
      });
    } else {
      await userStore.createUser(data);
      ElMessage({
        message: i18n.t("shared.created"),
        type: "success",
      });
    }
    loading.value = false;
    modal.hideModal();
  } catch (error: any) {
    loading.value = false;
    console.log("error", error);
  }
};
</script>

<style scoped></style>
