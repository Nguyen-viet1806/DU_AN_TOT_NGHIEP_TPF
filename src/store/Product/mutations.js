const SET_LIST_PRODUCTS_PARENT = (state, listProductsParent) => {
    state.listProductsParent = listProductsParent;
} 

const SET_LIST_PRODUCTS_PARENT_LIKE = (state, listProductsParentLike) => {
    state.listProductsParentLike = listProductsParentLike;
} 

const SET_LIST_PRODUCTS_CHILD = (state, listProductsChild) => {
    state.listProductsChild = listProductsChild;
} 

const SET_LIST_PRODUCTS_NEW = (state, listProductsNew) => {
    state.listProductsNew = listProductsNew;
} 

const SET_LIST_PRODUCTS_HOT = (state, listProductsHot) => {
    state.listProductsHot = listProductsHot;
} 

export default {
    SET_LIST_PRODUCTS_PARENT,
    SET_LIST_PRODUCTS_CHILD,
    SET_LIST_PRODUCTS_NEW,
    SET_LIST_PRODUCTS_HOT,
    SET_LIST_PRODUCTS_PARENT_LIKE,
  };