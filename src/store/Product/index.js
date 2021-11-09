import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
  listProductsParent: [],
  listProductsChild: [],
  listProductsNew: [],
  listProductsHot: [],
};
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
