<template>
	<div>
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
		<div class='px-5'>
			<Swiper :slidesPerView="1" :spaceBetween="10" :pagination="{
				clickable: true,
			}" :breakpoints="{
			'0': {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			'640': {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			'768': {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			'1024': {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		}" :modules="modules" class="">
				<SwiperSlide v-for="(item, index) in dataSwiper" :key="index">
					<div class=" rounded-xl overflow-hidden shadow-lg my-8 min-h-72">
						<figure class="relative overflow-hidden">
							<img class="w-full peer" :src="item.thumbnail" alt="Sunset in the mountains">
							<button
								class="absolute font-mono lg:w-fit w-[70%] duration-300 peer-hover:bottom-3 hover:bottom-3 hover:bg-gray-700 text-sm bg-black text-white px-5 lg:text-sm text-[12.5px] rounded-2xl py-2 -bottom-full left-2/4 -translate-x-2/4">
								{{ item.button }}
							</button>
						</figure>
						<div class="px-6 py-4">
							<div class="font-semibold text-sm mb-2">{{ item.title }}</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</div>

</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const dataSwiper = [
	{
		title: "Galaxy S24 Ultra màu độc quyền",
		button: "Mua ngay",
		buttonLink: "",
		thumbnail: "https://images.samsung.com/is/image/samsung/assets/vn/2401/home/home_exclusives_thumbnail_1_pc_280x210.jpg?$280_210_JPG$",
	},
	{
		title: "Ốp lưng phiên bản nghệ sĩ Steven Wilson",
		button: "Mua ngay",
		buttonLink: "",
		thumbnail: "https://images.samsung.com/is/image/samsung/assets/vn/2401/home/home_exclusives_thumbnail_2_pc_280x210.jpg?$280_210_JPG$",
	},
	{
		title: "Galaxy S24+ màu độc quyền",
		button: "Mua ngay",
		buttonLink: "",
		thumbnail: "https://images.samsung.com/is/image/samsung/assets/vn/2401/home/home_exclusives_thumbnail_3_pc_280x210.jpg?$280_210_JPG$",
	},
	{
		title: "Ốp lưng phiên bản nghệ sĩ Ricardo Cavolo",
		button: "Mua ngay",
		buttonLink: "",
		thumbnail: "https://images.samsung.com/is/image/samsung/assets/vn/2401/home/home_exclusives_thumbnail_4_pc_280x210.jpg?$280_210_JPG$",
	},
	{
		title: "Galaxy S24 màu độc quyền",
		button: "Mua ngay",
		buttonLink: "",
		thumbnail: "https://images.samsung.com/is/image/samsung/assets/vn/2401/home/home_exclusives_thumbnail_5_pc_280x210.jpg?$280_210_JPG$",
	},
	{
		title: "Ốp lưng phiên bản nghệ sĩ Yeye Weller",
		button: "Mua ngay",
		buttonLink: "",
		thumbnail: "https://images.samsung.com/is/image/samsung/assets/vn/2401/home/home_exclusives_thumbnail_6_pc_280x210.jpg?$280_210_JPG$",
	},
]

export default defineNuxtComponent({
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			dataSwiper: dataSwiper
		}
	},
	setup() {
		return {
			modules: [Pagination],
		};
	},
});
</script>