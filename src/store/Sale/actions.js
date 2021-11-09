import {
  callApiGetDanhSachSale,
  callApiSaveSale,
  callApiGetDanhSachSaleSort,
  callApiSearch,
} from "@/api/sales.js";

const getDanhSachSale = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachSale(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_SALES", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getDanhSachSaleSort = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachSaleSort(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_SALES", response.data.data);
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
          context.commit("SET_LIST_SALES", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const saveSale = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiSaveSale(payload)
      .then((reponse) => {
        resolve(reponse);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  getDanhSachSale,
  saveSale,
  getDanhSachSaleSort,
  search,
};
