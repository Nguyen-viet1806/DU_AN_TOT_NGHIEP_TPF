<template>
  <div class="vgrid pay">
    <div class="notifyv">
      <div
        id="popupv"
        v-if="isShowNotifyV"
        class="overlayv"
        @click="closeNotifyV"
      ></div>
      <transition name="bounce">
        <div id="popupv" v-if="isShowNotifyV" class="popupv">
          <a class="closev" @click="closeNotifyV">&times;</a>
          <div class="contentv">
            <div class="vrow">
              <div class="vcol vl-6 vm-6 vc-12">
                <div class="voucher">
                  <img
                    class="icon"
                    src="@/assets/logoTpf.svg"
                    width="45"
                    height="45"
                  />
                  <p>Voucher <fa :icon="['fas', 'tags']" /> giảm giá 10%</p>
                  <p class="btn-addVoucher">
                    <button class="btn btn-danger">Chọn voucher</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
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
    <h3 class="title-big">Thanh toán</h3>
    <div class="vrow">
      <div class="vcol vl-6 vm-6 vc-12">
        <div class="info-pay">
          <div class="product-pay">
            <div
              v-for="card in ListCard.cartProducts"
              :key="card"
              class="product-pay-unit"
            >
              <div class="product-img">
                <img :src="DO_MAIN + card.productDetailDTO.detailPhoto" />
              </div>
              <div class="product-info">
                <p class="product-name">
                  <b>{{ card.productDetailDTO.nameProduct }}</b>
                  <small
                    >{{ card.productDetailDTO.sizeDTO.nameSize }},{{
                      card.productDetailDTO.colorDTO.nameColor
                    }}</small
                  >
                  <small>Số lượng: {{ card.quantity }}</small>
                </p>
                <p class="product-price">
                  <b
                    >{{
                      new Intl.NumberFormat("de-DE").format(
                        card.productDetailDTO.price * card.quantity
                      )
                    }}₫</b
                  >
                </p>
              </div>
            </div>
            <div
              v-for="card in ListCard.cartCombos"
              :key="card"
              class="product-pay-unit"
            >
              <div class="product-img">
                <img :src="DO_MAIN + card.comboDTO.frontPhoto" />
              </div>
              <div class="product-info">
                <p class="product-name">
                  <b>{{ card.comboDTO.nameCombo }}</b>
                  <small>Số lượng: {{ card.quantity }}</small>
                </p>
                <p class="product-price">
                  <b
                    >{{
                      new Intl.NumberFormat("de-DE").format(
                        card.comboDTO.price * card.quantity
                      )
                    }}₫</b
                  >
                </p>
              </div>
            </div>
          </div>
          <p
            v-if="voucherCanDonate != null && voucherCanDonate != {}"
            class="voucherDonate"
          >
            Mua thêm
            {{
              new Intl.NumberFormat("de-DE").format(
                Number(voucherCanDonate.condition) - Number(ListCard.totalMoney)
              )
            }}đ để được tặng voucher giảm giá {{ voucherCanDonate.discount }}%
          </p>
          <div class="pay-voucher">
            <div class="input-group">
              <input
                type="search"
                @focus="onFocusVoucher"
                v-model="voucher"
                class="form-control rounded"
                placeholder="Mã giảm giá"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" class="btn btn-outline-primary">
                Áp dụng
              </button>
            </div>
          </div>
          <div class="temp-price">
            <div class="title">
              <p>Tổng phụ:</p>
              <p class="mt-1">Vận chuyển:</p>
            </div>
            <div class="value">
              <p>
                {{ new Intl.NumberFormat("de-DE").format(ListCard.totalMoney) }}
                ₫
              </p>
              <p class="mt-1">30.000 ₫</p>
            </div>
          </div>
          <div class="real-price">
            <div class="title">
              <p>Tổng :</p>
            </div>
            <div class="value">
              <p>
                {{
                  new Intl.NumberFormat("de-DE").format(
                    ListCard.totalMoney + 30000
                  )
                }}
                ₫
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="vcol vl-6 vm-6 vc-12">
        <div class="info-user">
          <h4>Thông tin liên hệ</h4>
          <p class="mb-2">
            <input type="checkbox" v-model="isSuDungThongTinDaluu" /> Sử dụng
            thông tin đã lưu !
          </p>
          <form @submit.prevent="onSubmit" class="row g-3">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Email"
                v-model="emailUser"
                :disabled="isSuDungThongTinDaluu"
                required
              />
            </div>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Số điện thoại"
                v-model="phoneUser"
                :disabled="isSuDungThongTinDaluu"
                required
              />
            </div>
            <h6 class="mt-5">Địa chỉ vận chuyển</h6>

            <div class="input-group">
              <select
                v-model="idProvince"
                class="form-select"
                id="validationDefault04"
                :disabled="isSuDungThongTinDaluu"
                required
              >
                <option selected value="">Chọn tỉnh</option>
                <option
                  v-for="Province in listProvince"
                  :key="Province"
                  :value="Province.idProvince"
                  :disabled="isSuDungThongTinDaluu"
                >
                  {{ Province.nameProvince }}
                </option>
              </select>
            </div>

            <div class="input-group">
              <select
                :disabled="isDisabledDistrict || isSuDungThongTinDaluu"
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
                :disabled="isDisabledCommune || isSuDungThongTinDaluu"
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
                :disabled="isSuDungThongTinDaluu"
                required
              />
            </div>
            <div class="input-group">
              <textarea
                type="text"
                class="form-control"
                id="validationDefault03"
                placeholder="Mô tả"
                v-model="descriptionBill"
              />
            </div>

            <p class="mb-2" v-if="!isSuDungThongTinDaluu">
              <input type="checkbox" v-model="isLuuThongtinChoLanSau" /> Lưu địa
              chỉ này làm thông tin cá nhân!
            </p>
            <div class="col-12">
              <button class="btn btn-pay" type="submit">Thanh toán</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DO_MAIN } from "@/constants/constants";
