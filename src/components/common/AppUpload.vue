<template>
  <el-upload
    ref="uploadRef"
    class="upload-demo"
    :limit="2"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :auto-upload="false"
    list-type="picture"
    accept="image/*"
    :on-change="onFileChange"
    :on-remove="onRemove"
    :file-list="fileList"
  >
    <template #trigger>
      <el-button :icon="Plus" type="primary" size="large">
        Upload Photo
      </el-button>
    </template>
    <template #tip>
      <div class="el-upload__tip">image files with a size less than 2mb</div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import { useFileStore } from "@/stores";
import { Plus } from "@element-plus/icons-vue";
import {
  ElMessage,
  type UploadFile,
  type UploadInstance,
  type UploadUserFile,
} from "element-plus";
import { ref } from "vue";

const emit = defineEmits(["upload", "remove"]);
const fileList = ref<UploadUserFile[]>([]);
const uploadRef = ref<UploadInstance>();
const fileStore = useFileStore();

const onFileChange = async (file: UploadFile, _fileList: UploadFile[]) => {
  if ((file.size || 0) / 1024 / 1024 >= 2) {
    ElMessage({
      message: "File size should be less than 2mb",
      type: "error",
    });
    fileList.value = [];
    return;
  }

  if (_fileList.length > 1) {
    uploadRef.value?.handleRemove(_fileList[0]);
  }

  const result = await fileStore.uploadFile(file.raw as File);
  fileList.value = [file];
  emit("upload", result);
};

const onRemove = () => {
  fileList.value = [];
  emit("remove");
};

const validate = (file: File): boolean => {
  if ((file.size || 0) / 1024 / 1024 >= 2) {
    ElMessage({
      message: "File size should be less than 2mb",
      type: "error",
    });
    fileList.value = [];
    return false;
  }
  return true;
};
</script>

<style scoped></style>
