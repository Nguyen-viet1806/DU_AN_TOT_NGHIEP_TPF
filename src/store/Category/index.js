import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
  listCategoryParent: [],
  listCategoryChild: [],
  categoryParent: null,
  listCategoryParentExists: [],
};
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
