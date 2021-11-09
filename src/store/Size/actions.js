import {
  callApiGetDanhSachSize,
  callApiSaveSize,
  callApiGetDanhSachSizeSort,
  callApiSearch,
} from "@/api/sizes.js";
import {
  callApiGetDanhSachSizeByCategory
} from "@/api/common.js";

const getDanhSachSize = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachSize(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_SIZES", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getDanhSachSizeByCategory = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachSizeByCategory(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getDanhSachSizeSort = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachSizeSort(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_SIZES", response.data.data);
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
          context.commit("SET_LIST_SIZES", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const saveSize = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiSaveSize(payload)
      .then((reponse) => {
        resolve(reponse);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default {
  getDanhSachSize,
  saveSize,
  getDanhSachSizeSort,
  search,
  getDanhSachSizeByCategory,
};
