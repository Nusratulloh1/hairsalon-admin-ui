<template>
    <header class="top-section relative">
        <nav
            class="xl:container mx-auto px-5 sm:px-7 md:px-9 lg:px-12 xl:px-0 2xl:max-w-[100%] 2xl:mx-0 sm:pt-10 2xl:px-[72px]">
            <ul class="flex sm:items-start justify-between">
                <li>
                    <a href="/">
                        <AUIconWithName class=" w-28 h-28 sm:w-auto sm:h-auto"></AUIconWithName>
                    </a>
                </li>
                <li class="flex items-center gap-3 sm:gap-6">
                    <a href="tel:+998 71 200-05-22"
                        class=" hidden md:flex items-center gap-1 sm:gap-[10px] font-semibold text-white text-xs sm:text-xl">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.456 14.4136C19.2889 15.6839 18.665 16.85 17.701 17.6939C16.7369 18.5379 15.4986 19.0021 14.2173 18.9998C6.77354 18.9998 0.717294 12.9436 0.717294 5.49981C0.714997 4.21852 1.17919 2.98021 2.02317 2.01615C2.86715 1.05209 4.0332 0.428223 5.30354 0.26106C5.62478 0.221836 5.95009 0.287556 6.23091 0.448409C6.51172 0.609262 6.73299 0.856621 6.86167 1.15356L8.84167 5.57387V5.58512C8.94019 5.81242 8.98088 6.06058 8.9601 6.30744C8.93932 6.5543 8.85773 6.79217 8.72261 6.99981C8.70573 7.02512 8.68792 7.04856 8.66917 7.072L6.71729 9.38575C7.41948 10.8126 8.91198 12.292 10.3576 12.9961L12.6395 11.0545C12.6619 11.0357 12.6854 11.0181 12.7098 11.002C12.9173 10.8636 13.1559 10.7792 13.4043 10.7562C13.6526 10.7333 13.9027 10.7727 14.132 10.8707L14.1442 10.8764L18.5607 12.8554C18.8582 12.9837 19.1062 13.2047 19.2675 13.4856C19.4289 13.7664 19.4951 14.092 19.456 14.4136Z"
                                fill="#EA2127" />
                        </svg>
                        <span>+998 71 200-05-22</span>
                    </a>
                    <div class="flex flex-wrap items-center">
                        <el-dropdown>
                            <button
                                class="bg-blur  text-[#EBEBEB] text-xs sm:text-base font-semibold flex items-center uppercase gap-2 p-[6px] sm:p-[10px] rounded-xl">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.7173 0.25C8.78892 0.25 6.90386 0.821828 5.30048 1.89317C3.6971 2.96451 2.44742 4.48726 1.70946 6.26884C0.97151 8.05042 0.778427 10.0108 1.15463 11.9021C1.53084 13.7934 2.45944 15.5307 3.823 16.8943C5.18656 18.2579 6.92384 19.1865 8.81516 19.5627C10.7065 19.9389 12.6669 19.7458 14.4485 19.0078C16.23 18.2699 17.7528 17.0202 18.8241 15.4168C19.8955 13.8134 20.4673 11.9284 20.4673 10C20.4646 7.41498 19.4365 4.93661 17.6086 3.10872C15.7807 1.28084 13.3023 0.25273 10.7173 0.25ZM18.0645 6.25H14.7429C14.3602 4.74392 13.7174 3.31623 12.8435 2.03125C13.96 2.33127 15.0012 2.86162 15.9004 3.58818C16.7996 4.31475 17.5367 5.22146 18.0645 6.25ZM10.7173 1.76031C11.8423 2.97906 12.686 4.53062 13.1895 6.25H8.2451C8.74854 4.53062 9.59229 2.98094 10.7173 1.76031ZM7.71729 10C7.71741 9.2461 7.78013 8.49352 7.90479 7.75H13.5298C13.7785 9.23969 13.7785 10.7603 13.5298 12.25H7.90479C7.78013 11.5065 7.71741 10.7539 7.71729 10ZM8.2451 13.75H13.1895C12.686 15.4694 11.8423 17.0191 10.7173 18.2397C9.59229 17.0191 8.74854 15.4694 8.2451 13.75ZM12.8435 17.9688C13.7174 16.6838 14.3602 15.2561 14.7429 13.75H18.0645C17.5367 14.7785 16.7996 15.6852 15.9004 16.4118C15.0012 17.1384 13.96 17.6687 12.8435 17.9688ZM15.0495 12.25C15.2732 10.7583 15.2732 9.24166 15.0495 7.75H18.6551C19.0714 9.22112 19.0714 10.7789 18.6551 12.25H15.0495Z"
                                        fill="#EA2127" />
                                </svg>
                                <span class="hidden sm:flex">{{ $i18n.locale || 'EN' }}</span>
                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.71729 1L6.71729 6L11.7173 1" stroke="white" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
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
                    <router-link to="/login"
                        class="bg-blur text-[#EBEBEB] text-xs sm:text-base font-semibold flex items-center gap-2 p-[6px] sm:p-[10px] rounded-xl sm:w-[114px]">
                        <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.3672 18.6251C20.3013 18.7391 20.2066 18.8338 20.0926 18.8997C19.9785 18.9655 19.8492 19.0001 19.7175 19.0001H1.71749C1.58591 19 1.45667 18.9652 1.34276 18.8993C1.22885 18.8335 1.13429 18.7388 1.06855 18.6248C1.00282 18.5108 0.968228 18.3815 0.968262 18.2499C0.968296 18.1183 1.00295 17.9891 1.06874 17.8751C2.49656 15.4067 4.69687 13.6367 7.26468 12.7976C5.99452 12.0415 5.00769 10.8893 4.45573 9.51804C3.90377 8.14678 3.8172 6.63224 4.20931 5.20701C4.60143 3.78178 5.45054 2.52467 6.62627 1.62873C7.80199 0.732786 9.23931 0.247559 10.7175 0.247559C12.1957 0.247559 13.633 0.732786 14.8087 1.62873C15.9844 2.52467 16.8336 3.78178 17.2257 5.20701C17.6178 6.63224 17.5312 8.14678 16.9793 9.51804C16.4273 10.8893 15.4405 12.0415 14.1703 12.7976C16.7381 13.6367 18.9384 15.4067 20.3662 17.8751C20.4322 17.989 20.467 18.1183 20.4672 18.25C20.4674 18.3816 20.4329 18.511 20.3672 18.6251Z"
                                fill="#EA2127" />
                        </svg>
                        Log in
                    </router-link>
                </li>
            </ul>
        </nav>
        <div class="max-w-[1365px] mx-auto mt-[6.5vh] text-center px-5 sm:px-0">
            <h2 class="font-semibold text-3xl sm:text-5xl  lg:text-[56px] lg:leading-[68px] text-white">
                {{ $t('landing.dear') }}
                <br class="mt-1">
                {{ $t('landing.welcome') }}
                <span class="text-[#FF0000]">AKFA</span>
                {{ $t('landing.au') }}
                {{ $t('landing.welcome2') }}
            </h2>
            <h4
                class=" mt-[5.5vh] font-semibold text-base sm:text-2xl md:text-3xl lg:text-[34px] uppercase text-[#F6F6F6] lg:leading-[41px]">
                {{ $t('landing.admission_open') }}
            </h4>
        </div>
        <!-- <div class="flex items-center flex-wrap justify-center gap-[14px] mt-[4vh]">
            <button @click="scrollToElement('faculty')"
                class="px-5 py-3 sm:px-6 sm:py-4 font-bold text-sm sm:text-lg bg-[#9E9E9E] rounded-[10px] text-white sm:min-w-[310px] opacity-90 hover:opacity-100">{{
                    $t('landing.what_directions') }}</button>
            <button
            @click="scrollToElement('life')"
                class="px-5 py-3 sm:px-6 sm:py-4 font-bold text-sm sm:text-lg bg-[#9E9E9E] rounded-[10px] text-white w-[236px] sm:w-[310px] opacity-90 hover:opacity-100">{{ $t('landing.au_life') }}</button>
            <button @click="scrollToElement('video')"
                class="px-5 py-3 sm:px-6 sm:py-4 font-bold text-sm sm:text-lg bg-[#9E9E9E] rounded-[10px] text-white min-w-[236px] sm:min-w-[310px] opacity-90 hover:opacity-100">{{
                    $t('landing.how_apply') }}</button>
        </div> -->
        <!-- <hr class=" mt-[4.2vh] mb-[5.4vh]" /> -->
        <div class="flex items-center justify-center mt-5">
            <!-- <button @click="$router.push('/login')"
                class="px-5 py-3 sm:px-9 sm:py-5 font-bold text-base sm:text-xl bg-[#383838] rounded-[10px] text-white w-[303px] hover:bg-[#343434] transition-all">{{
                    $t('landing.login') }}</button> -->
            <button @click="$router.push('/signin')"
                class="bg-[#EA2127] text-white rounded-xl px-5 py-3 sm:px-9 font-bold text-base sm:text-xl w-[251px]">{{
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
<style scoped>
.bg-blur {
    background: rgba(253, 253, 253, 0.4);
    backdrop-filter: blur(2px);
}
</style>