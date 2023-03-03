<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-position="top"
    require-asterisk-position="right"
  >
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item :label="$t('app.firstName')" prop="name">
        <el-input
          v-model="ruleForm.name"
          type="text"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item :label="$t('app.lastName')" prop="surname">
        <el-input
          v-model="ruleForm.surname"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item :label="$t('app.middleName')" prop="middle_name">
        <el-input
          v-model="ruleForm.middle_name"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item label="Пол" prop="gander">
        <el-select
          v-model="ruleForm.gander"
          placeholder="Выберите"
          size="large"
          class="w-full"
        >
          <el-option label="Male" value="MALE" />
          <el-option label="Female" value="FEMALE" />
        </el-select>
      </el-form-item>
      <el-form-item label="Возраст" prop="age">
        <el-input
          v-model="ruleForm.age"
          autocomplete="off"
          placeholder="Текст"
          size="large"
          type="number"
        />
      </el-form-item>
      <el-form-item :label="$t('app.phoneNumber')" prop="phone">
        <el-input
          v-model="ruleForm.phone"
          v-mask="'998 ## ###-##-##'"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item :label="$t('app.location')" prop="location">
        <el-input
          v-model="ruleForm.location"
          autocomplete="off"
          placeholder="Текст"
          size="large"
        />
      </el-form-item>
      <el-form-item label="B2B/B2C" prop="type">
        <el-select
          v-model="ruleForm.type"
          placeholder="Выберите"
          size="large"
          class="w-full"
        >
          <el-option label="B2B" value="B2B" />
          <el-option label="B2C" value="B2C" />
        </el-select>
      </el-form-item>
      <el-form-item label="Дата последний покупки" prop="last_purchase_date">
        <el-date-picker
          v-model="ruleForm.last_purchase_date"
          placeholder="Выберите"
          size="large"
          class="!w-full"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="Кто принял" prop="acceptedPerson">
        <el-select
          v-model="ruleForm.acceptedPerson"
          placeholder="Выберите"
          size="large"
          class="w-full"
        >
        </el-select>
      </el-form-item>
      <el-form-item label="Любимый товар" prop="favoriteProduct">
        <el-select
          v-model="ruleForm.favoriteProduct"
          placeholder="Выберите"
          size="large"
          class="w-full"
        >
          <!-- <el-option label="Product" value="product1" /> -->
        </el-select>
      </el-form-item>
      <el-form-item label="Лид заказа" prop="orderLead">
        <el-select
          v-model="ruleForm.orderLead"
          placeholder="Выберите"
          size="large"
          class="w-full"
        >
        </el-select>
      </el-form-item>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3">
      <el-form-item class="col-span-2" label="Коммент" prop="comments">
        <el-input
          v-model="ruleForm.comments"
          autocomplete="off"
          placeholder="Текст"
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 4 }"
          style="max-width: 85%"
        />
      </el-form-item>
    </div>
  </el-form>
  <div class="flex mt-2">
    <el-button type="primary" size="large" @click="submitForm(ruleFormRef)">
      {{ $t("shared.save") }}
    </el-button>
    <el-button
      @click="$router.back()"
      type="primary"
      class="light-blue-btn"
      size="large"
    >
      {{ $t("shared.cancel") }}
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { reactive, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { phonePattern } from "@/utils/regex";
import type { IClient } from "@/models/backend";

const i18n = useI18n();

const props = defineProps<{
  client?: IClient;
}>();

const emit = defineEmits(["onSubmit"]);

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  id: "",
  name: "",
  surname: "",
  middle_name: "",
  gander: "",
  age: "",
  phone: "",
  location: "",
  type: "",
  last_purchase_date: "",
  acceptedPerson: "",
  favoriteProduct: "",
  orderLead: "",
  comments: "",
});

const rules = reactive<FormRules>({
  id: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  name: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  surname: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  middle_name: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  gander: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  age: [
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
  location: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  type: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
});

onMounted(() => {
  if (props.client) {
    Object.assign(ruleForm, props.client);
  }
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      emit("onSubmit", ruleForm);
    } else {
      console.log("error submit!", fields);
    }
  });
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
