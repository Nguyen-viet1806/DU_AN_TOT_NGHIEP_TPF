<template>
  <div class="vgrid cards">
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
    <h3 class="title">Giỏ hàng</h3>
    <!-- <a>Tiếp tục mua hàng</a> -->
    <div class="vrow">
      <div class="vcol vl-8 vm-8 vc-12">
        <div class="card">
          <div
            class="emty-cart"
            v-if="
              ListCard.cartProducts?.length <= 0 &&
              ListCard.cartCombos?.length <= 0
            "
          >
            <img width="600" src="../../../assets/empty-cart.svg" />
          </div>
          <div
            class="product-incard"
            v-for="card in ListCard.cartProducts"
            :key="card"
          >
            <img
              class="img-product"
              :src="DO_MAIN + card.productDetailDTO.detailPhoto"
              alt=""
            />
            <div class="info-product">
              <div class="product-quntity">
                <span
                  v-if="card.productDetailDTO.listTag?.includes(1)"
                  class="badge bg-warning text-dark"
                  >Sale</span
                >
                <p>Tên sản phẩm: {{ card.productDetailDTO.nameProduct }}</p>
                <p>Hàng còn : {{ card.productDetailDTO.amount }}</p>
                <p>
                  Size,màu :
                  {{
                    card.productDetailDTO.sizeDTO.nameSize +
                    ", " +
                    card.productDetailDTO.colorDTO.nameColor
                  }}
                </p>
                <p
                  :class="{
                    textGach:
                      card.productDetailDTO.priceSale &&
                      card.productDetailDTO.priceSale > 0,
                  }"
                >
                  Giá:
                  {{
                    new Intl.NumberFormat("de-DE").format(
                      card.productDetailDTO.price
                    )
                  }}đ
                </p>
                <p
                  v-if="
                    card.productDetailDTO.priceSale &&
                    card.productDetailDTO.priceSale > 0
                  "
                >
                  Giá sale:
                  {{
                    new Intl.NumberFormat("de-DE").format(
                      card.productDetailDTO.priceSale
                    )
                  }}đ
                </p>
                <p class="mt-5">
                  Số lượng:
                  <button class="btn-quantity" @click="updateCard(card, 'tru')">
                    -
                  </button>
                  <input
                    class="input-quantity"
                    type="text"
                    v-model="card.quantity"
                    @change="onChangeQuantity(card)"
                  />
                  <button
                    class="btn-quantity"
                    @click="updateCard(card, 'cong')"
                  >
                    +
                  </button>
                </p>
                <p
                  v-if="
                    card.productDetailDTO.priceSale > 0
                  "
                >
                  Tổng:
                  {{
                    new Intl.NumberFormat("de-DE").format(
                      card.productDetailDTO.priceSale * card.quantity
                    )
                  }}đ
                </p>
                <p
                  v-if="
                    card.productDetailDTO.priceSale == 0
                  "
                >
                  Tổng:
                  {{
                    new Intl.NumberFormat("de-DE").format(
                      card.productDetailDTO.price * card.quantity
                    )
                  }}đ
                </p>
              </div>
              <div class="price-product">
                <button class="delete-product" @click="deleteCard(card)">
                  <fa :icon="['fas', 'trash-alt']" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div
            class="product-incard"
            v-for="card in ListCard.cartCombos"
            :key="card"
          >
            <img
              class="img-product"
              :src="DO_MAIN + card.comboDTO.frontPhoto"
              alt=""
            />
            <div class="info-product">
              <div class="product-quntity">
                <p>Tên combo: {{ card.comboDTO.nameCombo }}</p>
                <p>Hàng còn : {{ card.comboDTO.quantity }}</p>
                <p>
                  Mô tả :
                  {{ card.comboDTO.descriptionCombo }}
                </p>
                <p>
                  Giá:
                  {{
                    new Intl.NumberFormat("de-DE").format(card.comboDTO.price)
                  }}đ
                </p>
                <p class="mt-5">
                  Số lượng:
                  <button
                    class="btn-quantity"
                    @click="updateCardCombo(card, 'tru')"
                  >
                    -
                  </button>
                  <input
                    class="input-quantity"
                    type="text"
                    v-model="card.quantity"
                    @change="onChangeQuantityCombo(card)"
                  />
                  <button
                    class="btn-quantity"
                    @click="updateCardCombo(card, 'cong')"
                  >
                    +
                  </button>
                </p>
                <p>
                  Tổng:
                  {{
                    new Intl.NumberFormat("de-DE").format(card.comboDTO.price)
                  }}đ
                </p>
              </div>
              <div class="price-product">
                <button class="delete-product" @click="deleteCardCombo(card)">
                  <fa :icon="['fas', 'trash-alt']" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vcol vl-4 vm-4 vc-12">
        <div class="pay">
          <p>Tổng cộng: {{ ListCard.totalMoney }}đ</p>
          <p>
            <button class="btn-pay mt-2" @click="onClickPay">Thanh toán</button>
            <button @click="onClickGoProduct" class="btn btn-continue mt-2">
              Tiếp tục mua hàng
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { DO_MAIN } from "@/constants/constants";
export default {
  name: "CardBody",
  components: {},
  props: {},
  data() {
    return {
      DO_MAIN,
      pageable: 0,
      allPrice: 0,
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
    pageable() {
      this.getListCard();
    },
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getListCard();
    },
    onClickPay() {
      if (
        this.ListCard.cartProducts?.length <= 0 &&
        this.ListCard.cartCombos?.length <= 0
      ) {
        this.isShowNotify = true;
        this.infoNotify = "Bạn không có sản phẩm để mua !";
        setTimeout(() => {
          this.isShowNotify = false;
          this.infoNotify = "";
        }, 1000);
        return;
      }
      document.documentElement.scrollTop = 900;
      document.body.scrollTop = 0;
      this.$router.push({ path: "/pay" });
    },
    onClickGoProduct() {
      document.documentElement.scrollTop = 900;
      document.body.scrollTop = 0;
      this.$router.push({ path: "/product" });
    },
    closeNotify() {
      document.documentElement.scrollTop = 1000;
      document.body.scrollTop = 0;
      this.isShowNotify = false;
    },
    onChangeQuantity(CartDetal) {
      let payload = {
        idCartProduct: CartDetal.idCartProduct,
        idCart: CartDetal.idCart,
        productDetailDTO: {
          idProductDetail: CartDetal.productDetailDTO.idProductDetail,
          idProduct: null,
          idGender: null,
          categoryDTO: null,
          colorDTO: null,
          sizeDTO: null,
          price: null,
          quantity: null,
          dateCreate: null,
          saleDTO: null,
          detailPhoto: null,
          listTagDTO: null,
        },
        quantity: CartDetal.quantity,
      };
      this.$store.dispatch("cardModule/updateCard", payload).then((res) => {
        if (res) {
          this.getListCard();
        }
      });
    },

    onChangeQuantityCombo(CartDetal) {
      let payload = {
        idCartCombo: CartDetal.idCartCombo,
        quantity: CartDetal.quantity,
      };
      this.$store
        .dispatch("comboModule/updateQuantityCartCombo", payload)
        .then((res) => {
          if (res) {
            this.getListCard();
          }
        });
    },

    getListCard() {
      let payload = {
        idCart: JSON.parse(localStorage.getItem("UserInfo"))?.idCart,
        page: this.pageable,
        limit: 5,
      };
      this.$store.dispatch("cardModule/getDanhSachCard", payload);
    },
    deleteCard(CartDetal) {
      let payload = {
        idCartProduct: CartDetal.idCartProduct,
      };
      this.$store.dispatch("cardModule/deleteCard", payload).then((res) => {
        if (res) {
          this.getListCard();
        }
      });
    },
    deleteCardCombo(CartDetal) {
      let payload = {
        idCartCombo: CartDetal.idCartCombo,
      };
      this.$store.dispatch("comboModule/deleteCart", payload).then((res) => {
        if (res) {
          this.getListCard();
        }
      });
    },
    updateCard(CartDetal, action) {
      let check = false;
      if (action === "tru") {
        if (CartDetal.quantity > 1) {
          --CartDetal.quantity;
          check = true;
        }
      } else if (action === "cong") {
        if (CartDetal.quantity < 50) {
          ++CartDetal.quantity;
          check = true;
        }
      }
      if (check) {
        let payload = {
          idCartProduct: CartDetal.idCartProduct,
          idCart: CartDetal.idCart,
          productDetailDTO: {
            idProductDetail: CartDetal.productDetailDTO.idProductDetail,
            idProduct: null,
            idGender: null,
            categoryDTO: null,
            colorDTO: null,
            sizeDTO: null,
            price: null,
            quantity: null,
            dateCreate: null,
            saleDTO: null,
            detailPhoto: null,
            listTagDTO: null,
          },
          quantity: CartDetal.quantity,
        };
        this.$store.dispatch("cardModule/updateCard", payload).then((res) => {
          if (res) {
            this.getListCard();
          }
        });
      }
    },
    updateCardCombo(CartDetal, action) {
      let check = false;
      if (action === "tru") {
        if (CartDetal.quantity > 1) {
          --CartDetal.quantity;
          check = true;
        }
      } else if (action === "cong") {
        if (CartDetal.quantity < 50) {
          ++CartDetal.quantity;
          check = true;
        }
      }
      if (check) {
        let payload = {
          idCartCombo: CartDetal.idCartCombo,
          quantity: CartDetal.quantity,
        };
        this.$store
          .dispatch("comboModule/updateQuantityCartCombo", payload)
          .then((res) => {
            if (res) {
              this.getListCard();
            }
          });
      }
    },
    pageNext() {
      this.pageable++;
    },

    pagePre() {
      if (this.pageable > 0) {
        this.pageable--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  padding: 2%;
  & .card {
    border: none;
    width: 100%;
    & .product-incard {
      margin-top: 28px;
      border-left: 5px solid #0cb4ce;
      box-shadow: #b0b7bd 0px 2px 5px 0px;
      display: flex;
      padding: 10px 0px 20px;
      & .img-product {
        width: 180px;
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
  & .pay {
    width: 100%;
    height: 100px;
  }
}
.title {
  color: #0cb4ce;
  margin: 80px 0 80px 0;
  text-align: center;
  text-transform: uppercase;
}
.btn-quantity {
  margin-right: 10px;
  padding: 5px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.09);
  margin-right: 0px;
  &:hover {
    border: 1px solid red;
    color: red;
  }
}
.input-quantity {
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.09);
  width: 60px;
  padding: 5px;
}
.delete-product {
  padding: 5px;
  color: black;
  background: transparent;
  &:hover {
    transform: scale(2);
  }
}
.btn-pay {
  padding: 11px 20px;
  font-weight: 500;
  text-align: center;
  background: black;
  color: white;
  width: 90%;
  &:hover {
    width: 100%;
  }
}
.emty-cart {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-continue {
  float: right;
  padding: 11px 20px;
  font-weight: 500;
  text-align: center;
  background: white;
  color: black;
  border: 1px solid black;
  width: 90%;
  &:hover {
    width: 100%;
  }
}
.textGach {
  text-decoration-line: line-through !important;
}
</style>