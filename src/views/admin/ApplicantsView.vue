<template>
  <div class="flex justify-between mb-4">
    <div class="flex flex-col items-start space-y-2">
      <div class="grid grid-cols-2 md:grid-cols-4 items-center gap-2">
        <el-select
          v-model="filter.program_id"
          placeholder="Departments"
          size="large"
          class="w-full"
        >
          <el-option
            v-for="region of guideStore.getTuitions"
            :key="region.value"
            :label="region.label"
            :value="region.value"
          />
        </el-select>
        <el-select
          v-model="filter.exam_date_id"
          placeholder="Exam date"
          size="large"
          class="w-full"
        >
          <el-option
            v-for="date of guideStore.getExamDates"
            :key="date.value"
            :label="date.label"
            :value="date.value"
          />
        </el-select>
        <el-select
          v-model="filter.status"
          placeholder="Status"
          size="large"
          class="w-full"
        >
          <el-option label="Pending" value="pending" />
          <el-option label="Accept" value="accept" />
          <el-option label="Reject" value="reject" />
        </el-select>
        <el-select
          v-model="filter.is_scholarship"
          placeholder="Scholarship"
          size="large"
          class="w-full"
        >
          <el-option label="Yes" :value="true" />
          <el-option label="No" :value="false" />
        </el-select>
      </div>
      <div class="flex items-center space-x-2">
        <el-button type="success" @click="fetchApplications()"
          >Submit</el-button
        >
        <el-button type="success" plain @click="resetFilterAndFetch()"
          >Reset</el-button
        >
      </div>
    </div>
    <el-button
      type="primary"
      size="large"
      :loading="loading"
      @click="exportToExcel"
      >Export excel</el-button
    >
  </div>
  <div class="table-wrapper" v-loading="loading">
    <el-table
      :data="applications.data"
      stripe
      style="width: 100%"
      row-class-name="cursor-pointer"
    >
      <el-table-column
        prop="first_name"
        label="Full Name"
        min-width="220"
        align="left"
        fixed
        show-overflow-tooltip
      >
        <template #default="{ row }">
          {{ row.first_name }} {{ row.last_name }}
        </template>
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="email"
        label="Email"
        min-width="220"
        align="left"
      >
        <template #default="{ row }">
          {{ row.creator.email }}
        </template>
      </el-table-column>
      <el-table-column
        prop="program"
        label="Department"
        min-width="200"
        align="center"
        show-overflow-tooltip
      >
        <template #default="{ row }">
          {{ row.program.name }}
        </template>
      </el-table-column>
      <el-table-column
        prop="exam_date"
        label="Exam Date"
        min-width="180"
        align="center"
        show-overflow-tooltip
      >
        <template #default="{ row }">
          {{ row.exam_date.name }}
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="Status"
        min-width="100"
        align="center"
      >
        <template #default="{ row }">
          <el-tag v-if="row.status === 'pending'" type="warning"
            >Pending</el-tag
          >
          <el-tag v-if="row.status === 'accept'" type="success">Accept</el-tag>
          <el-tag v-if="row.status === 'reject'" type="danger">Reject</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="responder"
        label="Admin"
        min-width="180"
        align="center"
        show-overflow-tooltip
      >
        <template #default="{ row }">
          {{ row.responder && row.responder.name }}
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Operations"
        align="center"
        min-width="100"
      >
        <template #default="scope">
          <div class="flex justify-center space-x-3">
            <View
              class="h-4 w-4 text-blue-500"
              @click="onViewClick(scope.row)"
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
        :page-size="filter.limit"
        :total="applications.total"
      />
    </div>
    <teleport to="#modal" v-if="showModal">
      <ApplicantDialog :application="application" @on-close="closeDialog" />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { useApplicationStore, useFileStore, useGuideStore } from "@/stores";
import { onMounted, computed, ref, reactive } from "vue";
import { View } from "@element-plus/icons-vue";
import { useModal } from "@/composables";
import ApplicantDialog from "./components/ApplicantDialog.vue";
import { useI18n } from "vue-i18n";
const guideStore = useGuideStore();
const modal = useModal();
const formType = ref<"create" | "edit">("create");
const i18n = useI18n();
const appStore = useApplicationStore();
const fileStore = useFileStore();
const showModal = computed(() => modal.show.value);
const loading = ref(false);

const applications = computed(() => appStore.applications);
const application = ref();

const filter = reactive({
  page: 1,
  limit: 20,
  program_id: "",
  is_scholarship: "",
  status: "",
  exam_date_id: "",
});

onMounted(async () => {
  fetchApplications();
  if (!guideStore.getExamDates.length) {
    guideStore.fetchExamDates();
  }
  if (!guideStore.getRegions.length) {
    guideStore.fetchRegions();
  }
  if (!guideStore.getTuitions.length) {
    guideStore.fetchTuitions();
  }
});

const onViewClick = async (row: any) => {
  try {
    application.value = row;
    formType.value = "edit";
    modal.setTitle(i18n.t("View applicant"));
    modal.setWidth("50%");
    modal.showModal();
  } catch (error: any) {
    console.log("error", error.message);
  }
};

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

const fetchApplications = () => {
  const data = {} as any;
  Object.keys(filter).forEach((key: any) => {
    if ((filter as any)[key]) {
      data[key] = (filter as any)[key];
    }
  });
  appStore.getApplications(data);
};
const onPaginationChange = (event: number) => {
  filter.page = event;
  fetchApplications();
};

const resetFilterAndFetch = () => {
  filter.program_id = "";
  filter.exam_date_id = "";
  filter.is_scholarship = "";
  filter.status = "";
  fetchApplications();
};

const closeDialog = () => {
  modal.hideModal();
  fetchApplications();
};
</script>

<style scoped></style>
