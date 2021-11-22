<template>
  <div class="vgrid pay">
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
          </div>
          <div class="pay-voucher">
            <div class="input-group">
              <input
                type="search"
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
              <p>{{ new Intl.NumberFormat("de-DE").format(allPrice) }} ₫</p>
              <p class="mt-1">30.000 ₫</p>
            </div>
          </div>
          <div class="real-price">
            <div class="title">
              <p>Tổng :</p>
            </div>
            <div class="value">
              <p>
                {{ new Intl.NumberFormat("de-DE").format(allPrice + 30000) }} ₫
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
              <input type="checkbox" v-model="isLuuThongtinChoLanSau" /> Lưu
              thông tin này làm thông tin cá nhân!
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
      isSuDungThongTinDaluu: false,
      isLuuThongtinChoLanSau: false,
      allPrice: 0,
      DO_MAIN,
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
            if (this.ListCard.cartProducts.length <= 0) {
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
        idVoucher: null,
        codeVoucher: null,
        billType: 0,
        idStatus: 6,
        listProductDetail: [...listProductTemp],
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
          this.getListCard();
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
</style>