<template>
  <div class="vgrid pay">
    <h3 class="title-big">Giỏ hàng</h3>
    <div class="vrow">
      <div class="vcol vl-6 vm-6 vc-12">
        <div class="info-pay">
          <div class="product-pay">
            <div v-for="card in ListCard" :key="card" class="product-pay-unit">
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
                type="text"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Số điện thoại"
                v-model="phoneUser"
                required
              />
            </div>
            <h6 class="mt-5">Địa chỉ vận chuyển</h6>

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
      allPrice: 0,
      DO_MAIN,
      listProvince: [],
      listDistrict: [],
      listCommune: [],
      idProvince: "",
      idDistrict: "",
      idCommune: "",
      isDisabledDistrict: true,
      isDisabledCommune: true,
      detailAddress: null,
      phoneUser: "",
      emailUser: "",
    };
  },
  computed: {
    ...mapGetters({
      ListCard: "cardModule/getListCard",
    }),
  },
  watch: {
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
      for (let i = 0; i < this.ListCard.length; i++) {
        this.allPrice +=
          this.ListCard[i].productDetailDTO.price * this.ListCard[i].quantity;
      }
    },
    getListCard() {
      let payload = {
        idCart: 2,
        page: 0,
        limit: 100000,
      };
      this.$store
        .dispatch("cardModule/getDanhSachCard", payload)
        .then((res) => {
          if (res) {
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

      for (let i = 0; i < this.ListCard.length; i++) {
        let productTemp = {
          idProductDetail: null,
          quantity: null,
          idStatus: null,
        };
        productTemp.idProductDetail =
          this.ListCard[i].productDetailDTO.idProductDetail;
        productTemp.quantity = this.ListCard[i].quantity;
        productTemp.idStatus = 2;
        listProductTemp.push(productTemp);
      }

      let payload = {
        idBill: null,
        idUser: 7,
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
        idStatus: 2,
        listProductDetail: [...listProductTemp],
        addressRequestDTO: {
          idAddress: null,
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