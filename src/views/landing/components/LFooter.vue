<template>
    <footer class=" bg-[#232323] pt-[14px] pb-14">
        <div class="container mx-auto px-5 sm:px-0 gap-5 md:gap-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <ul>
                <li>
                    <AUIconWithName class="w-40 h-[86px]"></AUIconWithName>
                </li>
                <li class=" text-xs">
                    Address: <a
                        href="https://yandex.com/maps/org/akfa_university/18660414568/?ll=69.427804%2C41.327040&mode=search&sctx=ZAAAAAgBEAAaKAoSCfFmDd5XtSVAEXmxMEROl0hAEhIJZKw2%2F688Y0ARDvRQ24aPS0AiBgABAgMEBSgKOABA7M4LSAFqBXdvcmxknQHNzEw9oAEAqAEAvQECDU0fwgEF6Kj9wUXqAQDyAQD4AQCCAg9ha2ZhIHVuaXZlcnNpdHmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=69.427804%2C41.327040&sspn=0.007844%2C0.003208&text=akfa%20university&z=18"
                        class="underline" target="_blank" rel="noopener noreferrer">
                        264, Milliy bog St, Tashkent, 111221, Uzbekistan
                    </a>
                </li>
                <li>
                    Phone: <a href="tel:+998-71-200-05-22">
                        +998-71-200-05-22
                    </a>
                </li>
                <li>
                    Email: <a href="mailto:info@akfauniversity.org">info@akfauniversity.org</a>
                </li>
            </ul>
            <ul class="mt-[11px] md:mx-auto">
                <li>
                    Admissions
                </li>
                <li>
                    Application Process
                </li>
                <li>
                    Exam Samples
                </li>
                <li>
                    Tuition Fees
                </li>
                <li>
                    Scholarships
                </li>
            </ul>
            <ul class="mt-[11px] md:mx-auto">
                <li>
                    Programs
                </li>
                <li>
                    <a href="https://www.akfauniversity.uz/programs/engineering-design" target="_blank"
                        rel="noopener noreferrer">Engineering & Design</a>
                </li>
                <li>
                    <a href="https://www.akfauniversity.uz/programs/business" target="_blank"
                        rel="noopener noreferrer">Business</a>
                </li>
                <li>
                    <a href="https://www.akfauniversity.uz/programs/arts-humanities" target="_blank"
                        rel="noopener noreferrer">Humanities</a>
                </li>
                <li>
                    <a href="https://www.akfauniversity.uz/programs/medicine/medicine" target="_blank"
                        rel="noopener noreferrer">Medicine</a>
                </li>
                <li>
                    <a href="https://www.akfauniversity.uz/programs/dentistry" target="_blank"
                        rel="noopener noreferrer">Dentistry</a>
                </li>
                <li>
                    <a href="https://www.akfauniversity.uz/programs/masters" target="_blank"
                        rel="noopener noreferrer">Master's</a>
                </li>
            </ul>
            <ul class="mt-[11px] md:mx-auto">
                <li>
                    Campus Life
                </li>
                <li>
                    <a href="https://www.akfauniversity.uz/meet-au/our-values" target="_blank"
                        rel="noopener noreferrer">Our Values</a>
                </li>
                <li>
                    <a href="https://www.akfauniversity.uz/meet-au/apple" target="_blank"
                        rel="noopener noreferrer">Apple Center</a>
                </li>
                <li>
                    <a href="https://www.akfauniversity.uz/meet-au/campus" target="_blank"
                        rel="noopener noreferrer">Campus</a>
                </li>
                <li>
                    <a href="https://www.akfauniversity.uz/news-events/2022-year-news" target="_blank"
                        rel="noopener noreferrer">News & Events</a>
                </li>
                <li>
                    <a href="https://www.akfauniversity.uz/live-work/calendars" target="_blank"
                        rel="noopener noreferrer">Calendars</a>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { AUIconWithName } from "@/components/icons";
</script>
<style lang="scss" scoped>
ul {

    li {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #FFFFFF;
        margin-bottom: 6px;

        &:first-child {
            margin-bottom: 10px;
            font-family: 'Manrope';
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
        }

        a {
            margin-left: 2px;

            &:hover {
                color: #FF0000;
            }
        }
    }
}
</style>