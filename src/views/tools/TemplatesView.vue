<template>
  <div class="space-y-2 md:space-y-8 view" v-loading="loading">
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <h1 class="view__title">{{ $t("app.templates") }}</h1>
        <p class="view__description">
          {{ $t("app.dashboardTitle") }}
        </p>
      </div>
      <el-upload
        ref="upload"
        class="upload-demo"
        :limit="1"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :auto-upload="false"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        :on-change="onFileChange"
      >
        <template #trigger>
          <el-button :icon="Plus" type="primary" plain size="large">{{
            $t("shared.add")
          }}</el-button>
        </template>
      </el-upload>
    </div>
    <div class="grid gap-4 grid-cols-2 md:grid-cols-4">
      <div
        v-for="template of templates"
        :key="template.id"
        class="template flex items-center gap-2"
      >
        <div class="template__logo">
          <img src="@/assets/images/excel.svg" alt="Excel" srcset="" />
        </div>
        <p
          @click="downloadFile(template.files[0])"
          class="template__name hover:underline underline-offset-4 cursor-pointer"
        >
          {{ template.files[0].name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useFileStore, useTemplateStore } from "@/stores";
import { Plus } from "@element-plus/icons-vue";
import { ElMessage, type UploadFile, type UploadInstance } from "element-plus";
import type { IFile } from "@/models/backend";

const i18n = useI18n();
const templateStore = useTemplateStore();
const fileStore = useFileStore();

const upload = ref<UploadInstance>();

const templates = computed(() => templateStore.templates);
onMounted(() => {
  templateStore.fetchTemplate();
});

const onFileChange = async (file: UploadFile) => {
  const fileRaw = file.raw;
  upload.value?.clearFiles();
  const response = await fileStore.uploadFile(fileRaw as File);
  await templateStore.createTemplate(response);
  ElMessage({
    message: i18n.t("shared.created"),
    type: "success",
  });
};

const downloadFile = async (file: IFile) => {
  const data = await fileStore.downloadById(file.id);
  window.open(URL.createObjectURL(data));
};

const loading = computed(() => templateStore.loading);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/colors.scss";

.template {
  padding: 6px 16px;
  background: #f7f7f7;
  border-radius: 11px;

  &__logo {
    padding: 10px;
    width: 48px;
    height: 48px;
    background: rgba(16, 124, 65, 0.1);
    border-radius: 64px;
  }

  &__name {
    font-weight: 700;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    color: #107c41;
  }
}
</style>

<style lang="scss">
@import "@/assets/styles/colors.scss";
.danger-dropdown-item {
  background-color: $bg-danger !important;
  color: $danger;
  width: 180px;
  &:focus {
    color: $danger !important;
    background-color: $bg-danger !important;
  }
}
.simple-dropdown-item {
  color: #181c25 !important;
  width: 180px;
  .icon {
    color: #c4c8d4;
  }
  &:focus {
    color: #181c25 !important;
    background-color: $bg-white !important;
  }
}
</style>
