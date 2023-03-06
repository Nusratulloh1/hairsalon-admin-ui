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
const list = [
  {
    id: "64023675a87e9a14fec7cebc",
    program: "Mathematics Education",
    per_semester: 7500000,
    duration: "6 semesters",
  },
  {
    id: "640236757a5eec14fefb9d01",
    program: "Physics Education",
    per_semester: 7500000,
    duration: "6 semesters",
  },
  {
    id: "640236750646ed14fed793f5",
    program: "Information Technology Education",
    per_semester: 7500000,
    duration: "6 semesters",
  },
  {
    id: "640236756ee03814fe979a60",
    program: "Early Childhood Education",
    per_semester: 7500000,
    duration: "6 semesters",
  },
  {
    id: "640236758b36bf14fe6c4251",
    program: "Chemistry Education",
    per_semester: 7500000,
    duration: "6 semesters",
  },
  {
    id: "64023675aa795914fe8d88d0",
    program: "Biology Education",
    per_semester: 7500000,
    duration: "6 semesters",
  },
  {
    id: "6402367568569414fe8928b0",
    program: "Nursing School",
    per_semester: 10000000,
    duration: "6 semesters",
  },
  {
    id: "64023675a405f814fec978de",
    program: "English Education",
    per_semester: 12500000,
    duration: "6 semesters",
  },
  {
    id: "64023675177c9514fec1fbef",
    program: "Journalism",
    per_semester: 12500000,
    duration: "6 semesters",
  },
  {
    id: "6402367526e36b14fe4e6a3d",
    program: "Civil Engineering",
    per_semester: 13500000,
    duration: "8 semesters",
  },
  {
    id: "64023675ced7af14fe470be2",
    program: "Architecture & Design",
    per_semester: 13500000,
    duration: "8 semesters",
  },
  {
    id: "6402367569b88414fe0794a2",
    program: "Electrical and Electronics Engineering",
    per_semester: 13500000,
    duration: "8 semesters",
  },
  {
    id: "6402367556b0f414fe4e64ca",
    program: "Computer Science (IT)",
    per_semester: 15000000,
    duration: "8 semesters",
  },
  {
    id: "6402367543f5df14fe4af85d",
    program: "Accounting",
    per_semester: 15000000,
    duration: "8 semesters",
  },
  {
    id: "64023675253fe514fe188dd4",
    program: "Finance",
    per_semester: 15000000,
    duration: "8 semesters",
  },
  {
    id: "64023675169c6514fe2a11f3",
    program: "Economics",
    per_semester: 15000000,
    duration: "8 semesters",
  },
  {
    id: "64023675b905b414fe777b8f",
    program: "Marketing",
    per_semester: 15000000,
    duration: "8 semesters",
  },
  {
    id: "6402367557613414fe897c2b",
    program: "Management",
    per_semester: 15000000,
    duration: "8 semesters",
  },
  {
    id: "64023675a8ee9514fe565784",
    program: "International Business",
    per_semester: 15000000,
    duration: "8 semesters",
  },
  {
    id: "640236759f232e14febb006a",
    program: "Law",
    per_semester: 15000000,
    duration: "8 semesters",
  },
  {
    id: "64023675b9b79f14fea72c3f",
    program: "Dental School",
    per_semester: 21000000,
    duration: "10(8+2) semesters",
  },
  {
    id: "640236754717d114fe274d56",
    program: "School of Pharmacy",
    per_semester: 21000000,
    duration: "8 semesters",
  },
  {
    id: "640236751d0af514fe529787",
    program: "Medical School",
    per_semester: 29000000,
    duration: "12(8+4) semesters",
  },
];
</script>

<style scoped></style>
