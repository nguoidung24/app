<template>
    <div>

        <!-- ================================== START ================================== -->
        <div class="lg:px-20 px-0" v-motion :initial="{
            opacity: 0,
            y: 100,
        }" :enter="{
            opacity: 1,
            y: 0,
        }" :leave="{
            y: -100,
            opacity: 0,
        }" v-if="!isLoading">
            <IndexSlide :dataSlide="dataIndexSlider" />
            <p class="m-14 mb-5 text-center font-bold  text-4xl">
                Sản Phẩm Nổi Bật
            </p>
            <IndexOutstandingProduct />
            <p class="mt-14 px-5 lg:text-left text-center">
                <span class="text-xl font-bold ">Đặc quyền của thegioidilac.shop</span>
                <span class="text-lg  ms-3 block lg:inline-block">
                    <NuxtLink to="/"
                        class="flex hover:cursor-pointer hover:underline font-semibold text-base justify-center items-center">
                        Tìm
                        hiểu thêm
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-caret-right" viewBox="0 0 16 16">
                            <path
                                d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                        </svg>
                    </NuxtLink>
                </span>
            </p>
            <IndexHotProduct />
            <IndexBigSlide />
            <p class="m-14 mb-5 text-center font-bold  text-4xl"
                style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                Gợi ý dành cho bạn
            </p>
            <IndexSuggestedProducts />
        </div>
        <!-- ================================== END ================================== -->
        <div v-else>
            <div class="absolute top-2/4 left-2/4 -translate-x-2/4">
                <v-icon name="vi-file-type-ionic" class="animate-spin" scale="5"></v-icon>
                <p class="text-center italic">Loading...</p>
            </div>
        </div>
    </div>
</template>
<script>
export default defineNuxtComponent({
    head() {
        return {
            title: "Trang chủ"
        }
    },
    data() {
        return {
            dataIndexOutstandingProducts:null,
            dataIndexSlider: null,
            isLoading: true,
        }
    },
    async created() {
        const dataIndexSlider = (await useSlider()).value;
        this.dataIndexSlider = dataIndexSlider.listProducts.data;

        const dataIndexOutstandingProducts = (await useOutstandingProducts()).value;
        this.dataIndexOutstandingProducts = dataIndexOutstandingProducts.listOutstandingProducts.data

        this.isLoading = false;
    }
})
</script>