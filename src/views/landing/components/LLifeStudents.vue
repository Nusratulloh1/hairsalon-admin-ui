<template>
    <div class="w-full h-[880px] student-life mt-4 relative">
        <div class="bg-[#131A34] absolute bottom-[285px] w-full">
            <div class="xl:container flex flex-wrap gap-10 items-start justify-between mx-auto px-5 sm:px-7 md:px-9 lg:px-12 xl:px-0 py-20">
                <h3 class="text-2xl sm:text-4xl md:text-5xl text-white font-normal"> Experience student life like never before at <br>
                    <span class="font-bold text-3xl md:text-[58px] uppercase block mt-5">CENTRAL ASIAN UNIVERSITY</span>
                </h3>
                <button style="box-shadow: 0px 15px 36px 0px rgba(246, 87, 20, 0.30);"
                    class="bg-white text-[#182857] flex items-center gap-3 md:gap-4 md:w-[251px] md:h-[135px] rounded-md py-4 px-5 md:py-6 text-xl md:px-8 font-medium"><svg
                        width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35.4993" cy="35.5" r="34.1408" stroke="#131A34" stroke-width="1.58795" />
                        <path
                            d="M29.1465 30.1136C29.1465 27.6192 31.8903 26.0984 34.0056 27.4205L43.8928 33.6C45.883 34.8439 45.883 37.7424 43.8928 38.9863L34.0056 45.1658C31.8903 46.4879 29.1465 44.9671 29.1465 42.4726V30.1136Z"
                            fill="#131A34" />
                    </svg>
                    Watch us </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.student-life {
    background: url('@/assets/images/landing/student-life.webp'), no-repeat, 50%;
    background-size: cover;
    background-position: 100% 78vh;
}
</style>