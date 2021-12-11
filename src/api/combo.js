import ENDPOINT from "@/api/endpoints.js";
import { HTTP } from "@/api/http-common.js";

export function callApiGetDanhSachCombo(payload) {
  return HTTP({
    url: ENDPOINT.GET_ALL_COMBO,
    method: "GET",
    params: payload,
  });
}

export function callApiSearch(payload) {
  return HTTP({
    url: ENDPOINT.SEARCH_COMBO,
    method: "GET",
    params: payload,
  });
}

export function callApiGetComboById(payload) {
  return HTTP({
    url: ENDPOINT.GET_COMBO_BY_ID + payload,
    method: "GET",
  });
}

export function callApiAddCombo(payload) {
  return HTTP({
    url: ENDPOINT.ADD_COMBO ,
    method: "POST",
    params: payload,
  });
}

export function callApiUpdateCart(payload) {
  return HTTP({
    url: ENDPOINT.UPDATE_COMBO_IN_CART ,
    method: "PUT",
    params: payload,
  });
}

export function callApiDeleteCart(payload) {
  return HTTP({
    url: ENDPOINT.DELETE_COMBO_IN_CART ,
    method: "DELETE",
    params: payload,
  });
}
