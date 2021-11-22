<template>
  <div class="vgrid bill">
    <h3 class="title">Hóa đơn</h3>
    <div class="vrow">
      <div class="vcol vl-12 vm-12 vc-12">
        <div class="bill-body">
          <div class="title-bill">
            <h6
              class="title-bill-unit"
              :class="{ active: checkText('Tất cả') }"
              @click="onClickStatusBill(GIA_TRI_TRANG_THAI.ALL, $event)"
            >
              Tất cả
            </h6>
            <h6
              class="title-bill-unit"
              :class="{ active: checkText('Đang xử lý') }"
              @click="onClickStatusBill(GIA_TRI_TRANG_THAI.PROCESSING, $event)"
            >
              Đang xử lý
            </h6>
            <h6
              class="title-bill-unit"
              :class="{ active: checkText('Đã xác nhận') }"
              @click="onClickStatusBill(GIA_TRI_TRANG_THAI.CONFIRMED, $event)"
            >
              Đã xác nhận
            </h6>
            <h6
              class="title-bill-unit"
              :class="{ active: checkText('Đang giao') }"
              @click="onClickStatusBill(GIA_TRI_TRANG_THAI.DELIVERY, $event)"
            >
              Đang giao
            </h6>
            <h6
              class="title-bill-unit"
              :class="{ active: checkText('Đã thanh toán') }"
              @click="onClickStatusBill(GIA_TRI_TRANG_THAI.PAID, $event)"
            >
              Đã thanh toán
            </h6>
            <h6
              class="title-bill-unit"
              :class="{ active: checkText('Đã hủy') }"
              @click="onClickStatusBill(GIA_TRI_TRANG_THAI.CANCE, $event)"
            >
              Đã hủy
            </h6>
          </div>
          <div class="search-bill">
            <input
              class="filter-product-search"
              type="text"
              placeholder="search"
              v-model="textSearch"
            /><button class="filter-product-btn-filter" @click="search">
              Search
            </button>
          </div>
          <div class="bill-page">
            <div class="bill-page-unit" v-for="bill in listBill" :key="bill">
              <div class="top-bill">
                <p class="date-pay">Ngày đặt hàng: {{ bill.dateCreate }}</p>
                <p class="status-bill">| {{ bill.nameStatus }}</p>
              </div>
              <hr class="hr" />
              <div class="card">
                <div
                  class="product-incard mt-3"
                  v-for="billDetail in bill.listBillProductDetail"
                  :key="billDetail"
                >
                  <img
                    class="img-product"
                    :src="
                      DO_MAIN + billDetail.productChildResponseDTO.detailPhoto
                    "
                    alt=""
                  />
                  <div class="info-product">
                    <div class="product-quntity">
                      <p>
                        Tên sản phẩm:
                        {{ billDetail.productChildResponseDTO.nameProduct }}
                      </p>
                      <p>
                        Size,màu :
                        {{
                          billDetail.productChildResponseDTO.size.nameSize +
                          ", " +
                          billDetail.productChildResponseDTO.color.nameColor
                        }}
                      </p>
                      <p>
                        Giá:
                        {{
                          new Intl.NumberFormat("de-DE").format(
                            billDetail.price
                          )
                        }}đ
                      </p>
                      <p class="mt-5">Số lượng: {{ billDetail.quantity }}</p>
                    </div>
                    <div class="price-product">
                      <p>
                        Tổng:
                        {{
                          new Intl.NumberFormat("de-DE").format(
                            Number(billDetail.price) *
                              Number(billDetail.quantity)
                          )
                        }}đ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="all-price-in-bill mt-2">
                <h6>
                  Tổng tiền :
                  {{
                    new Intl.NumberFormat("de-DE").format(
                      Number(bill.total) + Number(bill.transportFee)
                    )
                  }}đ
                </h6>
              </div>
              <div class="all-price-in-bill mt-2">
                <button @click="onClickShow(bill)" class="btn btn-show">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panigation-tpf mt-4">
      <nav class="Page" aria-label="Page navigation example ">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              v-on:click.prevent="pagePre"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" v-on:click.prevent="">{{
              pageable + 1
            }}</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Next"
              v-on:click.prevent="pageNext"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="notifyv">
      <div
        id="popupv"
        v-if="isShowNotifyV"
        class="overlayv"
        @click="closeNotifyV"
      ></div>
      <transition name="bounce">
        <div id="popupv" v-if="isShowNotifyV" class="popupv">
          <a class="closev" href="#" @click="closeNotifyV">&times;</a>
          <div class="contentv">
            <show-detail-bill ref="ShowDetailBill" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { DO_MAIN, GIA_TRI_TRANG_THAI } from "@/constants/constants";
