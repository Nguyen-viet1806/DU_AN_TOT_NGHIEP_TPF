import {
  callApiGetDanhSachCategoryParent,
  callApiSaveCategoryParent,
  callApiGetDanhSachCategoryChild,
  callApiSaveCategoryChild,
  callApiGetDanhSachCategoryParentSort,
  callApiGetDanhSachCategoryChildSort,
  callApiSearch,
} from "@/api/category.js";
import {
  callApiGetDanhSachCategoryToSize,
  callApiGetDanhSachCategoryChildByParent,
} from "@/api/common.js";
const getDanhSachCategoryParent = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachCategoryParent(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_CATEGORYS_PARENT", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getDanhSachCategoryParentExists = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachCategoryToSize(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_CATEGORYS_PARENT_EXISTS", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


const getDanhSachCategoryChildExistsByParent = (context, payload) => {
  console.log("ádasd")
  return new Promise((resolve, reject) => {
    callApiGetDanhSachCategoryChildByParent(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};



const getDanhSachCategoryParentSort = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachCategoryParentSort(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_CATEGORYS_PARENT", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getDanhSachCategoryChildSort = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachCategoryChildSort(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_CATEGORYS_CHILD", response.data.data);
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
          context.commit("SET_LIST_CATEGORYS_PARENT", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const saveCategoryParent = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiSaveCategoryParent(payload)
      .then((reponse) => {
        resolve(reponse);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getDanhSachCategoryChild = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachCategoryChild(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_CATEGORYS_CHILD", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const saveCategoryChild = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiSaveCategoryChild(payload)
      .then((reponse) => {
        resolve(reponse);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  getDanhSachCategoryParent,
  saveCategoryParent,
  getDanhSachCategoryChild,
  saveCategoryChild,
  getDanhSachCategoryParentExists,
  getDanhSachCategoryParentSort,
  getDanhSachCategoryChildSort,
  search,
  getDanhSachCategoryChildExistsByParent,
};
