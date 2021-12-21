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

const SET_LIST_PRODUCTS_SALE = (state, listProductSale) => {
    state.listProductSale = listProductSale;
} 
const SET_LIST_PRODUCTS_FT = (state, listProductFooter) => {
    state.listProductFooter = listProductFooter;
} 

export default {
    SET_LIST_PRODUCTS_PARENT,
    SET_LIST_PRODUCTS_CHILD,
    SET_LIST_PRODUCTS_NEW,
    SET_LIST_PRODUCTS_HOT,
    SET_LIST_PRODUCTS_PARENT_LIKE,
    SET_LIST_PRODUCTS_SALE,
    SET_LIST_PRODUCTS_FT,
  };