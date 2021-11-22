import {
  callApiRegister,
  callApiLogout,
  callApiLogin,
  callApiUpdateProfile,
} from "@/api/loginRegister.js";


const register = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiRegister(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const logout = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiLogout(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const Login = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiLogin(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const UpdateProfile = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiUpdateProfile(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  register,
  logout,
  Login,
  UpdateProfile,
};
