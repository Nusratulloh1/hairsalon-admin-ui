<template>
    <div class="table-wrapper" v-loading="loading">
      <el-table :data="barbers" row-class-name="noHover" stripe style="width: 100%">
        <el-table-column type="index" label="№" min-width="50" align="left" />
        <el-table-column prop="phoneNumber" label="Phone" min-width="150" align="center">
        <template #default="{ row }">
          {{ row.firstName + ' ' + row.lastName }}
        </template>
      </el-table-column>
      <el-table-column prop="phoneNumber" label="Username" min-width="150" align="center" />
        <el-table-column label="Operations" min-width="150" align="center">
          <template #default="scope">
            <div class="flex justify-center space-x-3">
              <Edit class="h-4 w-4 text-green-500 cursor-pointer" @click="openEditFormDialog(scope.row)" />
              <Delete v-if="!scope.row.is_active" class="h-4 w-4 text-primary cursor-pointer"
                @click="confirmDelete(scope.row.id)" />
            </div>
          </template>
        </el-table-column>
      </el-table>
      <teleport to="#modal" v-if="showModal">
        <BarberForm :type="formType" :barber="barber" @on-submit="submitForm($event)" />
      </teleport>
    </div>
  </template>
  
  <script setup lang="ts">
  import { usBarberStore } from "@/stores";
  import { onMounted, computed, ref } from "vue";
  import { Delete, Edit } from "@element-plus/icons-vue";
  import { useModal } from "@/composables";
  import { ElMessage, ElMessageBox } from "element-plus";
  import { useI18n } from "vue-i18n";
  import BarberForm from "./components/BarberForm.vue";
  
  const modal = useModal();
  const formType = ref<"create" | "edit">("create");
  const i18n = useI18n();
  const BarberStore = usBarberStore();
  
  const showModal = computed(() => modal.show.value);
  const loading = ref(false);
  const barbers = computed(() => BarberStore.barbers);
  const barber = ref(barbers.value?.[0])
  onMounted(() => {
    BarberStore.fetchBarbers();
    BarberStore.fetchBarberById(3);
  });
  
  const openDepartmentFormDialog = () => {
    formType.value = "create";
    modal.setTitle("Add barber");
    modal.setWidth("50%");
    modal.showModal();
  };
  const openEditFormDialog = (row: any) => {
    barber.value = row;
    formType.value = "edit";
    modal.setTitle("Update barber");
    modal.setWidth("50%");
    modal.showModal();
  };
  
  const confirmDelete = (id: string) => {
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
          await BarberStore.removeBarber(id);
          await BarberStore.fetchBarbers();
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
      .catch(() => { });
  };
  
  const submitForm = async (data: any) => {
    try {
      loading.value = true;
      if (formType.value === "edit" && barber.value) {
        data["id"] = barber.value?.id;
        await BarberStore.updateBarberForAdmin(data);
        ElMessage({
          message: i18n.t("shared.updated"),
          type: "success",
        });
      } else {
        // await BarberStore.createContact(data);
        ElMessage({
          message: i18n.t("shared.created"),
          type: "success",
        });
      }
      await BarberStore.fetchBarbers();
      loading.value = false;
      modal.hideModal();
    } catch (error: any) {
      loading.value = false;
      console.log("error", error);
    }
  };
  </script>
  
  <style scoped></style>