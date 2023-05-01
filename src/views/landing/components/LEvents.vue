<template>
    <section class="container mx-auto py-10 sm:py-0 px-5 sm:px-0">
        <h3 class="text-white uppercase text-xl sm:text-3xl lg:text-[42px] lg:leading-[51px] font-bold mb-16">
            ближайшие события
        </h3>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-14">
            <div class="w-full bg-white rounded-2xl sm:h-[327px] flex flex-wrap relative">
                <img src="@/assets/images/landing/event1.jpg"
                    class="w-full sm:w-[45%] h-[327px] object-center sm:h-full object-cover rounded-2xl" alt="event">
                <div class="px-5 py-4 sm:pt-7 sm:pr-10 w-full sm:w-auto flex flex-col flex-wrap gap-1 sm:gap-5">
                    <div>
                        <span class=" text-xs text-black font-normal">Мероприятие</span>
                        <h6 class="text-base sm:text-[19px] sm:leading-[22px] text-black font-normal">
                            Harvard Business Case 2023
                        </h6>
                    </div>
                    <div>
                        <span class="text-xs text-black font-normal">Локация </span>
                        <h6 class="text-[15px] leading-[18px] text-black font-normal">
                            Hilton, Tashkent City
                        </h6>
                    </div>
                        <div >
                            <span class=" text-xs text-black font-normal">Дата</span>
                            <h6 class=" text-[15px] leading-[18px] text-black font-normal">
                                Май 6, 2023
                            </h6>
                        </div>
                        <div>
                            <span class=" text-xs text-black font-normal">Организатор</span>
                            <h6 class=" text-[15px] leading-[18px] text-black font-normal">
                                Школа Бизнеса
                            </h6>
                        </div>
                        <!-- <button class="flex items-center gap-1 text-xs text-[#C02221] font-normal mt-3">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 7.5H11.25" stroke="#C02221" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M7.5 11.25V3.75" stroke="#C02221" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            Add to calendar
                        </button> -->
                    </div>
                <div
                    class="bg-white w-14 h-14 sm:w-[74px] sm:h-[74px] px-3 sm:px-5 py-3 sm:py-4 absolute shadow-sm top-[-13px] sm:top-[-26px] left-[-13px] sm:left-[-26px]">
                    <p class=" uppercase font-bold text-xs sm:text-[15px] sm:leading-[17px] text-center">
                        MAY
                        <br>
                        <span class=" text-base sm:!text-2xl">
                            6
                        </span>
                    </p>
                </div>
            </div>
            <div class="w-full bg-white rounded-2xl sm:h-[327px] flex flex-wrap relative">
                <img src="@/assets/images/landing/event2.jpg"
                    class="w-full sm:w-[45%] h-[327px] object-center sm:h-full object-cover rounded-2xl" alt="event">
                <div class="px-5 py-4 sm:pt-7 sm:pr-10 w-full sm:w-auto flex flex-col flex-wrap gap-1 sm:gap-5">
                    <div>
                        <span class=" text-xs text-black font-normal">Мероприятие</span>
                        <h6 class="text-base sm:text-[19px] sm:leading-[22px] text-black font-normal">
                            Job Fair 2023
                        </h6>
                    </div>
                    <div>
                        <span class="text-xs text-black font-normal">Локация </span>
                        <h6 class="text-[15px] leading-[18px] text-black font-normal">
                            AKFA University
                        </h6>
                    </div>
                        <div >
                            <span class=" text-xs text-black font-normal">Дата</span>
                            <h6 class=" text-[15px] leading-[18px] text-black font-normal">
                                Май 19, 2023
                            </h6>
                        </div>
                        <div>
                            <span class=" text-xs text-black font-normal">Организатор</span>
                            <h6 class=" text-[15px] leading-[18px] text-black font-normal">
                                AKFA University
                            </h6>
                        </div>
                        <!-- <button class="flex items-center gap-1 text-xs text-[#C02221] font-normal mt-3">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 7.5H11.25" stroke="#C02221" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M7.5 11.25V3.75" stroke="#C02221" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            Add to calendar
                        </button> -->
                    </div>
                <div
                    class="bg-white w-14 h-14 sm:w-[74px] sm:h-[74px] px-3 sm:px-5 py-3 sm:py-4 absolute shadow-sm top-[-13px] sm:top-[-26px] left-[-13px] sm:left-[-26px]">
                    <p class=" uppercase font-bold text-xs sm:text-[15px] sm:leading-[17px] text-center">
                        MAY
                        <br>
                        <span class=" text-base sm:!text-2xl">
                            19
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>