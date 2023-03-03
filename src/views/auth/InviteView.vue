<template>
  <LoginCard class="space-y-6">
    <div class="header flex flex-col items-center">
      <LogoIcon classes="header__logo" />
      <h1 class="header__title">{{ $t("app.setPassword") }}</h1>
    </div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      :hide-required-asterisk="true"
      label-position="top"
    >
      <el-form-item :label="$t('app.password')" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
          :placeholder="$t('app.password')"
          size="large"
          class="!w-80 !h-11"
        />
      </el-form-item>
      <el-form-item :label="$t('app.confirmPassword')" prop="confirm_password">
        <el-input
          v-model="ruleForm.confirm_password"
          type="password"
          autocomplete="off"
          :placeholder="$t('app.confirmPassword')"
          size="large"
          class="!w-80 !h-11"
        />
      </el-form-item>
      <el-button
        class="w-full mt-4 md:mt-7"
        type="primary"
        size="large"
        @click="submitForm(ruleFormRef)"
        :loading="loading"
      >
        {{ $t("shared.save") }}
      </el-button>
    </el-form>
  </LoginCard>
</template>

<script setup lang="ts">
import { LogoIcon } from "@/components/icons";
import LoginCard from "./components/LoginCard.vue";
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useUsersStore } from "@/stores/user";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const store = useUsersStore();
const route = useRoute();
const router = useRouter();

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  password: "",
  confirm_password: "",
});

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error(i18n.t("validation.fillField")));
  } else {
    if (ruleForm.confirm_password !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("confirm_password", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error(i18n.t("validation.fillField")));
  } else if (value !== ruleForm.password) {
    callback(new Error(i18n.t("validation.passwordsDontMatch")));
  } else {
    callback();
  }
};

const rules = reactive<FormRules>({
  password: [
    { validator: validatePass, trigger: "blur" },
    {
      min: 8,
      message: i18n.t("validation.minimumLength", { value: 8 }),
      trigger: "blur",
    },
  ],
  confirm_password: [{ validator: validatePass2, trigger: "blur" }],
});

const loading = ref(false);
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    if (valid) {
      try {
        loading.value = true;
        await store.acceptInviteSetPassword({
          ...ruleForm,
          code: route.query.code as string,
        });
        loading.value = false;
        router.push("/login");
      } catch (error) {
        loading.value = false;
      }
    }
  });
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/colors.scss";

.header {
  &__logo {
    height: 25px;
    width: 129px;
    margin-bottom: 12px;
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

.forgot-password {
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #8992a9;
}
</style>
