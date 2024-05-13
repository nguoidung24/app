<template>
    <div>
        <div class='relative'>
            <figure>
                <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/HOME_Q5_MX-KV_1440X810_pc_default.jpg?$1440_810_JPG$"
                    alt="">
            </figure>

            <div class="absolute top-10 text-black w-full left-2/4 -translate-x-2/4 ">
                <p class="text-4xl block text-center font-bold pb-6">
                    Gia Dụng
                </p>
                <Swiper :navigation="true" :modules="modules" :spaceBetween="10" :breakpoints="{
                    '0': {
                        slidesPerView:1,
                        spaceBetween: 0,
                    },
                    '640': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    '1024': {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    },
                }" class="lg:*:justify-center">
                    <SwiperSlide v-for="(item, index) in dataTab" :key="index" class="text-center">
                        <button @click="slideTo(index)"
                            :class="(tabActive == index ? 'border-b-2 border-black' : ' hover:border-b-2  hover:text-gray-500 ') +'  text-center'">{{
                                item?.name }}</button>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from 'swiper/modules';

import "swiper/css"
import 'swiper/css/navigation';
export default defineNuxtComponent({
    components: {
        Swiper,
        SwiperSlide
    },

    data() {
        return {
            slideActive: 0,
            dataTab: [{ name: "Tủ lạnh BESPOKE" }, { name: "Thiết Bị Bếp" }, { name: "Điều Hòa Không Khí" },{ name: "Thiết Bị Bếp" }],
            tabActive: 0
        }
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
    methods: {
        slideTo(index) {
            this.tabActive = index
        }
    }
})
</script>

<style>
@media (min-width: 0px) {

    /* các CSS hiệu lực khi màn hình từ 1200px trở đi*/
    .swiper-button-prev::after,
    .swiper-button-next::after {
        color: rgb(255, 255, 255) !important;
        font-size: 20px !important;
    }
}
</style>
