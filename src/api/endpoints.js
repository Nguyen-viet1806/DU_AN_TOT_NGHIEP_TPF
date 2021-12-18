export default {

  //upload file 
  UPLOAD_FILE: "/api/webtpf/upload/image",

  //size
  GET_ALL_SIZE: "/api/webtpf/admin/sizes/getall/",
  GET_SIZE_BY_ID: "/api/webtpf/admin/sizes/findbyid/",
  SAVE_SIZE: "/api/webtpf/admin/sizes/save/",
  DELETE_SIZE: "/api/webtpf/admin/sizes/delete/",
  SEARCH_SIZE: "/api/webtpf/admin/sizes/search/",
  FILTER_SIZE: "/api/webtpf/admin/sizes/findbystatus/",
  GET_LIST_SIZE_SORT: "/api/webtpf/admin/sizes/getallsort",
  GET_LIST_SIZE_EXIST_BY_CATEGORY: "/api/webtpf/admin/sizes/findbyidcategory/",
  //color
  GET_ALL_COLOR: "/api/webtpf/admin/colors/getall/",
  GET_COLOR_BY_ID: "/api/webtpf/admin/colors/findbyid/",
  SAVE_COLOR: "/api/webtpf/admin/colors/save/",
  DELETE_COLOR: "/api/webtpf/admin/colors/delete/",
  SEARCH_COLOR: "/api/webtpf/admin/colors/search/",
  FILTER_COLOR: "/api/webtpf/admin/colors/findbystatus/",
  GET_LIST_COLOR_SORT: "/api/webtpf/admin/colors/getallsort",
  GET_LIST_COLOR_EXISTS:"/api/webtpf/admin/colors/findexists",//

  //Sale
  GET_ALL_SALE: "/api/webtpf/admin/sales/getall/",
  GET_SALE_BY_ID: "/api/webtpf/admin/sales/findbyid/",
  SAVE_SALE: "/api/webtpf/admin/sales/save/",
  DELETE_SALE: "/api/webtpf/admin/sales/delete/",
  SEARCH_SALE: "/api/webtpf/admin/sales/search/",
  FILTER_SALE: "/api/webtpf/admin/sales/findbystatus/",
  GET_LIST_SALE_SORT: "/api/webtpf/admin/sales/getallsort",

  //Voucher
  GET_ALL_VOUCHER: "/api/webtpf/admin/vouchers/getall/",
  GET_VOUCHER_BY_ID: "/api/webtpf/admin/vouchers/findbyid/",
  SAVE_VOUCHER: "/api/webtpf/admin/vouchers/save/",
  DELETE_VOUCHER: "/api/webtpf/admin/vouchers/delete/",
  SEARCH_VOUCHER: "/api/webtpf/admin/vouchers/search/",
  FILTER_VOUCHER: "/api/webtpf/admin/vouchers/findbystatus/",
  GET_LIST_VOUCHER_SORT: "/api/webtpf/admin/vouchers/getallsort",

  //CategoryParent
  GET_ALL_CATEGORY_PARENT: "/api/webtpf/admin/categories/parent/getall/",
  GET_CATEGORY_PARENT_BY_ID: "/api/webtpf/admin/categories/parent/findbyid/",
  SAVE_CATEGORY_PARENT: "/api/webtpf/admin/categories/parent/save/",
  DELETE_CATEGORY_PARENT: "/api/webtpf/admin/categories/parent/delete/",
  SEARCH_CATEGORY_PARENT: "/api/webtpf/admin/categories/parent/search/",
  FILTER_CATEGORY_PARENT: "/api/webtpf/admin/categories/parent/findbystatus/",
  GET_LIST_CATEGORY_PARENT_SORT: "/api/webtpf/admin/categories/parent/getallsort",
  GET_CATEGORY_EXISTS: "/api/webtpf/admin/categories/getexists",//
  
  //CategoryChild
  GET_ALL_CATEGORY_CHILD: "/api/webtpf/admin/categories/child/getall/",
  GET_CATEGORY_CHILD_BY_ID: "/api/webtpf/admin/categories/child/findbyid/",
  SAVE_CATEGORY_CHILD: "/api/webtpf/admin/categories/child/save/",
  DELETE_CATEGORY_CHILD: "/api/webtpf/admin/categories/child/delete/",
  SEARCH_CATEGORY_CHILD: "/api/webtpf/admin/categories/child/search/",
  FILTER_CATEGORY_CHILD: "/api/webtpf/admin/categories/child/findbystatus/",
  GET_LIST_CATEGORY_CHILD_SORT: "/api/webtpf/admin/categories/child/getallsort",
  GET_LIST_CATEGORY_CHILD_EXISTS_BY_PARENT: "/api/webtpf/admin/categories/child/findbyparent/",//

  //product
  GET_PRODUCT: "/api/webtpf/user/products/showall",
  PRODUCT_SEARCH: "/api/webtpf/user/products/search",
  GET_PRODUCT_SORT: "/api/webtpf/user/products/getlistproduct",
  SHOW_PRODUCT_DETAIL: "/api/webtpf/user/products/showdetail",
  SHOW_PRODUCT_DETAIL_FOLLOW_COLOR: "/api/webtpf/user/products/showdetailbycolor",
  SHOW_PRODUCT_DETAIL_FOLLOW_COLOR_SIZE: "/api/webtpf/user/products/showdetailbycolorandsize",
  GET_PRODUCT_HOT: "/api/webtpf/user/products/findproducthot",
  GET_PRODUCT_NEW: "/api/webtpf/user/products/findproductnew",
  GET_PRODUCT_FOLLOW_CATEGORY: "/api/webtpf/user/products/findproductrelated",
  LIKE_DISLIKE_PRODUCT: "/api/webtpf/user/likeordislike",
  GET_LIST_PRODUCT_LIKE: "/api/webtpf/user/products/findproductlike",
  
  
  // card
  ADD_PRODUCT_CARD: "/api/webtpf/user/carts/addcartproduct",
  DELETE_PRODUCT_CARD: "/api/webtpf/user/carts/deletecartproduct",
  UPDATE_PRODUCT_CARD: "/api/webtpf/user/carts/updatecartproduct",
  GET_PRODUCT_CARD: "/api/webtpf/user/carts/getlistcartproduct",
 
  //bill
  GET_LIST_TINH: "/api/webtpf/getallprovince",
  GET_LIST_QUAN_HUYEN: "/api/webtpf/getalldistrict",
  GET_LIST_XA: "/api/webtpf/getallcommune",
  PAY: "/api/webtpf/user/bills/save",
  GET_ALL_BILL: "/api/webtpf/user/bills/getalllistuser",
  HUY_BILL: "/api/webtpf/user/bills/cancel",
  GET_LIST_BILL_SORT: "/api/webtpf/user/bills/getalllistandfilteruser",
  GET_LIST_VOUCHER: "/api/webtpf/user/voucheruser/getlist",
  GET_VOUCHER_CAN_DONATE: "/api/webtpf/user/voucheruser/getdonate",

  //login
  REGISTER: "/api/webtpf/signup",
  LOGIN: "/api/webtpf/login",
  LOGOUT: "/api/webtpf/logout",
  UPDATE_PROFILE: "/api/webtpf/updateprofile",
  RESET_PASSWORD: "/api/webtpf/profile/getnewpassword",
  CHANGE_PASSWORD: "/api/webtpf/profile/changepassword",  
  //combo 
  GET_ALL_COMBO: "/api/webtpf/user/combos/getall",
  SEARCH_COMBO: "/api/webtpf/user/combos/search",
  GET_COMBO_BY_ID: "/api/webtpf/user/combos/findbyid/",
  ADD_COMBO: "/api/webtpf/user/carts/addcartcombo",
  UPDATE_COMBO_IN_CART: "/api/webtpf/user/carts/updatecartcombo",
  DELETE_COMBO_IN_CART: "/api/webtpf/user/carts/deletecartcombo",
};
