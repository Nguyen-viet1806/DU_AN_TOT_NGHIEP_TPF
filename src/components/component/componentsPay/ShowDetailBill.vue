<template>
  <div class="vgrid pay">
    <h3 class="title-big">Hóa đơn</h3>
    <div class="vrow">
      <div class="vcol vl-6 vm-6 vc-12">
        <div class="info-pay">
          <div class="product-pay">
            <div
              v-for="billDetail in bill.listBillProductDetail"
              :key="billDetail"
              class="product-pay-unit"
            >
              <div class="product-img">
                <img
                  :src="
                    DO_MAIN + billDetail.productChildResponseDTO.detailPhoto
                  "
                />
              </div>
              <div class="product-info">
                <p class="product-name">
                  <b>{{ billDetail.productChildResponseDTO.nameProduct }}</b>
                  <small
                    >{{ billDetail.productChildResponseDTO.size.nameSize }},{{
                      billDetail.productChildResponseDTO.color.nameColor
                    }}</small
                  >
                  <small>Số lượng: {{ billDetail.quantity }}</small>
                </p>
                <p class="product-price">
                  <b
                    >{{
                      new Intl.NumberFormat("de-DE").format(
                        billDetail.price * billDetail.quantity
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
                disabled
              />
            </div>
          </div>
          <div class="temp-price">
            <div class="title">
              <p>Tổng phụ:</p>
              <p class="mt-1">Vận chuyển:</p>
            </div>
            <div class="value">
              <p>
                {{ new Intl.NumberFormat("de-DE").format(Number(bill.total)) }}
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
                    Number(bill.total) + Number(bill.transportFee)
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
          <form @submit.prevent="onSubmit" class="row g-3">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Email"
                :value="bill.userResponseDTO.email"
                disabled
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
                :value="bill.userResponseDTO.phoneNumber"
                disabled
                required
              />
            </div>
            <h6 class="mt-5">Địa chỉ vận chuyển</h6>

            <div class="input-group">
              <select
                :value="bill.address.province.idProvince"
                class="form-select"
                id="validationDefault04"
                disabled
                required
              >
                <option selected value="">Chọn tỉnh</option>
                <option
                  v-for="Province in listProvince"
                  :key="Province"
                  :value="Province.idProvince"
                  disabled
                >
                  {{ Province.nameProvince }}
                </option>
              </select>
            </div>

            <div class="input-group">
              <select
                disabled
                :value="bill.address.district.idDistrict"
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
                disabled
                :value="bill.address.commune.idCommune"
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
                :value="bill.address.detailAddress"
                disabled
                required
              />
            </div>
            <div class="input-group">
              <textarea
                type="text"
                class="form-control"
                id="validationDefault03"
                placeholder="Mô tả"
                :value="bill.descriptionBill"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DO_MAIN } from "@/constants/constants";
export default {
  name: "ShowDetailBill",
  components: {},
  props: {
  },
  data() {
    return {
      allPrice: 0,
      DO_MAIN,
      listProvince: [],
      listDistrict: [],
      listCommune: [],
      bill: {},
    };
  },
  computed: {},
  watch: {
    "bill.address.province.idProvince": {
      handler() {
        if (this.idProvince.length > 0 || this.idProvince != "") {
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
          this.listDistrict = [];
        }
      },
      deep: true,
    },
    "bill.address.district.idDistrict": {
      handler() {
        if (this.idDistrict.length > 0 || this.idDistrict != "") {
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
    },

    getListTinh() {
      this.$store.dispatch("billModule/getDanhSachTinh").then((res) => {
        if (res) {
          this.listProvince = res.data.data;
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