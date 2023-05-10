<template>
    <section>
        <div class="xl:container mx-auto px-5 sm:px-7 md:px-9 lg:px-12 xl:px-0 py-10">
            <h3
                class="text-white uppercase text-xl  sm:text-3xl lg:text-[42px] lg:leading-[51px] font-bold max-w-[564px] mb-4">
                OUR SPECIALISTS
            </h3>
            <carousel :transition="500" @init="initSlider" id="teachers" ref="teachersSlide" :autoplay="4000"
                :breakpoints="breakpoints" class=" mt-14">
                <slide v-for="teacher in teachers" :key="teacher.id">
                    <div class="w-[95%] teacher">
                        <img :src="teacher.image" width="200" height="176" class="object-cover object-center" alt="teacgher" />
                        <p class=" text-[#C02221] text-[10px] leading-3 font-bold uppercase text-start mt-[30%]">{{
                            teacher.position }}</p>
                        <h5 class="text-white my-2 text-lg font-medium text-start">
                            {{ teacher.name }}
                        </h5>
                        <!-- <p class=" text-[#C1C1C1] text-xs font-medium text-start">
                            Understanding the importance of support to the applicants, AKFA University does offer merit
                            scholarship up to 100% to the prospective students who participate and gain the highest scores
                            in the scholarship-based entrance examination.
                        </p> -->
                    </div>
                </slide>
                <template #addons="{ slidesCount }">
                    <Pagination v-if="slidesCount > 1" class="container m-auto px-5 sm:px-10 xl:px-0 xl:!hidden" />
                        <Pagination v-if="slidesCount / 5 > 1" class="container m-auto px-5 sm:px-10 xl:px-0 !hidden xl:!flex" />
                </template>
            </carousel>
        </div>
    </section>
</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { ref } from 'vue'
const teachersSlide = ref();
const teachers = ref([
    {
        id: 1,
        name: 'Dr. Gyo Jun, PhD',
        position: 'Professor & Project Manager',
        body: 'AKFA University предлагает индивидуальный подход к каждому студенту и готов оказать помощь в любой ситуации. Наши преподаватели и наставники всегда окажут вам необходимую поддержку и готовы помочь преодолеть любые трудности.',
        image: new URL('@/assets/images/landing/teacher-1.webp', import.meta.url).href,
    },
    {
        id: 2,
        name: 'Dr.Niladri Maiti, PhD',
        position: 'Dean of AU Dental School',
        body: 'AKFA University предлагает индивидуальный подход к каждому студенту и готов оказать помощь в любой ситуации. Наши преподаватели и наставники всегда окажут вам необходимую поддержку и готовы помочь преодолеть любые трудности.',
        image: new URL('@/assets/images/landing/teacher-3.webp', import.meta.url).href,
    },
    {
        id: 3,
        name: 'Dr. Sajid Khan, PhD',
        position: 'Associate Professor',
        body: 'AKFA University предлагает индивидуальный подход к каждому студенту и готов оказать помощь в любой ситуации. Наши преподаватели и наставники всегда окажут вам необходимую поддержку и готовы помочь преодолеть любые трудности.',
        image: new URL('@/assets/images/landing/teacher-2.webp', import.meta.url).href,
    },
    {
        id: 4,
        name: 'Dr. Tofazzal Hossain',
        position: 'Dean of AU Medical School',
        body: 'AKFA University предлагает индивидуальный подход к каждому студенту и готов оказать помощь в любой ситуации. Наши преподаватели и наставники всегда окажут вам необходимую поддержку и готовы помочь преодолеть любые трудности.',
        image: new URL('@/assets/images/landing/teacher-6.webp', import.meta.url).href,
    },
    {
        id: 5,
        name: 'Sergey Puchka',
        position: 'Director of strategy',
        body: 'AKFA University предлагает индивидуальный подход к каждому студенту и готов оказать помощь в любой ситуации. Наши преподаватели и наставники всегда окажут вам необходимую поддержку и готовы помочь преодолеть любые трудности.',
        image: new URL('@/assets/images/landing/teacher-5.webp', import.meta.url).href,
    },
    {
        id: 6,
        name: 'Dr. Iyer Lakshmi',
        position: 'Professor of Medicine at AKFA University',
        body: 'AKFA University предлагает индивидуальный подход к каждому студенту и готов оказать помощь в любой ситуации. Наши преподаватели и наставники всегда окажут вам необходимую поддержку и готовы помочь преодолеть любые трудности.',
        image: new URL('@/assets/images/landing/teacher-7.webp', import.meta.url).href,
    },
    {
        id: 6,
        name: 'Nicola Pasquali',
        position: 'Academic General Director',
        body: 'AKFA University предлагает индивидуальный подход к каждому студенту и готов оказать помощь в любой ситуации. Наши преподаватели и наставники всегда окажут вам необходимую поддержку и готовы помочь преодолеть любые трудности.',
        image: new URL('@/assets/images/landing/teacher-4.webp', import.meta.url).href,
    }
])
const breakpoints = ref(
    {
        200: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        574: {
            itemsToShow: 2,
            snapAlign: 'center',
        },
        1024: {
            itemsToShow: 4,
            snapAlign: 'center',
        },
        1280: {
            itemsToShow: 5,
            snapAlign: 'center',
        },
    },
)
const initSlider = (): void => {
    teachersSlide.value.updateSlidesData()
    
}
</script>
<style lang="scss">
#teachers {
    .teacher {
        height: 420px;
        border: 1.43101px solid #FFFFFF;
        box-shadow: 0px 9.13678px 12.1824px -3.04559px rgba(16, 24, 40, 0.08), 0px 3.04559px 4.56839px -1.5228px rgba(16, 24, 40, 0.03);
        border-radius: 11.448px;
        padding: 18.2736px 18.2736px 24.3647px;
        img{
            height: 176px;
            width: 100%;
        }
    }

    .carousel__pagination {
        justify-content: center;
        margin: auto;
        margin-top: 54px;
        position: relative;

        .carousel__pagination-item {
            .carousel__pagination-button {
                &::after {
                    width: 13px;
                    height: 13px;
                    background: #AAAAAA;
                    border-radius: 50%;

                    &:hover {
                        background: #FF0000;
                    }
                }

            }

            .carousel__pagination-button--active {
                &::after {
                    width: 44px;
                    height: 13px;
                    background: #FF0000;
                    border-radius: 8px;
                }
            }
        }
    }
}
</style>