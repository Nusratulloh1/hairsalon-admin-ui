<template>
  <div class="flex justify-end mb-4">
    <el-button type="primary" size="large" @click="openDepartmentFormDialog"
      >Add Staff</el-button
    >
  </div>
  <div class="table-wrapper" v-loading="loading">
    <el-table
      :data="stafs.data"
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
    <div class="py-4">
      <el-pagination
        background
        @current-change="onPaginationChange"
        layout="prev, pager, next"
        :page-size="pagination.limit"
        :total="stafs.total"
      />
    </div>
    <teleport to="#modal" v-if="showModal">
      <UserForm :type="formType" :user="staf" @on-submit="submitForm($event)" />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { useStaffStore } from "@/stores";
import { onMounted, computed, ref, reactive } from "vue";
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
const stafsStore = useStaffStore();
const stafs = computed(() => stafsStore.staffs);
const staf = ref();

const pagination = reactive({
  page: 1,
  limit: 20,
});

const fetchStaffs = () => {
  stafsStore.getStaffs(pagination);
};

const onPaginationChange = (event: number) => {
  pagination.page = event;
  fetchStaffs();
};

onMounted(() => {
  fetchStaffs();
});

const openDepartmentFormDialog = () => {
  formType.value = "create";
  modal.setTitle("Add staff");
  modal.setWidth("50%");
  modal.showModal();
};

const onEditClick = async (row: any) => {
  try {
    staf.value = row;
    formType.value = "edit";
    modal.setTitle(i18n.t("Edit staff"));
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
        await stafsStore.removeStaff(id);
        fetchStaffs();
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
    if (formType.value === "edit" && staf.value) {
      data["id"] = staf.value.id;
      await stafsStore.editStaff(data);
      ElMessage({
        message: i18n.t("shared.updated"),
        type: "success",
      });
    } else {
      await stafsStore.createStaff(data);
      ElMessage({
        message: i18n.t("shared.created"),
        type: "success",
      });
    }
    fetchStaffs();
    loading.value = false;
    modal.hideModal();
  } catch (error: any) {
    loading.value = false;
    console.log("error", error);
  }
};
</script>

<style scoped></style>
