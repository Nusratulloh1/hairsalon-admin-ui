<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-position="top"
    require-asterisk-position="right"
  >
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
      <el-form-item :label="$t('app.title')" prop="product_name">
        <el-input
          v-model="ruleForm.product_name"
          type="text"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item :label="$t('app.category')" prop="category">
        <el-input
          v-model="ruleForm.category"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item :label="$t('app.subcategory')" prop="subcategory">
        <el-input
          v-model="ruleForm.subcategory"
          autocomplete="off"
          :placeholder="$t('shared.text')"
          size="large"
        />
      </el-form-item>
      <el-form-item :label="$t('shared.count')" prop="product_count">
        <el-input
          v-model="ruleForm.product_count"
          autocomplete="off"
          placeholder="Текст"
          size="large"
          type="number"
        />
      </el-form-item>
      <el-form-item :label="$t('shared.unit')" prop="unit">
        <el-select
          v-model="ruleForm.unit"
          placeholder="Выберите"
          size="large"
          class="w-full"
        >
          <el-option label="m2" value="m2" />
          <el-option label="sm2" value="sm2" />
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('app.productPrice')" prop="product_price">
        <el-input
          v-model="ruleForm.product_price"
          autocomplete="off"
          placeholder="Текст"
          size="large"
          type="number"
        />
      </el-form-item>
      <el-form-item :label="$t('app.status')" prop="status">
        <el-select
          v-model="ruleForm.status"
          placeholder="Выберите"
          size="large"
          class="w-full"
        >
          <el-option :label="$t(`warehouse.1`)" :value="1" />
          <el-option :label="$t(`warehouse.0`)" :value="0" />
        </el-select>
      </el-form-item>
      <el-form-item
        :label="$t('app.minimumRecommendedStock')"
        prop="min_recommended"
      >
        <el-input
          v-model="ruleForm.min_recommended"
          autocomplete="off"
          placeholder="Текст"
          size="large"
          type="number"
        />
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
import type { IWarehouse } from "@/models/backend";

const i18n = useI18n();

const props = defineProps<{
  warehouse?: IWarehouse;
}>();

const emit = defineEmits(["onSubmit"]);

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  product_name: "",
  category: "",
  subcategory: "",
  product_count: "",
  product_price: "",
  unit: "",
  status: 1,
  min_recommended: "",
  comments: "",
});

const rules = reactive<FormRules>({
  product_name: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  category: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  subcategory: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  product_count: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  product_price: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  unit: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  min_recommended: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
});

onMounted(() => {
  if (props.warehouse) {
    Object.assign(ruleForm, props.warehouse);
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
