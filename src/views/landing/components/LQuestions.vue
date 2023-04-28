<template>
    <section class="container mx-auto py-20">
        <h3 class="text-white uppercase text-[42px] leading-[51px] font-bold max-w-[1026px]">
            ЧАСТЫЕ ВОПРОСЫ:
        </h3>
        <div class="grid grid-cols-2 mt-16">
            <div>
                <h6 class=" uppercase text-[32px] leading-[39px] text-white mb-10">
                    General Questions
                </h6>
                <div class="border-[1.6px] border-[#4E4E4E] pl-8 mb-6 rounded-md overflow-hidden" v-for="(item, i) in questions"
                    :key="item.id">
                    <div class="card-header flex items-center justify-between" @click.prevent="toggleExpand(i, item)">
                        <p class="text-white">{{ item.title }}</p>
                        <button class="icon bg-[#4E4E4E] p-[25px] h-full">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.7184 8.31732H10.3562V0.954906C10.3562 0.447014 9.94386 0.034668 9.4358 0.034668C8.9279 0.034668 8.51556 0.447014 8.51556 0.954906V8.31732H1.15315C0.645256 8.31732 0.23291 8.72966 0.23291 9.23755C0.23291 9.74561 0.645256 10.158 1.15315 10.158H8.51556V17.5202C8.51556 18.0283 8.9279 18.4406 9.4358 18.4406C9.94386 18.4406 10.3562 18.0283 10.3562 17.5202V10.158H17.7184C18.2265 10.158 18.6389 9.74561 18.6389 9.23755C18.6389 8.72966 18.2265 8.31732 17.7184 8.31732V8.31732Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </div>

                    <div class="card-body" :id="'content' + item.id"
                        :style="item.isExpand ?  `height: ${item.computedHeight} !important; padding: 15px 32px 35px`  : ''">
                        <p class="text-sm text-white">{{ item.content }}</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-end">
                <div class="w-full">
                    <h6 class=" uppercase text-[32px] leading-[39px] text-white">
                        How to apply?
                    </h6>
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
        isExpand: false,
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
    console.log(questions.value);
    
}

const getComputedHeight = (): void => {
    questions.value.forEach(item => {
        var elem = document.getElementById('content' + item.id)
        console.log(elem);

        var content: any = [elem][0];
        console.log(content);


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
/* .card-body {
  height: 0;
  overflow: hidden;
  transition: 0.3s;
} */
</style>