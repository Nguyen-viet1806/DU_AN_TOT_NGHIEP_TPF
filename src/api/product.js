import ENDPOINT from "@/api/endpoints.js";
import { HTTP } from "@/api/http-common.js";

export function callApiGetListProduct(payload) {
  return HTTP({
    url: ENDPOINT.GET_PRODUCT,
    method: "GET",
    params: payload,
  });
}

export function callApiSearch(payload) {
  return HTTP({
    url: ENDPOINT.PRODUCT_SEARCH,
    method: "GET",
    params: payload,
  });
}

export function callApiGetListProductSort(payload) {
  return HTTP({
    url: ENDPOINT.GET_PRODUCT_SORT,
    method: "GET",
    params: payload,
  });
}

export function callApiGetProductDetail(payload) {
  return HTTP({
    url: ENDPOINT.SHOW_PRODUCT_DETAIL,
    method: "GET",
    params: payload,
  });
}

export function callApiShowProductDetailFollowColor(payload) {
  return HTTP({
    url: ENDPOINT.SHOW_PRODUCT_DETAIL_FOLLOW_COLOR,
    method: "GET",
    params: payload,
  });
}

export function callApiShowProductDetailFollowColorAndSize(payload) {
  return HTTP({
    url: ENDPOINT.SHOW_PRODUCT_DETAIL_FOLLOW_COLOR_SIZE,
    method: "GET",
    params: payload,
  });
}

export function callApiGetListProductHot(payload) {
  return HTTP({
    url: ENDPOINT.GET_PRODUCT_HOT,
    method: "GET",
    params: payload,
  });
}

export function callApiGetListProductNew(payload) {
  return HTTP({
    url: ENDPOINT.GET_PRODUCT_NEW,
    method: "GET",
    params: payload,
  });
}

export function callApiGetListProductFollowCategory(payload) {
  return HTTP({
    url: ENDPOINT.GET_PRODUCT_FOLLOW_CATEGORY,
    method: "GET",
    params: payload,
  });
}

export function callApiListDislikeProduct(payload) {
  return HTTP({
    url: ENDPOINT.LIKE_DISLIKE_PRODUCT,
    method: "POST",
    data: payload,
  });
}

