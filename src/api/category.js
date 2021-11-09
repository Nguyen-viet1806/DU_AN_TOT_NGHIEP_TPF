import ENDPOINT from "@/api/endpoints.js";
import {HTTP} from "@/api/http-common.js";

export function callApiGetDanhSachCategoryParent(payload) {
    return HTTP({
      url: ENDPOINT.GET_ALL_CATEGORY_PARENT,
      method: "GET",
      params: payload,
    });
}

export function callApiSaveCategoryParent(payload) {
  return HTTP({
    url: ENDPOINT.SAVE_CATEGORY_PARENT,
    method: "POST",
    data: payload,
  });
}

export function callApiGetDanhSachCategoryParentSort(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_CATEGORY_PARENT_SORT,
    method: "GET",
    params: payload,
  });
}

export function callApiGetDanhSachCategoryChildSort(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_CATEGORY_CHILD_SORT,
    method: "GET",
    params: payload,
  });
}

export function callApiSearch(payload) {
  return HTTP({
    url: ENDPOINT.SAVE_CATEGORY_PARENT,
    method: "GET",
    params: payload,
  });
}

export function callApiGetDanhSachCategoryChild(payload) {
    return HTTP({
      url: ENDPOINT.GET_ALL_CATEGORY_CHILD,
      method: "GET",
      params: payload,
    });
}

export function callApiSaveCategoryChild(payload) {
  return HTTP({
    url: ENDPOINT.SAVE_CATEGORY_CHILD,
    method: "POST",
    data: payload,
  });
}