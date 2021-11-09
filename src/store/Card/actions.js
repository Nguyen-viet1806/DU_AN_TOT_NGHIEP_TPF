import {
  callApiAddCard,
  callApiDeleteCard,
  callApiUpdateCard,
  callApiGetDanhSachCard,
} from "@/api/card.js";

const getDanhSachCard = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachCard(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_CARD", response.data.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addCard = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiAddCard(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteCard = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiDeleteCard(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateCard = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiUpdateCard(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  getDanhSachCard,
  addCard,
  deleteCard,
  updateCard,
};
