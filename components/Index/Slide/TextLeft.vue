<template>
    <div>
        <!-- ================================= DESKTOP ========================================= -->
        <div class="relative justify-center --- lg:flex md:flex hidden">
            <div class="absolute top-2/4 lg:left-16 left-5 -translate-y-2/4 z-50 text-left lg:max-w-80 max-w-56">
                <p class="font-bold lg:text-5xl text-3xl">Gửi gắm deal thương. Tặng mẹ phi thường.</p>

                <p class="mt-8 lg:text-xl text-lg">Ưu đãi đến 6 triệu đồng.</p>

                <p class="lg:text-lg text-base">Thu cũ đổi mới dỗ trợ đến 5 triệu đồng.</p>
                <button class="mt-8 bg-black text-white rounded-3xl px-5 py-2 font-mono">
                    Mua ngay
                </button>
            </div>
            <figure>
                <img src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Mothers_Day_KV_PC_Cross_GBM_1.png?imwidth=1366"
                    alt="">
            </figure>
        </div>
        <!-- ================================= MOBILE ========================================= -->

        <div class="relative justify-center --- lg:hidden md:hidden flex">
            <div class="absolute top-16 left-2/4 -translate-x-2/4 z-50 text-center w-full">
                <p class="font-bold text-4xl">Gửi gắm deal thương. Tặng mẹ phi thường.</p>

                <p class="mt-8 text-xl">Ưu đãi đến 6 triệu đồng.</p>

                <p class="text-lg">Thu cũ đổi mới dỗ trợ đến 5 triệu đồng.</p>
                <button class="mt-8 bg-black text-white rounded-3xl px-5 py-2 font-mono">
                    Mua ngay
                </button>
            </div>
            <figure class="w-full">
                <img class="w-full"
                    src="https://images.samsung.com/is/image/samsung/assets/vn/home/2024/Mothers_Day_KV_MO_Cross_GBM_1.png?imwidth=360"
                    alt="">
            </figure>
        </div>
    </div>
</template>
<script>
export default defineNuxtComponent({
    props: ['data'],
    created() {

    },

})
</script>