<template>
  <LoginCard class="space-y-6">
    <div class="header flex flex-col items-center">
      <LogoIcon classes="header__logo" />
      <h1 class="header__title">Добро пожаловать!</h1>
      <p class="header__text">Войдите в свой аккаунт</p>
    </div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      :hide-required-asterisk="true"
      label-position="top"
    >
      <el-form-item label="Логин" prop="email">
        <el-input
          v-model="ruleForm.email"
          type="text"
          autocomplete="off"
          placeholder="Электронная Почта"
          size="large"
          class="!w-80 !h-11"
        />
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
          placeholder="Пароль"
          size="large"
          class="!w-80 !h-11"
        />
      </el-form-item>
      <RouterLink to="/forgot-password" class="forgot-password"
        >Забыли пароль?</RouterLink
      >
      <el-button
        class="w-full mt-4 md:mt-7"
        type="primary"
        size="large"
        @click="submitForm(ruleFormRef)"
        :loading="loading"
      >
        Войти в систему
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
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const store = useUsersStore();
const router = useRouter();

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  email: "",
  password: "",
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

const loading = ref(false);
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    if (valid) {
      try {
        loading.value = true;
        await store.login(ruleForm);
        loading.value = false;
        router.push("/");
      } catch (error) {
        console.log("error", error);

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
