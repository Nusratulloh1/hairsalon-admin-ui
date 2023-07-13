<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-position="top" require-asterisk-position="right"
    v-loading="loading">
    <!-- <h1 class="title mb-3">Department</h1> -->
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item :label="$t('dashboard.department')" prop="program_id" id="program_id">
        <el-select v-model="ruleForm.program_id" :placeholder="$t('dashboard.department')" filterable size="large"
          class="w-full">
          <el-option v-for="region of guideStore.getTuitions" :key="region.value" @click="langUpdate(region.lang)"
            :label="region.label" :value="region.value" />
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('dashboard.lang')" prop="lang" id="lang">
        <el-select v-model="ruleForm.lang" :placeholder="$t('dashboard.lang')" filterable size="large"
          class="w-full uppercase">
          <el-option v-for="region of language" :key="region" :label="region" :value="region" class=" uppercase" />
        </el-select>
      </el-form-item>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item :label="$t('dashboard.phone')" prop="phone" id="phone" v-if="store.getUser?.country?.code === 'UZ'">
        <el-tooltip content="Be sure to enter your personal phone number as we need it to support feedback with you"
          placement="top">
          <el-input v-model="ruleForm.phone" v-mask="'998 ## ###-##-##'" autocomplete="off" placeholder="+998"
            size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item :label="$t('dashboard.region')" prop="city_id" id="city_id"
        v-if="store.getUser?.country?.code === 'UZ'">
        <el-select v-model="ruleForm.city_id" :placeholder="$t('dashboard.select_region')" filterable size="large" class="w-full">
          <el-option v-for="region of guideStore.getRegions" :key="region.value" :label="region.label"
            :value="region.value" />
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('dashboard.name_graduation')" prop="graduation_place" id="graduation_place">
        <el-tooltip content="Be sure to write your correct place of graduation" placement="top" :trigger-keys="['Enter']">
          <el-input v-model="ruleForm.graduation_place" :placeholder="$t('dashboard.white_graduation')" size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item :label="$t('dashboard.street')" prop="address" id="address"
        v-if="store.getUser?.country?.code === 'UZ'">
        <el-tooltip content="Be sure to enter your current address" placement="top" :trigger-keys="['Enter']">
          <el-input v-model="ruleForm.address" autocomplete="off" :placeholder="$t('dashboard.white_address')" size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item :label="$t('dashboard.graduation')" prop="graduation_id" id="graduation_id">
        <el-select v-model="ruleForm.graduation_id" :placeholder="$t('dashboard.select_graduation')" size="large" class="w-full">
          <el-option label="School" value="SCHOOL" />
          <el-option label="Lyceum" value="LYCEUM" />
        </el-select>
      </el-form-item>
    </div>
    <div class="app-divider my-2 md:my-4"></div>
    <h1 class="title mb-3">{{ $t('dashboard.passport') }}</h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-2"
      :class="{ 'lg:!grid-cols-5': store.getUser?.country?.code !== 'UZ' }">
      <el-form-item :label="$t('dashboard.first_name')" prop="first_name" id="first_name">
        <el-tooltip content="Please write your first name like in passport" placement="top">
          <el-input v-model="ruleForm.first_name" type="text" autocomplete="off"
            :placeholder="$t('dashboard.write_first')" size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item :label="$t('dashboard.last_name')" prop="last_name" id="last_name">
        <el-tooltip content="Please write your last name like in passport" placement="top">
          <el-input v-model="ruleForm.last_name" autocomplete="off" :placeholder="$t('dashboard.write_last')"
            size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item :label="$t('dashboard.passport_seria')" v-if="store.getUser?.country?.code === 'UZ'"
        prop="passport_serial" id="passport_serial">
        <el-tooltip content="Please write your first letters in passport" placement="top">
          <el-input v-model="ruleForm.passport_serial" autocomplete="off" :placeholder="$t('dashboard.passport_title')"
            size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item :label="$t('dashboard.passport_number')" prop="passport_number" id="passport_number">
        <el-tooltip content="Please write your passport numbers (numbers after letters)" placement="top">
          <el-input v-model="ruleForm.passport_number" autocomplete="off" :placeholder="$t('shared.text')" size="large" />
        </el-tooltip>
      </el-form-item>
      <el-form-item :label="$t('dashboard.birth_date')" prop="birth_date" id="birth_date">
        <el-date-picker v-model="ruleForm.birth_date" :placeholder="$t('dashboard.select_date')" size="large"
          class="!w-full">
        </el-date-picker>
      </el-form-item>
      <el-form-item :label="$t('dashboard.gender')" prop="gender" id="gender">
        <el-select v-model="ruleForm.gender" size="large" :placeholder="$t('dashboard.select_gender')" class="w-full">
          <el-option :label="$t('dashboard.male')" value="male" />
          <el-option :label="$t('dashboard.female')" value="female" />
        </el-select>
      </el-form-item>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item :label="$t('dashboard.passport_photo')" prop="passport" id="passport">
        <el-tooltip
          content="Make sure that your passport does not exceed two megabytes and that all the necessary data is visible on the photo"
          placement="top">
          <AppUpload @upload="(file) => { ruleForm.passport = file, ruleFormRef?.clearValidate('passport') }"
            @remove="() => (ruleForm.passport = null)" />
        </el-tooltip>
      </el-form-item>
      <el-form-item :label="$t('dashboard.passport_photo')" prop="photo" id="photo">
        <el-tooltip content="Make sure your photo matches your passport photo and format" placement="top">
          <AppUpload @upload="(file) => { ruleForm.photo = file, ruleFormRef?.clearValidate('photo') }"
            @remove="() => (ruleForm.photo = null)" />
        </el-tooltip>
      </el-form-item>
      <el-form-item :label="$t('dashboard.photo')" prop="diploma" id="diploma">
        <el-tooltip
          content="Make sure that there is nothing in the photo except for the diploma and all the necessary data are visible correctly"
          placement="top">
          <AppUpload @upload="(file) => { ruleForm.diploma = file, ruleFormRef?.clearValidate('diploma') }"
            @remove="() => (ruleForm.diploma = null)" />
        </el-tooltip>
      </el-form-item>
      <el-form-item :label="$t('dashboard.english')" v-if="ruleForm.lang === 'en'" prop="proficiency_certificate">
        <el-select v-model="ruleForm.proficiency_certificate" size="large" class="w-full">
          <el-option label="IELTS" value="ielts" />
          <el-option label="TOEFL" value="toefl" />
          <el-option label="DUOLINGO" value="duolingo" />
          <el-option label="IEPTE" value="iepte" />
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('dashboard.english')" prop="certificate" v-if="ruleForm.lang === 'en'">
        <el-tooltip
          content="Make sure that there is nothing in the photo except for the certigicate and all the necessary data are visible correctly"
          placement="top">
          <AppUpload @upload="(file) => { ruleForm.certificate = file, ruleFormRef?.clearValidate('certificate') }"
            @remove="() => (ruleForm.certificate = null)" />
        </el-tooltip>
      </el-form-item>
      <el-form-item :label="$t('dashboard.certify')" prop="certificate_number" v-if="ruleForm.lang === 'en'">
        <el-input v-model="ruleForm.certificate_number" autocomplete="off" placeholder="Write the number of your document"
          size="large" />
      </el-form-item>
      <el-form-item prop="take_internal_exam" v-if="ruleForm.lang === 'en'">
        <el-checkbox class="!whitespace-normal" v-model="ruleForm.take_internal_exam" size="large">If you do not have
          {{ $t('dashboard.no_certify') }}</el-checkbox>
      </el-form-item>
    </div>
    <div class="app-divider my-2 md:my-4" />
    <h1 class="title mb-3">{{ $t('dashboard.exam_type') }}</h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item :label="$t('dashboard.exam_date')" prop="exam_date_id" id="exam_date_id">
        <el-select v-model="ruleForm.exam_date_id" :placeholder="$t('dashboard.select_exam')" size="large" class="w-full">
          <el-option v-for="date of guideStore.getExamDates" :key="date.value" :label="date.label" :value="date.value" />
        </el-select>
      </el-form-item>
      <div></div>
      <div></div>
      <!-- <el-form-item prop="is_scholarship" id="is_scholarship">
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
      </el-form-item> -->
      <el-form-item prop="is_accept">
        <el-checkbox v-model="ruleForm.is_accept" size="large">{{ $t('dashboard.allow') }}</el-checkbox>
      </el-form-item>
    </div>
  </el-form>
  <div class="flex pt-4">
    <el-button :disabled="!ruleForm.is_accept" type="primary" size="large" @click="submitForm(ruleFormRef)">
      {{ $t('dashboard.submit') }}
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
const language: any = ref([])
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
  is_scholarship: false,
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
  lang: ""
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
      min: store.getUser?.country?.code === 'UZ' ? 7 : 1,
      message: i18n.t("validation.minimumLength", { value: store.getUser?.country?.code === 'UZ' ? 7 : 1 }),
      trigger: ['blur', 'change'],
    },
    {
      max: store.getUser?.country?.code === 'UZ' ? 10 : 20,
      message: i18n.t("validation.maximumLength", { value: store.getUser?.country?.code === 'UZ' ? 10 : 20 }),
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
  lang: [
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
const langUpdate = (lang: any) => {
  ruleForm.lang = ''
  language.value = lang
  if (lang.length == 1) {
    ruleForm.lang = lang[0]
  }
}
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