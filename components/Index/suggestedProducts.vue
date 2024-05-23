<template>
    <div>
        <p v-if="header" class="m-14 mb-5 text-center font-bold  text-4xl"
            style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            {{ header }}
        </p>

        <div :class="`grid lg:grid-cols-${itemsRow ? itemsRow : '5'} md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-4 lg:px-0 px-3`">
            <div v-for="(item, index) in dataSuggestedProducts" key="index">
                <div class="mt-5 h-full" v-motion :initial="{
                    opacity: 0,
                    x: -100
                }" :visible-once="{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 500,
                        type: 'tween',
                        ease: 'easeOut',
                    }

                }" :delay="index * 150">
                    <div class=" rounded-2xl h-full overflow-hidden shadow-lg py-2">
                        <figure class="mt-2">
                            <img class="h-40 mx-auto" :src="baseImageURL + item.thumbnail"
                                alt="Sunset in the mountains">
                        </figure>

                        <div class="px-6 py-4 h-f">
                            <div class="font-bold text-lg text-center mb-2">{{ item.product_name }}</div>
                            <p class="text-gray-700 text-sm font-sans text-center">
                                <span class="font-semibold">Màu sắc:</span> kem sáng tạo
                            </p>
                            <p class="text-center py-3 font-semibold"
                                style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                <del class="font-normal text-sm text-gray-500 italic">{{
                                    (Number(item.price)).toLocaleString() }}</del><sup
                                    class="font-normal text-sm text-gray-500 italic">đ</sup>
                                &nbsp;
                                <span class="text-red-700">
                                    {{ (Number(item.price) - Number(item.price) * Number(item.discount) /
                                        100).toLocaleString() }}<sup>đ</sup>
                                </span>
                            </p>
                            <!-- THAY PRODUCT_ID THÀNH GROUP_ID 25/5/2024 -->
                            <div class="px-3 text-center pb-4">
                                <NuxtLink :to="`/product/${item.group_id}`"
                                    class="font-mono inline-block bg-black text-white w-[68%] py-1 rounded-3xl">
                                    Xem ngay
                                </NuxtLink to="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default defineNuxtComponent({
    props: ['dataSuggestedProducts', 'header', 'itemsRow'],
    async setup() {
        const baseImageURL = (await useBaseURL()).value.baseURLImage
        return {
            baseImageURL
        }
    },

})
</script>