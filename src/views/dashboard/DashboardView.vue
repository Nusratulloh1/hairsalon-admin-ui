<template>
  <div v-if="!loading">
    <ApplicationForm v-if="!application" />
    <ViewApplication v-else :application="application" />
  </div>
  <div v-else>Loading...</div>
</template>

<script setup lang="ts">
import { useApplicationStore } from "@/stores";
import ApplicationForm from "./components/ApplicationForm.vue";
import ViewApplication from "./components/ViewApplication.vue";
import { onMounted, computed, ref } from "vue";

const applicationStore = useApplicationStore();
const loading = ref(false);
onMounted(async () => {
  console.log("ente");
  try {
    loading.value = true;
    await applicationStore.getApplication();
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
});

const application = computed(() => applicationStore.application);
</script>
