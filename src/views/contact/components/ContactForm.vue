<template>
    <div class="bg-white px-4 py-8 rounded">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-position="top" require-asterisk-position="right">
            <div class="grid md:grid-cols-2 gap-y-1 gap-x-5">
                <el-form-item label="Phone" prop="phoneNumber">
                    <el-input size="large" v-model="ruleForm.phoneNumber"></el-input>
                </el-form-item>
                <el-form-item label="Mail" prop="mail">
                    <el-input size="large" v-model="ruleForm.mail"></el-input>
                </el-form-item>
                <el-form-item label="Instagram" prop="instagramAddress">
                    <el-input size="large" v-model="ruleForm.instagramAddress"></el-input>
                </el-form-item>
                <el-form-item label="Location" prop="location">
                    <el-input size="large" v-model="ruleForm.location"></el-input>
                </el-form-item>
            </div>
            <el-form-item label="Message" prop="aboutUs">
                <el-input size="large" type="textaria" v-model="ruleForm.aboutUs"></el-input>
            </el-form-item>
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
    contact?: any | null;
    type?: "create" | "edit";
}>();

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
    aboutUs: "",
    instagramAddress: "",
    location: "",
    mail: "",
    phoneNumber: ""
});

const rules = reactive<FormRules>({
    aboutUs: [
        {
            required: true,
            message: i18n.t("validation.fillField"),
            trigger: "blur",
        },
    ],
    instagramAddress: [
        {
            required: true,
            message: i18n.t("validation.fillField"),
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
    mail: [
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
    if (props.contact && props.type === "edit") {
        Object.assign(ruleForm, props.contact)
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