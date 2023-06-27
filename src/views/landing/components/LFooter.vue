<template>
    <footer class=" pt-11 pb-10 border-t-4 border-[#C58E15]">
        <div class="xl:container mx-auto px-5 sm:px-7 md:px-9 lg:px-12 xl:px-0 flex items-center justify-between flex-wrap">
            <ul>
                <li>
                    <AUIconWithName class="w-[230px] sm:w-[411px] h-[56px]"></AUIconWithName>
                </li>
                <li class=" text-xs mt-4 sm:mt-8">
                    {{ $t('landing.location') }}: <a
                        href="https://yandex.com/maps/org/akfa_university/18660414568/?ll=69.427804%2C41.327040&mode=search&sctx=ZAAAAAgBEAAaKAoSCfFmDd5XtSVAEXmxMEROl0hAEhIJZKw2%2F688Y0ARDvRQ24aPS0AiBgABAgMEBSgKOABA7M4LSAFqBXdvcmxknQHNzEw9oAEAqAEAvQECDU0fwgEF6Kj9wUXqAQDyAQD4AQCCAg9ha2ZhIHVuaXZlcnNpdHmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=69.427804%2C41.327040&sspn=0.007844%2C0.003208&text=akfa%20university&z=18"
                        class="underline" target="_blank" rel="noopener noreferrer">
                        {{ $t('landing.address') }}
                    </a>
                </li>
                <li>
                    {{ $t('landing.phone') }}: <a href="tel:+998-71-200-05-22">
                        +998-71-200-05-22
                    </a>
                </li>
                <li>
                    {{ $t('landing.email') }}: <a href="mailto:info@akfauniversity.com">info@akfauniversity.com</a>
                </li>
            </ul>
            <!-- <ul class="mt-[11px] md:mx-auto">
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
                    <a href="https://www.akfauniversity.uz/meet-au/our-values" target="_blank" rel="noopener noreferrer">Our
                        Values</a>
                </li>
                <li>
                    <a href="https://www.akfauniversity.uz/meet-au/apple" target="_blank" rel="noopener noreferrer">Apple
                        Center</a>
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
            </ul> -->
            <ul class=" mt-6">
                <li class="flex items-center gap-3">
                    <a href="https://www.instagram.com/cauniversity.official/" target="_blank"
                        class=" p-3 bg-white rounded-md text-center" rel="noopener noreferrer">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.90293 8.7297C5.90293 7.16923 7.16723 5.90388 8.72725 5.90388C10.2873 5.90388 11.5523 7.16923 11.5523 8.7297C11.5523 10.2902 10.2873 11.5555 8.72725 11.5555C7.16723 11.5555 5.90293 10.2902 5.90293 8.7297ZM4.37579 8.7297C4.37579 11.1337 6.32394 13.0824 8.72725 13.0824C11.1306 13.0824 13.0787 11.1337 13.0787 8.7297C13.0787 6.32569 11.1306 4.37698 8.72725 4.37698C6.32394 4.37698 4.37579 6.32569 4.37579 8.7297ZM12.2341 4.20439C12.234 4.40558 12.2935 4.60227 12.4052 4.76959C12.5169 4.93692 12.6757 5.06736 12.8614 5.14443C13.0472 5.22149 13.2517 5.24172 13.449 5.20255C13.6463 5.16338 13.8275 5.06657 13.9698 4.92437C14.112 4.78216 14.209 4.60095 14.2483 4.40365C14.2876 4.20634 14.2675 4.00181 14.1906 3.81591C14.1138 3.63 13.9835 3.47108 13.8163 3.35925C13.6491 3.24741 13.4525 3.18767 13.2514 3.18759H13.251C12.9814 3.18771 12.7229 3.29487 12.5322 3.48552C12.3415 3.67617 12.2343 3.93472 12.2341 4.20439ZM5.30363 15.6296C4.47741 15.592 4.02834 15.4543 3.72991 15.338C3.33426 15.1839 3.05196 15.0004 2.75516 14.7039C2.45836 14.4074 2.27463 14.1253 2.12128 13.7296C2.00495 13.4312 1.86732 12.9819 1.82976 12.1554C1.78868 11.2619 1.78048 10.9935 1.78048 8.72977C1.78048 6.46606 1.78936 6.1984 1.82976 5.30414C1.86739 4.47768 2.00603 4.02923 2.12128 3.72997C2.27531 3.3342 2.45876 3.05182 2.75516 2.75493C3.05156 2.45804 3.33358 2.27427 3.72991 2.12087C4.02821 2.0045 4.47741 1.86684 5.30363 1.82927C6.19689 1.78817 6.46522 1.77997 8.72725 1.77997C10.9893 1.77997 11.2579 1.78885 12.1519 1.82927C12.9781 1.86691 13.4264 2.00559 13.7256 2.12087C14.1213 2.27427 14.4036 2.45845 14.7004 2.75493C14.9972 3.05142 15.1802 3.3342 15.3342 3.72997C15.4506 4.02835 15.5882 4.47768 15.6258 5.30414C15.6668 6.1984 15.675 6.46606 15.675 8.72977C15.675 10.9935 15.6668 11.2611 15.6258 12.1554C15.5881 12.9819 15.4498 13.4311 15.3342 13.7296C15.1802 14.1253 14.9968 14.4077 14.7004 14.7039C14.404 15.0001 14.1213 15.1839 13.7256 15.338C13.4273 15.4544 12.9781 15.592 12.1519 15.6296C11.2586 15.6707 10.9903 15.6789 8.72725 15.6789C6.4642 15.6789 6.19662 15.6707 5.30363 15.6296ZM5.23346 0.304265C4.33132 0.34536 3.71486 0.488448 3.1765 0.697994C2.61896 0.914389 2.14698 1.2047 1.67533 1.67574C1.20368 2.14678 0.914198 2.61964 0.697866 3.17735C0.48838 3.7162 0.345334 4.33249 0.30425 5.2349C0.262489 6.13872 0.25293 6.42768 0.25293 8.7297C0.25293 11.0317 0.262489 11.3207 0.30425 12.2245C0.345334 13.127 0.48838 13.7432 0.697866 14.2821C0.914198 14.8394 1.20375 15.3128 1.67533 15.7837C2.14691 16.2545 2.61896 16.5444 3.1765 16.7614C3.71588 16.971 4.33132 17.114 5.23346 17.1551C6.1375 17.1962 6.4259 17.2065 8.72725 17.2065C11.0286 17.2065 11.3175 17.1969 12.221 17.1551C13.1233 17.114 13.7393 16.971 14.278 16.7614C14.8352 16.5444 15.3075 16.2547 15.7792 15.7837C16.2508 15.3126 16.5397 14.8394 16.7566 14.2821C16.9661 13.7432 17.1099 13.1269 17.1503 12.2245C17.1913 11.32 17.2009 11.0317 17.2009 8.7297C17.2009 6.42768 17.1913 6.13872 17.1503 5.2349C17.1092 4.33243 16.9661 3.71586 16.7566 3.17735C16.5397 2.61998 16.2501 2.14752 15.7792 1.67574C15.3083 1.20396 14.8352 0.914389 14.2787 0.697994C13.7393 0.488448 13.1232 0.344682 12.2217 0.304265C11.3182 0.26317 11.0293 0.25293 8.72793 0.25293C6.42658 0.25293 6.1375 0.262491 5.23346 0.304265Z"
                                fill="black" />
                        </svg>
                    </a>
                    <a href="https://twitter.com/AkfaUniversity" target="_blank"
                        class=" p-3 bg-white rounded-md text-center" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.2935 2.49759C16.0929 2.51219 15.8959 2.55926 15.7104 2.63696H15.7079C15.5298 2.70759 14.6829 3.06384 13.3954 3.60384L8.78164 5.54696C5.47102 6.94071 2.21664 8.31321 2.21664 8.31321L2.25539 8.29821C2.25539 8.29821 2.03102 8.37196 1.79664 8.53259C1.65185 8.62473 1.52725 8.74528 1.43039 8.88696C1.31539 9.05571 1.22289 9.31384 1.25727 9.58071C1.31352 10.032 1.60602 10.3026 1.81602 10.452C2.02852 10.6032 2.23102 10.6738 2.23102 10.6738H2.23602L5.28789 11.702C5.42477 12.1413 6.21789 14.7488 6.40852 15.3495C6.52102 15.7082 6.63039 15.9326 6.76727 16.1038C6.83352 16.1913 6.91102 16.2645 7.00414 16.3232C7.05256 16.3514 7.10418 16.3736 7.15789 16.3895L7.12664 16.382C7.13602 16.3845 7.14352 16.392 7.15039 16.3945C7.17539 16.4013 7.19227 16.4038 7.22414 16.4088C7.70727 16.5551 8.09539 16.2551 8.09539 16.2551L8.11727 16.2376L9.91914 14.597L12.9391 16.9138L13.0079 16.9432C13.6373 17.2195 14.2748 17.0657 14.6116 16.7945C14.951 16.5213 15.0829 16.172 15.0829 16.172L15.1048 16.1157L17.4385 4.16009C17.5048 3.86509 17.5216 3.58884 17.4485 3.32071C17.3731 3.04935 17.199 2.81597 16.9604 2.66634C16.76 2.54453 16.5277 2.48574 16.2935 2.49759ZM16.2304 3.77884C16.2279 3.81821 16.2354 3.81384 16.2179 3.88946V3.89634L13.906 15.7276C13.896 15.7445 13.8791 15.7813 13.8329 15.8182C13.7841 15.857 13.7454 15.8813 13.5423 15.8007L9.84852 12.9688L7.61727 15.0026L8.08602 12.0088L14.121 6.38384C14.3698 6.15259 14.2866 6.10384 14.2866 6.10384C14.3041 5.82009 13.911 6.02071 13.911 6.02071L6.30102 10.7351L6.29852 10.7226L2.65102 9.49446V9.49196L2.64164 9.49009C2.64804 9.48796 2.6543 9.48546 2.66039 9.48259L2.68039 9.47259L2.69977 9.46571C2.69977 9.46571 5.95664 8.09321 9.26727 6.69946C10.9248 6.00134 12.5948 5.29821 13.8791 4.75571C14.6409 4.43509 15.4034 4.11634 16.1666 3.79946C16.2179 3.77946 16.1935 3.77884 16.2304 3.77884Z"
                                fill="black" />
                        </svg>
                    </a>
                    <a href="https://t.me/akfauniversity" target="_blank" class=" p-3 bg-white rounded-md text-center"
                        rel="noopener noreferrer">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.87047 13.8154V4.6643H0.831472V13.8154H3.87079H3.87047ZM2.35161 3.41508C3.41115 3.41508 4.07078 2.71238 4.07078 1.8342C4.05095 0.936018 3.41115 0.25293 2.37176 0.25293C1.33165 0.25293 0.652344 0.936018 0.652344 1.83412C0.652344 2.7123 1.31174 3.415 2.33169 3.415H2.35137L2.35161 3.41508ZM5.5526 13.8154H8.59136V8.70558C8.59136 8.43244 8.61119 8.15859 8.69147 7.9635C8.91106 7.41682 9.41108 6.85093 10.2508 6.85093C11.3502 6.85093 11.7902 7.69004 11.7902 8.92036V13.8154H14.8289V8.56845C14.8289 5.75773 13.3299 4.44976 11.3305 4.44976C9.69128 4.44976 8.97135 5.36676 8.57137 5.99133H8.5916V4.66462H5.55276C5.59242 5.5231 5.55252 13.8158 5.55252 13.8158L5.5526 13.8154Z"
                                fill="black" />
                        </svg>
                    </a>
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
        font-family: 'Inter', sans-serif;

        &:first-child {
            margin-bottom: 10px;
            font-family: 'Manrope', sans-serif;
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