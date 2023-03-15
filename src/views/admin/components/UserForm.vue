<template>
  <div class="bg-white px-4 py-8 rounded">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      :hide-required-asterisk="true"
      label-position="top"
    >
      <el-form-item label="First Name" prop="first_name">
        <el-input
          v-model="ruleForm.first_name"
          type="text"
          autocomplete="off"
          class="!h-11"
        />
      </el-form-item>
      <el-form-item label="Last Name" prop="last_name">
        <el-input
          v-model="ruleForm.last_name"
          type="text"
          autocomplete="off"
          class="!h-11"
        />
      </el-form-item>
      <el-form-item label="E-mail Address" prop="email">
        <el-input
          v-model.trim="ruleForm.email"
          type="text"
          autocomplete="off"
          class="!h-11"
        />
      </el-form-item>
      <el-form-item label="Role" prop="role">
        <el-select
          v-model="ruleForm.role"
          :placeholder="$t('shared.select')"
          size="large"
          class="w-full"
        >
          <el-option label="Moderator" value="moderator" />
          <el-option label="Admin" value="admin" />
        </el-select>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          v-model.trim="ruleForm.password"
          type="password"
          autocomplete="off"
          class="!h-11"
        />
      </el-form-item>
    </el-form>
    <div class="flex">
      <el-button type="primary" size="large" @click="submitForm(ruleFormRef)">
        {{ $t("shared.save") }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from "element-plus";
import { ref, reactive, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import sha1 from "sha1";
import type { IUser } from "@/models/backend";
const i18n = useI18n();

const props = defineProps<{
  user?: IUser | null;
  type?: "create" | "edit";
}>();

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  role: "",
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
  role: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
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

const emit = defineEmits(["onSubmit"]);

onMounted(() => {
  if (props.user && props.type === "edit") {
    Object.assign(ruleForm, props.user);
  }
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const data = {
        ...ruleForm,
        password: sha1(ruleForm.password),
      };
      emit("onSubmit", data);
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style scoped>
.title {
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #1f1f1f;
}
</style>