import { mapGetters } from "vuex";
import ShowDetailBill from "@/components/component/componentsPay/ShowDetailBill.vue";
export default {
  name: "BodyBill",
  components: { ShowDetailBill },
  props: {},
  data() {
    return {
      DO_MAIN,
      GIA_TRI_TRANG_THAI,
      innerText: "Tất cả",
      pageable: 0,
      idStatus: GIA_TRI_TRANG_THAI.ALL,
      isShowNotifyV: false,
      billTemp: {},
    };
  },
  computed: {
    ...mapGetters({
      listBill: "billModule/getListBill",
    }),
  },
  watch: {
    pageable() {
      if (this.idStatus == GIA_TRI_TRANG_THAI.ALL) {
        this.getAllBill();
      } else {
        this.getListBillInStatus(this.idStatus);
      }
    },
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getAllBill();
    },
    onClickShow(billTemp) {
      this.$ref["ShowDetailBill"].bill = { ...billTemp };
      this.isShowNotifyV = true;
    },
    closeNotifyV() {
      this.isShowNotifyV = false;
    },
    getListBillInStatus(idStatus) {
      let payload = {
        sort: -1,
        idStatus: idStatus,
        startDate: "2000-11-23",
        endDate: "2999-11-23",
        page: this.pageable,
        limit: 5,
        idUser: JSON.parse(localStorage.getItem("UserInfo"))?.idUser,
      };
      this.$store.dispatch("billModule/getListBillSort", payload);
    },

    pageNext() {
      this.pageable++;
    },

    pagePre() {
      if (this.pageable > 0) {
        this.pageable--;
      }
    },

    getAllBill() {
      let payload = {
        page: this.pageable,
        limit: 5,
        idUser: JSON.parse(localStorage.getItem("UserInfo"))?.idUser,
      };
      this.$store.dispatch("billModule/getAllBill", payload);
    },

    checkText(text) {
      return this.innerText.includes(text);
    },

    onClickStatusBill(status, event) {
      this.pageable = 0;
      this.idStatus = status;
      this.innerText = event.target.innerText;
      if (status == GIA_TRI_TRANG_THAI.ALL) {
        this.getAllBill();
      } else {
        this.getListBillInStatus(status);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bill {
  padding: 2%;
  background: #f5f5f5;
  & .bill-body {
    width: 100%;
    height: 100%;
    & .title-bill {
      display: flex;
      &-unit {
        cursor: pointer;
        flex: 0 0 16.66667%;
        max-width: 16.66667%;
        background-color: #ffffff;
        line-height: 19px;
        text-align: center;
        padding: 16px 0;
      }
    }
    & .bill-page {
      background-color: #ffffff;
      width: 100%;
      &-unit {
        border-top: 18px solid #f5f5f5;
      }
    }
  }
}
.title {
  color: #0cb4ce;
  margin: 50px 0 50px 0;
  text-align: center;
  text-transform: uppercase;
}
.active {
  border-bottom: 2px solid #ee4d2d;
  color: #ee4d2d;
}
.search-bill {
  display: flex;
  justify-content: center;
  & .filter-product {
    &-search {
      height: 45px;
      width: 92.5%;
      margin-bottom: 10px;
      border-radius: 5px;
      padding: 0.5%;
      border: 1px solid #0cb4ce;
      color: #0cb4ce;
      &::placeholder {
        color: #0cb4ce;
      }
    }
    &-btn-filter {
      margin-left: 2px;
      width: calc(4.5% - 2px -0.5%);
      background: #0cb4ce;
      font-size: 16px;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      padding: 0.5%;
      height: 45px;
      &:hover {
        color: #0cb4ce;
        background: transparent;
        border: 1px solid #0cb4ce;
      }
    }
  }
}
.card {
  border: none;
  width: 100%;
  & .product-incard {
    margin-top: 5px;
    border-left: 5px solid #ee4d2d;
    box-shadow: #b0b7bd 0px 2px 5px 0px;
    display: flex;
    & .img-product {
      width: 110px;
    }
    & .info-product {
      display: flex;
      justify-content: space-between;
      flex-basis: 100%;
      padding-left: 1%;
      background: transparent;
    }
  }
}
.price-product {
  display: flex;
  align-items: center;
}
.top-bill {
  padding: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.status-bill {
  color: #ee4d2d;
}
.hr {
  margin: 0 0 10px 0;
  display: flex;
  justify-content: center;
  width: 80%;
}
.all-price-in-bill {
  display: flex;
  justify-content: flex-end;
  h6 {
    color: #ee4d2d;
  }
}
.btn-show {
  border: 1px solid #ee4d2d;
  color: #ee4d2d;
  outline: 0;
  margin-bottom: 5px;
  &:hover {
    color: white;
    background: #ee4d2d;
  }
}
</style>
