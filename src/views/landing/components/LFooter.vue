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
                        <svg width="15" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.90293 8.7297C5.90293 7.16923 7.16723 5.90388 8.72725 5.90388C10.2873 5.90388 11.5523 7.16923 11.5523 8.7297C11.5523 10.2902 10.2873 11.5555 8.72725 11.5555C7.16723 11.5555 5.90293 10.2902 5.90293 8.7297ZM4.37579 8.7297C4.37579 11.1337 6.32394 13.0824 8.72725 13.0824C11.1306 13.0824 13.0787 11.1337 13.0787 8.7297C13.0787 6.32569 11.1306 4.37698 8.72725 4.37698C6.32394 4.37698 4.37579 6.32569 4.37579 8.7297ZM12.2341 4.20439C12.234 4.40558 12.2935 4.60227 12.4052 4.76959C12.5169 4.93692 12.6757 5.06736 12.8614 5.14443C13.0472 5.22149 13.2517 5.24172 13.449 5.20255C13.6463 5.16338 13.8275 5.06657 13.9698 4.92437C14.112 4.78216 14.209 4.60095 14.2483 4.40365C14.2876 4.20634 14.2675 4.00181 14.1906 3.81591C14.1138 3.63 13.9835 3.47108 13.8163 3.35925C13.6491 3.24741 13.4525 3.18767 13.2514 3.18759H13.251C12.9814 3.18771 12.7229 3.29487 12.5322 3.48552C12.3415 3.67617 12.2343 3.93472 12.2341 4.20439ZM5.30363 15.6296C4.47741 15.592 4.02834 15.4543 3.72991 15.338C3.33426 15.1839 3.05196 15.0004 2.75516 14.7039C2.45836 14.4074 2.27463 14.1253 2.12128 13.7296C2.00495 13.4312 1.86732 12.9819 1.82976 12.1554C1.78868 11.2619 1.78048 10.9935 1.78048 8.72977C1.78048 6.46606 1.78936 6.1984 1.82976 5.30414C1.86739 4.47768 2.00603 4.02923 2.12128 3.72997C2.27531 3.3342 2.45876 3.05182 2.75516 2.75493C3.05156 2.45804 3.33358 2.27427 3.72991 2.12087C4.02821 2.0045 4.47741 1.86684 5.30363 1.82927C6.19689 1.78817 6.46522 1.77997 8.72725 1.77997C10.9893 1.77997 11.2579 1.78885 12.1519 1.82927C12.9781 1.86691 13.4264 2.00559 13.7256 2.12087C14.1213 2.27427 14.4036 2.45845 14.7004 2.75493C14.9972 3.05142 15.1802 3.3342 15.3342 3.72997C15.4506 4.02835 15.5882 4.47768 15.6258 5.30414C15.6668 6.1984 15.675 6.46606 15.675 8.72977C15.675 10.9935 15.6668 11.2611 15.6258 12.1554C15.5881 12.9819 15.4498 13.4311 15.3342 13.7296C15.1802 14.1253 14.9968 14.4077 14.7004 14.7039C14.404 15.0001 14.1213 15.1839 13.7256 15.338C13.4273 15.4544 12.9781 15.592 12.1519 15.6296C11.2586 15.6707 10.9903 15.6789 8.72725 15.6789C6.4642 15.6789 6.19662 15.6707 5.30363 15.6296ZM5.23346 0.304265C4.33132 0.34536 3.71486 0.488448 3.1765 0.697994C2.61896 0.914389 2.14698 1.2047 1.67533 1.67574C1.20368 2.14678 0.914198 2.61964 0.697866 3.17735C0.48838 3.7162 0.345334 4.33249 0.30425 5.2349C0.262489 6.13872 0.25293 6.42768 0.25293 8.7297C0.25293 11.0317 0.262489 11.3207 0.30425 12.2245C0.345334 13.127 0.48838 13.7432 0.697866 14.2821C0.914198 14.8394 1.20375 15.3128 1.67533 15.7837C2.14691 16.2545 2.61896 16.5444 3.1765 16.7614C3.71588 16.971 4.33132 17.114 5.23346 17.1551C6.1375 17.1962 6.4259 17.2065 8.72725 17.2065C11.0286 17.2065 11.3175 17.1969 12.221 17.1551C13.1233 17.114 13.7393 16.971 14.278 16.7614C14.8352 16.5444 15.3075 16.2547 15.7792 15.7837C16.2508 15.3126 16.5397 14.8394 16.7566 14.2821C16.9661 13.7432 17.1099 13.1269 17.1503 12.2245C17.1913 11.32 17.2009 11.0317 17.2009 8.7297C17.2009 6.42768 17.1913 6.13872 17.1503 5.2349C17.1092 4.33243 16.9661 3.71586 16.7566 3.17735C16.5397 2.61998 16.2501 2.14752 15.7792 1.67574C15.3083 1.20396 14.8352 0.914389 14.2787 0.697994C13.7393 0.488448 13.1232 0.344682 12.2217 0.304265C11.3182 0.26317 11.0293 0.25293 8.72793 0.25293C6.42658 0.25293 6.1375 0.262491 5.23346 0.304265Z"
                                fill="black" />
                        </svg>
                    </a>
                    <a href="https://t.me/akfauniversity" target="_blank" class=" p-3 bg-white rounded-md text-center"
                        rel="noopener noreferrer">
                        <svg width="15" height="14" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.2935 0.497588C15.0929 0.512185 14.8959 0.559256 14.7104 0.636963H14.7079C14.5298 0.707588 13.6829 1.06384 12.3954 1.60384L7.78164 3.54696C4.47102 4.94071 1.21664 6.31321 1.21664 6.31321L1.25539 6.29821C1.25539 6.29821 1.03102 6.37196 0.796644 6.53259C0.651849 6.62473 0.527253 6.74528 0.430394 6.88696C0.315394 7.05571 0.222894 7.31384 0.257269 7.58071C0.313519 8.03196 0.606019 8.30259 0.816019 8.45196C1.02852 8.60321 1.23102 8.67384 1.23102 8.67384H1.23602L4.28789 9.70196C4.42477 10.1413 5.21789 12.7488 5.40852 13.3495C5.52102 13.7082 5.63039 13.9326 5.76727 14.1038C5.83352 14.1913 5.91102 14.2645 6.00414 14.3232C6.05256 14.3514 6.10418 14.3736 6.15789 14.3895L6.12664 14.382C6.13602 14.3845 6.14352 14.392 6.15039 14.3945C6.17539 14.4013 6.19227 14.4038 6.22414 14.4088C6.70727 14.5551 7.09539 14.2551 7.09539 14.2551L7.11727 14.2376L8.91914 12.597L11.9391 14.9138L12.0079 14.9432C12.6373 15.2195 13.2748 15.0657 13.6116 14.7945C13.951 14.5213 14.0829 14.172 14.0829 14.172L14.1048 14.1157L16.4385 2.16009C16.5048 1.86509 16.5216 1.58884 16.4485 1.32071C16.3731 1.04935 16.199 0.815967 15.9604 0.666338C15.76 0.544535 15.5277 0.485743 15.2935 0.497588ZM15.2304 1.77884C15.2279 1.81821 15.2354 1.81384 15.2179 1.88946V1.89634L12.906 13.7276C12.896 13.7445 12.8791 13.7813 12.8329 13.8182C12.7841 13.857 12.7454 13.8813 12.5423 13.8007L8.84852 10.9688L6.61727 13.0026L7.08602 10.0088L13.121 4.38384C13.3698 4.15259 13.2866 4.10384 13.2866 4.10384C13.3041 3.82009 12.911 4.02071 12.911 4.02071L5.30102 8.73509L5.29852 8.72259L1.65102 7.49446V7.49196L1.64164 7.49009C1.64804 7.48796 1.6543 7.48546 1.66039 7.48259L1.68039 7.47259L1.69977 7.46571C1.69977 7.46571 4.95664 6.09321 8.26727 4.69946C9.92477 4.00134 11.5948 3.29821 12.8791 2.75571C13.6409 2.43509 14.4034 2.11634 15.1666 1.79946C15.2179 1.77946 15.1935 1.77884 15.2304 1.77884Z"
                                fill="black" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/akfa-university/" target="_blank"
                        class=" p-3 bg-white rounded-md text-center" rel="noopener noreferrer">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.99533 13.3702V4.65652H1.00626V13.3702H3.99565H3.99533ZM2.50142 3.46703C3.54356 3.46703 4.19235 2.79792 4.19235 1.96173C4.17285 1.10649 3.54356 0.456055 2.52124 0.456055C1.49823 0.456055 0.830078 1.10649 0.830078 1.96165C0.830078 2.79785 1.47864 3.46695 2.48184 3.46695H2.50119L2.50142 3.46703ZM5.64983 13.3702H8.63866V8.50459C8.63866 8.24451 8.65817 7.98375 8.73713 7.79799C8.95311 7.27745 9.44492 6.73861 10.2708 6.73861C11.3521 6.73861 11.785 7.5376 11.785 8.70911V13.3702H14.7737V8.37402C14.7737 5.69768 13.2993 4.45224 11.3328 4.45224C9.72051 4.45224 9.01241 5.3254 8.619 5.92011H8.6389V4.65682H5.64998C5.689 5.47427 5.64975 13.3705 5.64975 13.3705L5.64983 13.3702Z"
                                fill="#131A34" />
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