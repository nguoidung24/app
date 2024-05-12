<template>
    <div class="relative bg-gray-200 rounded-2xl pt-12">
        <Swiper :hashNavigation="{
            watchState: true,
        }" :pagination="{
            clickable: true,
        }" :modules="modules" :virtual="true" class="mySwiper" @swiper="setSwiperRef">
            <SwiperSlide :virtualIndex="0">
                <div class="relative grid grid-cols-1 lg:grid-cols-2 p-6 gap-3 mb-2">

                    <div class='h-[670px] bg-gray-900 rounded-3xl text-white text-center'>

                    </div>
                    <div class='h-[670px]  rounded-3xl grid grid-cols-2 gap-3 grid-rows-2'>
                        <div class="w-full h-full bg-gray-900 rounded-3xl">

                        </div>
                        <div class="w-full h-full bg-gray-900 rounded-3xl">

                        </div>
                        <div class="w-full h-full bg-gray-900 rounded-3xl">

                        </div>
                        <div class="w-full h-full bg-gray-900 rounded-3xl">

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide :virtualIndex="1">
                <div class="relative grid grid-cols-1 lg:grid-cols-2 p-6 gap-3 mb-2">
                    <div class='h-[670px] bg-red-900 rounded-3xl text-white text-center'>

                    </div>
                    <div class='h-[670px]  rounded-3xl grid grid-cols-2 gap-3  grid-rows-2'>
                        <div class="w-full h-full bg-red-900 rounded-3xl">

                        </div>
                        <div class="w-full h-full bg-red-900 rounded-3xl">

                        </div>
                        <div class="w-full h-full bg-red-900 rounded-3xl">

                        </div>
                        <div class="w-full h-full bg-red-900 rounded-3xl">

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide :virtualIndex="2">
                <div class="relative grid grid-cols-1 lg:grid-cols-2 p-6 gap-3 mb-2">

                    <div class='h-[670px] bg-cyan-900 rounded-3xl text-white text-center'>

                    </div>
                    <div class='h-[670px] rounded-3xl grid grid-cols-2 gap-3  grid-rows-2'>
                        <div class="w-full h-full bg-cyan-900 rounded-3xl">

                        </div>
                        <div class="w-full h-full bg-cyan-900 rounded-3xl">

                        </div>
                        <div class="w-full h-full bg-cyan-900 rounded-3xl">

                        </div>
                        <div class="w-full h-full bg-cyan-900 rounded-3xl">

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
                    slidesPerView: 7,
                    spaceBetween: 10,
                },
                '1024': {
                    slidesPerView: 11,
                    spaceBetween: 10,
                },
            }" class="lg:*:justify-center">
                <SwiperSlide>
                    <button @click="slideTo(1)" >Điện thoại</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button @click="slideTo(3)" >Điều hòa</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button @click="slideTo(2)" >Tủ lạnh</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button @click="slideTo(2)" >TiVi</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button @click="slideTo(2)" >Điều hòa</button>
                </SwiperSlide>
            </Swiper>

        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Virtual } from 'swiper/modules';

import { ref } from 'vue';
import "swiper/css"
import 'swiper/css/pagination';
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
            modules: [Pagination, Virtual],
        };
    }
})
</script>