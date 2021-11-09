import {
  callApiGetDanhSachColor,
  callApiSaveColor,
  callApiGetDanhSachColorSort,
  callApiSearch,
  
} from "@/api/colors.js";
import {
  callApiGetDanhSachColorExists,
} from "@/api/common.js";

const getDanhSachColor = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachColor(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_COLORS", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getDanhSachColorExists = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachColorExists(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


const getDanhSachColorSort = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachColorSort(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_COLORS", response.data.data);
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
          context.commit("SET_LIST_COLORS", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const saveColor = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiSaveColor(payload)
      .then((reponse) => {
        resolve(reponse);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  getDanhSachColor,
  saveColor,
  getDanhSachColorSort,
  search,
  getDanhSachColorExists,
};
