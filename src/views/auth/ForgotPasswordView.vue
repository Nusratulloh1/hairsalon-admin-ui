<template>
  <LoginCard class="space-y-6 md:!pb-24 md:!pt-16">
    <div class="header flex flex-col">
      <div class="text-center"></div>
      <LogoIcon classes="header__logo mx-auto mb-4 md:mb-6" />
      <h1 class="header__title">Забыли пароль?</h1>
      <p class="header__text">
        Войдите в свой аккаунт, чтобы ничего не потерять.
      </p>
    </div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      :hide-required-asterisk="true"
      label-position="top"
    >
      <el-form-item label="Введите свою почту" prop="email">
        <el-input
          v-model="ruleForm.email"
          type="text"
          autocomplete="off"
          size="large"
          class="!h-11"
        />
      </el-form-item>
      <el-button
        class="w-full mt-4 md:mt-6"
        type="primary"
        size="large"
        @click="submitForm(ruleFormRef)"
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

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      await store.sendCodeToEmail(ruleForm);
      ElMessage({
        message: i18n.t("app.codeSentToEmail"),
        type: "success",
        duration: 5 * 1000,
      });
      router.push("/reset-password");
    } else {
      console.log("error submit!", fields);
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
