<template>
  <div class="space-y-2 md:space-y-8 view" v-loading="loading">
    <div>
      <h1 class="view__title">{{ $t("app.employeesSection") }}</h1>
      <p class="view__description">
        {{ $t("app.dashboardTitle") }}
      </p>
    </div>
    <div class="content pt-6 px-8 pb-12">
      <h1 class="content__title">{{ $t("app.personaldData") }}</h1>
      <div class="app-divider my-2 md:my-4" />
      <StaffForm @onSubmit="submitForm($event)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import StaffForm from "./components/StaffForm.vue";
import { ElMessage } from "element-plus";
import { ref, onMounted } from "vue";
import {
  convertPhone,
  convertPassport,
  convertCardNumber,
} from "@/utils/mappers";
import { useI18n } from "vue-i18n";
import {
  useGuideStore,
  useOrganizationStore,
  useStaffStore,
  useFileStore,
} from "@/stores";
import { useRouter } from "vue-router";

const i18n = useI18n();
const router = useRouter();

const guideStore = useGuideStore();
const orgStore = useOrganizationStore();
const staffStore = useStaffStore();
const fileStore = useFileStore();

const loading = ref(false);

onMounted(async () => {
  try {
    loading.value = true;

    await guideStore.fetchRoles();
    await orgStore.fetchOrgListTree();

    loading.value = false;
  } catch (error: any) {
    console.log("error", error?.message);
    loading.value = false;
  }
});

const submitForm = async (ruleForm: any) => {
  try {
    loading.value = true;
    // Upload image
    const passport_image = await fileStore.uploadFile(
      ruleForm.passport_image as any
    );

    const data = {
      ...ruleForm,
      passport_image,
      phone: convertPhone(ruleForm.phone),
      passport_number: convertPassport(ruleForm.passport_number),
      card_number: convertCardNumber(ruleForm.card_number),
      salary: +ruleForm.salary,
      work_hour: +ruleForm.work_hour,
    };

    await staffStore.createStaff(data);

    ElMessage({
      message: i18n.t("shared.created"),
      type: "success",
    });
    router.push("/company/employees");
    loading.value = false;
  } catch (error: any) {
    console.log(error.message);
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

  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #1f1f1f;
  }
}
</style>
