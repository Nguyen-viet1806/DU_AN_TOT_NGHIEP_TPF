import ENDPOINT from "@/api/endpoints.js";
import {HTTP} from "@/api/http-common.js";

export function callApiGetDanhSachSize(payload) {
    return HTTP({
      url: ENDPOINT.GET_ALL_SIZE,
      method: "GET",
      params: payload,
    });
}

export function callApiGetDanhSachSizeSort(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_SIZE_SORT,
    method: "GET",
    params: payload,
  });
}

export function callApiSearch(payload) {
  return HTTP({
    url: ENDPOINT.SEARCH_SIZE,
    method: "GET",
    params: payload,
  });
}

export function callApiSaveSize(payload) {
  return HTTP({
    url: ENDPOINT.SAVE_SIZE,
    method: "POST",
    data: payload,
  });
}
