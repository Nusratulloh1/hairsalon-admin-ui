<template>
  <div class="space-y-2 md:space-y-8 view">
    <div>
      <h1 class="view__title">{{ $t("app.addNewOrder") }}</h1>
      <p class="view__description">
        {{ $t("app.dashboardTitle") }}
      </p>
    </div>
    <div class="content pt-6 px-8 pb-12">
      <div class="flex items-center space-x-2">
        <div
          class="rounded-full bg-purple h-7 w-7 text-white text-center leading-7"
        >
          1
        </div>
        <h1 class="title">{{ $t("app.personaldData") }}</h1>
      </div>
      <div class="content-body">
        <div class="app-divider my-2 md:my-4" />
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-position="top"
          require-asterisk-position="right"
        >
          <div class="grid md:grid-cols-3">
            <div class="grid md:grid-cols-2 gap-x-4 gap-y-2 md:col-span-2">
              <el-form-item :label="$t('app.customer')" prop="customer">
                <el-input
                  v-model="ruleForm.customer"
                  type="text"
                  autocomplete="off"
                  :placeholder="$t('shared.text')"
                  size="large"
                />
              </el-form-item>
              <el-form-item :label="$t('app.phoneNumber')" prop="phone">
                <el-input
                  v-model="ruleForm.phone"
                  v-mask="'998 ## ###-##-##'"
                  autocomplete="off"
                  :placeholder="$t('shared.text')"
                  size="large"
                />
              </el-form-item>
              <el-form-item :label="$t('app.location')" prop="location">
                <el-input
                  v-model="ruleForm.location"
                  autocomplete="off"
                  placeholder="Текст"
                  size="large"
                />
              </el-form-item>
              <el-form-item :label="$t('app.whoAccepted')" prop="whoAccepted">
                <el-input
                  v-model="ruleForm.whoAccepted"
                  autocomplete="off"
                  placeholder="Текст"
                  size="large"
                />
              </el-form-item>
              <el-form-item :label="$t('app.measurerName')" prop="measurerName">
                <el-select
                  v-model="ruleForm.measurerName"
                  placeholder="Выберите"
                  size="large"
                  class="w-full"
                >
                  <!-- <el-option label="B2B" value="B2B" /> -->
                </el-select>
              </el-form-item>
              <el-form-item :label="$t('shared.createdAt')" prop="createdAt">
                <el-date-picker
                  v-model="ruleForm.createdAt"
                  placeholder="Выберите"
                  size="large"
                  class="!w-full"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item label="Лид заказа" prop="orderLead">
                <el-select
                  v-model="ruleForm.orderLead"
                  placeholder="Выберите"
                  size="large"
                  class="w-full"
                >
                </el-select>
              </el-form-item>
            </div>
          </div>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
            <el-form-item
              class="disabled"
              :label="$t('shared.attachPdfFile')"
              prop="pdf_file"
            >
              <el-upload
                v-model="ruleForm.pdf_file"
                ref="uploadRef"
                class="upload-demo"
                :limit="1"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :auto-upload="false"
                list-type="picture"
                accept="image/*"
                :on-change="onFileChange"
              >
                <template #trigger>
                  <el-button
                    disabled
                    :icon="Plus"
                    type="primary"
                    plain
                    size="large"
                    >{{ $t("shared.uploadImage") }}</el-button
                  >
                </template>
              </el-upload>
            </el-form-item>
          </div>
          <el-form-item class="col-span-2" label="Коммент" prop="comments">
            <el-input
              v-model="ruleForm.comments"
              autocomplete="off"
              placeholder="Текст"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 4 }"
              style="max-width: 90%"
            />
          </el-form-item>
        </el-form>
        <div class="flex mt-2">
          <el-button
            type="primary"
            size="large"
            @click="submitForm(ruleFormRef)"
          >
            {{ $t("shared.save") }}
          </el-button>
          <el-button
            @click="$router.back()"
            type="primary"
            class="light-blue-btn"
            size="large"
          >
            {{ $t("shared.cancel") }}
          </el-button>
        </div>
      </div>
    </div>
    <div class="content disabled pt-6 px-8 pb-6">
      <div class="flex items-center space-x-2">
        <div
          class="rounded-full round-btn bg-purple h-7 w-7 text-white text-center leading-7"
        >
          2
        </div>
        <h1 class="title">Данные от замерщика</h1>
      </div>
    </div>
    <div class="content disabled pt-6 px-8 pb-6">
      <div class="flex items-center space-x-2">
        <div
          class="rounded-full round-btn bg-purple h-7 w-7 text-white text-center leading-7"
        >
          3
        </div>
        <h1 class="title">Данные оплаты</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useClientStore } from "@/stores/client";
import { convertPhone } from "@/utils/mappers";
import { phonePattern } from "@/utils/regex";
import { Plus } from "@element-plus/icons-vue";
import { format } from "date-fns";
import {
  ElMessage,
  type FormInstance,
  type FormRules,
  type UploadFile,
} from "element-plus";
import { ref, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const router = useRouter();
const i18n = useI18n();
const clientStore = useClientStore();

const loading = ref(false);

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  id: "",
  customer: "",
  whoAccepted: "",
  measurerName: "",
  phone: "",
  location: "",
  createdAt: new Date(),
  orderLead: "",
  comments: "",
  pdf_file: "",
});

const rules = reactive<FormRules>({
  id: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  customer: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  whoAccepted: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  measurerName: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  phone: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
    {
      type: "string",
      required: true,
      pattern: phonePattern,
      message: i18n.t("validation.pattern"),
      trigger: "blur",
    },
  ],
  location: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  pdf_file: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  createdAt: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
});

const onFileChange = (file: UploadFile) => {
  ruleForm.pdf_file = file.raw as any;
};

const submitForm = async (ruleForm: any) => {
  try {
    loading.value = true;
    const data = {
      ...ruleForm,
      phone: convertPhone(ruleForm.phone),
      status: 1,
      last_purchase_date: format(ruleForm.last_purchase_date, "yyyy-MM-dd"),
      age: +ruleForm.age,
    };

    await clientStore.createClient(data);

    ElMessage({
      message: i18n.t("shared.created"),
      type: "success",
    });
    router.push("/clients");
    loading.value = false;
  } catch (error: any) {
    console.log("error", error.message);
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/colors.scss";
.content {
  @include card;
  background-color: #fff;

  .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #1f1f1f;
  }
  .disabled {
    .title {
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      color: #c4c4c4;
    }
    .round-btn {
      background-color: #c4c4c4;
    }
  }
}
</style>
<style>
.disabled .el-form-item__label {
  color: #c4c4c4;
}
</style>
