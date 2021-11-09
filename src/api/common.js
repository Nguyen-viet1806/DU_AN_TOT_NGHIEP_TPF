import ENDPOINT from "@/api/endpoints.js";
import { HTTP } from "@/api/http-common.js";

export function callApiGetDanhSachCategoryToSize() {
  return HTTP({
    url: ENDPOINT.GET_CATEGORY_EXISTS,
    method: "GET",
  });
}

export function callApiGetDanhSachColorExists() {
  return HTTP({
    url: ENDPOINT.GET_LIST_COLOR_EXISTS,
    method: "GET",
  });
}


export function callApiGetDanhSachCategoryChildByParent(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_CATEGORY_CHILD_EXISTS_BY_PARENT + payload,
    method: "GET",
  });
}

export function callApiGetDanhSachSizeByCategory(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_SIZE_EXIST_BY_CATEGORY + payload,
    method: "GET",
  });
}

export function callApiUploadFile(payload) {
  return HTTP({
    url: ENDPOINT.UPLOAD_FILE,
    method: "POST",
    data: payload,
  });
}
