<template>
  <div class="vgrid login-register">
    <div class="vrow">
      <div class="vcol vl-4 vm-4 vc-12 vl-o-4 vm-o-4">
        <div class="register" v-if="isShowFormRegister">
          <h5 class="title">Đăng Ký</h5>
          <form @submit.prevent="onSubmit" class="row g-3">
            <div class="vrow">
              <div class="vcol vl-6 vm-6 vc-6">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="first Name"
                    v-model="emailUser"
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
                    v-model="emailUser"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Email"
                v-model="emailUser"
                required
              />
            </div>
            <div class="input-group">
              <input
                type="date"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                v-model="dateOfBirth"
                required
              />
            </div>
            <div class="input-group">
              <select
                v-model="idProvince"
                class="form-select"
                id="validationDefault04"
                required
              >
                <option selected value="">Chọn giới tính</option>
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
              <input
                type="text"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Số điện thoại"
                v-model="phoneUser"
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
                v-model="passwordUser"
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
                v-model="passwordUser"
                required
              />
            </div>

            <h6 class="mt-5">Địa chỉ</h6>

            <div class="input-group">
              <select
                v-model="idProvince"
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
                v-model="idDistrict"
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
                v-model="idCommune"
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
                v-model="detailAddress"
                required
              />
            </div>
            <div class="col-12">
              <button class="btn btn-pay" type="submit">Đăng ký</button>
              <p @click="onClickCreateAccount" class="create-account mt-2">Đăng nhập</p>
            </div>
          </form>
        </div>

        <div class="login" v-if="isShowFormLogin">
          <h5 class="title">Đăng Nhập</h5>
          <form @submit.prevent="onSubmit" class="row g-3">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Email"
                v-model="emailUser"
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
                v-model="passwordUser"
                required
              />
            </div>
            <div class="col-12">
              <button class="btn btn-pay" type="submit">Đăng nhập</button>
              <p @click="onClickCreateAccount" class="create-account mt-2">Tạo tài khoản</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  props: {},
  data() {
    return {
      isShowFormLogin: true,
      isShowFormRegister: false,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    onClickCreateAccount(){
      this.isShowFormLogin = !this.isShowFormLogin;
      this.isShowFormRegister = !this.isShowFormRegister;
    }
  },
};
</script>

<style lang="scss" scoped>
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