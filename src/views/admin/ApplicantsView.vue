<template>
  <div class="flex justify-end mb-4">
    <el-button
      type="primary"
      size="large"
      :loading="loading"
      @click="exportToExcel"
      >Export excel</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { useApplicationStore, useFileStore } from "@/stores";
import { ref } from "vue";

const appStore = useApplicationStore();
const fileStore = useFileStore();
const loading = ref(false);

const exportToExcel = async () => {
  try {
    loading.value = true;
    const { id } = await appStore.getApplicationFileId();
    const data = await fileStore.downloadById(id);
    window.open(URL.createObjectURL(data));
    loading.value = false;
  } catch (error: any) {
    loading.value = false;
    console.log("error", error.message);
  }
};
</script>

<style scoped></style>
