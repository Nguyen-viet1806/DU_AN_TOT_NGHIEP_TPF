import {
  callApiGetDanhSachTinh,
  callApiGetDanhSachQuanHuyen,
  callApiGetDanhSachXa,
  callApiPay
} from "@/api/bill.js";

const getDanhSachTinh = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachTinh(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getDanhSachQuanHuyen = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachQuanHuyen(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getDanhSachXa = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachXa(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const pay = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiPay(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  getDanhSachTinh,
  getDanhSachQuanHuyen,
  getDanhSachXa,
  pay,
};
