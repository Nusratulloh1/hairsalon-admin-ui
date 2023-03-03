<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-position="top"
    require-asterisk-position="right"
  >
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item :label="$t('app.firstName')" prop="name">
        <el-input
          v-model="ruleForm.name"
          type="text"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item :label="$t('app.lastName')" prop="surname">
        <el-input
          v-model="ruleForm.surname"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item :label="$t('app.middleName')" prop="middle_name">
        <el-input
          v-model="ruleForm.middle_name"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item :label="$t('app.role')" prop="role_ids">
        <el-select
          v-model="ruleForm.role_ids"
          multiple
          :placeholder="$t('shared.select')"
          size="large"
          class="w-full"
        >
          <el-option
            v-for="role of guideStore.roleControls"
            :label="role.label"
            :value="role.value"
            :key="role.value"
          />
        </el-select>
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
      <el-form-item :label="$t('app.address')" prop="address">
        <el-input
          v-model="ruleForm.address"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item :label="$t('app.passportSeries')" prop="passport_number">
        <el-input
          v-model="ruleForm.passport_number"
          v-mask="'AA #######'"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item :label="$t('app.mail')" prop="email">
        <el-input
          v-model="ruleForm.email"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item :label="$t('app.businessUnit')" prop="org_id">
        <el-select
          v-model="ruleForm.org_id"
          :placeholder="$t('shared.select')"
          size="large"
          class="w-full"
        >
          <el-option
            v-for="org of orgStore.orgChildrenControls"
            :label="org.label"
            :value="org.value"
            :key="org.value"
          />
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="Отдел" prop="department">
            <el-select
              v-model="ruleForm.department"
              :placeholder="$t('shared.select')"
              size="large"
              class="w-full"
            >
              <el-option label="Department1" value="department" />
            </el-select>
          </el-form-item> -->
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item :label="$t('app.passportScan')" prop="passport_image">
        <div class="flex flex-col space-y-3">
          <img
            v-if="fileLink"
            :src="fileLink"
            class="w-32 h-32"
            alt="Passport image"
          />
          <el-upload
            v-model="ruleForm.passport_image"
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
              <el-button :icon="Plus" type="primary" plain size="large">{{
                $t("shared.uploadImage")
              }}</el-button>
            </template>
          </el-upload>
        </div>
      </el-form-item>
    </div>
    <div class="app-divider my-2 md:my-4" />
    <h1 class="title mb-3">
      {{ $t("app.salaryAndWorkTime") }}
    </h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item label="Сумма зарплаты" prop="salary">
        <el-input
          v-model="ruleForm.salary"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
          type="number"
        />
      </el-form-item>
      <el-form-item label="Номер карты" prop="card_number">
        <el-input
          v-model="ruleForm.card_number"
          v-mask="'#### #### #### ####'"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item label="Тип оплаты" prop="pay_type">
        <el-select
          v-model="ruleForm.pay_type"
          :placeholder="$t('shared.select')"
          size="large"
          class="w-full"
        >
          <el-option :label="$t('shared.cash')" :value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="Отработанные часы" prop="work_hour">
        <el-input
          v-model="ruleForm.work_hour"
          autocomplete="off"
          size="large"
          :controls="false"
          :placeholder="$t('shared.text')"
          type="number"
        />
      </el-form-item>
    </div>
  </el-form>
  <div class="flex">
    <el-button type="primary" size="large" @click="submitForm(ruleFormRef)">
      {{ $t("shared.save") }}
    </el-button>
    <el-button type="primary" class="light-blue-btn" size="large">
      {{ $t("shared.cancel") }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { Plus } from "@element-plus/icons-vue";
import { useFileStore, useGuideStore, useOrganizationStore } from "@/stores";
import type { FormInstance, FormRules, UploadFile } from "element-plus";
import { ref, reactive, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import {
  cardNumberPattern,
  passportPattern,
  phonePattern,
} from "@/utils/regex";
import type { IStaff } from "@/models/backend";

const guideStore = useGuideStore();
const orgStore = useOrganizationStore();
const fileStore = useFileStore();

const i18n = useI18n();

const props = defineProps<{
  staff?: IStaff;
}>();

const fileLink = ref<string>("");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  surname: "",
  middle_name: "",
  role_ids: "",
  phone: "",
  address: "",
  passport_number: "",
  email: "",
  org_id: "",
  // department: "",
  passport_image: "",
  salary: "",
  card_number: "",
  pay_type: "",
  work_hour: "",
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  surname: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  middle_name: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  role_ids: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
    {
      type: "array",
      message: i18n.t("validation.fillField"),
      min: 1,
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
  address: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  passport_number: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
    {
      type: "string",
      required: true,
      pattern: passportPattern,
      message: i18n.t("validation.pattern"),
      trigger: "blur",
    },
  ],
  email: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
    {
      type: "email",
      message: i18n.t("validation.inputEmail"),
      trigger: "blur",
    },
  ],
  org_id: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "change",
    },
  ],
  // department: [
  //   {
  //     required: true,
  //     message: i18n.t("validation.fillField"),
  //     trigger: "change",
  //   },
  // ],
  salary: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  card_number: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
    {
      type: "string",
      required: true,
      pattern: cardNumberPattern,
      message: i18n.t("validation.pattern"),
      trigger: "blur",
    },
  ],
  pay_type: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  work_hour: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  passport_image: [
    {
      required: !props?.staff?.passport_image,
      message: i18n.t("validation.fillField"),
      trigger: "submit",
    },
  ],
});

const emit = defineEmits(["onSubmit"]);

onMounted(async () => {
  if (props.staff) {
    const staff = props.staff;

    const data = {
      ...staff,
      passport_image: "",
      org_id: staff.org.id,
      role_ids: staff.roles.map((r) => r.id),
    };
    Object.assign(ruleForm, data);
    fileLink.value = await fileStore.getFileLink(staff.passport_image.id);
  }
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      emit("onSubmit", ruleForm);
    } else {
      console.log("error submit!", fields);
    }
  });
};

const onFileChange = (file: UploadFile) => {
  ruleForm.passport_image = file.raw as any;
};
</script>

<style scoped>
.title {
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #1f1f1f;
}
</style>
