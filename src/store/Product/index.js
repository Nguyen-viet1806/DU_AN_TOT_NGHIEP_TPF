import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
  listProductsParent: [],
  listProductsParentLike: [],
  listProductsChild: [],
  listProductsNew: [],
  listProductsHot: [],
  listProductSale: [],
  listProductFooter: {},
};
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
