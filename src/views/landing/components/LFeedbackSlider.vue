<template>
    <section class="xl:container mx-auto px-5 sm:px-7 md:px-9 lg:px-12 xl:px-0 py-10 sm:py-20">
        <h3
            class="text-white uppercase text-xl  sm:text-3xl lg:text-[42px] lg:leading-[51px] font-bold max-w-[1026px] mb-7 sm:mb-14">
            {{ $t(`landing.students_think`) }}
        </h3>
        <carousel :items-to-show="2" :autoplay="6000" :transition="500" id="feedback" :breakpoints="breakpoints"
            class="h-[439px]">
            <slide v-for="feedback in feedbacks" :key="feedback.id">
                <div class="bg-white w-[95%] h-[439px] rounded-2xl  py-7 px-9 xl:py-[53px] xl:px-16">
                    <svg class=" w-10 h-8 sm:w-[62px] sm:h-12" viewBox="0 0 62 48" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M28.8001 35.46C28.8731 37.1634 28.5696 38.862 27.9115 40.4349C27.2533 42.0077 26.2565 43.4162 24.9921 44.56L24.9821 44.568C22.3642 46.8892 18.9548 48.1163 15.4581 47.996H15.4801C13.3666 48.1103 11.2538 47.7577 9.29182 46.9634C7.32986 46.1691 5.56689 44.9525 4.12814 43.4L4.12014 43.392C1.23572 39.9692 -0.23549 35.5756 0.00613983 31.106L0.00413983 31.148C-0.129905 26.5064 0.732817 21.8899 2.53414 17.61L2.45414 17.824C3.89237 14.4683 5.88785 11.3801 8.35614 8.68999L8.33414 8.71399C10.3733 6.5018 12.7362 4.61164 15.3421 3.10799L15.4861 3.03199C17.4571 1.89496 19.5141 0.91396 21.6381 0.0979902L21.9501 -0.00800977L28.2181 10.572C25.6135 11.6229 23.3272 13.3336 21.5841 15.536L21.5581 15.57C19.8225 17.6374 18.734 20.17 18.4281 22.852L18.4221 22.916C19.7861 22.9501 21.1274 23.2721 22.3582 23.8608C23.589 24.4495 24.6815 25.2916 25.5641 26.332L25.5761 26.346C27.8203 28.8448 28.9813 32.132 28.8041 35.486L28.8061 35.456L28.8001 35.46ZM62.6961 35.46C62.7683 37.1638 62.4643 38.8626 61.8058 40.4357C61.1474 42.0088 60.1505 43.4176 58.8862 44.562L58.8761 44.57C56.2588 46.8921 52.849 48.1194 49.3521 47.998H49.3741C47.2605 48.1128 45.1475 47.7605 43.1855 46.9662C41.2235 46.1718 39.4606 44.9549 38.0221 43.402L38.0141 43.392C35.1285 39.9691 33.6572 35.5744 33.9001 31.104L33.8981 31.146C33.7641 26.5044 34.6268 21.8879 36.4281 17.608L36.3481 17.822C37.7857 14.4669 39.7798 11.3788 42.2461 8.68799L42.2241 8.71199C44.264 6.49975 46.6276 4.6096 49.2341 3.10599L49.3781 3.02999C51.3487 1.89216 53.4057 0.911128 55.5301 0.0959902L55.8421 -0.0100098L62.1082 10.57C59.5031 11.6222 57.2168 13.3343 55.4741 15.538L55.4482 15.572C53.7125 17.6394 52.624 20.172 52.3181 22.854L52.3121 22.918C53.6755 22.952 55.0163 23.2739 56.2465 23.8626C57.4767 24.4513 58.5684 25.2935 59.4501 26.334L59.4622 26.348C61.7088 28.8449 62.872 32.1317 62.6961 35.486L62.6982 35.456L62.6961 35.46Z"
                            fill="rgb(203 213 225 / 1)" />
                    </svg>
                    <p class=" text-sm sm:text-base text-black my-4 sm:my-8 text-left">
                        {{ $t(`landing.student_text_${feedback.id}`) }}
                    </p>
                    <div class="flex items-center gap-2 flex-wrap sm:gap-4 absolute bottom-7 sm:bottom-[53px]">
                        <img :src="feedback.image" class=" w-12 h-12 sm:w-auto sm:h-auto" alt="avatar">
                        <div class=" text-start">
                            <p class=" text-sm sm:text-lg font-medium">
                                {{ $t(`landing.student_name_${feedback.id}`) }}
                            </p>
                            <p class=" text-xs sm:text-base text-[#C02221] text-left">
                                {{ $t(`landing.student_position_${feedback.id}`) }}
                            </p>
                        </div>
                    </div>
                </div>
            </slide>
            <template #addons>
                <navigation>
                    <template #next>
                        <span>
                            <svg width="20" class=" rotate-180" height="14" viewBox="0 0 20 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.8003 7.00014C19.8003 7.18579 19.7265 7.36384 19.5953 7.49512C19.464 7.62639 19.2859 7.70014 19.1003 7.70014L2.59009 7.70014L6.99589 12.1045C7.12733 12.236 7.20118 12.4143 7.20118 12.6001C7.20118 12.786 7.12733 12.9643 6.99589 13.0957C6.86445 13.2272 6.68618 13.301 6.50029 13.301C6.31441 13.301 6.13613 13.2272 6.00469 13.0957L0.404691 7.49574C0.339502 7.43072 0.287782 7.35347 0.252494 7.26843C0.217205 7.18339 0.199041 7.09222 0.199041 7.00014C0.199041 6.90807 0.217204 6.8169 0.252494 6.73186C0.287782 6.64681 0.339502 6.56957 0.404691 6.50454L6.00469 0.904543C6.13613 0.773101 6.31441 0.699259 6.50029 0.699259C6.68618 0.699259 6.86445 0.773101 6.99589 0.904543C7.12733 1.03598 7.20117 1.21426 7.20117 1.40014C7.20117 1.58603 7.12733 1.7643 6.99589 1.89574L2.59009 6.30014L19.1003 6.30014C19.2859 6.30014 19.464 6.37389 19.5953 6.50517C19.7265 6.63644 19.8003 6.81449 19.8003 7.00014Z"
                                    fill="white" />
                            </svg>
                        </span>
                    </template>
                    <template #prev>
                        <span>
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.8003 7.00014C19.8003 7.18579 19.7265 7.36384 19.5953 7.49512C19.464 7.62639 19.2859 7.70014 19.1003 7.70014L2.59009 7.70014L6.99589 12.1045C7.12733 12.236 7.20118 12.4143 7.20118 12.6001C7.20118 12.786 7.12733 12.9643 6.99589 13.0957C6.86445 13.2272 6.68618 13.301 6.50029 13.301C6.31441 13.301 6.13613 13.2272 6.00469 13.0957L0.404691 7.49574C0.339502 7.43072 0.287782 7.35347 0.252494 7.26843C0.217205 7.18339 0.199041 7.09222 0.199041 7.00014C0.199041 6.90807 0.217204 6.8169 0.252494 6.73186C0.287782 6.64681 0.339502 6.56957 0.404691 6.50454L6.00469 0.904543C6.13613 0.773101 6.31441 0.699259 6.50029 0.699259C6.68618 0.699259 6.86445 0.773101 6.99589 0.904543C7.12733 1.03598 7.20117 1.21426 7.20117 1.40014C7.20117 1.58603 7.12733 1.7643 6.99589 1.89574L2.59009 6.30014L19.1003 6.30014C19.2859 6.30014 19.464 6.37389 19.5953 6.50517C19.7265 6.63644 19.8003 6.81449 19.8003 7.00014Z"
                                    fill="white" />
                            </svg>
                        </span>
                    </template>
                </navigation>
            </template>
        </carousel>
        <div class="w-full flex items-center flex-wrap gap-5 justify-center sm:gap-12 mt-10">
            <a href="tel:+998+71+200-05-22"
                class="py-3 px-4 sm:py-4 sm:px-[23px] uppercase text-sm sm:text-base font-bold hover:opacity-90 bg-[#9E9E9E] w-[229px] text-white rounded-xl flex items-center gap-1 justify-center">
                <svg width="19" height="16" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.7054 6.21517C5.12746 7.8361 6.9953 8.92957 9.02156 9.32452L9.97203 7.38237C10.091 7.14002 10.3207 7.00511 10.5551 7.00902C11.3184 7.03045 12.1025 6.91943 12.874 6.66488C13.2179 6.55141 13.5769 6.7616 13.6808 7.13722L14.336 9.50603C14.4399 9.88166 14.2474 10.2738 13.9035 10.3873C8.08502 12.3072 1.94494 8.71263 0.187194 2.35747C0.0833011 1.98184 0.278842 1.58866 0.61965 1.47621L2.78842 0.760599C3.13233 0.647124 3.49137 0.857316 3.59527 1.23294C3.82832 2.07556 4.17782 2.85021 4.61675 3.53258C4.74949 3.74359 4.77386 4.02728 4.65493 4.26963L3.7054 6.21517Z"
                        fill="white" />
                </svg>
                Call
            </a>
            <button @click="$router.push('/signin')"
                class="gradient-button py-3 px-4 sm:py-4 sm:px-[23px] text-sm sm:text-base font-bold hover:opacity-90 w-[249px]">
                APPLY
            </button>
        </div>
    </section>
</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue';

const breakpoints = {
    200: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 2,
        snapAlign: 'center',
    },
}
const feedbacks = ref([
    {
        id: 1,
        name: 'Emil Ismatov',
        image: new URL('@/assets/images/landing/emil.png', import.meta.url).href,
    },
    {
        id: 2,
        name: 'Saodat Nazarova',
        image: new URL('@/assets/images/landing/saodat.png', import.meta.url).href,
    }
])

</script>
<style>
#feedback .carousel__prev,
#feedback .carousel__next {
    background: #C02221 !important;
    width: 56px !important;
    height: 56px;
    border-radius: 50%;
}

#feedback .carousel__next {
    right: -24px;
}

#feedback .carousel__prev {
    left: -24px;
}
</style>