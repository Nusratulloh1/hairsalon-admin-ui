<template>
    <div class="landing">
        <LHeader></LHeader>
        <LFaculties id="faculty"></LFaculties>
        <LLifeStudents></LLifeStudents>
        <section
            class="py-12 md:py-24 xl:container mx-auto px-5 sm:px-7 md:px-9 lg:px-12 xl:px-0 grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-0">
            <div>
                <h5
                    class=" text-white text-xl sm:text-3xl lg:text-[46px] lg:leading-[114.5%] font-bold mt-1 md:max-w-[631px]">
                    {{ $t('landing.get_scholarship') }}
                </h5>
                <p class=" text-white mt-10 md:mt-20 font-halverica font-[450] text-sm md:text-xl max-w-[520px]">
                    {{ $t('landing.scholarship_title') }}
                </p>
                <div class="w-full flex items-center flex-wrap gap-5 sm:gap-12 mt-12">
                    <a href="tel:+998+71+200-05-22"
                        class="py-3 px-4 sm:p-[21px]  h-[65px] font-halverica border text-base sm:text-xl font-medium hover:bg-primary hover:border-primary hover:shadow-md bg-[#131A34] w-[228px] text-white rounded-md flex items-center justify-center">
                        {{ $t('landing.call') }}
                    </a>
                    <button @click="$router.push('/signin')"
                        class="py-3 px-4 sm:p-[21px] font-halverica  h-[65px] border text-base sm:text-xl font-medium hover:bg-primary hover:border-primary hover:text-white hover:shadow-md bg-white w-[228px] text-[#131A34] rounded-md flex items-center justify-center">
                        {{ $t('landing.apply') }}
                    </button>
                </div>
            </div>
            <div class="flex justify-end">
                <el-image :src="stidentImg" :key="stidentImg" width="200" height="176"
                    class="rounded-[10px] object-cover !object-center sm:!object-top xl:!object-center sm:h-[479px] w-full xl:w-[543px] stipent"
                    alt="stipent" />
            </div>
        </section>
        <!-- <LTeachersSlider id="our_teachers"></LTeachersSlider> -->
        <section class="py-12 xl:container mx-auto px-5 sm:px-7 md:px-9 lg:px-12 xl:px-0" id="video">
            <div>
                <h5 class=" text-white text-xl sm:text-3xl lg:text-[46px] lg:leading-[51px] font-bold mt-1 md:w-[692px]">
                    {{ $t('landing.how_apply') }}
                </h5>
                <div class="flex flex-wrap lg:flex-nowrap justify-center w-full gap-7 sm:gap-10">
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
                        <iframe width="100%" loading="lazy" srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,
                                span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
                                span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;
                                    text-shadow:0 0 0.5em black}</style>
                                    <a href=https://www.youtube.com/embed/Ofw_e5I0m7o?autoplay=1>
                                        <img src=https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl0Y2glMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60 alt='Video tutorial'>
                                        <span style='color: white; font-size: 80px'>▶</span></a>" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                            title="Video tutorial" allowtransparency="true" height="100%"
                            src="https://www.youtube.com/embed/Ofw_e5I0m7o">
                        </iframe>
                    </div>
                    <p class="lg:max-w-[334px] text-xl sm:text-[26px] font-medium leading-[155.5%] lg:mt-8 mb-10" style="color:
                    rgba(255, 255, 255, 0.80)">
                        From the current video and our AI Tutorial, you can understand how to apply to our university.
                    </p>
                </div>
                <div class="w-full flex items-center justify-center flex-wrap gap-5 sm:gap-12">
                    <a href="https://www.iorad.com/player/2188707/Admission-Akfauniversity---How-to-untitled-task-name"
                        class="py-3 px-4 sm:p-[21px] font-halverica  h-[65px] border text-base sm:text-xl font-medium hover:bg-primary hover:border-primary hover:shadow-md bg-[#131A34] w-[228px] text-white rounded-md flex items-center justify-center">
                        {{ $t('landing.try_tutorial') }}
                    </a>
                    <button @click="$router.push('/signin')"
                        class="py-3 px-4 sm:p-[21px] font-halverica h-[65px] border text-base sm:text-xl font-medium hover:bg-primary hover:border-primary hover:text-white hover:shadow-md bg-white w-[228px] text-[#131A34] rounded-md flex items-center justify-center">
                        {{ $t('landing.apply') }}
                    </button>
                </div>
            </div>
        </section>
        <!-- <LFeedbackSlider></LFeedbackSlider> -->
        <LFooter></LFooter>
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="pop" appear>
            <div class="modal h-[600px] lg:h-[462px] w-[90%] md:w-[712px] py-4 px-5 md:pt-5 pr-9 pb-11 pl-16" role="dialog" v-if="showModal">
                <el-dropdown class="float-right">
                    <button
                        class="text-[#131A34] bg-[#EDEDED] text-xs sm:text-base font-semibold flex items-center uppercase gap-2 px-[6px] py-[1.5px] sm:p-[8px] rounded-md">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_681_426)">
                                <path
                                    d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM19.3472 8.25H16.0256C15.6429 6.74392 15.0001 5.31623 14.1263 4.03125C15.2427 4.33127 16.2839 4.86162 17.1831 5.58818C18.0823 6.31475 18.8194 7.22146 19.3472 8.25ZM12 3.76031C13.125 4.97906 13.9688 6.53062 14.4722 8.25H9.52782C10.0313 6.53062 10.875 4.98094 12 3.76031ZM9 12C9.00013 11.2461 9.06285 10.4935 9.1875 9.75H14.8125C15.0613 11.2397 15.0613 12.7603 14.8125 14.25H9.1875C9.06285 13.5065 9.00013 12.7539 9 12ZM9.52782 15.75H14.4722C13.9688 17.4694 13.125 19.0191 12 20.2397C10.875 19.0191 10.0313 17.4694 9.52782 15.75ZM14.1263 19.9688C15.0001 18.6838 15.6429 17.2561 16.0256 15.75H19.3472C18.8194 16.7785 18.0823 17.6852 17.1831 18.4118C16.2839 19.1384 15.2427 19.6687 14.1263 19.9688ZM16.3322 14.25C16.5559 12.7583 16.5559 11.2417 16.3322 9.75H19.9378C20.3541 11.2211 20.3541 12.7789 19.9378 14.25H16.3322Z"
                                    fill="#182857" />
                            </g>
                            <defs>
                                <clipPath id="clip0_681_426">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span class="hidden sm:flex">{{ $i18n.locale || 'EN' }}</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L12 15L17 10" stroke="#131A34" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item v-for="locale in $i18n.availableLocales" @click="localeSet(locale)"
                                class="uppercase">{{ locale }}</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <img src="@/assets/images/landing/rebranding.png" class="mt-12 md:mt-8" alt="sdfgsd">
                <h6 class="mt-9 text-primary font-halverica font-bold text-base leading-[124.3%] text-start">
                    {{ $t('landing.rebrand-title') }}
                </h6>
                <p class="mt-5 text-base font-halverica text-primary leading-[124.3%] text-start">
                    {{ $t('landing.rebrand-desc') }}
                </p>
                <div class="flex justify-start">
                    <button @click="showModal = false"
                        class="bg-primary text-white rounded-xl font-halverica mt-7 px-5 py-3 sm:px-9 font-medium text-base w-[212px] hover:text-white hover:bg-primary">
                        {{ $t('landing.undestood') }}
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>
<script lang="ts" setup>
import LHeader from "./components/LHeader.vue";
import { defineAsyncComponent, ref } from "vue";
import { setLocale } from "@/i18n"
import { useRouter } from "vue-router";
const showModal = ref(true)
const router = useRouter()
const LFeedbackSlider = defineAsyncComponent(() => import('./components/LFeedbackSlider.vue'))
const LLifeStudents = defineAsyncComponent(() => import('./components/LLifeStudents.vue'))
const LFaculties = defineAsyncComponent(() => import('./components/LFaculties.vue'))
const LTeachersSlider = defineAsyncComponent(() => import('./components/LTeachersSlider.vue'))
const LFooter = defineAsyncComponent(() => import('./components/LFooter.vue'))
const stidentImg = new URL('@/assets/images/landing/stipent.jpg', import.meta.url).href
const localeSet = (new_locale: string) => {
    setLocale(new_locale)
    router.replace({ params: { locale: new_locale } })
}
</script>
<style lang="scss" scoped>
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

    .modal {
        position: absolute;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        text-align: center;
        border-radius: 5px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
        background: #FFF;
        z-index: 999;
        transform: none;
    }

    .modal-overlay {
        content: '';
        position: absolute;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 998;
        background: #2c3e50;
        opacity: 0.6;
        cursor: pointer;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
    transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
}
</style>