<template>
  <div class="flex justify-between items-center mb-4">
    <el-button text @click="router.back()" class="text-primary"
      ><Back class="h-4 w-4 text-blue-500" /><span class="text-blue-500 ml-2"
        >Back</span
      ></el-button
    >
  </div>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-position="top"
    require-asterisk-position="right"
    v-loading="loading"
  >
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item label="E-mail Address" prop="email">
        <el-input
          v-model.trim="ruleForm.email"
          type="text"
          autocomplete="off"
          size="large"
          placeholder="E-mail Address"
        />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          v-model.trim="ruleForm.password"
          type="text"
          autocomplete="off"
          size="large"
        />
      </el-form-item>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item label="Phone Number" prop="phone">
        <el-input
          v-model="ruleForm.phone"
          v-mask="'998 ## ###-##-##'"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item label="Region" prop="city_id">
        <el-select
          v-model="ruleForm.city_id"
          :placeholder="$t('shared.select')"
          filterable
          size="large"
          class="w-full"
        >
          <el-option
            v-for="region of guideStore.getRegions"
            :key="region.value"
            :label="region.label"
            :value="region.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Name of graduation place" prop="graduation_place">
        <el-input
          v-model="ruleForm.graduation_place"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item label="Street Address" prop="address">
        <el-input
          v-model="ruleForm.address"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item label="Graduation" prop="graduation_id">
        <el-select
          v-model="ruleForm.graduation_id"
          :placeholder="$t('shared.select')"
          size="large"
          class="w-full"
        >
          <el-option label="School" value="SCHOOL" />
          <el-option label="Lyceum" value="LYCEUM" />
        </el-select>
      </el-form-item>
    </div>
    <div class="app-divider my-2 md:my-4" />
    <h1 class="title mb-3">Passport Information</h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item label="First Name" prop="first_name">
        <el-input
          v-model="ruleForm.first_name"
          type="text"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item label="Last Name" prop="last_name">
        <el-input
          v-model="ruleForm.last_name"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item label="Passport Series. (AB)" prop="passport_serial">
        <el-input
          v-model="ruleForm.passport_serial"
          v-mask="'AA'"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item label="Date of Birth" prop="birth_date">
        <el-date-picker
          v-model="ruleForm.birth_date"
          :placeholder="$t('shared.select')"
          size="large"
          class="!w-full"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="Gender" prop="gender">
        <el-select v-model="ruleForm.gender" size="large" class="w-full">
          <el-option label="Male" value="male" />
          <el-option label="Female" value="female" />
        </el-select>
      </el-form-item>
      <el-form-item label="Passport Number. (1234567)" prop="passport_number">
        <el-input
          v-model="ruleForm.passport_number"
          v-mask="'#######'"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item label="Passport photo" prop="passport">
        <AppUpload
          @upload="(file) => (ruleForm.passport = file)"
          @remove="() => (ruleForm.passport = null)"
        />
      </el-form-item>
      <el-form-item label="Photo" prop="photo">
        <AppUpload
          @upload="(file) => (ruleForm.photo = file)"
          @remove="() => (ruleForm.photo = null)"
        />
      </el-form-item>
      <el-form-item label="Diploma" prop="diploma">
        <AppUpload
          @upload="(file) => (ruleForm.diploma = file)"
          @remove="() => (ruleForm.diploma = null)"
        />
      </el-form-item>
      <el-form-item
        label="English proficiency certificate"
        prop="proficiency_certificate"
      >
        <el-select
          v-model="ruleForm.proficiency_certificate"
          size="large"
          class="w-full"
        >
          <el-option label="IELTS" value="ielts" />
          <el-option label="TOEFL" value="toefl" />
          <el-option label="DUOLINGO" value="duolingo" />
          <el-option label="IEPTE" value="iepte" />
        </el-select>
      </el-form-item>
      <el-form-item label="English proficiency certificate" prop="certificate">
        <AppUpload
          @upload="(file) => (ruleForm.certificate = file)"
          @remove="() => (ruleForm.certificate = null)"
        />
      </el-form-item>
      <el-form-item
        label="Certificate Number (TRF if you have IELTS)"
        prop="certificate_number"
      >
        <el-input
          v-model="ruleForm.certificate_number"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item prop="take_internal_exam">
        <el-checkbox v-model="ruleForm.take_internal_exam" size="large"
          >If you do not have English certificate, you can take the INTERNAL
          ENGLISH EXAM</el-checkbox
        >
      </el-form-item>
    </div>
    <div class="app-divider my-2 md:my-4" />
    <h1 class="title mb-3">Exam Preferences</h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item label="Department" prop="program_id">
        <el-select
          v-model="ruleForm.program_id"
          :placeholder="$t('shared.select')"
          filterable
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
      </el-form-item>
      <el-form-item label="Exam date" prop="exam_date_id">
        <el-select
          v-model="ruleForm.exam_date_id"
          :placeholder="$t('shared.select')"
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
      </el-form-item>
      <el-form-item prop="is_scholarship">
        <template #label>
          <div class="flex items-center space-x-2">
            <span>Scholarship</span>
            <el-popover
              placement="top-start"
              :width="300"
              trigger="hover"
              content="Do you want to participate in the scholarship
    exam? I agree that If I can not meet the
    scholarship exam requirements, then I will not
    be able to attend it."
            >
              <template #reference>
                <el-icon><InfoFilled /></el-icon>
              </template>
            </el-popover>
          </div>
        </template>

        <el-radio-group v-model="ruleForm.is_scholarship">
          <el-radio :label="true">Yes</el-radio>
          <el-radio :label="false">No</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="is_accept">
        <el-checkbox v-model="ruleForm.is_accept" size="large"
          >I allow to use of my personal Information.</el-checkbox
        >
      </el-form-item>
    </div>
  </el-form>
  <div class="flex pt-4">
    <el-button
      type="primary"
      size="large"
      @click="submitForm(ruleFormRef)"
      :disabled="!ruleForm.is_accept"
    >
      Submit
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { Back, InfoFilled } from "@element-plus/icons-vue";
import { useGuideStore, useApplicationStore } from "@/stores";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { ref, reactive, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import {
  passportNumberPattern,
  passportSeriesPattern,
  phonePattern,
} from "@/utils/regex";
import { convertPhone } from "@/utils/mappers";
import { format } from "date-fns";
import { useRouter } from "vue-router";
import sha1 from "sha1";
import AppUpload from "@/components/common/AppUpload.vue";
const router = useRouter();

const guideStore = useGuideStore();
const applicationStore = useApplicationStore();

const i18n = useI18n();

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  city_id: "",
  graduation_place: "",
  address: "",
  graduation_id: null as any,
  phone: "",
  take_internal_exam: false,
  is_accept: false,
  is_scholarship: true,
  certificate_number: null as any,
  proficiency_certificate: null as any,
  exam_date_id: "",
  program_id: "",
  passport_number: "",
  passport_serial: "",
  gender: "",
  birth_date: "",
  first_name: "",
  last_name: "",
  passport: "" as any,
  photo: "" as any,
  diploma: "" as any,
  certificate: "" as any,
  email: "",
  password: "11111111",
});

