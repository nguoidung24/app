<script>
export default {
    methods: {
        onMenuToggle(e) {
            const navlinks = document.querySelector(".navLinks");
            // e.name = e.name === "menu" ? "close" : "menu";
            navlinks.classList.toggle("left-[0%]");
        }

    },
}
</script>
<template>
    <header class=" relative px-3" style="z-index: 9999999999;">
        <nav class="flex justify-between">
            <div class="w-[130px] md:w-[200px] flex items-center">
                <img src="https://i.postimg.cc/MZCBXb1K/logo.png" alt="LOGO" srcset="">
                <!-- <img src="https://thegioidilac.shop/_nuxt/img/thegioidilac_logo.b7f9124.png" class="h-10" alt="LOGO" srcset=""> -->

            </div>
            <div class="flex items-center gap-3">
                <div
                    class="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
                    <ul class="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                        <li
                            class="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li
                            class="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                            <a href="#">Faculty</a>
                        </li>
                        <li
                            class="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                            <a href="#">Courses</a>
                        </li>
                        <li
                            class="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                            <NuxtLink to="/about">About Us</NuxtLink>
                        </li>
                        <li
                            class="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-2">
                    <NuxtLink to="/login"
                        class="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3]  font-bold text-white px-5 py-2 rounded-full ">Login</NuxtLink>
                    <!-- <ion-icon name="menu" onclick="onMenuToggle(this)" class="text-[30px] cursor-pointer md:hidden"></ion-icon> -->
                    <button class="lg:hidden" @click="onMenuToggle(this)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                            class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>