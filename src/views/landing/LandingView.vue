<template>
    <div class=" landing">
        <LHeader></LHeader>
        <LFaculties></LFaculties>
        <LTeachersSlider></LTeachersSlider>
        <section class="py-12 md:py-24 px-5 sm:px-0 container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-0">
            <div>
                <h5 class=" text-white text-xl sm:text-3xl lg:text-[42px] lg:leading-[51px] font-bold uppercase mt-1 md:w-[692px]">
                    получайте стипендии на основе ВАШИХ достижений уже с первых шагов!
                </h5>
                <p class=" text-white mt-10 md:mt-20 font-[450] text-sm md:text-xl max-w-[641px]" style="font-family: 
                'Suisse Intl'">
                    Понимая важность поддержки абитуриентов, AKFA University предоставляет стипендии на основе достижений в
                    конкурсном порядке для лучших 42 студентов каждый семестр, которые получают высокие оценки начиная со
                    вступительных экзаменов.
                </p>
                <button class="gradient-button text-sm sm:text-lg font-bold px-5 py-3 sm:px-9 sm:py-5 mt-8 sm:mt-12">
                    ПОДАТЬ ДОКУМЕНТЫ
                </button>
            </div>
            <div class="flex justify-end">
                <img src="@/assets/images/landing/stipent.jpg" class="rounded-[10px] object-cover !object-center sm:!object-top xl:!object-center sm:h-[479px] w-full xl:w-[543px] stipent" alt="stipent">
            </div>
        </section>
        <LLifeStudents></LLifeStudents>
        <LEvents></LEvents>
        <LFeedbackSlider></LFeedbackSlider>
        <LQuestions></LQuestions>
        <LGallery></LGallery>
        <section class="pt-14 pb-20 sm:pt-28 sm:pb-40 container mx-auto px-5 sm:px-0">
            <h3 class=" font-bold text-xl sm:text-3xl lg:text-[42px] lg:leading-[59px] uppercase text-white text-center max-w-[1129px] mx-auto">
                Начните свой путь к успеху сегодня и станьте лучшим в своей области!
            </h3>
            <div class="flex justify-center mt-9">
                <button class="gradient-button px-5 sm:px-0 sm:w-[526px] text-sm sm:text-lg font-bold py-3 sm:py-5">
                    ПОДАТЬ ДОКУМЕНТЫ
                </button>
            </div>
        </section>
        <LFooter></LFooter>
    </div>
</template>
<script lang="ts" setup>
import LHeader from "./components/LHeader.vue";
import LFooter from "./components/LFooter.vue";
import LFaculties from "./components/LFaculties.vue";
import LTeachersSlider from "./components/LTeachersSlider.vue";
import LLifeStudents from "./components/LLifeStudents.vue";
import LEvents from "./components/LEvents.vue";
import LFeedbackSlider from "./components/LFeedbackSlider.vue";
import LGallery from "./components/LGallery.vue";
import LQuestions from "./components/LQuestions.vue";
</script>
<style lang="scss">
.landing {

    .top-section {
        height: 100vh;
        background: url("../../assets/images/landing/top-header.jpg"), no-repeat, 50%;
        background-size: cover;
    }
    .stipent{
        object-position: 0 -30px;
    }
    .gradient-button {
        background: radial-gradient(127.68% 423.02% at 31.82% -13.39%, #B1040E 12.5%, #ED1C24 100%);
        color: white;
        border-radius: 10px;

        &:hover {
            background: #FF0000;
        }
    }
}
</style>