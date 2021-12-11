import {
  callApiGetDanhSachCombo,
  callApiSearch,
  callApiGetComboById,
  callApiAddCombo,
  callApiUpdateCart,
  callApiDeleteCart,
} from "@/api/combo.js";


const getAllCombo = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachCombo(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_COMBO", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getComboById = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetComboById(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addCombo = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiAddCombo(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateQuantityCartCombo = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiUpdateCart(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteCart = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiDeleteCart(payload)
      .then((response) => {
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
          context.commit("SET_LIST_COMBO", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};



export default {
  search,
  getAllCombo,
  getComboById,
  addCombo,
  updateQuantityCartCombo,
  deleteCart,
};
