import ENDPOINT from "@/api/endpoints.js";
import { HTTP } from "@/api/http-common.js";

export function callApiRegister(payload) {
  return HTTP({
    url: ENDPOINT.REGISTER,
    method: "POST",
    data: payload,
  });
}

export function callApiLogout(payload) {
  return HTTP({
    url: ENDPOINT.LOGOUT,
    method: "POST",
    data: payload,
  });
}

export function callApiLogin(payload) {
  return HTTP({
    url: ENDPOINT.LOGIN,
    method: "POST",
    params: payload,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  });
}

export function callApiUpdateProfile(payload) {
  return HTTP({
    url: ENDPOINT.UPDATE_PROFILE,
    method: "POST",
    data: payload,
  });
}

export function callApiChangePassword(payload) {
  return HTTP({
    url: ENDPOINT.CHANGE_PASSWORD,
    method: "POST",
    data: payload,
  });
}


export function callApiResetPass(payload) {
  return HTTP({
    url: ENDPOINT.RESET_PASSWORD,
    method: "GET",
    params: payload,
  });
}