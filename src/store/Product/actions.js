import {
  callApiGetListProduct,
  callApiSearch,
  callApiGetListProductSort,
  callApiGetProductDetail,
  callApiShowProductDetailFollowColor,
  callApiShowProductDetailFollowColorAndSize,
  callApiGetListProductHot,
  callApiGetListProductNew,
  callApiGetListProductFollowCategory,
  callApiListDislikeProduct,
} from "@/api/product.js";
import { callApiUploadFile } from "@/api/common.js";

const uploadFile = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiUploadFile(payload)
      .then((reponse) => {
        resolve(reponse);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getListProductParent = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListProduct(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_PRODUCTS_PARENT", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        console.log(error.config)
        reject(error);
      });
  });
};

const getListProductSort = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListProductSort(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_PRODUCTS_PARENT", response.data.data);
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
          context.commit("SET_LIST_PRODUCTS_PARENT", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getProductDetail = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetProductDetail(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const showProductDetailFollowColor = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiShowProductDetailFollowColor(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const showProductDetailFollowColorAndSize = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiShowProductDetailFollowColorAndSize(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const listDislikeProduct = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiListDislikeProduct(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


const getListProductNew = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListProductNew(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_PRODUCTS_NEW", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getListProductHot = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListProductHot(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_PRODUCTS_HOT", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getListProductFollowCategory = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListProductFollowCategory(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_PRODUCTS_PARENT", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


// const getListProductChild = (context, payload) => {
//   return new Promise((resolve, reject) => {
//     callApiGetListProductChild(payload)
//       .then((response) => {
//         if (response) {
//           context.commit("SET_LIST_PRODUCTS_CHILD", response.data.data);
//         }
//         resolve(response);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

export default {
  getListProductParent,
  search,
  getListProductSort,
  getProductDetail,
  showProductDetailFollowColor,
  showProductDetailFollowColorAndSize,
  getListProductNew,
  getListProductHot,
  getListProductFollowCategory,
  uploadFile,
  listDislikeProduct,
};
