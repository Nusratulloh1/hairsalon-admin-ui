<template>
  <div class=" h-full">
    <div class="space-y-4 mx-auto lg:w-1/2 md:px-24 md:pt-8 h-full relative">
      <div class="header flex flex-col items-start space-y-8 md:space-y-12">
        <div class="border-b w-full p-4 sm:border-none">
          <LogoutIconWithName class="w-[214px] sm:w-[477px]" />
        </div>
        <div class="px-4">
          <h1 class="header__title text-2xl sm:text-[28px] mb-1 sm:mb-[10px]">
            Sign In
          </h1>
          <p class="header__text">
            Please sign In your account
          </p>
        </div>
      </div>
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="px-4" :hide-required-asterisk="true" label-position="top">
        <el-form-item label="E-mail Address" prop="email">
          <el-input v-model.trim="ruleForm.email" type="text" autocomplete="off" class="!h-9 sm:!h-11" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model.trim="ruleForm.password" type="password" autocomplete="off" class="!h-9 sm:!h-11" />
        </el-form-item>
        <div class="flex flex-col items-start">
          <RouterLink to="/forgot-password" class="forgot-password">Forgot Password?</RouterLink>
          <el-button class="mt-4 md:mt-7 !h-9 !text-xs sm:!text-base  sm:!h-12 sm:w-[200px]" type="primary" @click="submitForm(ruleFormRef)" :loading="loading">
            Sign In
          </el-button>
        </div>
        <div class="bottom-12 mt-6 md:mt-8">
          <p class="header__text">
            Don't have an account?
            <RouterLink to="/signin" class="text-primary font-medium">Sign Up</RouterLink>
          </p>
        </div>
      </el-form>
    </div>
    <!-- <div
      class="relative hidden md:flex right-content h-full items-center justify-center"
    >
      <p>Join us now and start empowering your future!</p>
      <a
        class="ml-2 absolute text-sm bottom-2 text-white text-center"
        href="tel:+998-71-200-01-23"
        >If you have questions or difficulties, please contact us:
        +998-71-200-01-23</a
      >
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { LogoutIconWithName } from "@/components/icons";
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useUsersStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import sha1 from "sha1";
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
        const data = {
          ...ruleForm,
          password: sha1(ruleForm.password),
        };
        await store.login(data);
        loading.value = false;
        router.push("/dashboard");
      } catch (error: any) {
        console.log("error", error.message);

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
    height: 123px;
    width: 54px;
  }

  &__title {
    font-weight: 600;
    color: #000000;
    max-width: 400px;
    font-family: 'Jost', sans-serif;
  }

  &__text {
    color: rgba(24, 40, 87, 0.30);
    font-size: 14px;
    margin: 0 !important;
    // font-family: 'HelveticaNeueCyr';
    font-weight: 550;
  }
}

.forgot-password {
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #8992a9;
}

.right-content {
  background: linear-gradient(180deg, #d1050c 21.19%, #a4040a 100%);

  p {
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    text-align: center;

    color: #ffffff;
    text-align: center;
    max-width: 446px;
  }
}
</style>
