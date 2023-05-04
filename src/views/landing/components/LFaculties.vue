<template>
    <section>
        <!-- <div class="container mx-auto px-5 sm:px-0">
            <h5 class="text-white font-bold text-xl  sm:text-3xl lg:text-[42px] lg:leading-[51px] uppercase">
                Выбери свой <span class="text-[#FF0000]">карьерный путь:</span>
            </h5>
            <p class="text-white mt-6 sm:mt-8 max-w-[641px] text-base sm:text-xl font-[450]" style="font-family: 'Suisse Intl';">
                Мы знаем, как трудно абитуриенту принимать важные решения, поэтому мы сделаем все возможное, чтобы помочь
                тебе найти свой путь и стать отличным специалистом в своей области. Будь уверенным в своем будущем!
            </p>
        </div> -->
        <div class="faculties grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 relative">
            <div class="faculty w-full py-6 px-4 sm:py-12 sm:px-8 relative h-[510px] md:h-[616px] !bg-center !bg-cover"
                :style="`background: url(${faculty.bg}), no-repeat, 50%;`" v-for="faculty in faculties" :key="faculty.id">
                <span class="text-white font-medium text-base">{{ faculty.semesters }} семестров</span>
                <h6
                    class="text-white font-bold text-4xl sm:text-[42px] sm:leading-[51px] my-5 sm:mt-10 sm:mb-[37px] max-w-[284px]">
                    {{ faculty.name }}
                </h6>
                <p class=" text-white font-normal text-sm sm:text-base">
                    {{ faculty.desc }}
                </p>
                <!-- <button
                    class="gradient-button py-3 px-4 sm:py-4 sm:px-[23px] text-sm sm:text-base font-bold absolute bottom-[48px] hover:opacity-90">
                    ПОДАТЬ ДОКУМЕНТЫ
                </button> -->
            </div>
            <div class="py-[60px] w-full absolute bottom-0 flex items-center justify-center flex-wrap gap-5 sm:gap-12"
                style="background: rgba(118, 118, 118, 0.46)">
                <a
                href="tel:+998+71+200-05-22"
                    class="py-3 px-4 sm:py-4 sm:px-[23px] text-sm sm:text-base font-bold hover:opacity-90 bg-[#9E9E9E] w-[229px] text-white rounded-xl flex items-center gap-1 justify-center">
                    <svg width="19" height="16" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.7054 6.21517C5.12746 7.8361 6.9953 8.92957 9.02156 9.32452L9.97203 7.38237C10.091 7.14002 10.3207 7.00511 10.5551 7.00902C11.3184 7.03045 12.1025 6.91943 12.874 6.66488C13.2179 6.55141 13.5769 6.7616 13.6808 7.13722L14.336 9.50603C14.4399 9.88166 14.2474 10.2738 13.9035 10.3873C8.08502 12.3072 1.94494 8.71263 0.187194 2.35747C0.0833011 1.98184 0.278842 1.58866 0.61965 1.47621L2.78842 0.760599C3.13233 0.647124 3.49137 0.857316 3.59527 1.23294C3.82832 2.07556 4.17782 2.85021 4.61675 3.53258C4.74949 3.74359 4.77386 4.02728 4.65493 4.26963L3.7054 6.21517Z"
                            fill="white" />
                    </svg>
                    MORE
                </a>
                <button @click="$router.push('/login')"
                    class="gradient-button py-3 px-4 sm:py-4 sm:px-[23px] text-sm sm:text-base font-bold hover:opacity-90 w-[249px]">
                    APPLY NOW
                </button>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const faculties = ref([
    {
        id: 1,
        name: 'Engineering School',
        desc: `We provide students with a first-class academic experience with a focus on research and development, building educational processes in accordance with leading international practices.`,
        semesters: '8',
        bg: new URL('@/assets/images/landing/semester-bg-1.webp', import.meta.url).href,
    },
    {
        id: 2,
        name: 'Business School',
        desc: `Business training based on the case method, which is inspired by the Harvard Business School. We prepare students for successful careers as leaders and entrepreneurs.`,
        semesters: '8',
        bg: new URL('@/assets/images/landing/semester-bg-2.webp', import.meta.url).href,
    },
    {
        id: 3,
        name: 'Medical School',
        desc: `The mission of the school is to prepare good doctors with comprehensive knowledge, outstanding skills and love for patients, based on advanced international medical education systems.`,
        semesters: '12',
        bg: new URL('@/assets/images/landing/semester-bg-3.webp', import.meta.url).href,
    },
    {
        id: 4,
        name: 'Dental School',
        desc: `Through our partnership with ADEE (Association for Dental Education in Europe), we provide our students with a high-quality international program, participate in international competitions, grants, exchange programs, digital education`,
        semesters: '10',
        bg: new URL('@/assets/images/landing/semester-bg-4.webp', import.meta.url).href,
    }
])

</script>