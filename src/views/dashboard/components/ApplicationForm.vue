<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-position="top" require-asterisk-position="right"
    v-loading="loading">
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item label="Phone Number" prop="phone" id="phone" v-if="store.getUser?.country?.code === 'UZ'">
        <el-tooltip content="Be sure to enter your personal phone number as we need it to support feedback with you"
          placement="top">
          <el-input v-model="ruleForm.phone" v-mask="'998 ## ###-##-##'" autocomplete="off" placeholder="+998"
            size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item label="Region" prop="city_id" id="city_id">
        <el-select v-model="ruleForm.city_id" placeholder="Select your region" filterable size="large" class="w-full">
          <el-option v-for="region of guideStore.getRegions" :key="region.value" :label="region.label"
            :value="region.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="Name of graduation place" prop="graduation_place" id="graduation_place">
        <el-tooltip content="Be sure to write your correct place of graduation" placement="top">
          <el-input v-model="ruleForm.graduation_place" autocomplete="off" placeholder="Write the name graduation place"
            size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item label="Street Address" prop="address" id="address" v-if="store.getUser?.country?.code === 'UZ'">
        <el-tooltip content="Be sure to enter your current address" placement="top">
          <el-input v-model="ruleForm.address" autocomplete="off" placeholder="Write your address" size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item label="Graduation" prop="graduation_id" id="graduation_id">
        <el-select v-model="ruleForm.graduation_id" placeholder="Select your graduation" size="large" class="w-full">
          <el-option label="School" value="SCHOOL" />
          <el-option label="Lyceum" value="LYCEUM" />
        </el-select>
      </el-form-item>
    </div>
    <div class="app-divider my-2 md:my-4" />
    <h1 class="title mb-3">Passport Information</h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-2" :class="{'lg:!grid-cols-5': store.getUser?.country?.code !== 'UZ'}">
      <el-form-item label="First Name" prop="first_name" id="first_name">
        <el-tooltip content="Please write your first name like in passport" placement="top">
          <el-input v-model="ruleForm.first_name" type="text" autocomplete="off" placeholder="Write your first name"
            size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item label="Last Name" prop="last_name" id="last_name">
        <el-tooltip content="Please write your last name like in passport" placement="top">
          <el-input v-model="ruleForm.last_name" autocomplete="off" placeholder="Write your last name" size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item label="Passport Series. (AB)" v-if="store.getUser?.country?.code === 'UZ'" prop="passport_serial" id="passport_serial">
        <el-tooltip content="Please write your first letters in passport" placement="top">
          <el-input v-model="ruleForm.passport_serial" autocomplete="off"
            placeholder="Write down the numbers of your passport or ID card" size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item label="Passport Number. (1234567)" prop="passport_number" id="passport_number">
        <el-tooltip content="Please write your passport numbers (numbers after letters)" placement="top">
          <el-input v-model="ruleForm.passport_number" autocomplete="off" :placeholder="$t('shared.text')" size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item label="Date of Birth" prop="birth_date" id="birth_date">
        <el-date-picker v-model="ruleForm.birth_date" placeholder="Select your date of birth" size="large"
          class="!w-full">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="Gender" prop="gender" id="gender">
        <el-select v-model="ruleForm.gender" size="large" placeholder="Choose gender" class="w-full">
          <el-option label="Male" value="male" />
          <el-option label="Female" value="female" />
        </el-select>
      </el-form-item>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item label="Passport photo" prop="passport" id="passport">
        <el-tooltip
          content="Make sure that your passport does not exceed two megabytes and that all the necessary data is visible on the photo"
          placement="top">
          <AppUpload @upload="(file) => {ruleForm.passport = file, ruleFormRef?.clearValidate('passport')}" @remove="() => (ruleForm.passport = null)" />
        </el-tooltip>
      </el-form-item>
      <el-form-item label="Photo" prop="photo" id="photo">
        <el-tooltip content="Make sure your photo matches your passport photo and format" placement="top">
          <AppUpload @upload="(file) => {ruleForm.photo = file, ruleFormRef?.clearValidate('photo')}" @remove="() => (ruleForm.photo = null)" />
        </el-tooltip>
      </el-form-item>
      <el-form-item label="Diploma" prop="diploma" id="diploma">
        <el-tooltip
          content="Make sure that there is nothing in the photo except for the diploma and all the necessary data are visible correctly"
          placement="top">
          <AppUpload @upload="(file) => { ruleForm.diploma = file, ruleFormRef?.clearValidate('diploma') }"
            @remove="() => (ruleForm.diploma = null)" />
        </el-tooltip>
      </el-form-item>
      <el-form-item label="English proficiency certificate" prop="proficiency_certificate">
        <el-select v-model="ruleForm.proficiency_certificate" size="large" class="w-full">
          <el-option label="IELTS" value="ielts" />
          <el-option label="TOEFL" value="toefl" />
          <el-option label="DUOLINGO" value="duolingo" />
          <el-option label="IEPTE" value="iepte" />
        </el-select>
      </el-form-item>
      <el-form-item label="English proficiency certificate" prop="certificate">
        <el-tooltip
          content="Make sure that there is nothing in the photo except for the certigicate and all the necessary data are visible correctly"
          placement="top">
          <AppUpload @upload="(file) =>{ruleForm.certificate = file, ruleFormRef?.clearValidate('certificate')}" @remove="() => (ruleForm.certificate = null)" />
        </el-tooltip>
      </el-form-item>
      <el-form-item label="Certificate Number (TRF if you have IELTS)" prop="certificate_number">
        <el-input v-model="ruleForm.certificate_number" autocomplete="off" placeholder="Write the number of your document"
          size="large" />
      </el-form-item>
      <el-form-item prop="take_internal_exam">
        <el-checkbox class="!whitespace-normal" v-model="ruleForm.take_internal_exam" size="large">If you do not have
          English certificate, you can take the INTERNAL
          ENGLISH EXAM</el-checkbox>
      </el-form-item>
    </div>
    <div class="app-divider my-2 md:my-4" />
    <h1 class="title mb-3">Exam Preferences</h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item label="Department" prop="program_id" id="program_id">
        <el-select v-model="ruleForm.program_id" placeholder="Select a department" filterable size="large" class="w-full">
          <el-option v-for="region of guideStore.getTuitions" :key="region.value" :label="region.label"
            :value="region.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="Exam date" prop="exam_date_id" id="exam_date_id">
        <el-select v-model="ruleForm.exam_date_id" placeholder="Choose an exam day" size="large" class="w-full">
          <el-option v-for="date of guideStore.getExamDates" :key="date.value" :label="date.label" :value="date.value" />
        </el-select>
      </el-form-item>
      <el-form-item prop="is_scholarship" id="is_scholarship">
        <template #label>
          <div class="flex items-center space-x-2">
            <span>Scholarship</span>
            <el-popover placement="top-start" :width="300" trigger="hover" content="Do you want to participate in the scholarship
    exam? I agree that If I can not meet the
    scholarship exam requirements, then I will not
    be able to attend it.">
              <template #reference>
                <el-icon>
                  <InfoFilled />
                </el-icon>
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
        <el-checkbox v-model="ruleForm.is_accept" size="large">I allow to use of my personal Information.</el-checkbox>
      </el-form-item>
    </div>
  </el-form>
  <div class="flex pt-4">
    <el-button :disabled="!ruleForm.is_accept" type="primary" size="large" @click="submitForm(ruleFormRef)">
      Submit
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { InfoFilled, Plus } from "@element-plus/icons-vue";
import { useFileStore, useGuideStore, useApplicationStore } from "@/stores";
import { useUsersStore } from "@/stores/user";
import {
  ElMessage,
  type FormInstance,
  type FormRules,
  type UploadFile,
} from "element-plus";
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
import AppUpload from "@/components/common/AppUpload.vue";
const router = useRouter();
const store = useUsersStore();

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
});

