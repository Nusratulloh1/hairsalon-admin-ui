<template>
  <div class="space-y-2 md:space-y-8 view">
    <div>
      <h1 class="view__title">{{ $t("app.edit-warehouse") }}</h1>
      <p class="view__description">
        {{ $t("app.dashboardTitle") }}
      </p>
    </div>
    <div class="content pt-6 px-8 pb-12">
      <h1 class="content__title">{{ $t("app.new-product") }}</h1>
      <div class="app-divider my-2 md:my-4" />
      <WarehouseForm
        v-if="warehouseStore.currentWarehouse"
        :warehouse="warehouseStore.currentWarehouse"
        @onSubmit="submitForm($event)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWarehouseStore } from "@/stores";
import { ElMessage } from "element-plus";
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import WarehouseForm from "./components/WarehouseForm.vue";

const router = useRouter();
const route = useRoute();
const i18n = useI18n();
const warehouseStore = useWarehouseStore();

const loading = ref(false);

const submitForm = async (ruleForm: any) => {
  try {
    loading.value = true;
    const data = {
      ...ruleForm,
      product_count: +ruleForm.product_count,
      product_price: +ruleForm.product_price,
      min_recommended: +ruleForm.min_recommended,
      id: route.params.id,
    };

    await warehouseStore.editWarehouse(data);

    ElMessage({
      message: i18n.t("shared.updated"),
      type: "success",
    });
    router.push("/warehouse");
    loading.value = false;
  } catch (error: any) {
    console.log("error", error.message);
    loading.value = false;
  }
};

onMounted(async () => {
  try {
    loading.value = true;
    await warehouseStore.getWarehouseById(route.params.id as string);

    loading.value = false;
  } catch (error: any) {
    console.log("error", error?.message);
    loading.value = false;
  }
});
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
