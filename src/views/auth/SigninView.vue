<template>
  <div class="h-full">
    <div class="space-y-3 mx-auto lg:w-1/2 lg:px-24 md:pt-6 h-full relative">
      <div class="header flex flex-col items-start space-y-3 md:space-y-6">
        <div class="border-b w-full p-4 sm:border-none">
          <LogoutIconWithName class="w-[214px] sm:w-[477px]" />
        </div>
        <div class="px-4">
          <h1 class="header__title text-2xl sm:text-[28px] mb-1 sm:mb-[10px]">
            {{ $t('register.main') }}
          </h1>
          <p class="header__text">
            {{ $t('register.title') }}
          </p>
        </div>
      </div>
      <el-form ref="ruleFormRef" class="mt-3 sm:mt-8 px-4" :model="ruleForm" :rules="rules" :hide-required-asterisk="true"
        label-position="top">
        <el-form-item :label="$t('register.first_name')" prop="first_name">
          <el-input v-model="ruleForm.first_name" type="text" autocomplete="off" class="!h-11" />
        </el-form-item>
        <el-form-item :label="$t('register.last_name')" prop="last_name">
          <el-input v-model="ruleForm.last_name" type="text" autocomplete="off" class="!h-11" />
        </el-form-item>
        <!-- <el-form-item :label="$t('register.email')" prop="email">
          <el-input v-model.trim="ruleForm.email" type="text" :placeholder="$t('register.email_title')" autocomplete="off"
            class="!h-9 sm:!h-11" />
        </el-form-item> -->
        <!-- <el-form-item label="Country" prop="country">
          <div class="hidden sm:block w-full">
            <el-select v-model="ruleForm.country_id" filterable class="!h-11 w-full" @change="setNumber"
              :placeholder="$t('register.country')" size="large">
              <el-option v-for="(code, i) in countryCodesList" :key="i" :label="code.name" :value="code.id" />
            </el-select>
          </div>
          <div class="sm:hidden w-full">
            <el-select v-model="ruleForm.country_id" multiple :multiple-limit="1" filterable class="!h-9 w-full"
              @change="setNumber" :placeholder="$t('register.country')">
              <el-option v-for="(code, i) in countryCodesList" :key="i" :label="code.name" :value="code.id" />
            </el-select>
          </div>
        </el-form-item> -->
        <el-form-item :label="$t('register.phone')" prop="phone">
          <el-input v-model.trim="ruleForm.phone" v-if="ruleForm.phone.includes('998')" v-mask="'+### ## ###-##-##'"
            autocomplete="off" type="text" class="!h-9 sm:!h-11" />
          <el-input v-model.trim="ruleForm.phone" v-else type="text" autocomplete="off" class="!h-9 sm:!h-11" />
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="password">
          <el-input v-model.trim="ruleForm.password" type="password" :placeholder="$t('register.enter_pass')"
            autocomplete="off" class="!h-9 sm:!h-11" />
        </el-form-item>
        <el-form-item :label="$t('register.conf_pass')" prop="confirm_password">
          <el-input v-model.trim="ruleForm.confirm_password" type="password" :placeholder="$t('register.re_pass')"
            autocomplete="off" class="!h-9 sm:!h-11" />
        </el-form-item>
        <el-button class="md:mt-4 !h-9 !text-xs sm:!text-base  sm:!h-12 sm:w-[200px]" type="primary"
          @click="submitForm(ruleFormRef)" :loading="loading">
          {{ $t('register.create') }}
        </el-button>
        <div class="bottom-12 mt-2 sm:mt-6">
          <p class="header__text">
            {{ $t('register.have_account') }}
            <RouterLink to="/login" class="text-primary font-medium ml-2 underline">{{ $t('register.login') }}
            </RouterLink>
          </p>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import sha1 from "sha1";
import { LogoutIconWithName } from "@/components/icons";
import { computed, onMounted, reactive, ref, nextTick } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useUsersStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import type { ISigninForm } from "@/models/backend";

const i18n = useI18n();
const store = useUsersStore();
const router = useRouter();
const staticRegion = ref("");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  first_name: "",
  last_name: "",
  phone: "+",
  // country_id: "",
  // email: "",
  password: "",
  confirm_password: "",
});
const countryCodesList = computed(() => store.countryCodes);
// const setNumber = (country_id: string): void => {
//   const country = countryCodesList.value?.find((c) => c.id === country_id);
//   if (country) {
//     ruleForm.country_id = country.id;
//     ruleForm.phone = country.dial_code;
//   }
// };
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
onMounted(() => {
  store.countryCode();
});
const rules = reactive<FormRules>({
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
  phone: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
    {
      min: 5,
      message: i18n.t("validation.minimumLength", { value: 5 }),
      trigger: "blur",
    },
    {
      max: 20,
      message: i18n.t("validation.maximumLength", { value: 20 }),
      trigger: "blur",
    },
  ],
  email: [
    { validator: validatePass, trigger: "blur" },
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
        const data: ISigninForm = {
          firstName: ruleForm.first_name,
          lastName: ruleForm.last_name,
          phoneNumber: ruleForm.phone,
          password: ruleForm.password,
        };
        await store.signin(data);
        // await store.sendVerifyEmail();
        // router.push("/login");
        loading.value = false;
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
    height: 123px;
    width: 54px;
    margin-bottom: 12px;
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
    font-family: 'HelveticaNeueCyr';
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
