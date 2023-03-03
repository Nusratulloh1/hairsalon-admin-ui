<template>
  <div class="app-footer">
    <p>Для подробной информации</p>
    <div class="flex items-center space-x-12">
      <a href="http://axelerp.uz" target="_blank" rel="noopener noreferrer"
        >www.axelerp.uz</a
      >
      <a href="tel:++998900000000">+99890 000 00 00</a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/assets/styles/colors.scss";
.app-footer {
  background: $base-gradient;
  height: 86px;
  padding: 0 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  border-radius: 10px 10px 0 0;
}
</style>
