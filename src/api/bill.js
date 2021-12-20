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

export function callApiGetAllBill(payload) {
  return HTTP({
    url: ENDPOINT.GET_ALL_BILL,
    method: "GET",
    params: payload
  });
}

export function callApiGetListBillSort(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_BILL_SORT,
    method: "GET",
    params: payload
  });
}

export function callApiHuyBill(payload) {
  return HTTP({
    url: ENDPOINT.HUY_BILL,
    method: "POST",
    params: payload
  });
}

export function callApiGetListVoucher(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_VOUCHER,
    method: "GET",
    params: payload
  });
}

export function callApiGetVoucherCanDonate(payload) {
  return HTTP({
    url: ENDPOINT.GET_VOUCHER_CAN_DONATE,
    method: "GET",
    params: payload
  });
}