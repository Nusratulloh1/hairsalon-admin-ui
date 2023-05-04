<template>
  <div class="wrapper">
    <div class="content p-4 md:p-8">
      <RouterView />
      <div class="w-full text-center mt-14">
        <a class="text-sm text-center px-4" href="tel:+998 71 200-05-22">If you have questions or difficulties,
          please contact us:
          <span class="text-primary">+998 71 200-05-22</span></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
<style scoped lang="scss">
.wrapper {
  height: 100vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // background: center / cover no-repeat url("@/assets/images/login-bg.png");
}
</style>
