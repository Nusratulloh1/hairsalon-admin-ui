<template>
  <div v-loading="loading">
    <div class="mb-16">
      <el-table :data="programsByMonth" border style="width: 100%" stripe>
        <el-table-column
          fixed
          prop="program"
          label="FACULTIES"
          width="200"
          show-overflow-tooltip
        />
        <el-table-column
          prop="january"
          label="January"
          min-width="140"
          align="center"
        />
        <el-table-column
          prop="february"
          label="February"
          min-width="140"
          align="center"
        />
        <el-table-column
          prop="march"
          label="March"
          min-width="140"
          align="center"
        />
        <el-table-column
          prop="april"
          label="April"
          min-width="140"
          align="center"
        />
        <el-table-column
          prop="may"
          label="May"
          min-width="140"
          align="center"
        />
        <el-table-column
          prop="june"
          label="June"
          min-width="140"
          align="center"
        />
        <el-table-column
          prop="july"
          label="July"
          min-width="140"
          align="center"
        />
        <el-table-column
          prop="august"
          label="August"
          min-width="140"
          align="center"
        />
        <el-table-column
          prop="september"
          label="September"
          min-width="140"
          align="center"
        />
        <el-table-column
          prop="october"
          label="October"
          min-width="140"
          align="center"
        />
        <el-table-column
          prop="november"
          label="November"
          min-width="120"
          align="center"
        />
        <el-table-column
          prop="december"
          label="December"
          min-width="120"
          align="center"
        />
        <el-table-column
          fixed="right"
          prop="total"
          label="Total"
          min-width="120"
          align="center"
        />
      </el-table>
    </div>
    <div class="grid md:grid-cols-3 max-h-80">
      <v-chart
        class="chart"
        :option="applicationOption"
        autoresize
        ref="applicationChart"
      />
      <v-chart
        class="chart"
        :option="genderOption"
        autoresize
        ref="genderChart"
      />
      <v-chart
        class="chart"
        :option="applicantOption"
        autoresize
        ref="applicantChart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { useApplicationStore } from "@/stores";
import VChart from "vue-echarts";
import { ref, onMounted, computed, onUpdated } from "vue";
const appStore = useApplicationStore();

const programsByMonth = computed(() => appStore.programsByMonth);
const applicationsByStatus = computed(() => appStore.applicationsByStatus);
const applicationsByGender = computed(() => appStore.applicationsByGender);
const loading = ref<boolean>(false);
const applicationChart = ref();
const genderChart = ref();
const applicantChart = ref();

const applicationOption = ref();
const genderOption = ref();
const applicantOption = ref();

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

onMounted(async () => {
  if (!programsByMonth.value.length) {
    appStore.fetchProgramsByMonth();
  }
  try {
    loading.value = true;
    if (!applicationsByStatus.value.total) {
      await appStore.fetchApplicationsByStatus();
    }
    if (!applicationsByGender.value.total) {
      await appStore.fetchApplicationsByGender();
    }

    loading.value = false;
  } catch (error) {
    loading.value = false;
    console.log("error", error);
  }
});

onUpdated(() => {
  if (applicationChart.value) {
    applicationChart.value.setOption({
      title: {
        text: "Applications",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}%",
      },
      color: ["#4992ff", "#7cffb2", "#ff6e76"],
      series: [
        {
          name: "Applications",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [
            { value: applicationsByStatus.value.pending, name: "Pending" },
            { value: applicationsByStatus.value.accept, name: "Approved" },
            { value: applicationsByStatus.value.reject, name: "Reject" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });

    genderChart.value.setOption({
      title: {
        text: "Gender",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}%",
      },
      color: ["#4992ff", "#7cffb2"],
      series: [
        {
          name: "Gender",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [
            { value: applicationsByGender.value.male, name: "Male" },
            { value: applicationsByGender.value.female, name: "Female" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });

    applicantChart.value.setOption({
      title: {
        text: "Total applicants",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}",
      },
      color: ["#ff6e76"],
      series: [
        {
          name: "Total applicants",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [
            { value: applicationsByStatus.value.total, name: "Applicants" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });
  }
});
</script>

<style scoped>
.chart {
  height: 500px;
}
</style>
