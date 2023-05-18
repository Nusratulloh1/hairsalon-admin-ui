<template>
    <header class="top-section relative">
        <nav
            class="xl:container mx-auto px-5 sm:px-7 md:px-9 lg:px-12 xl:px-0 2xl:max-w-[100%] 2xl:mx-0 sm:pt-9 2xl:px-[72px]">
            <ul class="flex items-center justify-between">
                <li>
                    <a href="/">
                        <AUIconWithName class=" w-28 h-28 sm:w-auto sm:h-auto"></AUIconWithName>
                    </a>
                </li>
                <li class="flex items-center gap-5">
                    <div class="flex flex-wrap items-center">
                        <el-dropdown>
                            <button
                                class=" bg-[#D5131C] text-[#EBEBEB] text-xs sm:text-sm flex items-center uppercase gap-2 p-[6px] sm:p-[10px] rounded-xl">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.0801 7.18077H13.6811L12.0399 11.4577C10.5414 11.1157 9.1294 10.4771 7.8898 9.58077C9.33744 8.02219 10.3016 6.08833 10.6682 4.00769H12.7042C12.9115 4.00769 13.1103 3.92665 13.2568 3.78239C13.4034 3.63813 13.4857 3.44247 13.4857 3.23846C13.4857 3.03445 13.4034 2.83879 13.2568 2.69453C13.1103 2.55027 12.9115 2.46923 12.7042 2.46923H7.52638V0.769231C7.52638 0.565218 7.44404 0.369561 7.29747 0.225302C7.1509 0.0810437 6.9521 0 6.74482 0C6.53754 0 6.33875 0.0810437 6.19218 0.225302C6.04561 0.369561 5.96327 0.565218 5.96327 0.769231V2.46923H0.781555C0.574274 2.46923 0.375482 2.55027 0.228912 2.69453C0.0823422 2.83879 0 3.03445 0 3.23846C0 3.44247 0.0823422 3.63813 0.228912 3.78239C0.375482 3.92665 0.574274 4.00769 0.781555 4.00769H2.82141C3.18634 6.08811 4.14916 8.02209 5.59594 9.58077C4.2629 10.5416 2.73565 11.2092 1.11762 11.5385C0.910343 11.5604 0.720403 11.6625 0.589589 11.8222C0.458775 11.982 0.397803 12.1864 0.420086 12.3904C0.442369 12.5944 0.546081 12.7813 0.708407 12.9101C0.870734 13.0388 1.07838 13.0989 1.28566 13.0769C1.3436 13.0783 1.40146 13.0719 1.4576 13.0577C3.38514 12.6695 5.19495 11.8467 6.74482 10.6538C8.1431 11.7331 9.75904 12.5067 11.485 12.9231L8.76124 20H10.7816L11.8367 17.0154H16.8933L17.9601 20H20L15.0801 7.18077ZM9.10121 4.00769C8.77647 5.71678 7.96309 7.29921 6.75655 8.56923C5.54911 7.29983 4.73558 5.71712 4.41188 4.00769H9.10121ZM12.4932 15.2192L14.3806 9.9L16.2524 15.2192H12.4932Z"
                                        fill="#EBEBEB" />
                                </svg>
                                {{ $i18n.locale }}
                                <svg width="10" height="5" viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.45294 0.471649H4.81877H1.54628C0.986276 0.471649 0.706276 1.14832 1.10294 1.54498L4.12461 4.56665C4.60877 5.05081 5.39627 5.05081 5.88044 4.56665L7.02961 3.41748L8.90211 1.54498C9.29294 1.14832 9.01294 0.471649 8.45294 0.471649Z"
                                        fill="#EBEBEB" />
                                </svg>
                            </button>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item v-for="locale in $i18n.availableLocales" @click="localeSet(locale)"
                                        class="uppercase">{{ locale }}</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                    <a href="tel:+998 71 200-05-22"
                        class="  hidden sm:flex items-center gap-1 sm:gap-[14px] font-semibold text-white text-xs sm:text-2xl lg:text-[32px] border-[#FF0000] border-b-[3px]">
                        <span>+998 71 200-05-22</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="max-w-[1175px] mx-auto mt-[6.5vh] text-center px-5 sm:px-0">
            <h2 class="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[65px] lg:leading-[79px] text-white">
                {{ $t('landing.welcome') }}
                <br>
                <span class="text-[#FF0000]">{{ $t('landing.au') }}</span>
                <br>
                {{ $t('landing.welcome2') }}
            </h2>
            <h4
                class=" mt-[2.8vh] font-semibold text-base sm:text-2xl md:text-3xl lg:text-5xl uppercase text-[#F6F6F6] lg:leading-[72px]">
                {{ $t('landing.admission_open') }}
            </h4>
        </div>
        <div class="flex items-center flex-wrap justify-center gap-[14px] mt-[4vh]">
            <!-- <button @click="scrollToElement('faculty')"
                class="px-5 py-3 sm:px-6 sm:py-4 font-bold text-sm sm:text-lg bg-[#9E9E9E] rounded-[10px] text-white sm:min-w-[310px] opacity-90 hover:opacity-100">{{
                    $t('landing.what_directions') }}</button> -->
            <!-- <button
            @click="scrollToElement('life')"
                class="px-5 py-3 sm:px-6 sm:py-4 font-bold text-sm sm:text-lg bg-[#9E9E9E] rounded-[10px] text-white w-[236px] sm:w-[310px] opacity-90 hover:opacity-100">{{ $t('landing.au_life') }}</button> -->
            <button @click="scrollToElement('video')"
                class="px-5 py-3 sm:px-6 sm:py-4 font-bold text-sm sm:text-lg bg-[#9E9E9E] rounded-[10px] text-white min-w-[236px] sm:min-w-[310px] opacity-90 hover:opacity-100">{{
                    $t('landing.how_apply') }}</button>
        </div>
        <hr class=" mt-[4.2vh] mb-[5.4vh]" />
        <div class="flex items-center flex-wrap justify-center gap-3 sm:gap-11 uppercase">
            <button @click="$router.push('/login')"
                class="px-5 py-3 sm:px-9 sm:py-5 font-bold text-base sm:text-xl bg-[#383838] rounded-[10px] text-white w-[303px] hover:bg-[#343434] transition-all">{{
                    $t('landing.login') }}</button>
            <button @click="$router.push('/signin')"
                class="gradient-button px-5 py-3 sm:px-9 sm:py-5 font-bold text-base sm:text-xl w-[303px]">{{
                    $t('landing.apply') }}
            </button>
        </div>
        <button class="absolute bottom-[24px] left-0 right-0 m-auto w-8 sm:w-16 animate-bounce"
            @click="scrollToElement('faculty')">
            <svg viewBox="0 0 59 34" class=" w-8 h-8 sm:w-[59px] sm:h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.16755 6.73732L27.3206 33.1382C27.6319 33.4516 27.9692 33.6741 28.3325 33.8057C28.6957 33.9373 29.0849 34.002 29.5 34C29.9151 34 30.3043 33.9341 30.6675 33.8025C31.0308 33.6709 31.3681 33.4495 31.6794 33.1382L57.9103 6.73732C58.6368 6.00613 59 5.09216 59 3.99538C59 2.89861 58.6108 1.95852 57.8325 1.17511C57.0541 0.391705 56.146 0 55.1082 0C54.0704 0 53.1623 0.391705 52.3839 1.17511L29.5 24.2073L6.6161 1.17511C5.88962 0.443932 4.99399 0.0783386 3.92919 0.0783386C2.86438 0.0783386 1.94384 0.470043 1.16755 1.25345C0.389183 2.03686 0 2.95084 0 3.99538C0 5.03993 0.389183 5.95391 1.16755 6.73732Z"
                    fill="white" />
            </svg>
        </button>
    </header>
</template>
<script lang="ts" setup>
import { AUIconWithName } from "@/components/icons";
import { setLocale } from "@/i18n"
import { ref } from "vue";
import { useRouter } from "vue-router";
const scrollToElement = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }

}
const router = useRouter()
const localeSet = (new_locale: string) => {
    setLocale(new_locale)
    router.replace({ params: { locale: new_locale } })

}
</script>