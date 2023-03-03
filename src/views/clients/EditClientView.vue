<template>
  <div class="space-y-2 md:space-y-8 view">
    <div>
      <h1 class="view__title">{{ $t("app.new-client") }}</h1>
      <p class="view__description">
        {{ $t("app.dashboardTitle") }}
      </p>
    </div>
    <div class="content pt-6 px-8 pb-12">
      <h1 class="content__title">{{ $t("app.personaldData") }}</h1>
      <div class="app-divider my-2 md:my-4" />
      <ClientForm
        v-if="clientStore.currentClient"
        :client="clientStore.currentClient"
        @onSubmit="submitForm($event)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useClientStore } from "@/stores/client";
import { convertPhone } from "@/utils/mappers";
import { format } from "date-fns";
import { ElMessage } from "element-plus";
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import ClientForm from "./components/ClientForm.vue";

const router = useRouter();
const route = useRoute();
const i18n = useI18n();
const clientStore = useClientStore();
const loading = ref(false);

onMounted(async () => {
  try {
    loading.value = true;
    await clientStore.getClientById(route.params.id as string);

    loading.value = false;
  } catch (error: any) {
    console.log("error", error?.message);
    loading.value = false;
  }
});

const submitForm = async (ruleForm: any) => {
  try {
    loading.value = true;

    const data = {
      ...ruleForm,
      phone: convertPhone(ruleForm.phone),
      status: 1,
      last_purchase_date: format(
        new Date(ruleForm.last_purchase_date),
        "yyyy-MM-dd"
      ),
      age: +ruleForm.age,
      id: route.params.id,
    };

    await clientStore.editClient(data);

    ElMessage({
      message: i18n.t("shared.updated"),
      type: "success",
    });
    router.push("/clients");
    loading.value = false;
  } catch (error: any) {
    console.log("error", error.message);
    loading.value = false;
  }
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
