<template>
    <div class="landing">
        <LHeader></LHeader>
        <LFaculties id="faculty"></LFaculties>
        <section
            class="py-12 md:py-24 xl:container mx-auto px-5 sm:px-7 md:px-9 lg:px-12 xl:px-0 grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-0">
            <div>
                <h5
                    class=" text-white text-xl sm:text-3xl lg:text-[42px] lg:leading-[51px] font-bold uppercase mt-1 md:w-[692px]">
                    {{ $t('landing.get_scholarship') }}
                </h5>
                <p class=" text-white mt-10 md:mt-20 font-[450] text-sm md:text-xl max-w-[641px]" style="font-family: 
                Arial, Helvetica, sans-serif">
                    {{ $t('landing.scholarship_title') }}
                </p>
                <div class="w-full flex items-center flex-wrap gap-5 sm:gap-12 mt-12">
                    <a href="tel:+998+71+200-05-22"
                        class="py-3 px-4 sm:py-4 sm:px-[23px] uppercase text-sm sm:text-base font-bold hover:opacity-90 bg-[#9E9E9E] w-[229px] text-white rounded-xl flex items-center gap-1 justify-center">
                        <svg width="19" height="16" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.7054 6.21517C5.12746 7.8361 6.9953 8.92957 9.02156 9.32452L9.97203 7.38237C10.091 7.14002 10.3207 7.00511 10.5551 7.00902C11.3184 7.03045 12.1025 6.91943 12.874 6.66488C13.2179 6.55141 13.5769 6.7616 13.6808 7.13722L14.336 9.50603C14.4399 9.88166 14.2474 10.2738 13.9035 10.3873C8.08502 12.3072 1.94494 8.71263 0.187194 2.35747C0.0833011 1.98184 0.278842 1.58866 0.61965 1.47621L2.78842 0.760599C3.13233 0.647124 3.49137 0.857316 3.59527 1.23294C3.82832 2.07556 4.17782 2.85021 4.61675 3.53258C4.74949 3.74359 4.77386 4.02728 4.65493 4.26963L3.7054 6.21517Z"
                                fill="white" />
                        </svg>
                        {{ $t('landing.call') }}
                    </a>
                    <button @click="$router.push('/signin')"
                        class="gradient-button py-3 px-4 sm:py-4 sm:px-[23px] text-sm sm:text-base font-bold hover:opacity-90 w-[249px]">
                        {{ $t('landing.apply') }}
                    </button>
                </div>
            </div>
            <div class="flex justify-end">
                <img src="@/assets/images/landing/stipent.webp"
                    class="rounded-[10px] object-cover !object-center sm:!object-top xl:!object-center sm:h-[479px] w-full xl:w-[543px] stipent"
                    alt="stipent">
            </div>
        </section>
        <LTeachersSlider id="our_teachers"></LTeachersSlider>
        <section class="py-12 xl:container mx-auto px-5 sm:px-7 md:px-9 lg:px-12 xl:px-0" id="video">
            <div>
                <h5
                    class=" text-white text-xl sm:text-3xl lg:text-[42px] lg:leading-[51px] font-bold uppercase mt-1 md:w-[692px]">
                    {{ $t('landing.how_apply') }}
                </h5>
                <div class="flex justify-center w-full">
                    <!-- <div
                        class=" bg-[#737373] w-full h-56 sm:w-[871.73px] sm:h-[473px] rounded-[10px] flex items-center justify-center my-5 sm:my-8">
                        <button class="relative flex w-20 h-16 sm:w-[167px] sm:h-[160px]">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0000] opacity-70"></span>
                            <span class="relative inline-flex">
                                <svg class=" w-20 h-16 sm:w-[167px] sm:h-[160px]" viewBox="0 0 85 82" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M31.875 59.45L61.625 41L31.875 22.55V59.45ZM42.5 82C36.6208 82 31.0958 80.9231 25.925 78.7692C20.7542 76.6153 16.2562 73.6948 12.4312 70.0075C8.60625 66.3175 5.57883 61.9783 3.349 56.99C1.11917 52.0017 0.00283333 46.6717 0 41C0 35.3283 1.11633 29.9983 3.349 25.01C5.58167 20.0217 8.60908 15.6825 12.4312 11.9925C16.2562 8.3025 20.7542 5.38193 25.925 3.2308C31.0958 1.07967 36.6208 0.00273333 42.5 0C48.3792 0 53.9042 1.07693 59.075 3.2308C64.2458 5.38467 68.7437 8.30523 72.5687 11.9925C76.3937 15.6825 79.4226 20.0217 81.6552 25.01C83.8879 29.9983 85.0028 35.3283 85 41C85 46.6717 83.8837 52.0017 81.651 56.99C79.4183 61.9783 76.3909 66.3175 72.5687 70.0075C68.7437 73.6975 64.2458 76.6194 59.075 78.7733C53.9042 80.9272 48.3792 82.0027 42.5 82ZM42.5 73.8C51.9917 73.8 60.0312 70.6225 66.6187 64.2675C73.2062 57.9125 76.5 50.1567 76.5 41C76.5 31.8433 73.2062 24.0875 66.6187 17.7325C60.0312 11.3775 51.9917 8.2 42.5 8.2C33.0083 8.2 24.9687 11.3775 18.3812 17.7325C11.7937 24.0875 8.5 31.8433 8.5 41C8.5 50.1567 11.7937 57.9125 18.3812 64.2675C24.9687 70.6225 33.0083 73.8 42.5 73.8Z"
                                        fill="white" />
                                </svg>
                            </span>
                        </button>
                    </div> -->
                    <div class="w-full h-56 sm:w-[871.73px] sm:h-[473px] my-5 sm:my-8">
                        <iframe width="100%" loading="lazy" frameborder="0" allowtransparency="true" allow="encrypted-media"
                            height="100%" src="https://www.youtube.com/embed/Ofw_e5I0m7o">
                        </iframe>
                    </div>
                </div>
                <div class="w-full flex items-center justify-center flex-wrap gap-5 sm:gap-12">
                    <a href="https://www.iorad.com/player/2188707/Admission-Akfauniversity---How-to-untitled-task-name" target="_blank" rel="noopener noreferrer"
                        class="py-3 px-4 sm:py-4 sm:px-[23px] text-sm sm:text-base font-bold hover:opacity-90 bg-[#9E9E9E] w-[229px] text-white rounded-xl flex items-center gap-1 justify-center">
                        {{ $t('landing.try_tutorial') }}
                </a>
                    <button @click="$router.push('/signin')"
                        class="gradient-button py-3 px-4 sm:py-4 sm:px-[23px] text-sm sm:text-base font-bold hover:opacity-90 w-[249px]">
                        {{ $t('landing.apply') }}
                    </button>
                </div>
            </div>
        </section>
        <LFeedbackSlider></LFeedbackSlider>
        <LFooter></LFooter>
    </div>
</template>
<script lang="ts" setup>
import LHeader from "./components/LHeader.vue";
import { defineAsyncComponent } from "vue";

const LFeedbackSlider = defineAsyncComponent(() => import('./components/LFeedbackSlider.vue'))
const LFaculties = defineAsyncComponent(() => import('./components/LFaculties.vue'))
const LTeachersSlider = defineAsyncComponent(() => import('./components/LTeachersSlider.vue'))
const LFooter = defineAsyncComponent(() => import('./components/LFooter.vue'))
</script>
<style lang="scss">
.landing {

    .top-section {
        height: 100vh;
        background: url("../../assets/images/landing/top-header.webp"), no-repeat, 50%;
        background-size: cover;
    }

    .stipent {
        object-position: 0 -30px;
    }

    .gradient-button {
        background: radial-gradient(127.68% 423.02% at 31.82% -13.39%, #B1040E 12.5%, #ED1C24 100%);
        color: white;
        border-radius: 10px;
        text-transform: uppercase;

        &:hover {
            background: #FF0000;
        }
    }
}
</style>