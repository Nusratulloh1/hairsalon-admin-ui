<template>
    <section class="container mx-auto">
        <Carousel id="gallery" class="w-full" :items-to-show="1" :wrap-around="true"
            v-model="currentSlide">
            <Slide v-for="(slide,i) in images" :key="i">
                <div class="carousel__item w-full">
                    <img :src="slide" class="w-full h-[766px] object-cover object-center" alt="gallery">
                </div>
            </Slide>
            <template #addons>
                <navigation>
                    <template #next>
                        <span>
                            <svg width="34" height="59" viewBox="0 0 34 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.73732 57.8325L33.1382 31.6794C33.4516 31.3681 33.6741 31.0308 33.8057 30.6675C33.9373 30.3043 34.002 29.9151 34 29.5C34 29.0849 33.9341 28.6957 33.8025 28.3325C33.6709 27.9692 33.4495 27.6319 33.1382 27.3206L6.73732 1.08971C6.00613 0.363236 5.09216 0 3.99538 0C2.89861 0 1.95852 0.389182 1.17511 1.16755C0.391705 1.94591 0 2.854 0 3.89182C0 4.92964 0.391705 5.83773 1.17511 6.61609L24.2073 29.5L1.17511 52.3839C0.443932 53.1104 0.0783386 54.006 0.0783386 55.0708C0.0783386 56.1356 0.470043 57.0562 1.25345 57.8325C2.03686 58.6108 2.95084 59 3.99538 59C5.03993 59 5.95391 58.6108 6.73732 57.8325Z"
                                    fill="white" />
                            </svg>
                        </span>
                    </template>
                    <template #prev>
                        <span>
                            <svg width="34" height="59" viewBox="0 0 34 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M27.2627 57.8325L0.861799 31.6794C0.548435 31.3681 0.325947 31.0308 0.194334 30.6675C0.0627216 30.3043 -0.00204013 29.9151 4.89631e-05 29.5C4.89631e-05 29.0849 0.0658553 28.6957 0.197468 28.3325C0.329081 27.9692 0.550524 27.6319 0.861799 27.3206L27.2627 1.08971C27.9939 0.363236 28.9078 0 30.0046 0C31.1014 0 32.0415 0.389182 32.8249 1.16755C33.6083 1.94591 34 2.854 34 3.89182C34 4.92964 33.6083 5.83773 32.8249 6.61609L9.79266 29.5L32.8249 52.3839C33.5561 53.1104 33.9217 54.006 33.9217 55.0708C33.9217 56.1356 33.53 57.0562 32.7465 57.8325C31.9631 58.6108 31.0492 59 30.0046 59C28.9601 59 28.0461 58.6108 27.2627 57.8325Z"
                                    fill="white" />
                            </svg>
                        </span>
                    </template>
                </navigation>
            </template>
        </Carousel>

        <Carousel id="thumbnails" class="mt-8" :items-to-show="4" :wrap-around="true" :breakpoints="breakpoints"
            v-model="currentSlide" ref="carousel">
            <Slide v-for="(slide, i) in images" :key="slide">
                <div class="carousel__item bg-slate-200 w-[95%] h-[194px]" @click="slideTo(i - 1)">
                    <img :src="slide" class="w-full h-full" alt="gallery">
                </div>
            </Slide>
        </Carousel>
    </section>
</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue';

const breakpoints = {
    200: {
        itemsToShow: 2,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 4,
        snapAlign: 'center',
    },
}
const images = ref([
    new URL('@/assets/images/landing/gallery-1.jpg', import.meta.url).href,
    new URL('@/assets/images/landing/gallery-2.jpg', import.meta.url).href,
    new URL('@/assets/images/landing/gallery-3.jpg', import.meta.url).href,
    new URL('@/assets/images/landing/gallery-4.jpg', import.meta.url).href,
    new URL('@/assets/images/landing/gallery-5.jpg', import.meta.url).href
    
])
const currentSlide = ref(0)

const slideTo = (val: number): void => {
    currentSlide.value = val
}

</script>
<style>
#gallery .carousel__next {
    right: 40px;
}

#gallery .carousel__prev {
    left: 40px;
}
</style>