<template>
  <div class="bg-white px-4 py-8 rounded">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-position="top"
      require-asterisk-position="right"
    >
      <div class="grid sm:grid-cols-1 gap-y-1">
        <el-form-item :label="$t('app.title')" prop="title">
          <el-input
            v-model="ruleForm.title"
            type="text"
            autocomplete="off"
            :placeholder="$t('shared.text')"
            size="large"
          />
        </el-form-item>
        <el-form-item :label="$t('app.comment')" prop="body">
          <el-input
            v-model="ruleForm.body"
            autocomplete="off"
            :placeholder="$t('shared.text')"
            size="large"
          />
        </el-form-item>
        <el-form-item :label="$t('app.orgType')" prop="status">
          <el-select
            v-model="ruleForm.status"
            :placeholder="$t('shared.select')"
            size="large"
            class="w-full"
          >
            <el-option
              v-for="status of [
                GoalStatus.NOT_STARTED,
                GoalStatus.IN_PROCESS,
                GoalStatus.POSTPONED,
                GoalStatus.CANCELED,
                GoalStatus.DONE,
              ]"
              :key="status"
              :label="$t(`goals.${status}`)"
              :value="status"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('shared.date')" prop="dates">
          <el-date-picker
            v-model="ruleForm.dates"
            placeholder="Выберите"
            size="large"
            class="!w-full"
          >
          </el-date-picker>
        </el-form-item>
      </div>
    </el-form>
    <div class="flex items-center space-x-4">
      <el-button type="primary" size="large" @click="submitForm(ruleFormRef)">
        {{ $t("shared.save") }}
      </el-button>
      <el-button plain type="danger" size="large" @click="onDelete">
        {{ $t("shared.delete") }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from "element-plus";
import { ref, reactive, onMounted } from "vue";
import { type IGoal, GoalStatus } from "@/models/backend/goal.model";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

const props = defineProps<{
  goal?: IGoal | null;
  type?: "create" | "edit";
}>();

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  title: "",
  body: "",
  status: GoalStatus.NOT_STARTED,
  dates: new Date(),
});

const rules = reactive<FormRules>({
  title: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "blur",
    },
  ],
  status: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "change",
    },
  ],
  dates: [
    {
      required: true,
      message: i18n.t("validation.fillField"),
      trigger: "change",
    },
  ],
});

const emit = defineEmits(["onSubmit", "onDelete"]);

onMounted(() => {
  if (props.goal && props.type === "edit") {
    Object.assign(ruleForm, props.goal);
  }
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      emit("onSubmit", ruleForm);
    } else {
      console.log("error submit!", fields);
    }
  });
};

const onDelete = () => {
  emit("onDelete", props.goal?.id);
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
