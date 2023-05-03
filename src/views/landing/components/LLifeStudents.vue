<template>
    <section>
        <div class="bg-white">
            <div class="container mx-auto pt-4 px-5 sm:px-0">
                <h3
                    class="text-[#C02221] uppercase text-xl  sm:text-3xl lg:text-[56px] lg:leading-[68px] font-bold max-w-[1026px]">
                    Students Life
                </h3>
            </div>
        </div>
        <div class="w-full h-[565px] student-life mt-1 relative">
            <div class=" bg-black absolute bottom-12 w-full h-[288px]">
                <div class="container mx-auto py-10 flex px-5 sm:px-0 items-center justify-between flex-wrap md:flex-nowrap gap-4">
                    <h3 class=" text-2xl sm:text-4xl md:text-5xl md:leading-[54px] xl:text-[56px] xl:leading-[68px] uppercase text-white max-w-[752px]">
                        Experience Student Life Like Never Before at
                        <br>
                        <span class=" font-bold">AKFA University</span>
                    </h3>
                    <button class="watch-button flex items-center gap-3 md:gap-4 md:w-[280.87px] md:h-[119px] py-4 px-5 md:py-6 text-lg md:px-8 md:text-[24px] md:leading-[29px] uppercase text-white font-bold">
                        <svg class=" w-14 h-14 md:w-[70px] md:h-[71px]" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="34.9348" cy="35.5" r="34.1408" stroke="#D9D9D9" stroke-width="1.58795" />
                            <path
                                d="M28.583 30.1136C28.583 27.6192 31.3268 26.0984 33.4421 27.4205L43.3293 33.6C45.3196 34.8439 45.3195 37.7424 43.3293 38.9863L33.4421 45.1658C31.3268 46.4879 28.583 44.9671 28.583 42.4726V30.1136Z"
                                fill="white" />
                        </svg>
                        Watch us
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.student-life {
    background: url('@/assets/images/landing/student-life.jpg'), no-repeat, 50%;
    background-size: cover;
}

.watch-button {
    background: radial-gradient(127.68% 423.02% at 31.82% -13.39%, rgba(177, 4, 14, 0.8) 12.5%, rgba(237, 28, 36, 0.8) 100%)
    ;
    box-shadow: 0px 15px 36px rgba(246, 87, 20, 0.3);
    border-radius: 16px;
}</style>