<template>
    <header class="top-section relative">
        <nav class="container 2xl:max-w-[100%] mx-auto 2xl:mx-0 sm:pt-9 px-5 2xl:px-[72px]">
            <ul class="flex items-center justify-between">
                <li>
                    <a href="/">
                        <AUIconWithName class=" w-28 h-28 sm:w-auto sm:h-auto"></AUIconWithName>
                    </a>
                </li>
                <li>
                    <a href="tel:+998 71 200-05-22"
                        class="flex items-center gap-1 sm:gap-[14px] font-semibold text-white text-sm sm:text-2xl lg:text-[32px]">
                        <svg width="30" height="30" class=" w-4 h-4 sm:w-auto sm:h-auto" viewBox="0 0 30 30" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.03333 12.9833C8.43333 17.7 12.3 21.55 17.0167 23.9667L20.6833 20.3C21.1333 19.85 21.8 19.7 22.3833 19.9C24.25 20.5167 26.2667 20.85 28.3333 20.85C29.25 20.85 30 21.6 30 22.5167V28.3333C30 29.25 29.25 30 28.3333 30C12.6833 30 0 17.3167 0 1.66667C0 0.75 0.75 0 1.66667 0H7.5C8.41667 0 9.16667 0.75 9.16667 1.66667C9.16667 3.75 9.5 5.75 10.1167 7.61667C10.3 8.2 10.1667 8.85 9.7 9.31667L6.03333 12.9833Z"
                                fill="#FF0A0A" />
                        </svg>
                        <span>+998 71 200-05-22</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class=" container mx-auto max-w-[886px] mt-[17vh] text-center px-5 sm:px-0">
            <h2 class="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[87px] text-white">
                ДОБРО ПОЖАЛОВАТЬ В
                <br>
                <span class="text-[#FF0000]">УНИВЕРСИТЕТ AKFA</span>
            </h2>
            <h4
                class=" mt-[3.3vh] font-semibold text-base sm:text-2xl md:text-3xl lg:text-4xl uppercase text-[#F6F6F6] md:leading-[44px]">
                приём документов на 2023-2024
                <br>
                учебный год уже открыт
            </h4>
            <button class="gradient-button px-5 py-3 sm:px-9 sm:py-5 font-bold text-base sm:text-xl mt-[3.3vh]">ПОДАТЬ
                ДОКУМЕНТЫ</button>
            <button class="absolute bottom-[45px] left-0 right-0 m-auto w-8 sm:w-16 animate-bounce" @click="scrollToElement">
                <svg viewBox="0 0 59 34" class=" w-8 h-8 sm:w-[59px] sm:h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.16755 6.73732L27.3206 33.1382C27.6319 33.4516 27.9692 33.6741 28.3325 33.8057C28.6957 33.9373 29.0849 34.002 29.5 34C29.9151 34 30.3043 33.9341 30.6675 33.8025C31.0308 33.6709 31.3681 33.4495 31.6794 33.1382L57.9103 6.73732C58.6368 6.00613 59 5.09216 59 3.99538C59 2.89861 58.6108 1.95852 57.8325 1.17511C57.0541 0.391705 56.146 0 55.1082 0C54.0704 0 53.1623 0.391705 52.3839 1.17511L29.5 24.2073L6.6161 1.17511C5.88962 0.443932 4.99399 0.0783386 3.92919 0.0783386C2.86438 0.0783386 1.94384 0.470043 1.16755 1.25345C0.389183 2.03686 0 2.95084 0 3.99538C0 5.03993 0.389183 5.95391 1.16755 6.73732Z"
                        fill="white" />
                </svg>
            </button>
        </div>
    </header>
</template>
<script lang="ts" setup>
import { AUIconWithName } from "@/components/icons";
import { ref } from "vue";
const scrollToElement = () => {
    const el = document.getElementById('faculty')
    if (el) {
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }

}
</script>