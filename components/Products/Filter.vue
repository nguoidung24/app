<template>
    <form class="">
        <div class=" border-gray-200 pb-4">
            <fieldset>
                <legend class="w-full px-2">
                    <button type="button" class="flex w-full items-center justify-between p-2 text-gray-400 hover"
                        aria-controls="filter-section-0" aria-expanded="false">
                        <span class="text-base font-semibold text-gray-900">Màu Sắc</span>
                    </button>
                </legend>
                <div class="px-4 pb-2 pt-4" id="filter-section-0">
                    <div class="space-y-3">
                        <div class="flex items-center">
                            <input @change="handleChange('color_id', 0)" :checked="data['color_id'] == undefined"
                                :id="`color-0`" type="radio"
                                class="size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                :style="`background-color: white; border-color:gray`">
                            <label :for="`color-0`"
                                :class="(data['color_id'] == undefined ? 'font-bold underline italic ' : ' ') + ` ml-3 text-sm hover:cursor-pointer`">
                                Không chọn
                            </label>
                        </div>


                        <div class="flex items-center" v-for="(value, key) in dataColors" :key="key">
                            <input @change="handleChange('color_id', value.color_id)"
                                :checked="data['color_id'] == value.color_id" :id="`color-${index}-${value.color_id}`"
                                name="color[]" type="radio"
                                class="size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                :style="`background-color: ${value.code}; border-color:gray`">
                            <label :for="`color-${index}-${value.color_id}`"
                                :class="(data['color_id'] == value.color_id ? 'font-bold underline italic ' : ' ') + ` ml-3 text-sm hover:cursor-pointer`">
                                {{ value.name }}
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
        <div class="border-t border-gray-200 pb-4 pt-4">
            <fieldset>
                <legend class="w-full px-2">
                    <button type="button" class="flex w-full items-center justify-between p-2 text-gray-400 hover"
                        aria-controls="filter-section-1" aria-expanded="false">
                        <span class="text-base font-semibold text-gray-900">Category</span>
                    </button>
                </legend>
                <div class="px-4 pb-2 pt-4" id="filter-section-1">
                    <div class="space-y-3">
                        <div class="flex items-center" v-for="(value, key) in dataCategorys" :key="key">
                            <input :id="`category-${index}-${key}`" :checked="data['category'] == key"
                                @change="handleChange('category', key)" name="category[]" value="new-arrivals"
                                type="radio"
                                class="size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500">
                            <label :for="`category-${index}-${key}`"
                                :class="(data['category'] == key ? 'font-bold underline italic ' : ' ') + ` ml-3 text-sm hover:cursor-pointer`">{{
                                    value
                                }}</label>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
        <div class="border-t border-gray-200 pb-4 pt-4">
            <fieldset>
                <legend class="w-full px-2">
                    <button type="button" class="flex w-full items-center justify-between p-2 text-gray-400 hover"
                        aria-controls="filter-section-2" aria-expanded="false">
                        <span class="text-base font-semibold text-gray-900">Sizes</span>
                    </button>
                </legend>
                <div class="px-4 pb-2 pt-4" id="filter-section-2">
                    <div class="space-y-3">
                        <div class="flex items-center" v-for="(value, key) in dataSizes" :key="key">
                            <input :id="`sizes-${index}-${key}`" :checked="data['size'] == key"
                                @change="handleChange('size', key)" name="sizes[]" value="xs" type="radio"
                                class="size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500">
                            <label :for="`sizes-${index}-${key}`"
                                :class="(data['size'] == key ? 'font-bold underline italic ' : ' ') + ` ml-3 text-sm hover:cursor-pointer`">{{
                                    value }}</label>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    </form>
</template>
<script lang="js">
const dataColors = [
    { color_id: "1", code: '#000', name: 'Black' },
    { color_id: "2", code: 'blue', name: 'Blue' },
    { color_id: "3", code: '#fff', name: 'White' },
    { color_id: "4", code: 'yellow', name: 'Yellow' },
    { color_id: "5", code: 'gray', name: 'Gray' },
    { color_id: "6", code: 'green', name: 'Green' },
    { color_id: "7", code: 'brown', name: 'Brown' },
    { color_id: "8", code: 'Pink', name: 'Pink' },
    { color_id: "9", code: 'Orange', name: 'Orange' },
]
const dataSizes = ['Không chọn', 'XS', 'S', 'M', 'L', 'XL', '2XL'];

const dataCategorys = ['không chọn', 'SamSung', 'Apple', 'Xiaomi', 'Oppo', 'BlackShark'];

export default defineNuxtComponent({
    props: ['index', 'handleChangeFilters', 'data'],
    data() {
        return {
            dataSizes,
            dataCategorys,
            dataColors
        }
    },
    methods: {
        handleChange(key, value) {
            this.handleChangeFilters(key, value)
        }
    },
    created() {
    }
})
</script>