const rules = reactive<FormRules>({
  city_id: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: ['blur', 'change'],
    },
  ],
  graduation_place: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: ['blur', 'change'],
    },
  ],
  address: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: ['blur', 'change'],
    },
  ],
  phone: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: ['blur', 'change'],
    },
    {
      type: "string",
      required: true,
      pattern: phonePattern,
      message: i18n.t("validation.pattern"),
      trigger: ['blur', 'change'],
    },
  ],
  gender: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: ['blur', 'change'],
    },
  ],
  //   certificate_number: [
  //     {
  //       required: true,
  //       message: i18n.t("validation.fillField"),
  //       trigger: "blur",
  //     },
  //   ],
  first_name: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: ['blur', 'change'],
    },
  ],
  last_name: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: ['blur', 'change'],
    },
  ],
  passport_number: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: ['blur', 'change'],
    },
    {
      min: 10,
      message: i18n.t("validation.minimumLength", { value: 7 }),
      trigger: ['blur', 'change'],
    },
    {
      max: 10,
      message: i18n.t("validation.maximumLength", { value: 15 }),
      trigger: ['blur', 'change'],
    },
    {
      type: "string",
      required: true,
      pattern: store.getUser?.country?.code === 'UZ' ? passportNumberPattern : '',
      message: i18n.t("validation.pattern"),
      trigger: ['blur', 'change'],
    },
  ],
  passport_serial: [
    {
      max: 10,
      message: i18n.t("validation.maximumLength", { value: 10 }),
      trigger: ['blur', 'change'],
    },
    // {
    //   required: true,
    //   message: i18n.t("validation.fillField"),
    //   trigger: ['blur', 'change'],
    // },
    // {
    //   type: "string",
    //   required: true,
    //   pattern: passportSeriesPattern,
    //   message: i18n.t("validation.pattern"),
    //   trigger: ['blur', 'change'],
    // },
  ],
  birth_date: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: ['blur', 'change'],
    },
  ],
  exam_date_id: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: ['blur', 'change'],
    },
  ],
  program_id: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: ['blur', 'change'],
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
  //   certificate: [
  //     {
  //       required: true,
  //       message: i18n.t("validation.fillField"),
  //       trigger: "submit",
  //     },
  //   ],
});

