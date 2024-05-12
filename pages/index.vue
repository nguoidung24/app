<template>
    <div>
        <HeaderComponent />
        <div class="lg:px-20 px-0">
            <IndexSlide />
            <p class="m-14 mb-5 text-center font-bold  text-4xl">Sản Phẩm Nổi Bật</p>
            <IndexOutstandingProduct />
            <IndexProducts />
        </div>
        <FooterComponent />
    </div>
</template>
<script>
export default defineNuxtComponent({
    head() {
        return {
            title: "Trang chủ"
        }
    },
})
</script>