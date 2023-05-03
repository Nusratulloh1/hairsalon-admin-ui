<template>
    <section class="container mx-auto py-20 px-5 sm:px-0">
        <h3 class="text-white uppercase text-xl  sm:text-3xl lg:text-[42px] lg:leading-[51px] font-bold max-w-[1026px]">
            Остались ВОПРОСЫ?:
        </h3>
        <div class="grid grid-cols-1 xl:grid-cols-2 mt-8 sm:mt-16 gap-[60px]">
            <div>
                <h6 class=" uppercase text-xl sm:text-[32px] sm:leading-[39px] text-white mb-6 sm:mb-10">
                    Часто задаваемые вопросы
                </h6>
                <div class="border-[1.6px] border-[#4E4E4E] pl-4 sm:pl-8 mb-6 rounded-md overflow-hidden"
                    v-for="(item, i) in questions" :key="item.id">
                    <div class="card-header flex items-center justify-between transition-all"
                        @click.prevent="toggleExpand(i, item)">
                        <h6 class="text-white text-sm sm:text-lg flex items-center gap-4 sm:gap-8">
                            <p>01</p>
                            {{ item.title }}
                        </h6>
                        <button class="icon bg-[#4E4E4E] p-4 sm:p-[25px] h-14 sm:h-[66.93px]" :class="item.isExpand ? 'bg-[#C02221]' : ''">
                            <svg v-if="item.isExpand" width="17" height="3" viewBox="0 0 17 3" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.05185 3.00071H15.4625C16.0053 3.00071 16.4452 2.50636 16.4452 1.89627C16.4452 1.28634 16.0054 0.791992 15.4625 0.791992H1.05185C0.509234 0.792143 0.0693359 1.28649 0.0693359 1.89642C0.0693359 2.50636 0.509234 3.00071 1.05185 3.00071Z"
                                    fill="white" />
                            </svg>
                            <svg v-else width="19" height="19" viewBox="0 0 19 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.7184 8.31732H10.3562V0.954906C10.3562 0.447014 9.94386 0.034668 9.4358 0.034668C8.9279 0.034668 8.51556 0.447014 8.51556 0.954906V8.31732H1.15315C0.645256 8.31732 0.23291 8.72966 0.23291 9.23755C0.23291 9.74561 0.645256 10.158 1.15315 10.158H8.51556V17.5202C8.51556 18.0283 8.9279 18.4406 9.4358 18.4406C9.94386 18.4406 10.3562 18.0283 10.3562 17.5202V10.158H17.7184C18.2265 10.158 18.6389 9.74561 18.6389 9.23755C18.6389 8.72966 18.2265 8.31732 17.7184 8.31732V8.31732Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </div>

                    <div class="card-body transition-[0.2s] pl-7 sm:pl-[50px]" :id="'content' + item.id"
                        :style="item.isExpand ? `height: ${item.computedHeight} !important; padding: 20px 32px 35px` : 'height: 0'">
                        <p class=" text-xs sm:text-sm text-white">{{ item.content }}</p>
                    </div>
                </div>
            </div>
            <div class="xl:flex xl:justify-end">
                <div class="xl:w-[90%]">
                    <h6 class=" uppercase text-xl sm:text-[32px] sm:leading-[39px] text-white mb-6 sm:mb-10">
                        Как поступить?
                    </h6>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-10 mt-10">
                        <div class="w-full border-[1.6px] border-[#4E4E4E] rounded-md pt-16 px-[14px] pb-20 relative">
                            <p class="text-base text-white">
                                Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices.
                            </p>
                            <div class=" bg-white rounded-full w-20 h-20 text-center py-7 top-[-29px] left-[40%] absolute">
                                <p class="font-bold text-[32px] leading-[24px] popins">1</p>
                            </div>
                        </div>
                        <div class="w-full border-[1.6px] border-[#4E4E4E] rounded-md pt-16 px-[14px] pb-20 relative">
                            <p class="text-base text-white">
                                Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices.
                            </p>
                            <div class=" bg-white rounded-full w-20 h-20 text-center py-7 top-[-29px] left-[40%] absolute">
                                <p class="font-bold text-[32px] leading-[24px] popins">2</p>
                            </div>
                        </div>
                        <div class="w-full border-[1.6px] border-[#4E4E4E] rounded-md pt-16 px-[14px] pb-6 relative">
                            <p class="text-base text-white">
                                Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices.
                            </p>
                            <div class=" bg-white rounded-full w-20 h-20 text-center py-7 top-[-29px] left-[40%] absolute">
                                <p class="font-bold text-[32px] leading-[24px] popins">3</p>
                            </div>
                        </div>
                        <div class="w-full border-[1.6px] border-[#4E4E4E] rounded-md pt-16 px-[14px] pb-6 relative">
                            <p class="text-base text-white">
                                Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices.
                            </p>
                            <div class=" bg-white rounded-full w-20 h-20 text-center py-7 top-[-29px] left-[40%] absolute">
                                <p class="font-bold text-[32px] leading-[24px] popins">4</p>
                            </div>
                        </div>
                    </div>
                    <button class="gradient-button w-full text-sm sm:text-lg font-bold py-3 sm:py-5 mt-[60px]">
                        ПОДАТЬ ДОКУМЕНТЫ
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const content = ref(null)
const questions = ref([
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
        content: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam. Id placerat dui habitasse quisque nisl tincidunt facilisi mi id.Dictum elit velit.',
        isExpand: true,
        computedHeight: 0,
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
        content: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing',
        isExpand: false,
        computedHeight: 0,
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectetur. Viverra.',
        content: 'Lorem ipsum dolor sit amet consectetur. Viverra. Lorem ipsum dolor sit amet consectetur. Viverra. Lorem ipsum dolor sit amet consectetur. Viverra. Lorem ipsum dolor sit amet consectetur. Viverra. Lorem ipsum dolor sit amet consectetur. Viverra.',
        isExpand: false,
        computedHeight: 0,
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
        content: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing',
        isExpand: false,
        computedHeight: 0,
    },
])
const toggleExpand = (i: any, item: any): void => {
    questions.value[i].isExpand = !questions.value[i].isExpand
}

const getComputedHeight = (): void => {
    questions.value.forEach(item => {
        var elem = document.getElementById('content' + item.id)
        var content: any = [elem][0];
        content.style.height = 'auto';
        content.style.position = 'absolute';
        content.style.visibility = 'hidden';
        content.style.display = 'block';

        var height = getComputedStyle(content).height;
        item.computedHeight = parseInt(height);

        content.style.height = 0;
        content.style.position = null;
        content.style.visibility = null;
        content.style.display = null;
    });
}
onMounted(() => {
    getComputedHeight()
})
</script>
<style scoped>
.popins {
    font-family: 'Poppins';
}
.card-header{
    transition: 0.5s;
}
</style>