<template>
    <div class="relative bg-gray-50 rounded-2xl pt-12">
        
        <div class="absolute top-6 font-semibold w-full text-lg left-2/4 text-center -translate-x-2/4 px-10"
            style="z-index: 99999;">
            <Swiper  :pagination="false" :spaceBetween="10" :breakpoints="{
                '0': {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                '640': {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                '1024': {
                    slidesPerView: 8,
                    spaceBetween: 10,
                },
            }" class="lg:*:justify-center">
                <SwiperSlide>
                    <button @click="slideTo(1)" >Ưu đãi</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button @click="slideTo(2)" >TiVi</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button @click="slideTo(3)" >Điện thoại</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button @click="slideTo(4)" >Gia Dụng</button>
                </SwiperSlide>
            </Swiper>

        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import {  Navigation,Virtual } from 'swiper/modules';

import { ref } from 'vue';
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/virtual';

export default defineNuxtComponent({
    components: {
        Swiper,
        SwiperSlide
    },

    data() {
        return {
            slideActive: 0
        }
    },
    setup() {
        let swiperRef = null;

        const setSwiperRef = (swiper) => {
            swiperRef = swiper;
        };
        const slideTo = (index) => {
            alert("to"+index);
            swiperRef.slideTo(index - 1, 0);
        };

        return {
            swiperRef: null,
            setSwiperRef,
            slideTo,
            modules: [Navigation, Virtual],
        };
    }
})
</script>