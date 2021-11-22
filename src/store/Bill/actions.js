import {
  callApiGetDanhSachTinh,
  callApiGetDanhSachQuanHuyen,
  callApiGetDanhSachXa,
  callApiPay,
  callApiGetAllBill,
  callApiHuyBill,
  callApiGetListBillSort,
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

const getAllBill = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetAllBill(payload)
      .then((response) => {
        if(response){
          context.commit("SET_LIST_BILL", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getListBillSort = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListBillSort(payload)
      .then((response) => {
        if(response){
          context.commit("SET_LIST_BILL", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};



const huyBill = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiHuyBill(payload)
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
  getAllBill,
  huyBill,
  getListBillSort,
};
