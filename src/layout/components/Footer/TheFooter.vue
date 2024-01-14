<template>
  <div class="app-footer">
    <p class="leading-none">
      2023 Copyrights © <span class="text-primary">Shodmon Hair Salon</span>
    </p>
    <!-- <a class="text-sm mt-1 text-center px-8" href="tel:+998 97 737-30-98"
      > {{ $t("support") }}
      <span class="text-primary">+998 97 737-30-98</span></a
    > -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/assets/styles/colors.scss";
.app-footer {
  background: #fff;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 1.5px 2.6px 10px rgba(119, 119, 119, 0.1);
  p,
  a {
    font-weight: 400;
    font-size: 14px;
    // line-height: 50px;
    color: #898989;
  }
}
</style>
