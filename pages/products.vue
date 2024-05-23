<template>
  <div>
    <div class="bg-white">
      <div>
        <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true" v-if="displayFilter">
          <div class="fixed inset-0 bg-black bg-opacity-25"></div>
          <div class="fixed inset-0 z-40 flex">
            <div
              class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              <div class="flex items-center justify-between px-4 border-b pb-4 mb-4">
                <h2 class="text-lg font-medium text-gray-900 ">
                  Bộ lọc sản phẩm
                </h2>
                <button type="button" @click="handleDisplayFilter()"
                  class="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <!-- Filters -->
              <ProductsFilter :data="filters" :handleChangeFilters="handleChangeFilters" index="1" />
            </div>
          </div>
        </div>

        <main class="mx-auto px-5 lg:px-32">
          <!-- <div class="border-b border-gray-200 pb-10">
            <p class="text-3xl font-bold tracking-tight text-gray-900">Các sản phẩm</p>
            <p class="mt-4 text-base text-gray-500">Danh mục "Sản phẩm"</p>
          </div> -->
          <h2 class="text-center pb-6 text-xl font-medium">
            Danh Mục "SamSung"
          </h2>
          <div class="pt-6 border-t lg:grid lg:grid-cols-5 lg:gap-x-8 xl:grid-cols-6">
            <aside>
              <h2 class="sr-only">Bộ lọc sản phẩm</h2>

              <!-- Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. -->
              <button type="button" class="inline-flex items-center lg:hidden" @click="handleDisplayFilter()">
                <span class="text-sm font-medium text-gray-700">
                  Bộ lọc sản phẩm
                  <span class="text-gray-400 ms-0">
                    {{ displayFilter ? '-' : '+' }}
                  </span>
                </span>

              </button>
              <button type="button" class="inline-flex ms-5 items-center lg:hidden" @click="handleDisplayCategory()">
                <span class="text-sm font-medium text-gray-700">
                  Danh mục sản phẩm
                  <span class="text-gray-400 ms-0">
                    {{ displayCategory ? '-' : '+' }}
                  </span>
                </span>

              </button>
              <div class="hidden lg:block">
                <ProductsFilter :data="filters" :handleChangeFilters="handleChangeFilters" index="2" />

              </div>
            </aside>

            <!-- Product grid -->
            <div class="mt-6 lg:border-l lg:ps-5  lg:col-span-4 lg:mt-0 xl:col-span-5 ">
              <!-- ================================ DANH MUC ================================== -->
              <div v-if="displayCategory">
                <div class="lg:col-span-full">

                  <div class="grid grid-cols-3 md:grid-cols-7 gap-x-4 gap-y-4 px-4">
                    <p
                      class="hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2">
                      <svg fill="#000000" viewBox="0 0 32 32" width="20" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <title>border-all</title>
                          <path
                            d="M29 2.25h-26c-0.414 0-0.75 0.336-0.75 0.75v0 26c0 0.414 0.336 0.75 0.75 0.75h26c0.414-0 0.75-0.336 0.75-0.75v0-26c-0-0.414-0.336-0.75-0.75-0.75v0zM28.25 15.25h-11.5v-11.5h11.5zM15.25 3.75v11.5h-11.5v-11.5zM3.75 16.75h11.5v11.5h-11.5zM16.75 28.25v-11.5h11.5v11.5z">
                          </path>
                        </g>
                      </svg> <span>
                        Tất cả
                      </span>
                    </p>
                    <p
                      class="hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2">
                      <img src="https://admin.thegioidilac.shop/image/category/default.png" alt=""
                        class="size-6 ms-auto"> <span class="me-auto">
                        SamSung
                      </span>
                    </p>
                    <p
                      class="hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2">
                      <img src="https://admin.thegioidilac.shop/image/category/apple.png" alt="" class="size-6 ms-auto">
                      <span class="me-auto">
                        Apple
                      </span>
                    </p>
                    <p
                      class="hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2">
                      <img src="https://admin.thegioidilac.shop/image/category/nokia.png" alt="" class="size-6 ms-auto">
                      <span class="me-auto">
                        Nokia
                      </span>
                    </p>
                    <p
                      class="hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2">
                      <img src="https://admin.thegioidilac.shop/image/category/oppo.png" alt="" class="size-6 ms-auto">
                      <span class="me-auto">
                        Oppo
                      </span>
                    </p>
                    <p
                      class="hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2">
                      <img src="https://admin.thegioidilac.shop/image/category/xiaomi.png" alt=""
                        class="size-6 ms-auto"> <span class="me-auto">
                        Xiaomi
                      </span>
                    </p>
                    <p
                      class="hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2">
                      <img src="https://admin.thegioidilac.shop/image/category/blackshark.png" alt=""
                        class="size-6 ms-auto"> <span class="me-auto">
                        BlackShark
                      </span>
                    </p>
                    <p
                      class="hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2">
                      <img src="https://admin.thegioidilac.shop/image\/category\/1714659927.png" alt=""
                        class="size-6 ms-auto"> <span class="me-auto">
                        Nokia
                      </span>
                    </p>
                    <p
                      class="hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2">
                      <img src="https://admin.thegioidilac.shop/image\/category\/1714661163.png" alt=""
                        class="size-6 ms-auto"> <span class="me-auto">
                        Apple
                      </span>
                    </p>
                    <p
                      class="hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2">
                      <img src="https://admin.thegioidilac.shop/image\/category\/1714661217.png" alt=""
                        class="size-6 ms-auto"> <span class="me-auto">
                        SamSung
                      </span>
                    </p>
                    <p
                      class="hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2">
                      <img src="https://admin.thegioidilac.shop/image\/category\/1714661276.png" alt=""
                        class="size-6 ms-auto"> <span class="me-auto">
                        Lumia
                      </span>
                    </p>
                    <p
                      class="hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2">
                      <img src="https://admin.thegioidilac.shop/image\/category\/1714661312.png" alt=""
                        class="size-6 ms-auto"> <span class="me-auto">
                        SamSung
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div v-if="!displayCategory">
                <button type="button" class=" lg:inline-flex ms-5 items-center hidden" @click="handleDisplayCategory()">
                  <span class="text-sm font-medium text-gray-700">
                    Danh mục sản phẩm
                    <span class="text-gray-400 ms-0">
                      {{ displayCategory ? '-' : '+' }}
                    </span>
                  </span>

                </button>
              </div>
              <IndexSuggestedProducts v-if="!isLoading" :itemsRow="4" :dataSuggestedProducts="listProducts" />
              <div class="mt-3" v-if="isLoading">
                Loading..
              </div>
              <div class="mt-3" v-if="!isLoading && listProducts?.length == 0">
                Không có sản phẩm nào hợp lệ
              </div>
              <div class="mt-20" v-if="!isLoading && listProducts?.length != 0">
                <div class="text-center relative">
                  Trang {{ page }} / {{ totalPage }}
                  <div v-if="showChangePage" class="absolute flex -top-[191%] left-2/4 -translate-x-2/4">
                    <input @change="(e) => handleChangePageValue(e)" type="number" class="pe-12 w-32 rounded-xl">
                    <button @click="getData(selectPage)"
                      class="absolute border-gray-400 border-l ps-1 right-2 top-2/4 -translate-y-2/4">
                      xem
                    </button>
                  </div>
                </div>
                <div class=" flex justify-center gap-x-3 mt-2">
                  <button :disabled="page == 1"
                    class="border disabled:bg-gray-50 disabled:text-gray-400 px-3 bg-gray-200 font-medium py-2 rounded-xl"
                    @click="getData(1)">
                    Đầu tiên
                  </button>
                  <button :disabled="page == 1"
                    class="border disabled:bg-gray-50 disabled:text-gray-400 px-3 bg-gray-200 font-medium py-2 rounded-xl"
                    @click="getData(Number(page) - 1)">
                    Trước
                  </button>

                  <button class="border px-3 bg-gray-200 font-medium py-2 rounded-xl" @click="displayChangePage()">
                    <v-icon name="gi-archive-research" scale="1.3"></v-icon>
                  </button>

                  <button :disabled="page == totalPage"
                    class="border disabled:bg-gray-50 disabled:text-gray-400 px-3 bg-gray-200 font-medium py-2 rounded-xl"
                    @click="getData(Number(page) + 1)">
                    Sau
                  </button>
                  <button :disabled="page == totalPage"
                    class="border disabled:bg-gray-50 disabled:text-gray-400 px-3 bg-gray-200 font-medium py-2 rounded-xl"
                    @click="getData(totalPage)">
                    Cuối cùng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script lang="js">
