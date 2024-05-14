<template>
    <div class="grid lg:grid-cols-5 grid-cols-2 gap-x-5 lg:px-0 px-3">
        <div v-for="(item, index) in new Array(8).fill(0) " key="index">
            <div class="mt-5" v-motion :initial="{
                opacity: 0,
                x: -100
            }" :visible="{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 500,
                    type: 'tween',
                    ease: 'easeOut',
                }

            }" :delay="index < 5 ? index * 150 : index % 5 * 150">
                <div class=" rounded-2xl overflow-hidden shadow-lg py-2">
                    <figure class="">
                        <img class="w-full"
                        src="https://images.samsung.com/is/image/samsung/p6pim/vn/sm-a556elbaxxv/gallery/vn-galaxy-a55-5g-sm-a556-sm-a556elbaxxv-thumb-540189536?$216_216_PNG$"
                        alt="Sunset in the mountains">
                    </figure>
                  
                    <div class="px-6 py-4">
                        <div class="font-bold text-lg text-center mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-sm font-sans text-center">
                            <span class="font-semibold">Màu sắc:</span> kem sáng tạo
                        </p>
                        <p class="text-center py-3 font-semibold" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                            21.35.000 <sup>đ</sup>
                        </p>
                    </div>
                    <div class="px-3 text-center pb-4">
                        <button class="font-mono bg-black text-white w-[68%] py-1 rounded-3xl">
                            Mua Ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>