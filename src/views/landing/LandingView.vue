<template>
    <div class=" landing">
        <LHeader></LHeader>
        <LFaculties></LFaculties>
        <section class="py-24 container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-0">
            <div>
                <h5 class=" text-white text-[42px] leading-[51px] font-bold uppercase mt-1 w-[692px]">
                    получайте стипендии на основе ВАШИХ достижений уже с первых шагов!
                </h5>
                <p class=" text-white mt-20 font-[450] text-xl max-w-[641px]" style="font-family: 
                'Suisse Intl'">
                    Понимая важность поддержки абитуриентов, AKFA University предоставляет стипендии на основе достижений в
                    конкурсном порядке для лучших 42 студентов каждый семестр, которые получают высокие оценки начиная со
                    вступительных экзаменов.
                </p>
                <button class="gradient-button w-[303px] text-lg font-bold py-5 mt-12 h-[65px]">
                    ПОДАТЬ ДОКУМЕНТЫ
                </button>
            </div>
            <div class="flex justify-end">
                <img src="@/assets/images/landing/stipent.jpg" class="rounded-[10px] object-cover xl:!object-center h-[479px] w-full xl:w-[543px] stipent" alt="stipent">
            </div>
        </section>
        <LLifeStudents></LLifeStudents>
        <LEvents></LEvents>
        <LFeedbackSlider></LFeedbackSlider>
        <LGallery></LGallery>
        <section class="pt-28 pb-40">
            <h3 class=" font-bold text-[42px] leading-[59px] uppercase text-white text-center max-w-[1129px] mx-auto">
                Начните свой путь к успеху сегодня и станьте лучшим в своей области!
            </h3>
            <div class="flex justify-center mt-9">
                <button class="gradient-button w-[526px] text-lg font-bold py-5">
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
import LLifeStudents from "./components/LLifeStudents.vue";
import LEvents from "./components/LEvents.vue";
import LFeedbackSlider from "./components/LFeedbackSlider.vue";
import LGallery from "./components/LGallery.vue";
</script>
<style lang="scss">
.landing {

    .top-section {
        height: 85vh;
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