const rules = reactive<FormRules>({
  city_id: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  graduation_place: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
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
  gender: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  first_name: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  last_name: [
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
      pattern: passportNumberPattern,
      message: i18n.t("validation.pattern"),
      trigger: "blur",
    },
  ],
  passport_serial: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
    {
      type: "string",
      required: true,
      pattern: passportSeriesPattern,
      message: i18n.t("validation.pattern"),
      trigger: "blur",
    },
  ],
  birth_date: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  exam_date_id: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  program_id: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  passport: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "submit",
    },
  ],
  photo: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "submit",
    },
  ],
  diploma: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "submit",
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
  password: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
    {
      min: 8,
      message: i18n.t("validation.minimumLength", { value: 8 }),
      trigger: "blur",
    },
  ],
});

onMounted(async () => {
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
const loading = ref(false);
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        loading.value = true;
        const data = {
          ...ruleForm,
          phone: convertPhone(ruleForm.phone),
          birth_date: format(new Date(ruleForm.birth_date), "yyyy-MM-dd"),
          password: sha1(ruleForm.password),
        } as any;

        if (!ruleForm.certificate) {
          delete data.certificate;
        }

        await applicationStore.addApplication(data);
        loading.value = false;
        ElMessage({
          message: "Successfully created",
          type: "success",
        });
        router.back();
      } catch (error: any) {
        loading.value = false;
        ElMessage({
          message: error?.message || "Error",
          type: "error",
        });
        console.log("error", error.message);
      }
    } else {
      ElMessage({
        message: "The form is invalid, Please check it correctly",
        type: "warning",
      });
    }
  });
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
