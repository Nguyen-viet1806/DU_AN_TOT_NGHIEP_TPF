const SET_LIST_CATEGORYS_PARENT = (state, listCategoryParent) => {
  state.listCategoryParent = listCategoryParent;
};
const SET_LIST_CATEGORYS_CHILD = (state, listCategoryChild) => {
  state.listCategoryChild = listCategoryChild;
};
const SET_CATEGORYS_PARENT = (state, categoryParent) => {
  state.categoryParent = categoryParent;
};
const SET_LIST_CATEGORYS_PARENT_EXISTS = (state, listCategoryParentExists) => {
  state.listCategoryParentExists = listCategoryParentExists;
};
export default {
  SET_LIST_CATEGORYS_PARENT,
  SET_LIST_CATEGORYS_CHILD,
  SET_CATEGORYS_PARENT,
  SET_LIST_CATEGORYS_PARENT_EXISTS,
};
