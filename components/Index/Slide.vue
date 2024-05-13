<template>
    <div>
        <Swiper :hashNavigation="{
            watchState: true,
        }" :pagination="{
            clickable: true,
        }" :autoplay="{
            delay: 4848
        }" :modules="modules" @slideChange="onSlideChange">
            <SwiperSlide v-for="(item, index) in dataSlide">
                <IndexSlideTextTop v-if="item.type == 'text-top'" :data="item" />
                <IndexSlideVideo v-if="item.type == 'video'" :data="item" />
                <IndexSlideTextLeft v-if="item.type == 'text-left'" :data="item" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>


<!-- ============================================ JAVA SCRIPT ===================================================== -->
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from 'swiper/modules';

import "swiper/css"
import 'swiper/css/pagination';
const dataSlide = [
    {
        type: "text-top",
        image: {
            desktop: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Pre-order_KV_Dotcom_H_PC.jpg?imwidth=1366",
            mobile: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Pre-order_KV_Dotcom_MO.jpg?imwidth=360"
        },
        title: "Neo QLED | Neo QLED 8K | OLED",
        subtitle: "Trải nghiệm Samsung AI TV đỉnh cao",
        text: ["Combo quà tặng AI TV lên đến 40 triệu"],
        button: "Mua ngay",
        button_link: ""
    },
    {
        type: "video",
        image: {
            desktop: "https://images.samsung.com/is/content/samsung/assets/vn/home/2024/HOME_S24_Series_Main-KV_1440x640_pc.mp4",
            mobile: "https://images.samsung.com/is/content/samsung/assets/vn/home/2024/HOME_S24_Series_Main-KV_720x1080_mo.mp4"
        },
        title: "Galaxy S24 Series",
        subtitle: "",
        text: ["Ưu đãi đến 6 triệu đồng.", "Thu cũ đổi mới dỗ trợ đến 5 triệu đồng."],
        button: "Mua ngay",
        button_link: ""

    },
    {
        type: "text-left",
        image: {
            desktop: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Mothers_Day_KV_PC_Cross_GBM_1.png?imwidth=1366",
            mobile: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Mothers_Day_KV_MO_Cross_GBM_1.png?imwidth=360"
        },
        title: "Gửi gắm deal thương. Tặng mẹ phi thường.",
        subtitle: "",
        text: ["Ưu đãi đến 6 triệu đồng.", "Thu cũ đổi mới dỗ trợ đến 5 triệu đồng."],
        button: "Mua ngay",
        button_link: ""

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
            dataSlide: dataSlide
        }
    },
    setup() {
        return {
            modules: [Pagination, Autoplay],
        };
    },
    mounted() {
        this.onSlideChange(0);
    },
    methods: {
        onSlideChange(swiper) {
            // this.slideActive = swiper.activeIndex;
            // console.log(this.slideActive);

            const videos = document.querySelectorAll('video');
            videos.forEach(video => {
                video.currentTime = 0;
                video.play();
            });
            videos.forEach(video => {
                video.addEventListener('ended', () => {
                    video.play();
                });
            });
        }
    }
})
</script>