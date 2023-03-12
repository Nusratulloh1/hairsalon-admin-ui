<template>
  <div class="table-wrapper">
    <el-table
      :data="tuitions"
      stripe
      style="width: 100%"
      row-class-name="cursor-pointer"
    >
      <el-table-column
        prop="program"
        label="Faculties & Departments"
        min-width="200"
        align="left"
      />
      <el-table-column
        prop="per_semester"
        label="Local Students (UZS)"
        min-width="160"
        align="center"
      >
        <template #default="{ row }">
          {{ $n(row.per_semester) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="fee_foreign_student"
        label="International Students (USD)"
        min-width="160"
        align="center"
      >
        <template #default="{ row }">
          {{ $n(row.fee_foreign_student) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="duration"
        label="Duration (Semestrs)"
        min-width="180"
        align="center"
      />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { useGuideStore } from "@/stores";
import { onMounted, computed } from "vue";

const guideStore = useGuideStore();
onMounted(() => {
  guideStore.fetchTuitions();
});

const tuitions = computed(() => guideStore.tuitions);
</script>

<style scoped></style>
