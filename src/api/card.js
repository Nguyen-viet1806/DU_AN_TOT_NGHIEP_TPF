import ENDPOINT from "@/api/endpoints.js";
import { HTTP } from "@/api/http-common.js";

export function callApiAddCard(payload) {
  return HTTP({
    url: ENDPOINT.ADD_PRODUCT_CARD,
    method: "POST",
    params: payload,
  });
}

export function callApiDeleteCard(payload) {
  return HTTP({
    url: ENDPOINT.DELETE_PRODUCT_CARD,
    method: "DELETE",
    params: payload,
  });
}

export function callApiUpdateCard(payload) {
  return HTTP({
    url: ENDPOINT.UPDATE_PRODUCT_CARD,
    method: "PUT",
    data: payload,
  });
}

export function callApiGetDanhSachCard(payload) {
  return HTTP({
    url: ENDPOINT.GET_PRODUCT_CARD,
    method: "GET",
    params: payload,
  });
}
