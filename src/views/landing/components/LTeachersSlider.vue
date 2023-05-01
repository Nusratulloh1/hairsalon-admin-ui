<template>
    <section>
        <div class="container mx-auto px-5 sm:px-0">
            <h3
                class="text-white uppercase text-xl  sm:text-3xl lg:text-[42px] lg:leading-[51px] font-bold max-w-[564px] mb-4">
                Поверьте в себя также
                как мы верим в вас!
            </h3>
        </div>
        <carousel :transition="500" id="teachers">
            <slide v-for="teacher in teachers" :key="teacher.id" class="teacher">
                <div class="w-full h-[415px] sm:h-[811px] !bg-no-repeat pt-16 sm:pt-[112px] !bg-center"
                    :style="`background: url(${teacher.image}); background-size: 100% 100%`">
                    <div class="flex items-start justify-between container mx-auto px-5 sm:px-0">
                        <div class="relative text-start">
                            <div
                                class=" bg-[#737373] w-44 h-24 sm:w-80 sm:h-44 lg:w-[446px] lg:h-[242px] rounded-[10px] flex items-center justify-center">
                                <button class="relative flex w-10 h-9 sm:w-[85px] sm:h-[82px]">
                                    <span
                                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0000] opacity-70"></span>
                                    <span class="relative inline-flex">
                                        <svg class=" w-10 h-9 sm:w-[85px] sm:h-[82px]" viewBox="0 0 85 82" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M31.875 59.45L61.625 41L31.875 22.55V59.45ZM42.5 82C36.6208 82 31.0958 80.9231 25.925 78.7692C20.7542 76.6153 16.2562 73.6948 12.4312 70.0075C8.60625 66.3175 5.57883 61.9783 3.349 56.99C1.11917 52.0017 0.00283333 46.6717 0 41C0 35.3283 1.11633 29.9983 3.349 25.01C5.58167 20.0217 8.60908 15.6825 12.4312 11.9925C16.2562 8.3025 20.7542 5.38193 25.925 3.2308C31.0958 1.07967 36.6208 0.00273333 42.5 0C48.3792 0 53.9042 1.07693 59.075 3.2308C64.2458 5.38467 68.7437 8.30523 72.5687 11.9925C76.3937 15.6825 79.4226 20.0217 81.6552 25.01C83.8879 29.9983 85.0028 35.3283 85 41C85 46.6717 83.8837 52.0017 81.651 56.99C79.4183 61.9783 76.3909 66.3175 72.5687 70.0075C68.7437 73.6975 64.2458 76.6194 59.075 78.7733C53.9042 80.9272 48.3792 82.0027 42.5 82ZM42.5 73.8C51.9917 73.8 60.0312 70.6225 66.6187 64.2675C73.2062 57.9125 76.5 50.1567 76.5 41C76.5 31.8433 73.2062 24.0875 66.6187 17.7325C60.0312 11.3775 51.9917 8.2 42.5 8.2C33.0083 8.2 24.9687 11.3775 18.3812 17.7325C11.7937 24.0875 8.5 31.8433 8.5 41C8.5 50.1567 11.7937 57.9125 18.3812 64.2675C24.9687 70.6225 33.0083 73.8 42.5 73.8Z"
                                                fill="white" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div class="absolute right-4 top-[26%] lg:right-1 lg:top-[35%] hidden sm:block animate-pulse">
                                <svg width="103" height="128" viewBox="0 0 103 128" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M45.7661 119.734C52.9526 121.177 59.4432 116.521 63.5869 111.085C68.1969 105.068 70.904 97.423 71.7071 89.2351C73.4086 72.6776 67.7147 55.6948 60.5356 40.3097C56.0702 30.7304 50.8128 21.5801 44.9444 12.8228C44.3978 12.0096 43.1086 11.9951 42.5834 12.5337C41.9043 13.2114 42.0527 14.321 42.5993 15.1342C47.5461 22.5564 52.004 30.2929 55.9732 38.3437C59.572 45.709 62.836 53.2494 65.2221 61.0732C69.737 76.2838 70.5187 93.0518 62.8723 105.641C59.2847 111.563 53.0282 117.474 45.6337 115.963C44.7382 115.816 44.0227 116.718 44.0264 117.64C44.0525 118.828 44.8706 119.587 45.7661 119.734Z"
                                        fill="#DA151D" />
                                    <path
                                        d="M71.6414 18.1902C62.986 16.0127 54.3307 13.8353 45.6753 11.6579C43.891 11.2005 41.5513 10.2576 40.3614 12.0661C39.7372 12.9491 39.7633 14.1361 39.9385 15.3475C40.1137 16.559 40.3206 17.7099 40.5545 18.9639C41.3457 23.7916 42.2273 28.6014 43.0185 33.4292C43.9719 38.8749 44.8666 44.2782 45.8199 49.7239C46.0315 50.7114 47.0611 51.3733 47.8746 51.2112C48.7784 51.0312 49.1949 50.0812 48.9833 49.0938C47.468 40.2377 45.9527 31.3816 44.4644 22.6285C44.1093 20.3691 43.6638 18.1277 43.3088 15.8683C43.2864 15.6018 43.305 14.9479 43.1335 14.6569C43.0208 14.4084 43.2239 14.6389 43.0432 14.6749C42.3835 14.6979 42.9481 14.8564 42.9481 14.8564C43.0068 14.8989 43.9013 15.0458 43.9601 15.0883C44.5247 15.2468 45.0307 15.3628 45.5953 15.5212C49.5209 16.5275 53.4782 17.4732 57.4625 18.5219C61.9528 19.6866 66.4748 20.7909 70.965 21.9556C71.8866 22.2055 72.7363 21.8195 72.945 20.8025C73.0363 19.7005 72.5042 18.3976 71.6414 18.1902Z"
                                        fill="#DA151D" />
                                </svg>
                            </div>
                            <p class=" max-w-[440px] lg:max-w-[536px] font-[450] text-[10px] sm:text-lg lg:text-xl text-white text-start mt-8 sm:mt-28"
                                style="font-family: 'Suisse Intl'">
                                {{ teacher.body }}
                            </p>
                            <button
                                class="gradient-button text-[10px] sm:text-xl text-white font-bold py-3 sm:py-5 px-4 sm:px-9 mt-8 sm:mt-11">
                                ПОДАТЬ ДОКУМЕНТЫ
                            </button>
                        </div>
                        <div class="right-side">
                            <h5 class="font-bold text-[10px] leading-3 sm:text-lg lg:text-[26px] lg:leading-[30px] uppercase text-white text-start w-[98px] sm:w-[188px] lg:w-[339px] mr-[-20px] lg:mr-[-100px] xl:mr-[-50px] 2xl:mr-0"
                                style="font-family: 'Suisse Intl'">
                                <span class="text-[#FF0000]">{{ teacher.name }}</span>
                                <br>
                                {{ teacher.position }}
                            </h5>
                        </div>
                    </div>
                </div>
            </slide>
            <template #addons>
                <Pagination class="container m-auto px-5 sm:px-0" />
            </template>
        </carousel>
    </section>
