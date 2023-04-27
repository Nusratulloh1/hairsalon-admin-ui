<template>
    <div class=" landing">
        <header class="top-section relative">
            <nav class=" pl-[72px] pr-[79px] pt-9">
                <ul class="flex items-center justify-between">
                    <li>
                        <AUIconWithName></AUIconWithName>
                    </li>
                    <li>
                        <a href="tel:+998 71 200-05-22"
                            class="flex items-center gap-[14px] font-semibold text-white text-[32px]">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.03333 12.9833C8.43333 17.7 12.3 21.55 17.0167 23.9667L20.6833 20.3C21.1333 19.85 21.8 19.7 22.3833 19.9C24.25 20.5167 26.2667 20.85 28.3333 20.85C29.25 20.85 30 21.6 30 22.5167V28.3333C30 29.25 29.25 30 28.3333 30C12.6833 30 0 17.3167 0 1.66667C0 0.75 0.75 0 1.66667 0H7.5C8.41667 0 9.16667 0.75 9.16667 1.66667C9.16667 3.75 9.5 5.75 10.1167 7.61667C10.3 8.2 10.1667 8.85 9.7 9.31667L6.03333 12.9833Z"
                                    fill="#FF0A0A" />
                            </svg>
                            <span>+998 71 200-05-22</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class=" max-w-[886px] mx-auto mt-[17vh] text-center">
                <h2 class="font-bold text-7xl leading-[87px] text-white">
                    ДОБРО ПОЖАЛОВАТЬ В
                    <br>
                    <span class="text-[#FF0000]">УНИВЕРСИТЕТ AKFA</span>
                </h2>
                <h4 class=" mt-[3.3vh] font-semibold text-4xl uppercase text-[#F6F6F6] leading-[44px]">
                    приём документов на 2023-2024
                    <br>
                    учебный год уже открыт
                </h4>
                <button class="gradient-button w-[303px] px-9 py-5 font-bold text-xl mt-[3.3vh]">ПОДАТЬ ДОКУМЕНТЫ</button>
                <button class="absolute bottom-[38px] left-0 right-0 m-auto w-16">
                    <svg width="59" height="34" viewBox="0 0 59 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.16755 6.73732L27.3206 33.1382C27.6319 33.4516 27.9692 33.6741 28.3325 33.8057C28.6957 33.9373 29.0849 34.002 29.5 34C29.9151 34 30.3043 33.9341 30.6675 33.8025C31.0308 33.6709 31.3681 33.4495 31.6794 33.1382L57.9103 6.73732C58.6368 6.00613 59 5.09216 59 3.99538C59 2.89861 58.6108 1.95852 57.8325 1.17511C57.0541 0.391705 56.146 0 55.1082 0C54.0704 0 53.1623 0.391705 52.3839 1.17511L29.5 24.2073L6.6161 1.17511C5.88962 0.443932 4.99399 0.0783386 3.92919 0.0783386C2.86438 0.0783386 1.94384 0.470043 1.16755 1.25345C0.389183 2.03686 0 2.95084 0 3.99538C0 5.03993 0.389183 5.95391 1.16755 6.73732Z"
                            fill="white" />
                    </svg>
                </button>
            </div>
        </header>
        <section class="container mx-auto pt-[121px] pb-[106px]">
            <h5 class="text-white font-bold text-[42px] leading-[51px] uppercase">
                Выбери свой <span class="text-[#FF0000]">карьерный путь:</span>
            </h5>
            <p class="text-white mt-8 w-[641px] text-xl font-[450]" style="font-family: 'Suisse Intl';">
                Мы знаем, как трудно абитуриенту принимать важные решения, поэтому мы сделаем все возможное, чтобы помочь
                тебе найти свой путь и стать отличным специалистом в своей области. Будь уверенным в своем будущем!
            </p>
        </section>
    </div>
</template>
<script lang="ts" setup>
import { AUIconWithName } from "@/components/icons";

</script>
<style lang="scss" scoped>

.landing {

    .top-section {
        height: 85vh;
        background: url("../../assets/images/landing/top-header.jpg"), no-repeat, 50%;
        background-size: cover;
    }

    .gradient-button {
        background: radial-gradient(127.68% 423.02% at 31.82% -13.39%, #B1040E 12.5%, #ED1C24 100%);
        color: white;
        border-radius: 10px;
    }
}
</style>