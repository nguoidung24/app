<template>
    <div class="relative bg-gray-50 rounded-2xl pt-6">
        <div class="font-semibold w-full text-lg text-center  lg:px-10 px-3"
            style="z-index: 99999;">
            <Swiper :navigation="true" :modules="modules" :spaceBetween="10" :breakpoints="{
                '0': {
                    slidesPerView: 3,
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
                <SwiperSlide v-for="(item, index) in dataTab" :key="index">
                    <button @click="slideTo(index)" :class="tabActive == index ? 'border-b-2 border-black' : ' hover:border-b-2  hover:text-gray-500'">{{item.name}}</button>
                </SwiperSlide>
            </Swiper>

        </div>
        <div v-for="(item, index) in dataTab" :key="index">
            <div v-if="tabActive == index"
                class="relative grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-6 gap-3 mb-2">
                <div class='  rounded-3xl text-white text-center overflow-hidden'>
                    <img :src="item.bigImage" alt="">
                </div>
                <div class='  rounded-3xl grid grid-cols-2 gap-3 grid-rows-2'>
                    <div v-for="(value, key) in item.smallImage" :key="key"
                        class="w-full h-full  rounded-3xl overflow-hidden">
                        <img :src="value" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from 'swiper/modules';

import "swiper/css"
import 'swiper/css/navigation';

const dataTab = [
    {   
        name: "Ưu đãi",
        bigImage: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/684-684-0506.jpg?$684_684_JPG$",
        smallImage: [
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/S24ultra-exnogift-PC.jpg?$330_330_JPG$s",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/PC-Small-F-AR13DYHZA241.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/S24series-nogift-PC.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/330-330-0506.jpg?$330_330_JPG$"
        ]
    },
    {
        name: "TiVi",
        bigImage: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Big_PC_UA58AU7000KXXV.jpg?$684_684_JPG$",
        smallImage: [
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_QA65QE1CAKXXV2.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_QA55Q70CAKXXV2.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_QA65LS03DAKXXV1.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_UA65BU8000KXXV1.jpg?$330_330_JPG$"
        ]
    },
    {
        name: "Điện thoại",
        bigImage: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/S23FE-nogift-PC.jpg?$684_684_JPG$",
        smallImage: [
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/ZFlip5-nogift-PC.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/A55-5G-pc-0429.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/A35-pc-0429.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Fit3-nogift-PC.jpg?$330_330_JPG$"
        ]
    },
    {
        name: "Gia dụng",
        bigImage: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Big_PC_F-AR13DYHZA24_.jpg?$684_684_JPG$",
        smallImage: [
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_RB30N4170BU_SV.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_DV90BB9440GHSV.png?$330_330_PNG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_RF48A4010B4_SV_.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_F-DW60CB750S241.jpg?$330_330_JPG$"
        ]
    }
]

export default defineNuxtComponent({
    components: {
        Swiper,
        SwiperSlide
    },

    data() {
        return {
            slideActive: 0,
            dataTab: dataTab,
            tabActive: 0
        }
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
    methods: {
        slideTo(index){
            this.tabActive = index 
        }
    }
})
</script>

<style>
.swiper-button-prev::after,
.swiper-button-next::after {
    color: rgb(54, 52, 52);
    font-size: 15px
}
</style>
