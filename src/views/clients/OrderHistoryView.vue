<template>
  <div class="space-y-2 md:space-y-8 view">
    <div>
      <h1 class="view__title">{{ $t("app.order-history") }}</h1>
      <p class="view__description">
        {{ $t("app.dashboardTitle") }}
      </p>
    </div>
    <div class="content p-10">
      <div class="space-y-4 pb-8">
        <h1 class="font-semibold text-lg">Алексей Николаев Русланович</h1>
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <span>{{ $t("shared.type") }}:</span>
            <app-tag color="blue">Заявка</app-tag>
          </div>
          <div class="flex items-center space-x-2">
            <span>{{ $t("app.status") }}:</span>
            <app-tag color="blue">В ожидании доставки</app-tag>
          </div>
          <div class="flex items-center space-x-2">
            <span>ID:</span>
            <app-tag color="blue">321</app-tag>
          </div>
        </div>
        <div class="grid gap-x-6 grid-cols-2 md:w-5/6">
          <div class="flex flex-col space-y-3">
            <div class="flex items-center space-x-2">
              <span>{{ $t("app.location") }}:</span>
              <p>Ташкент, Чиланзар Катта Хирмонтепа 1</p>
            </div>
            <div class="flex items-center space-x-2">
              <span>{{ $t("app.paymentType") }}:</span>
              <p>Терминал</p>
            </div>
          </div>
          <div class="flex flex-col space-y-4">
            <div class="flex items-center space-x-2">
              <span>{{ $t("app.orderDate") }}:</span>
              <span>16/11/2023</span>
            </div>
            <div class="flex items-center space-x-2">
              <span>{{ $t("app.deliveryDate") }}:</span>
              <span>23/11/2023</span>
            </div>
          </div>
        </div>
      </div>
      <div class="h-px md:w-3/6 bg-line"></div>
      <div class="py-8 grid md:grid-cols-3 gap-12 items-center">
        <div class="grid gap-6 col-span-2">
          <div class="flex gap-x-4">
            <div class="w-28 h-28 rounded bg-gradient"></div>
            <div class="flex flex-col space-y-2">
              <h1 class="font-semibold">Название продукции:</h1>
              <p>
                Укажите информацию о продукции, чтобы посетителям было понятно с
                кем имеют дело.
              </p>
            </div>
          </div>
          <div class="flex gap-x-4">
            <div class="w-28 h-28 rounded bg-gradient"></div>
            <div class="flex flex-col space-y-2">
              <h1 class="font-semibold">Название продукции:</h1>
              <p>
                Укажите информацию о продукции, чтобы посетителям было понятно с
                кем имеют дело.
              </p>
            </div>
          </div>
        </div>
        <div class="rounded bg-gradient p-8 md:w-80 justify-self-end space-y-3">
          <h1 class="text-primary font-semibold text-base">
            Информация о покупке:
          </h1>
          <div class="space-y-2">
            <p>
              {{ $t("shared.count") }}:
              {{ $t("shared.countValue", { value: 2 }) }}
            </p>
            <p>
              {{ $t("shared.size") }}:
              {{ $t("shared.sizeValue", { value: 13.2 }) }}
            </p>
          </div>
          <div class="h-px bg-primary"></div>
          <div class="space-y-2">
            <p class="font-semibold">
              {{ $t("app.salary") }}:
              {{ $t("shared.priceValue", { value: $n(15000000) }) }}
            </p>
            <p class="font-semibold">
              {{ $t("app.tatalPrice") }}:
              {{ $t("shared.priceValue", { value: $n(7500000) }) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/colors.scss";

.content {
  background: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  border-radius: 10px;

  &__header {
    height: 60px;
    padding: 0 24px;
    border-bottom: 1px solid #f2f2f2;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    row-gap: 12px;
  }

  &__table {
    border-bottom: 1px solid #f2f2f2;
  }
}
.bg-gradient {
  background: $base-gradient;
}
</style>
