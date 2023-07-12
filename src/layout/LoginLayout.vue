<template>
  <div class="wrapper">
    <div class="content md:p-8">
      <el-dropdown class=" float-right border-b p-[17px] sm:border-none">
        <button
          class="text-[#131A34] bg-[#EDEDED] text-xs sm:text-base font-semibold flex items-center uppercase gap-2 px-[6px] py-[1.5px] sm:p-[8px] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_681_426)">
              <path
                d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM19.3472 8.25H16.0256C15.6429 6.74392 15.0001 5.31623 14.1263 4.03125C15.2427 4.33127 16.2839 4.86162 17.1831 5.58818C18.0823 6.31475 18.8194 7.22146 19.3472 8.25ZM12 3.76031C13.125 4.97906 13.9688 6.53062 14.4722 8.25H9.52782C10.0313 6.53062 10.875 4.98094 12 3.76031ZM9 12C9.00013 11.2461 9.06285 10.4935 9.1875 9.75H14.8125C15.0613 11.2397 15.0613 12.7603 14.8125 14.25H9.1875C9.06285 13.5065 9.00013 12.7539 9 12ZM9.52782 15.75H14.4722C13.9688 17.4694 13.125 19.0191 12 20.2397C10.875 19.0191 10.0313 17.4694 9.52782 15.75ZM14.1263 19.9688C15.0001 18.6838 15.6429 17.2561 16.0256 15.75H19.3472C18.8194 16.7785 18.0823 17.6852 17.1831 18.4118C16.2839 19.1384 15.2427 19.6687 14.1263 19.9688ZM16.3322 14.25C16.5559 12.7583 16.5559 11.2417 16.3322 9.75H19.9378C20.3541 11.2211 20.3541 12.7789 19.9378 14.25H16.3322Z"
                fill="#182857" />
            </g>
            <defs>
              <clipPath id="clip0_681_426">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span class="hidden sm:flex">{{ $i18n.locale || "EN" }}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="#131A34" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="locale in $i18n.availableLocales" :key="locale" @click="localeSet(locale)"
              class="uppercase">{{ locale }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <RouterView />
      <!-- <div class="w-full text-center mt-14">
        <a class="text-sm text-center px-4" href="tel:+998 71 200-05-22">If you have questions or difficulties,
          please contact us:
          <span class="text-primary">+998 71 200-05-22</span></a>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { setLocale } from "@/i18n";
import { useRouter } from 'vue-router'
const router = useRouter()
const localeSet = (new_locale: string) => {
  setLocale(new_locale);
  router.replace({ params: { locale: new_locale } });
};
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
