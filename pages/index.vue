<template>
    <div>
        <HeaderComponent />
        <Swiper :hashNavigation="{
            watchState: true,
        }" :pagination="{
            clickable: true,
        }" :autoplay="{ delay: 5000 }" :modules="modules">
            <SwiperSlide>
                <div class="relative justify-center --- lg:flex md:flex hidden">
                    <div class="absolute top-28 left-2/4 -translate-x-2/4 z-50 text-center">
                        <p class="font-bold text-3xl">Trải nghiệm Samsung AI TV đỉnh cao</p>

                        <p class="font-bold text-4xl">Neo QLED | Neo QLED 8K | OLED</p>

                        <p class="mt-3 text-lg">Combo quà tặng AI TV lên đến 40 triệu</p>
                        <button class="mt-6 bg-black text-white rounded-3xl px-5 py-2 font-mono">
                            Mua ngay
                        </button>
                    </div>
                    <figure>
                        <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Pre-order_KV_Dotcom_H_PC.jpg?imwidth=1366"
                            alt="">

                    </figure>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="relative justify-center --- lg:flex md:flex hidden">
                    <div class="absolute top-2/4 left-36 -translate-y-2/4 z-50 text-left max-w-[26rem]">
                        <p class="font-bold text-5xl">Galaxy S24 Series</p>

                        <p class="mt-8 text-xl">Ưu đãi đến 6 triệu đồng.</p>

                        <p class="text-lg">Thu cũ đổi mới dỗ trợ đến 5 triệu đồng.</p>
                        <button class="mt-8 bg-black text-white rounded-3xl px-5 py-2 font-mono">
                            Mua ngay
                        </button>
                    </div>
                    <video autoplay muted loop name="media">
                        <source
                            src="https://images.samsung.com/is/content/samsung/assets/vn/home/2024/HOME_S24_Series_Main-KV_1440x640_pc.mp4"
                            type="video/webm">
                    </video>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="relative justify-center --- lg:flex md:flex hidden">
                    <div class="absolute top-2/4 left-36 -translate-y-2/4 z-50 text-left max-w-[26rem]">
                        <p class="font-bold text-5xl">Galaxy S24 Series</p>

                        <p class="mt-8 text-xl">Ưu đãi đến 6 triệu đồng.</p>

                        <p class="text-lg">Thu cũ đổi mới dỗ trợ đến 5 triệu đồng.</p>
                        <button class="mt-8 bg-black text-white rounded-3xl px-5 py-2 font-mono">
                            Mua ngay
                        </button>
                    </div>
                    <figure>
                        <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Mothers_Day_KV_PC_Cross_GBM_1.png?imwidth=1366"
                            alt="">
                    </figure>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from 'swiper/modules';

import "swiper/css"
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Pagination, Autoplay],
        };
    },
}
</script>