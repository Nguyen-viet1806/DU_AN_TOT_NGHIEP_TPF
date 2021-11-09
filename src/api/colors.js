import ENDPOINT from "@/api/endpoints.js";
import {HTTP} from "@/api/http-common.js";

export function callApiGetDanhSachColor(payload) {
    return HTTP({
      url: ENDPOINT.GET_ALL_COLOR,
      method: "GET",
      params: payload,
    });
}

export function callApiGetDanhSachColorSort(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_COLOR_SORT,
    method: "GET",
    params: payload,
  });
}

export function callApiSearch(payload) {
  return HTTP({
    url: ENDPOINT.SAVE_COLOR,
    method: "GET",
    params: payload,
  });
}

export function callApiSaveColor(payload) {
  return HTTP({
    url: ENDPOINT.SAVE_COLOR,
    method: "POST",
    data: payload,
  });
}
