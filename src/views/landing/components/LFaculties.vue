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
            <div class="faculty w-full py-6 px-4 sm:py-12 sm:px-8 pb-[100px] relative h-[510px] md:h-[610px] !bg-left !bg-cover flex flex-col justify-between"
                :style="`background: url(${faculty.bg}), no-repeat, 50%;`" v-for="faculty in faculties" :key="faculty.id">
                <h6
                    class="text-white font-bold text-4xl sm:text-[42px] sm:leading-[51px] my-5 sm:mt-10 sm:mb-[37px] max-w-[284px]">
                    {{ $t(`landing.${faculty.name}`) }}
                </h6>
                <p class=" text-white font-normal text-sm sm:text-base">
                    {{ $t(`landing.${faculty.name}_desc`) }}
                </p>
                <span class="text-white font-medium text-base block">{{ faculty.semesters }} {{ $t('landing.semesters') }}</span>
                <a :href="faculty.link" target="_blank" class="text-white underline text-xl font-medium" rel="noopener noreferrer">Read more</a>
            </div>
            <!-- <div class="py-[60px] w-full absolute bottom-0 flex items-center justify-center flex-wrap gap-5 sm:gap-12"
                style="background: rgba(118, 118, 118, 0.46)">
                <a href="https://www.akfauniversity.uz/" target="_blank"
                    class="py-3 px-4 sm:py-4 sm:px-[23px] uppercase text-sm sm:text-base font-bold hover:opacity-90 bg-[#9E9E9E] w-[229px] text-white rounded-xl flex items-center gap-1 justify-center">
                    {{ $t('landing.read_more') }}
                </a>
                <button @click="$router.push('/signin')"
                    class="gradient-button py-3 px-4 sm:py-4 sm:px-[23px] text-sm sm:text-base font-bold hover:opacity-90 w-[249px]">
                    {{ $t('landing.apply') }}
                </button>
            </div> -->
        </div>
    </section>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const faculties = ref([
    {
        id: 1,
        name: 'engineering',
        semesters: '8',
        bg: new URL('@/assets/images/landing/semester-bg-1.jpg', import.meta.url).href,
        link: 'https://www.akfauniversity.uz/programs/school-of-engineering'
    },
    {
        id: 2,
        name: 'business',
        semesters: '8',
        bg: new URL('@/assets/images/landing/semester-bg-2.jpg', import.meta.url).href,
        link: 'https://www.akfauniversity.uz/programs/school-of-business'
    },
    {
        id: 3,
        name: 'medical',
        semesters: '12',
        bg: new URL('@/assets/images/landing/semester-bg-3.jpg', import.meta.url).href,
        link: 'https://www.akfauniversity.uz/programs/medical-school'
    },
    {
        id: 4,
        name: 'dental',
        semesters: '10',
        bg: new URL('@/assets/images/landing/semester-bg-4.jpg', import.meta.url).href,
        link: 'https://www.akfauniversity.uz/programs/dental-school'
    }
])

</script>