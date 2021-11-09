import sizeModule from "@/store/Size";
import colorModule from "@/store/Color";
import saleModule from "@/store/Sale";
import voucherModule from "@/store/Voucher";
import categoryModule from "@/store/Category";
import productModule from "@/store/Product";
import cardModule from "@/store/Card";
import billModule from "@/store/Bill";
import { createStore } from "vuex";
export default new createStore({
  modules: {
    sizeModule,
    colorModule,
    saleModule,
    voucherModule,
    categoryModule,
    productModule,
    cardModule,
    billModule,
  },
  state: {},
  getters: {},
  mutations: {},
});
