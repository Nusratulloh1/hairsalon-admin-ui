<template>
    <div class="flex justify-end mb-4">
      <el-button type="primary" size="large" @click="openDepartmentFormDialog">Add Contact</el-button>
    </div>
    <div class="table-wrapper" v-loading="loading">
      <el-table :data="contacts" row-class-name="noHover" stripe style="width: 100%">
        <el-table-column type="index" label="№" min-width="50" align="left" />
        <el-table-column prop="phoneNumber" label="Phone" min-width="150" align="center" />
        <el-table-column prop="mail" label="Mail" min-width="200" align="center">
        </el-table-column>
        <el-table-column prop="instagramAddress" label="Instagram" min-width="200" align="center">
        </el-table-column>
        <el-table-column prop="location" label="Location" min-width="200" align="center">
        </el-table-column>
        <el-table-column prop="aboutUs" label="Message" min-width="200" align="center">
        </el-table-column>
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
        <ContactForm :type="formType" :contact="contact" @on-submit="submitForm($event)" />
      </teleport>
    </div>
  </template>
  
  <script setup lang="ts">
  import { usContactStore } from "@/stores";
  import { onMounted, computed, ref } from "vue";
  import { Delete, Edit } from "@element-plus/icons-vue";
  import { useModal } from "@/composables";
  import { ElMessage, ElMessageBox } from "element-plus";
  import { useI18n } from "vue-i18n";
  import ContactForm from "./components/ContactForm.vue";
  
  const modal = useModal();
  const formType = ref<"create" | "edit">("create");
  const i18n = useI18n();
  const contactStore = usContactStore();
  
  const showModal = computed(() => modal.show.value);
  const loading = ref(false);
  const contacts = computed(() => contactStore.contacts);
  const contact = ref(contacts.value?.[0])
  onMounted(() => {
    contactStore.fetchContacts();
  });
  
  const openDepartmentFormDialog = () => {
    formType.value = "create";
    modal.setTitle("Add contact");
    modal.setWidth("50%");
    modal.showModal();
  };
  const openEditFormDialog = (row: any) => {
    contact.value = row;
    formType.value = "edit";
    modal.setTitle("Update contact");
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
          await contactStore.removeContact(id);
          await contactStore.fetchContacts();
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
      if (formType.value === "edit" && contact.value) {
        data["id"] = contact.value?.id;
        await contactStore.updateContact(data);
        ElMessage({
          message: i18n.t("shared.updated"),
          type: "success",
        });
      } else {
        await contactStore.createContact(data);
        ElMessage({
          message: i18n.t("shared.created"),
          type: "success",
        });
      }
      await contactStore.fetchContacts();
      loading.value = false;
      modal.hideModal();
    } catch (error: any) {
      loading.value = false;
      console.log("error", error);
    }
  };
  </script>
  
  <style scoped></style>