export default defineNuxtComponent({
  data() {
    return {
      displayCategory: true,
      displayFilter: false,
      showChangePage: false,
      listProducts: null,
      isLoading: true,
      totalPage: null,
      selectPage: null,
      nextPage: null,
      prePage: null,
      filters: {
      },
      page: 1,
    }
  },
  async created() {
    await this.getData()
    this.isLoading = false;
    // const a = useState()._object['$sdataBaseURL']
  },
  methods: {
    handleDisplayFilter() {
      return this.displayFilter = !this.displayFilter;
    },
    handleDisplayCategory() {
      return this.displayCategory = !this.displayCategory;
    },
    async handleChangeFilters(key, value) {
      this.isLoading = true;
      if (Number(value) == 0) {
        delete this.filters[key];
        await this.getData();
        return;
      }
      this.filters[key] = value;
      await this.getData();
      this.isLoading = false;
    },
    async getData(page = 1) {
      if (!Number(page)) {
        return alert('Page not found');
      }
      this.isLoading = true;
      this.listProducts = null;
      const listProducts = await useProducts(this.filters, page);
      this.listProducts = await listProducts?.data;
      this.totalPage = listProducts.totalPage;
      this.nextPage = listProducts.nextPage;
      this.prePage = listProducts.prePage;
      this.page = listProducts.page;

      this.isLoading = false;
      this.showChangePage = false;
    },
    displayChangePage() {
      this.showChangePage = !this.showChangePage;
    },
    handleChangePageValue(e) {
      const selected = e.target.value;
      if (!Number(selected)) {
        return this.selectPage = 'Fail';
      }
      if (!this.isInteger(selected)) {
        return this.selectPage = 'Fail';
      }
      if (Number(selected) < 1 || Number(selected) > this.totalPage)
        return this.selectPage = 'Fail';
      this.selectPage = e.target.value;
    },
    isInteger(value) {
      return (Math.round(Number(value)) - value) == 0;
    }
  }
})
</script>