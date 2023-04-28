<template>
    <section class="pt-[121px] pb-[106px]">
        <div class="container mx-auto">
            <h5 class="text-white font-bold text-[42px] leading-[51px] uppercase">
                Выбери свой <span class="text-[#FF0000]">карьерный путь:</span>
            </h5>
            <p class="text-white mt-8 w-[641px] text-xl font-[450]" style="font-family: 'Suisse Intl';">
                Мы знаем, как трудно абитуриенту принимать важные решения, поэтому мы сделаем все возможное, чтобы помочь
                тебе найти свой путь и стать отличным специалистом в своей области. Будь уверенным в своем будущем!
            </p>
        </div>
        <div class="faculties grid grid-cols-2 xl:grid-cols-4 mt-[106px]">
            <div class="faculty w-full py-12 px-8 relative">
                <span class="text-white font-medium text-base">8 семестров</span>
                <h6 class="text-white font-bold text-[42px] leading-[51px] mt-10 mb-[37px]">
                    Школа
                    Инжиниринга
                </h6>
                <p class=" text-white font-normal text-base">
                    Предоставляем студентам первоклассный академический опыт с фокусом на исследования и разработки,
                    выстраивая учебные процессы в соответствии с ведущими международными практиками.
                </p>
                <button
                    class="gradient-button py-4 px-[23px] text-base font-bold w-[229px] absolute bottom-[48px] hover:opacity-90">
                    ПОДАТЬ ДОКУМЕНТЫ
                </button>
            </div>
            <div class="faculty img2 w-full py-12 px-8 relative">
                <span class="text-white font-medium text-base">8 семестров</span>
                <h6 class="text-white font-bold text-[42px] leading-[51px] mt-10 mb-[37px]">
                    Школа
                    бизнеса
                </h6>
                <p class=" text-white font-normal text-base">
                    Обучение бизнесу на основе кейс-метода, который вдохновлен Гарвардской Школой бизнеса. Готовим студентов
                    к успешной карьере в качестве руководителей и предпринимателей.
                </p>
                <button
                    class="gradient-button py-4 px-[23px] text-base font-bold w-[229px] absolute bottom-[48px] hover:opacity-90">
                    ПОДАТЬ ДОКУМЕНТЫ
                </button>
            </div>
            <div class="faculty img3 w-full py-12 px-8 relative">
                <span class="text-white font-medium text-base">12 семестров</span>
                <h6 class="text-white font-bold text-[42px] leading-[51px] mt-10 mb-[37px]">
                    Школа
                    медицины
                </h6>
                <p class=" text-white font-normal text-base">
                    Миссия школы - подготовить хороших врачей с комплексными знаниями, выдающимися навыками и любви к
                    пациентам, на основе передовых международных систем медицинского образования.
                </p>
                <button
                    class="gradient-button py-4 px-[23px] text-base font-bold w-[229px] absolute bottom-[48px] hover:opacity-90">
                    ПОДАТЬ ДОКУМЕНТЫ
                </button>
            </div>
            <div class="faculty img4 w-full py-12 px-8 relative">
                <span class="text-white font-medium text-base">10 семестров</span>
                <h6 class="text-white font-bold text-[42px] leading-[51px] mt-10 mb-[37px]">
                    Школа
                    стоматологии
                </h6>
                <p class=" text-white font-normal text-base max-h-[160px] overflow-scroll">
                    Благодаря нашему партнерству с ADEE (Ассоциация стоматологического образования в Европе), мы
                    предоствляем нашим студентам высококачественную международную программу, участвуем в международных
                    конкурсах, грантах, программах по обмену, цифровом образовании
                </p>
                <button
                    class="gradient-button py-4 px-[23px] text-base font-bold w-[229px] absolute bottom-[48px] hover:opacity-90">
                    ПОДАТЬ ДОКУМЕНТЫ
                </button>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>

</script>
<style scoped lang="scss">
.faculty {
    background: url('@/assets/images/landing/semester-bg-1.jpg'), no-repeat, 50%;
    background-size: cover;
    height: 616px;

    &.img2 {
        background: url('@/assets/images/landing/semester-bg-2.jpg'), no-repeat, 50%;
        background-size: cover;
    }

    &.img3 {
        background: url('@/assets/images/landing/semester-bg-3.jpg'), no-repeat, 50%;
        background-size: cover;
    }

    &.img4 {
        background: url('@/assets/images/landing/semester-bg-4.jpg'), no-repeat, 50%;
        background-size: cover;
    }
}</style>