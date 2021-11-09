import { callApiGetDanhSachVoucher, callApiSaveVoucher,callApiGetDanhSachVoucherSort,callApiSearch } from "@/api/vouchers.js";

const getDanhSachVoucher = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachVoucher(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_VOUCHERS", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getDanhSachVoucherSort = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachVoucherSort(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_VOUCHERS", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const search = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiSearch(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_VOUCHERS", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const saveVoucher = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiSaveVoucher(payload)
      .then((reponse) => {
        resolve(reponse);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default {
  getDanhSachVoucher,
  saveVoucher,
  getDanhSachVoucherSort,
  search,
};