const props = defineProps<{
  application?: any;
}>();

onMounted(async () => {
  if (!guideStore.getExamDates.length) {
    guideStore.fetchExamDates();
  }
  if (!guideStore.getRegions.length) {
    let obj = {}
    if (store.getUser?.country.code !== 'UZ') {
      obj = { type: 'province' }
    }
    guideStore.fetchRegions(obj);
  }
  if (!guideStore.getTuitions.length) {
    guideStore.fetchTuitions();
  }
});

const loading = ref(false);
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    console.log(valid, fields);
    
    if (valid) {
      try {
        loading.value = true;
        const data = {
          ...ruleForm,
          phone: convertPhone(ruleForm.phone),
          birth_date: format(new Date(ruleForm.birth_date), "yyyy-MM-dd"),
        } as any;

        if (!ruleForm.certificate) {
          delete data.certificate;
        }
        if (store.getUser?.country.code !== 'UZ') {
          data.phone = store.getUser?.phone;
          delete data.address;
        }

        if (props.application) {
          data["id"] = props.application.id;
          await applicationStore.updateApplication(data);
          router.push("/dashboard");
        } else {
          await applicationStore.createApplication(data);
        }
        loading.value = false;
        ElMessage({
          message: "Successfully created",
          type: "success",
        });
        applicationStore.getApplication();
      } catch (error: any) {
        loading.value = false;
        ElMessage({
          message: error?.message || "Error",
          type: "error",
        });
        console.log("error", error.message);
      }
    } else {
      const arrayFields = Object.keys(fields as any);
      goDown(arrayFields[0]);
      ElMessage({
        message: "The form is invalid, Please check it correctly",
        type: "warning",
      });
    }
  });
};
const goDown = (target: string) => {
  console.log("target", target);
  document.getElementById(target)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
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
<style>
[data-v-onboarding-wrapper] [data-popper-arrow]::before {
  content: '';
  background: var(--v-onboarding-step-arrow-background, white);
  top: 0;
  left: 0;
  transition: transform 0.2s ease-out, visibility 0.2s ease-out;
  visibility: visible;
  transform: translateX(0px) rotate(45deg);
  transform-origin: center;
  width: var(--v-onboarding-step-arrow-size, 10px);
  height: var(--v-onboarding-step-arrow-size, 10px);
  position: absolute;
  z-index: -1;
}

[data-v-onboarding-wrapper] [data-popper-placement^='top']>[data-popper-arrow] {
  bottom: 5px;
}

[data-v-onboarding-wrapper] [data-popper-placement^='right']>[data-popper-arrow] {
  left: -4px;
}

[data-v-onboarding-wrapper] [data-popper-placement^='bottom']>[data-popper-arrow] {
  top: -4px;
}

[data-v-onboarding-wrapper] [data-popper-placement^='left']>[data-popper-arrow] {
  right: -4px;
}
</style>