<template>
    <div class="relative bg-gray-50 rounded-2xl pt-12">
        <Swiper :hashNavigation="{
            watchState: true,
        }" :navigator="true" :modules="modules" :virtual="true" class="mySwiper" @swiper="setSwiperRef">
            <SwiperSlide :virtualIndex="0">
                <div class="relative grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-6 gap-3 mb-2">
                    <div class='  rounded-3xl text-white text-center overflow-hidden'>
                        <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/684-684-0506.jpg?$684_684_JPG$" alt="">
                    </div>
                    <div class='  rounded-3xl grid grid-cols-2 gap-3 grid-rows-2'>
                        <div class="w-full h-full  rounded-3xl overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/S24ultra-exnogift-PC.jpg?$330_330_JPG$s" alt="">
                        </div>
                        <div class="w-full h-full  rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/PC-Small-F-AR13DYHZA241.jpg?$330_330_JPG$" alt="">
                        </div>
                        <div class="w-full h-full  rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/S24series-nogift-PC.jpg?$330_330_JPG$" alt="">
                        </div>
                        <div class="w-full h-full  rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/330-330-0506.jpg?$330_330_JPG$" alt="">
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide :virtualIndex="1">
                <div class="relative grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-6 gap-3 mb-2">
                    <div class='  rounded-3xl text-white text-center overflow-hidden'>
                        <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Big_PC_UA58AU7000KXXV.jpg?$684_684_JPG$" alt="">
                    </div>
                    <div class='  rounded-3xl grid grid-cols-2 gap-3  grid-rows-2'>
                        <div class="w-full h-full  rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_QA65QE1CAKXXV2.jpg?$330_330_JPG$" alt="">
                        </div>
                        <div class="w-full h-full  rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_QA55Q70CAKXXV2.jpg?$330_330_JPG$" alt="">

                        </div>
                        <div class="w-full h-full  rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_QA65LS03DAKXXV1.jpg?$330_330_JPG$" alt="">

                        </div>
                        <div class="w-full h-full  rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_UA65BU8000KXXV1.jpg?$330_330_JPG$" alt="">

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide :virtualIndex="2">
                <div class="relative grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-6 gap-3 mb-2">
                    <div class='  rounded-3xl text-white text-center overflow-hidden'>
                        <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/S23FE-nogift-PC.jpg?$684_684_JPG$" alt="">
                    </div>
                    <div class=' rounded-3xl grid grid-cols-2 gap-3  grid-rows-2'>
                        <div class="w-full h-full rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/ZFlip5-nogift-PC.jpg?$330_330_JPG$" alt="">

                        </div>
                        <div class="w-full h-full rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/A55-5G-pc-0429.jpg?$330_330_JPG$" alt="">

                        </div>
                        <div class="w-full h-full rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/A35-pc-0429.jpg?$330_330_JPG$" alt="">

                        </div>
                        <div class="w-full h-full rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Fit3-nogift-PC.jpg?$330_330_JPG$" alt="">

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide :virtualIndex="3">
                <div class="relative grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-6 gap-3 mb-2">
                    <div class='  rounded-3xl text-white text-center overflow-hidden'>
                        <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Big_PC_F-AR13DYHZA24_.jpg?$684_684_JPG$" alt="">
                    </div>
                    <div class=' rounded-3xl grid grid-cols-2 gap-3  grid-rows-2'>
                        <div class="w-full h-full rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_RB30N4170BU_SV.jpg?$330_330_JPG$" alt="">

                        </div>
                        <div class="w-full h-full rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_DV90BB9440GHSV.png?$330_330_PNG$" alt="">

                        </div>
                        <div class="w-full h-full rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_RF48A4010B4_SV_.jpg?$330_330_JPG$" alt="">

                        </div>
                        <div class="w-full h-full rounded-3xl  overflow-hidden">
                            <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_F-DW60CB750S241.jpg?$330_330_JPG$" alt="">

                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
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