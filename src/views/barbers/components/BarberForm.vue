<template>
    <div class="bg-white px-4 py-8 rounded">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-position="top" require-asterisk-position="right">
            <div class="grid md:grid-cols-1 gap-y-1 gap-x-5">
                <el-form-item label="First Name" prop="firstName">
                    <el-input size="large" v-model="ruleForm.firstName"></el-input>
                </el-form-item>
                <el-form-item label="Last Name" prop="lastName">
                    <el-input size="large" v-model="ruleForm.lastName"></el-input>
                </el-form-item>
                <el-form-item label="Phone number" prop="phoneNumber">
                    <el-input size="large" v-model="ruleForm.phoneNumber"></el-input>
                </el-form-item>
            </div>
        </el-form>
        <div class="flex mt-10">
            <el-button type="primary" size="large" @click="submitForm(ruleFormRef)">
                {{ $t("shared.save") }}
            </el-button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import type { FormInstance, FormRules } from "element-plus";
import { ref, reactive, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

const props = defineProps<{
    barber?: any | null;
    type?: "create" | "edit";
}>();

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
    firstName: "",
    lastName: "",
    phoneNumber: ""
});

const rules = reactive<FormRules>({
    firstName: [
        {
            required: true,
            message: i18n.t("validation.fillField"),
            trigger: "blur",
        },
    ],
    phoneNumber: [
        {
            required: true,
            message: i18n.t("validation.fillField"),
            trigger: "blur",
        },
    ],
});

const emit = defineEmits(["onSubmit"]);

onMounted(() => {
    if (props.barber && props.type === "edit") {
        Object.assign(ruleForm, props.barber)
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
</script>
  
<style scoped>
.title {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #1f1f1f;
}
</style>