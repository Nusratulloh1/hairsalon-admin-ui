<template>
  <div class="wrapper w-full border-t p-[17px] sm:border-none !h-[85vh]">
    <div class="content shadow-xl md:w-96 space-y-6">
      <div class="header flex flex-col">
        <div class="text-center space-y-4"></div>
        <LogoutIconWithName />
        <h1 class="header__title mt-4">Forgot password?</h1>
      </div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        :hide-required-asterisk="true"
        label-position="top"
        v-if="!success"
      >
        <el-form-item label="Enter your email" prop="email">
          <el-input
            v-model="ruleForm.email"
            type="text"
            autocomplete="off"
            size="large"
            class="!h-11"
          />
        </el-form-item>
        <div class="md:mt-4 text-sm">
          <p>
            Just remembered your password?
            <RouterLink to="/login" class="text-primary font-medium"
              >Log In</RouterLink
            >
          </p>
        </div>
        <el-button
          class="w-full mt-4 md:mt-8"
          type="primary"
          size="large"
          @click="submitForm(ruleFormRef)"
          :loading="loading"
        >
          Resset password
        </el-button>
      </el-form>
      <div v-else>
        <p class="font-medium mb-2">
          Please, verify your email from the message that has been sent to you
          via email!
        </p>
        <p class="text-primary">
          Note, if you can not find the email, check the spam folder!
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
