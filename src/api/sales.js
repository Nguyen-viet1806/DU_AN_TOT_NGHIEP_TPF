import ENDPOINT from "@/api/endpoints.js";
import {HTTP} from "@/api/http-common.js";

export function callApiGetDanhSachSale(payload) {
    return HTTP({
      url: ENDPOINT.GET_ALL_SALE,
      method: "GET",
      params: payload,
    });
}

export function callApiGetDanhSachSaleSort(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_SALE_SORT,
    method: "GET",
    params: payload,
  });
}

export function callApiSearch(payload) {
  return HTTP({
    url: ENDPOINT.SEARCH_SALE,
    method: "GET",
    params: payload,
  });
}

export function callApiSaveSale(payload) {
  return HTTP({
    url: ENDPOINT.SAVE_SALE,
    method: "POST",
    data: payload,
  });
}
