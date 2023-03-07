<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-position="top"
    require-asterisk-position="right"
    v-loading="loading"
  >
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
        <el-upload
          ref="uploadRef"
          class="upload-demo"
          :limit="1"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :auto-upload="false"
          list-type="picture"
          accept="image/*"
          :on-change="(file: UploadFile) => (ruleForm.passport = file.raw as any)"
        >
          <template #trigger>
            <el-button :icon="Plus" type="primary" plain size="large">
              Upload Photo
            </el-button>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="Photo" prop="photo">
        <el-upload
          ref="uploadRef"
          class="upload-demo"
          :limit="1"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :auto-upload="false"
          list-type="picture"
          accept="image/*"
          :on-change="(file: UploadFile) => (ruleForm.photo = file.raw as any)"
        >
          <template #trigger>
            <el-button :icon="Plus" type="primary" plain size="large">
              Upload Photo
            </el-button>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="Diploma" prop="diploma">
        <el-upload
          ref="uploadRef"
          class="upload-demo"
          :limit="1"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :auto-upload="false"
          list-type="picture"
          accept="image/*"
          :on-change="(file: UploadFile) => (ruleForm.diploma = file.raw as any)"
        >
          <template #trigger>
            <el-button :icon="Plus" type="primary" plain size="large">
              Upload Photo
            </el-button>
          </template>
        </el-upload>
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
        <el-upload
          ref="uploadRef"
          class="upload-demo"
          :limit="1"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :auto-upload="false"
          list-type="picture"
          accept="image/*"
          :on-change="(file: UploadFile) => (ruleForm.certificate = file.raw as any)"
        >
          <template #trigger>
            <el-button :icon="Plus" type="primary" plain size="large">
              Upload Photo
            </el-button>
          </template>
        </el-upload>
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
    <el-button type="primary" size="large" @click="submitForm(ruleFormRef)">
      Submit
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { InfoFilled, Plus } from "@element-plus/icons-vue";
import { useFileStore, useGuideStore, useApplicationStore } from "@/stores";
import {
  ElMessage,
  type FormInstance,
  type FormRules,
  type UploadFile,
} from "element-plus";
import { ref, reactive, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import {
  passportNumberPattern,
  passportSeriesPattern,
  phonePattern,
} from "@/utils/regex";
import { convertPhone } from "@/utils/mappers";
import { format } from "date-fns";

const guideStore = useGuideStore();
const applicationStore = useApplicationStore();
const fileStore = useFileStore();

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
  //   certificate: [
  //     {
  //       required: true,
  //       message: i18n.t("validation.fillField"),
  //       trigger: "submit",
  //     },
  //   ],
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
        };

        const passport = await fileStore.uploadFile(ruleForm.passport);
        data["passport"] = passport;

        const photo = await fileStore.uploadFile(ruleForm.photo);
        data["photo"] = photo;

        const diploma = await fileStore.uploadFile(ruleForm.diploma);
        data["diploma"] = diploma;

        if (ruleForm.certificate) {
          const certificate = await fileStore.uploadFile(ruleForm.certificate);
          data["certificate"] = certificate;
        } else {
          delete data.certificate;
        }

        await applicationStore.createApplication(data);
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
      console.log("error submit!", fields);
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