</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import { ref } from 'vue'

const teachers = ref([
    {
        id: 1,
        name: 'Dr. Gyo Jun, PhD',
        position: 'профессор школы стоматологии',
        body: 'AKFA University предлагает индивидуальный подход к каждому студенту и готов оказать помощь в любой ситуации. Наши преподаватели и наставники всегда окажут вам необходимую поддержку и готовы помочь преодолеть любые трудности.',
        image: new URL('@/assets/images/landing/teacher-1.jpg', import.meta.url).href,
    },
    {
        id: 2,
        name: 'Dr. Sajid Khan, PhD',
        position: 'профессор computer science, школа инжиниринга',
        body: 'AKFA University предлагает индивидуальный подход к каждому студенту и готов оказать помощь в любой ситуации. Наши преподаватели и наставники всегда окажут вам необходимую поддержку и готовы помочь преодолеть любые трудности.',
        image: new URL('@/assets/images/landing/teacher-2.jpg', import.meta.url).href,
    }
])
</script>
<style lang="scss">
#teachers {
    .teacher {
        &:nth-child(2) {
            .right-side {
                position: relative;
                height: 560px;

                h5 {
                    margin: 0;
                    right: -40px;
                    bottom: 35px;
                    position: absolute;
                }
            }
        }
    }

    .carousel__pagination {
        justify-content: flex-start;
        margin: auto;
        margin-top: -40px;
        position: relative;

        .carousel__pagination-item {
            .carousel__pagination-button {
                &::after {
                    width: 18.35px;
                    height: 18.35px;
                    background: #D9D9D9;
                    border-radius: 50%;

                    &:hover {
                        background: #FF0000;
                    }
                }

            }

            .carousel__pagination-button--active {
                &::after {
                    background: #FF0000;
                }
            }
        }
    }
}

@media (max-width: 640px) {
    #teachers {
        .teacher {
            &:nth-child(2) {
                .right-side {
                    position: relative;
                    height: 350px;

                    h5 {
                        margin: 0;
                        right: 0;
                        bottom: 35px;
                        width: 130px;
                        position: absolute;
                    }
                }
            }
        }

        .carousel__pagination {
            .carousel__pagination-item {
                .carousel__pagination-button {
                    &::after {
                        width: 14.35px;
                        height: 14.35px;

                    }

                }
            }
        }
    }
}

@media (max-width: 992px) {
    #teachers {
        .teacher {
            &:nth-child(2) {
                .right-side {
                    h5 {
                        margin: 0;
                        right: 0;
                        bottom: 35px;
                        position: absolute;
                    }
                }
            }
        }
    }
}
</style>