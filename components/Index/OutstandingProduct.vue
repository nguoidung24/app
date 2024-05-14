<template>
    <div class="relative bg-gray-50 rounded-2xl pt-6">
        <div class="font-semibold w-full text-lg text-center  lg:px-10 px-3" style="z-index: 99999;">
            <Swiper :navigation="true" :modules="modules" :spaceBetween="10" :breakpoints="{
                '0': {
                    slidesPerView: 1,
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
                    <button @click="slideTo(index)"
                        :class="tabActive == index ? 'border-b-2 border-black' : ' hover:border-b-2  hover:text-gray-500'">{{
                            item.name }}</button>
                </SwiperSlide>
            </Swiper>

        </div>
        <div v-for="(item, index) in dataTab" :key="index">
            <div v-if="tabActive == index" v-motion :initial="{
                opacity: 0,
                y: 100,
            }" :enter="{
                opacity: 1,
                y: 0,
            }" :leave="{
                y: -100,
                opacity: 0,
            }" class="relative grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-6 gap-3 mb-2">
                <div class='rounded-3xl text-black text-center overflow-hidden'>
                    <figure class="relative">
                        <img :src="item.bigImage" alt="">
                       
                        <div class="w-full h-full peer/a absolute top-0 left-0">
                        </div>

                        <NuxtLink to="/"
                            class="absolute font-mono -bottom-full peer/btn peer-hover/a:bottom-10 hover:bottom-10 left-2/4 bg-black text-white lg:px-10 px-5 rounded-3xl lg:w-fit lg:text-base w-[70%] text-[13px] text-center duration-500 py-3 -translate-x-2/4">
                            {{ item.button }}
                        </NuxtLink>
                         <p class="absolute bottom-10 left-2/4 peer-hover/a:bottom-full hover:bottom-full peer-hover/btn:bottom-full  -translate-x-2/4 font-bold text-xl transition-all duration-200">
                            {{ item.bigText }}
                        </p>
                    </figure>
                </div>
                <div class='  rounded-3xl grid grid-cols-2 gap-3 grid-rows-2'>
                    <div v-for="(value, key) in item.smallImage" :key="key"
                        class="w-full h-full rounded-3xl  overflow-hidden">
                        <figure class="relative ">
                            <img :src="value" alt="">
                            <div class="w-full h-full peer/a absolute top-0 left-0">
                            </div>
                            <NuxtLink to="/"
                                class="absolute font-mono -bottom-full peer/btn peer-hover/a:bottom-10 hover:bottom-10 left-2/4 bg-black text-white  px-5 rounded-3xl lg:w-fit  w-[70%] text-[13px] text-center duration-500 py-3 -translate-x-2/4">
                                {{ item.button }}
                            </NuxtLink>
                            <p
                                class="absolute z-0 lg:bottom-10 transition-all duration-200 peer-hover/a:bottom-full hover:bottom-full peer-hover/btn:bottom-full bottom-2 text-center font-bold lg:text-sm md:text-sm text-[12.5px] w-full px-5 left-2/4 -translate-x-2/4">
                                {{ item.smaillText[key] }}
                            </p>

                          
                        </figure>
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
        name: "Điện thoại",
        bigText: "65 Inch The Frame LS03D QLED 4K Smart TV (2024)",
        button: "Mua ngay",
        bigImage: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/S23FE-nogift-PC.jpg?$684_684_JPG$",
        smallImage: [
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/ZFlip5-nogift-PC.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/A55-5G-pc-0429.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/A35-pc-0429.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Fit3-nogift-PC.jpg?$330_330_JPG$"
        ],
        smaillText: [
            "Galalxy S24 Ultra màu độc quyền. Tặng ngay Buds FE vs Sạc 25W",
            "Galaxy S24 | S24+ màu độc quyền. Tặng ngay Buds FE và Sạc 25W",
            "Điều hòa Digital Inverter 12,000 BTU/h",
            "Loa Tranh Music Frame HW-LS60D (2024)"
        ]
    },
    {
        name: "Ưu đãi",
        bigText: "65 Inch The Frame LS03D QLED 4K Smart TV (2024)",
        button: "Mua ngay",
        bigImage: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/684-684-0506.jpg?$684_684_JPG$",
        smallImage: [
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/S24ultra-exnogift-PC.jpg?$330_330_JPG$s",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/PC-Small-F-AR13DYHZA241.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/S24series-nogift-PC.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/330-330-0506.jpg?$330_330_JPG$"
        ],
        smaillText: [
            "Galalxy S24 Ultra màu độc quyền. Tặng ngay Buds FE vs Sạc 25W",
            "Galaxy S24 | S24+ màu độc quyền. Tặng ngay Buds FE và Sạc 25W",
            "Điều hòa Digital Inverter 12,000 BTU/h",
            "Loa Tranh Music Frame HW-LS60D (2024)"
        ]
    },
    {
        name: "TiVi",
        bigText: "65 Inch The Frame LS03D QLED 4K Smart TV (2024)",
        button: "Mua ngay",
        bigImage: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Big_PC_UA58AU7000KXXV.jpg?$684_684_JPG$",
        smallImage: [
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_QA65QE1CAKXXV2.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_QA55Q70CAKXXV2.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_QA65LS03DAKXXV1.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_UA65BU8000KXXV1.jpg?$330_330_JPG$"
        ],
        smaillText: [
            "Galalxy S24 Ultra màu độc quyền. Tặng ngay Buds FE vs Sạc 25W",
            "Galaxy S24 | S24+ màu độc quyền. Tặng ngay Buds FE và Sạc 25W",
            "Điều hòa Digital Inverter 12,000 BTU/h",
            "Loa Tranh Music Frame HW-LS60D (2024)"
        ]
    },

    {
        name: "Gia dụng",
        bigText: "65 Inch The Frame LS03D QLED 4K Smart TV (2024)",
        button: "Mua ngay",
        bigImage: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Big_PC_F-AR13DYHZA24_.jpg?$684_684_JPG$",
        smallImage: [
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_RB30N4170BU_SV.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_DV90BB9440GHSV.png?$330_330_PNG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_RF48A4010B4_SV_.jpg?$330_330_JPG$",
            "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Small_PC_F-DW60CB750S241.jpg?$330_330_JPG$"
        ],
        smaillText: [
            "Galalxy S24 Ultra màu độc quyền. Tặng ngay Buds FE vs Sạc 25W",
            "Galaxy S24 | S24+ màu độc quyền. Tặng ngay Buds FE và Sạc 25W",
            "Điều hòa Digital Inverter 12,000 BTU/h",
            "Loa Tranh Music Frame HW-LS60D (2024)"
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
        color: rgb(54, 52, 52) !important;
        font-size: 15px !important;
    }
}
</style>
