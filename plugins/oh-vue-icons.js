import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag ,FaUser, MdShoppingcart, HiSearch} from "oh-vue-icons/icons";

addIcons(FaFlag,FaUser, MdShoppingcart, HiSearch );

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("v-icon", OhVueIcon);
});