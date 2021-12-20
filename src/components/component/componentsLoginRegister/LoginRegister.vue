<template>
  <div class="vgrid login-register">
    <div class="notify">
      <div
        id="popup1"
        v-if="isShowNotify"
        class="overlay"
        @click="closeNotify"
      ></div>
      <transition name="bounce">
        <div id="popup1" v-if="isShowNotify" class="popup">
          <h2>Thông báo:</h2>
          <a class="close" @click="closeNotify">&times;</a>
          <div class="content">
            {{ infoNotify }}
          </div>
        </div>
      </transition>
    </div>
    <div class="vrow">
      <div class="vcol vl-4 vm-4 vc-12 vl-o-4 vm-o-4">
        <div class="register" v-if="isShowFormRegister">
          <h5 class="title">Đăng Ký</h5>
          <form @submit.prevent="onRegister" class="row g-3">
            <div class="vrow">
              <div class="vcol vl-12 vm-12 vc-12">
                <img
                  class="img-register"
                  width="200"
                  id="uploadPreview"
                  src=""
                />
                <div class="input-group mb-2">
                  <input
                    type="file"
                    class="form-control"
                    id="uploadImage"
                    aria-describedby="inputGroupPrepend2"
                    @change="onFileSelected"
                    required
                  />
                </div>
              </div>
              <div class="vcol vl-6 vm-6 vc-6">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="first Name"
                    v-model="user.firstName"
                    required
                  />
                </div>
              </div>
              <div class="vcol vl-6 vm-6 vc-6">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="last Name"
                    v-model="user.lastName"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="input-group">
              <input
                type="email"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Email"
                v-model="user.email"
                required
              />
            </div>
            <div class="input-group">
              <input
                type="date"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                v-model="user.dateOfBirth"
                required
              />
            </div>
            <div class="input-group">
              <select
                v-model="user.idGender"
                class="form-select"
                id="validationDefault04"
                required
              >
                <option selected value="">Chọn giới tính</option>
                <option :value="1">Nam</option>
                <option :value="2">Nữ</option>
                <option :value="3">Unisex</option>
              </select>
            </div>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Số điện thoại"
                v-model="user.phoneNumber"
                minlength="10"
                maxlength="11"
                required
              />
            </div>
            <div class="input-group">
              <input
                type="password"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="password"
                v-model="user.passwordUser"
                minlength="6"
                required
              />
            </div>
            <div class="input-group">
              <input
                type="password"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Confirm password"
                v-model="confirmPassword"
                minlength="6"
                required
              />
            </div>

            <h6 class="mt-5">Địa chỉ</h6>

            <div class="input-group">
              <select
                v-model="user.addressRequestDTO.idProvince"
                class="form-select"
                id="validationDefault04"
                required
              >
                <option selected value="">Chọn tỉnh</option>
                <option
                  v-for="Province in listProvince"
                  :key="Province"
                  :value="Province.idProvince"
                >
                  {{ Province.nameProvince }}
                </option>
              </select>
            </div>

            <div class="input-group">
              <select
                :disabled="isDisabledDistrict"
                v-model="user.addressRequestDTO.idDistrict"
                class="form-select"
                id="validationDefault04"
                required
              >
                <option selected value="">Chọn quận, huyện</option>
                <option
                  v-for="District in listDistrict"
                  :key="District"
                  :value="District.idDistrict"
                >
                  {{ District.nameDistrict }}
                </option>
              </select>
            </div>
            <div class="input-group">
              <select
                :disabled="isDisabledCommune"
                v-model="user.addressRequestDTO.idCommune"
                class="form-select"
                id="validationDefault04"
                required
              >
                <option selected value="">Chọn xã</option>
                <option
                  v-for="Commune in listCommune"
                  :key="Commune"
                  :value="Commune.idCommune"
                >
                  {{ Commune.nameCommune }}
                </option>
              </select>
            </div>
            <div class="input-group">
              <textarea
                type="text"
                class="form-control"
                id="validationDefault03"
                placeholder="Vui lòng điền số nhà, ngõ"
                v-model="user.addressRequestDTO.detailAddress"
                required
              />
            </div>
            <div class="col-12">
              <button class="btn btn-pay" type="submit">Đăng ký</button>
              <p @click="onClickCreateAccount" class="create-account mt-2">
                Đăng nhập
              </p>
            </div>
          </form>
        </div>

        <div class="login" v-if="isShowFormLogin">
          <h5 class="title">Đăng Nhập</h5>
          <form @submit.prevent="onLogin" class="row g-3">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Email"
                v-model="username"
                required
              />
            </div>
            <div class="input-group" v-if="!isReset">
              <input
                type="password"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="password"
                v-model="password"
                required
              />
            </div>
            <div class="col-12">
              <button class="btn btn-pay" type="submit">
                {{ isReset ? "Gửi mật khẩu về email" : "Đăng nhập" }}
              </button>
              <p @click="onClickCreateAccount" class="create-account mt-2">
                Tạo tài khoản
              </p>
              <p
                v-if="!isReset"
                @click="onClickResetPass"
                class="create-account mt-2"
              >
                Quên mật khẩu
              </p>
              <p
                v-if="isReset"
                @click="onClickResetPass"
                class="create-account mt-2"
              >
                Đăng nhập
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from "@/api/http-common.js";
import { CAC_LOAI_LOI, MESS } from "@/constants/constants";
export default {
  name: "Login",
  components: {},
  props: {},
  data() {
    return {
      isReset: false,
      isShowNotify: false,
      infoNotify: "",
      isDisabledDistrict: true,
      isDisabledCommune: true,
      listProvince: [],
      listDistrict: [],
      listCommune: [],
      isShowFormLogin: true,
      isShowFormRegister: false,
      username: "",
      password: "",
      confirmPassword: "",
      user: {
        idChat: "",
        idUser: null,
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        phoneNumber: "",
        passwordUser: "",
        idRole: 3,
        idGender: "",
        addressRequestDTO: {
          idAddress: null,
          idProvince: "",
          idDistrict: "",
          idCommune: "",
          detailAddress: "",
        },
        idStatus: 2,
        imageUser: "",
      },
    };
  },
  computed: {},
  watch: {
    "user.addressRequestDTO.idProvince": {
      handler() {
        if (
          this.user.addressRequestDTO.idProvince.length > 0 ||
          this.user.addressRequestDTO.idProvince != ""
        ) {
          this.isDisabledDistrict = false;
          this.$store
            .dispatch("billModule/getDanhSachQuanHuyen", {
              idProvince: Number(this.user.addressRequestDTO.idProvince),
            })
            .then((res) => {
              if (res) {
                this.listDistrict = res.data.data;
              }
            });
        } else if (
          this.user.addressRequestDTO.idProvince.length == 0 ||
          this.user.addressRequestDTO.idProvince == ""
        ) {
          this.isDisabledDistrict = true;
          this.listDistrict = [];
        }
      },
      deep: true,
    },
    "user.addressRequestDTO.idDistrict": {
      handler() {
        if (
          this.user.addressRequestDTO.idDistrict.length > 0 ||
          this.user.addressRequestDTO.idDistrict != ""
        ) {
          this.isDisabledCommune = false;
          this.$store
            .dispatch("billModule/getDanhSachXa", {
              idDistrict: Number(this.user.addressRequestDTO.idDistrict),
              idProvince: Number(this.user.addressRequestDTO.idProvince),
            })
            .then((res) => {
              if (res) {
                this.listCommune = res.data.data;
              }
            });
        } else if (
          this.user.addressRequestDTO.idDistrict.length == 0 ||
          this.user.addressRequestDTO.idDistrict == ""
        ) {
          this.isDisabledCommune = true;
          this.listCommune = [];
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getListTinh();
      this.showErro();
      document.documentElement.scrollTop = 800;
      document.body.scrollTop = 0;
    },
    showErro() {
      if (
        this.$route.query.erro &&
        this.$route.query.erro.includes(CAC_LOAI_LOI.CHUA_DANG_NHAP)
      ) {
        this.isShowNotify = true;
        this.infoNotify = "Bạn phải đăng nhập trước khi mua hàng!";
        if (this.isShowNotify) {
          setTimeout(this.closeNotify, 1000);
        }
      } else if (
        this.$route.query.mess &&
        this.$route.query.mess.includes(MESS.DANG_XUAT)
      ) {
        this.isShowNotify = true;
        this.infoNotify = "Đăng xuất thành công!";
        if (this.isShowNotify) {
          setTimeout(this.closeNotify, 1000);
        }
      } else if (localStorage.getItem("UserInfo")) {
        this.$router.push({ path: "/profile" });
      }
    },
    resetForm() {
      this.confirmPassword = "";
      this.user = {
        idChat: "",
        idUser: null,
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        phoneNumber: "",
        passwordUser: "",
        idRole: 3,
        idGender: "",
        addressRequestDTO: {
          idAddress: null,
          idProvince: "",
          idDistrict: "",
          idCommune: "",
          detailAddress: "",
        },
        idStatus: 2,
        imageUser: "",
      };
    },

    closeNotify() {
      this.isShowNotify = false;
    },
    onFileSelected(event) {
      this.user.imageUser = event.target.files[0];
      var oFReader = new FileReader();
      oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

      oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
      };
    },
    getListTinh() {
      this.$store.dispatch("billModule/getDanhSachTinh").then((res) => {
        if (res) {
          this.listProvince = res.data.data;
        }
      });
    },
    async uploadFile(file) {
      const fd = new FormData();
      fd.append("file", file);
      let img;
      await this.$store.dispatch("productModule/uploadFile", fd).then((res) => {
        if (res) {
          img = res.data;
        }
      });
      return img;
    },
    async uploadFileMess(file) {
      const fd = new FormData();
      fd.append("file", file);
      let img;
      await this.$store
        .dispatch("loginModule/uploadImgMess", fd)
        .then((res) => {
          if (res) {
            img = res.data;
          }
        });
      return img;
    },
    onLogin() {
      if (this.isReset) {
        let payload = {
          email: this.username,
        };
        this.$store
          .dispatch("loginModule/resetPass", payload)
          .then((res) => {
            if (res) {
              this.isShowNotify = true;
              this.infoNotify = "Gửi thành công!";
            }
          })
          .catch((err) => {
            if (err) {
              this.isShowNotify = true;
              this.infoNotify = "Tài khoản không tồn tại!";
            }
          });
      } else {
        let payload = {
          username: this.username,
          password: this.password,
        };
        this.$store
          .dispatch("loginModule/Login", payload)
          .then((res) => {
            if (res) {
              this.isShowNotify = true;
              this.infoNotify = "Đăng nhập thành công";
              localStorage.setItem("token", res.data.access_token);
              localStorage.setItem("refresh_token", res.data.refresh_token);
              localStorage.setItem("UserInfo", JSON.stringify(res.data));
              HTTP.defaults.headers["Token"] = localStorage.getItem("token");
              HTTP.defaults.headers["refresh_token"] =
                localStorage.getItem("refresh_token");
              if (this.isShowNotify) {
                setTimeout(this.closeNotify, 1000);
              }
              setTimeout(() => {
                this.$router.push({ path: "/" });
              }, 1500);
            }
          })
          .catch((err) => {
            if (err) {
              this.isShowNotify = true;
              this.infoNotify = "Sai tài khoản hoặc mật khẩu!!!";
              if (this.isShowNotify) {
                setTimeout(this.closeNotify, 1000);
              }
            }
          });
      }
    },
    async onRegister() {
      if (this.confirmPassword != this.user.passwordUser) {
        this.isShowNotify = true;
        this.infoNotify = "Xác nhận mật khẩu không khớp!!!";
        if (this.isShowNotify) {
          setTimeout(this.closeNotify, 1000);
        }
        return;
      }
      let imgMess;
      if (typeof this.user.imageUser == "object") {
        imgMess = await this.uploadFileMess(this.user.imageUser);
      }
      let payloadMess = {
        nameUser: this.user.firstName + " " + this.user.lastName,
        imageUser: imgMess,
        emailUser: this.user.email.trim(),
        password: this.user.passwordUser,
        isAdmin: false,
      };
      this.$store
        .dispatch("loginModule/signUpMess", payloadMess)
        .then((resMess) => {
          if (resMess) {
            this.onRegisterAcc(resMess.data._id);
          }
        })
        .catch((err) => {
          if (err) {
            this.isShowNotify = true;
            this.infoNotify = "Đăng kí tài khoản thất bại!!!";
          }
        });
    },
    async onRegisterAcc(idChat) {
      if (typeof this.user.imageUser == "object") {
        this.user.imageUser = await this.uploadFile(this.user.imageUser);
      }

      let payload = {
        ...this.user,
        email: this.user.email.trim(),
        phoneNumber: this.user.phoneNumber.trim(),
        idChat: idChat,
      };
      this.$store
        .dispatch("loginModule/register", payload)
        .then((res) => {
          if (res) {
            this.isShowNotify = true;
            this.infoNotify = "Đăng kí tài khoản thành công!!!";
            this.resetForm();
            setTimeout(() => {
              this.isShowFormLogin = !this.isShowFormLogin;
              this.isShowFormRegister = !this.isShowFormRegister;
            }, 1800);
            if (this.isShowNotify) {
              setTimeout(this.closeNotify, 1000);
            }
          }
        })
        .catch((err) => {
          if (err) {
            this.isShowNotify = true;
            this.infoNotify = "Đăng kí tài khoản thất bại!!!";
            setTimeout(() => {
              this.isShowNotify = false;
              this.infoNotify = "";
            }, 1000);
          }
        });
    },
    onClickCreateAccount() {
      this.isReset = false;
      this.isShowFormLogin = !this.isShowFormLogin;
      this.isShowFormRegister = !this.isShowFormRegister;
    },
    onClickResetPass() {
      this.isReset = !this.isReset;
    },
  },
};
</script>

<style lang="scss" scoped>
.img-register {
  margin-left: 30%;
  margin-bottom: 20px;
  border-radius: 50%;
}
.login-register {
  padding: 2%;
}
.login {
  width: 100%;
  & .title {
    text-align: center;
    font-weight: 700;
  }
}
.btn-pay {
  width: 100%;
  height: 60px;
  text-align: center;
  background: black;
  color: white;
  font-weight: 500;
}
.create-account {
  cursor: pointer;
  &:hover {
    font-weight: 500;
    color: red;
  }
}
</style>