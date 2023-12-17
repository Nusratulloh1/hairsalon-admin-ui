<template>
  <div>

  </div>
</template>

<script setup lang="ts">
import { useApplicationStore } from "@/stores";
import { onMounted, computed, ref } from "vue";

const applicationStore = useApplicationStore();
const loading = ref(false);
onMounted(async () => {

});

</script>