import { mapGetters } from "vuex";
export default {
  name: "Body",
  components: {},
  props: {},
  data() {
    return {
      listVoucherUser: [],
      isShowNotifyV: false,
      isSuDungThongTinDaluu: false,
      isLuuThongtinChoLanSau: false,
      allPrice: 0,
      DO_MAIN,
      voucherCanDonate: {},
      voucher: "",
      listProvince: [],
      listDistrict: [],
      listCommune: [],
      idAddress: null,
      idProvince: "",
      idDistrict: "",
      idCommune: "",
      detailAddress: "",
      phoneUser: "",
      emailUser: "",
      descriptionBill: "",
      isDisabledDistrict: true,
      isDisabledCommune: true,
      isShowNotify: false,
      infoNotify: "",
    };
  },
  computed: {
    ...mapGetters({
      ListCard: "cardModule/getListCard",
    }),
  },
  watch: {
    isSuDungThongTinDaluu() {
      if (this.isSuDungThongTinDaluu) {
        let user = JSON.parse(localStorage.getItem("UserInfo"));
        this.idAddress = user.addressDTO.idAddress;
        this.idProvince = user.addressDTO.idProvince;
        this.idDistrict = user.addressDTO.idDistrict;
        this.idCommune = user.addressDTO.idCommune;
        this.detailAddress = user.addressDTO.detailAddress;
        this.phoneUser = user.phoneNumber;
        this.emailUser = user.email;
        this.isLuuThongtinChoLanSau = false;
      } else {
        this.idAddress = null;
        this.idProvince = "";
        this.idDistrict = "";
        this.idCommune = "";
        this.detailAddress = null;
        this.phoneUser = "";
        this.emailUser = "";
      }
    },
    idProvince() {
      if (this.idProvince.length > 0 || this.idProvince != "") {
        this.isDisabledDistrict = false;
        this.$store
          .dispatch("billModule/getDanhSachQuanHuyen", {
            idProvince: Number(this.idProvince),
          })
          .then((res) => {
            if (res) {
              this.listDistrict = res.data.data;
            }
          });
      } else if (this.idProvince.length == 0 || this.idProvince == "") {
        this.isDisabledDistrict = true;
        this.listDistrict = [];
      }
    },
    idDistrict() {
      if (this.idDistrict.length > 0 || this.idDistrict != "") {
        this.isDisabledCommune = false;
        this.$store
          .dispatch("billModule/getDanhSachXa", {
            idDistrict: Number(this.idDistrict),
            idProvince: Number(this.idProvince),
          })
          .then((res) => {
            if (res) {
              this.listCommune = res.data.data;
            }
          });
      } else if (this.idDistrict.length == 0 || this.idDistrict == "") {
        this.isDisabledCommune = true;
        this.listCommune = [];
      }
    },
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      document.documentElement.scrollTop = 900;
      document.body.scrollTop = 0;
      this.getListCard();
      this.getListTinh();
    },
    closeNotifyV() {
      this.isShowNotifyV = false;
    },
    onFocusVoucher() {
      this.isShowNotifyV = true;
      let payload = {
        idUser: JSON.parse(localStorage.getItem("UserInfo")).idUser,
        page: 0,
        limit: 100000000,
      };
      this.$store.dispatch("billModule/getListVoucher", payload).then((res) => {
        if (res) {
          this.listVoucherUser = res.data.data;
        }
      });
    },
    getListTinh() {
      this.$store.dispatch("billModule/getDanhSachTinh").then((res) => {
        if (res) {
          this.listProvince = res.data.data;
        }
      });
    },
    getPriceAll() {
      this.allPrice = 0;
      for (let i = 0; i < this.ListCard.cartProducts.length; i++) {
        this.allPrice +=
          this.ListCard.cartProducts[i].productDetailDTO.price *
          this.ListCard.cartProducts[i].quantity;
      }
    },
    getListCard() {
      let payload = {
        idCart: JSON.parse(localStorage.getItem("UserInfo"))?.idCart,
        page: 0,
        limit: 100000,
      };
      this.$store
        .dispatch("cardModule/getDanhSachCard", payload)
        .then((res) => {
          if (res) {
            if (
              this.ListCard.cartProducts.length <= 0 &&
              this.ListCard.cartCombos.length <= 0
            ) {
              this.isShowNotify = true;
              this.infoNotify = "Bạn không có sản phẩm để mua !";
              setTimeout(() => {
                this.isShowNotify = false;
                this.infoNotify = "";
              }, 1000);
              setTimeout(() => {
                this.$router.push({ path: "/product" });
              }, 1500);
              return;
            }
            let p = {
              totalMoney: this.ListCard.totalMoney,
            };
            this.$store
              .dispatch("billModule/getVoucherCanDonate", p)
              .then((res) => {
                if (res) {
                  this.voucherCanDonate = res.data.data;
                }
              });
            this.getPriceAll();
          }
        });
    },
    onSubmit() {
      let today = new Date();
      let Month = today.getMonth() + 1;
      let day = today.getDate() > 10 ? today.getDate() : "0" + today.getDate();
      let datestring = today.getFullYear() + "-" + Month + "-" + day;
      let listProductTemp = [];
      let listCombo = [];
      for (let i = 0; i < this.ListCard.cartProducts.length; i++) {
        let productTemp = {
          idProductDetail: null,
          quantity: null,
          idStatus: null,
        };
        productTemp.idProductDetail =
          this.ListCard.cartProducts[i].productDetailDTO.idProductDetail;
        productTemp.quantity = this.ListCard.cartProducts[i].quantity;
        productTemp.idStatus = 2;
        listProductTemp.push(productTemp);
      }

      for (let i = 0; i < this.ListCard.cartCombos.length; i++) {
        let comboTemp = {
          idCombo: null,
          quantity: null,
          idStatus: null,
        };
        comboTemp.idCombo = this.ListCard.cartCombos[i].comboDTO.idCombo;
        comboTemp.quantity = this.ListCard.cartCombos[i].quantity;
        comboTemp.idStatus = 2;
        listCombo.push(comboTemp);
      }

      let payload = {
        idBill: null,
        idUser: JSON.parse(localStorage.getItem("UserInfo")).idUser,
        idAddress: null,
        phoneUser: this.phoneUser,
        emailUser: this.emailUser,
        dateCreate: datestring,
        dateSuccess: null,
        descriptionBill: this.descriptionBill,
        total: 0,
        deposit: 0,
        payment: this.allPrice,
        transportFee: 30000,
        voucher: this.voucher,
        billType: 0,
        idStatus: 6,
        listProductDetail: [...listProductTemp],
        listCombo: [...listCombo],
        addressRequestDTO: {
          idAddress: this.idAddress,
          idProvince: this.idProvince,
          idDistrict: this.idDistrict,
          idCommune: this.idCommune,
          detailAddress: this.detailAddress,
        },
      };

      this.$store.dispatch("billModule/pay", payload).then((res) => {
        if (res) {
          if (this.isLuuThongtinChoLanSau) {
            let users = JSON.parse(localStorage.getItem("UserInfo"));
            let userTemp = {
              idUser: users.idUser,
              firstName: users.firstName,
              lastName: users.firstName,
              dateOfBirth: users.dateOfBirth,
              email: users.email,
              phoneNumber: users.phoneNumber,
              passwordUser: "",
              idGender: users.genderDTO.idGender,
              idAddress: null,
              imageUser: users.imageUser,
              addressRequestDTO: {
                idAddress: this.idAddress,
                idProvince: this.idProvince,
                idDistrict: this.idDistrict,
                idCommune: this.idCommune,
                detailAddress: this.detailAddress,
              },
            };
            this.$store
              .dispatch("loginModule/UpdateProfile", userTemp)
              .then((res) => {
                if (res) {
                  this.listDistrict = [];
                  this.listCommune = [];
                  this.idAddress = null;
                  this.idProvince = "";
                  this.idDistrict = "";
                  this.idCommune = "";
                  this.isDisabledDistrict = true;
                  this.isDisabledCommune = true;
                  this.detailAddress = null;
                  this.phoneUser = "";
                  this.emailUser = "";
                }
              });
          }
          this.isShowNotify = true;
          this.infoNotify = "Đặt hàng thành công !";
          setTimeout(() => {
            this.isShowNotify = false;
            this.infoNotify = "";
          }, 1000);
          setTimeout(() => {
            this.$router.push({ path: "/bill" });
          }, 1500);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pay {
  padding-left: 2%;
  padding-right: 2%;

  & .info-user {
    padding: 0 12% 0 8%;
  }
  & .info-pay {
    border-top: 1px solid rgba(0, 0, 0, 0.09);
    border-right: 1px solid rgba(0, 0, 0, 0.09);
    width: 100%;
    background: #fafafa;
    padding: 65px 12% 0 8%;
    height: 800px;
    & .product-pay {
      padding-bottom: 20px;
      padding-right: 5px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
      max-height: 36vh;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 2px;
      }
      &::-webkit-scrollbar-thumb {
        background: #0cb4ce;
      }
      &::-webkit-scrollbar-track {
        background: white;
      }
      & .product-pay-unit {
        display: flex;
        margin-top: 10px;
        & .product-img {
          width: 65px;
          height: 65px;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(0, 0, 0, 0.09);
          overflow: hidden;
          border-radius: 8px;
          & img {
            width: 48px;
          }
        }
        & .product-info {
          width: calc(100% - 65px);
          background: transparent;
          display: flex;
          padding-left: 10px;
          justify-content: space-between;
          & .product-name {
            font-size: 14px;
            & small {
              display: block;
            }
          }
          & .product-price {
            align-self: center;
          }
        }
      }
    }
    & .pay-voucher {
      padding: 25px 0 25px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    }
    & .temp-price {
      font-size: 16px;
      padding: 25px 0 25px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
      display: flex;
      justify-content: space-between;
    }
    & .real-price {
      font-size: 16px;
      padding: 25px 0 25px 0;
      display: flex;
      justify-content: space-between;
    }
  }
}
.title-big {
  color: #0cb4ce;
  margin: 80px 0 40px 0;
  text-align: center;
  text-transform: uppercase;
}
.btn-pay {
  width: 240px;
  height: 60px;
  text-align: center;
  background: black;
  color: white;
  font-weight: 500;
}
.voucherDonate {
  color: red;
}
.closev {
  cursor: pointer;
}
.popupv {
  box-shadow: #b0b7bd 0px 2px 15px 0px;
  visibility: visible;
  opacity: 1;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  width: 35%;
  position: fixed;
  top: 110px;
  left: 32%;
  transition: all 1s ease-in-out;
  z-index: 1002;
}
.voucher {
  width: 230px;
  height: 150px;
  line-height: 2;
  background: orange;
  border-radius: 10px;
  border: 2px double #0cb4ce;
}
.btn-addVoucher {
  margin-top: 10px;
  text-align: center;
}
</style>