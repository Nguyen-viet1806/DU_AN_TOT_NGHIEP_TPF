import ENDPOINT from "@/api/endpoints.js";
import { HTTP } from "@/api/http-common.js";

export function callApiGetDanhSachTinh() {
  return HTTP({
    url: ENDPOINT.GET_LIST_TINH,
    method: "GET",
  });
}

export function callApiGetDanhSachQuanHuyen(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_QUAN_HUYEN,
    method: "GET",
    params: payload
  });
}

export function callApiGetDanhSachXa(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_XA,
    method: "GET",
    params: payload
  });
}

export function callApiPay(payload) {
  return HTTP({
    url: ENDPOINT.PAY,
    method: "POST",
    data: payload
  });
}
