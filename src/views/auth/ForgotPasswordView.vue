<template>
  <div class=" h-full">
    <div class="space-y-4 mx-auto lg:w-1/2 md:px-24 md:pt-8 h-full relative">
      <div class="header flex flex-col items-start space-y-8 md:space-y-12">
        <div class="border-b w-full p-4 sm:border-none">
          <LogoutIconWithName class="w-[214px] sm:w-[477px]" />
        </div>
        <div class="px-4" v-if="!success">
          <h1 class="header__title text-2xl sm:text-[28px] mb-1 sm:mb-[10px]">
            {{ $t('forgot.title') }}
          </h1>
          <p class="header__text">
            {{ $t('forgot.desc') }}
          </p>
        </div>
      </div>
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" :hide-required-asterisk="true" label-position="top"
        class="px-4" v-if="!success">
        <el-form-item :label="$t('login.email')" prop="email">
          <el-input v-model="ruleForm.email" type="text" autocomplete="off" size="large" class="!h-9 sm:!h-11" />
        </el-form-item>
        <div class="md:mt-4 text-sm">
          <p>
            {{ $t('forgot.remem') }}
            <RouterLink to="/login" class="text-primary font-medium">{{ $t('forgot.login') }}</RouterLink>
          </p>
        </div>
        <el-button class="w-full mt-4 md:mt-8" type="primary" size="large" @click="submitForm(ruleFormRef)"
          :loading="loading">
          {{ $t('forgot.title') }}
        </el-button>
      </el-form>
      <div v-else class=" px-5 !mt-20">
        <p class="font-medium mb-2 font-halverica">
          {{ $t('forgot.verify_1') }}
        </p>
        <p class="text-primary">
          {{ $t('forgot.verify_2') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LogoutIconWithName } from "@/components/icons";
import { reactive, ref } from "vue";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { useUsersStore } from "@/stores/user";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
const i18n = useI18n();
const router = useRouter();
const store = useUsersStore();

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  email: "",
});

const rules = reactive<FormRules>({
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
});
const loading = ref(false);
const success = ref(false);
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      loading.value = true;
      await store.sendCodeToEmail(ruleForm);
      ElMessage({
        message: i18n.t("app.codeSentToEmail"),
        type: "success",
        duration: 5 * 1000,
      });
      loading.value = false;
      success.value = true;
      // router.push("/reset-password");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/colors.scss";

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    // @include card;
    padding: 2rem;
    border-radius: 10px;
    min-width: 300px;
  }
}

.header {
  &__logo {
    height: 25px;
    width: 129px;
  }

  &__title {
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
    color: $bold-text;
    margin-bottom: 8px;
  }

  &__text {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: $light-text;
  }
}
</style>
