<template>
  <div class="vgrid product-detail">
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
    <h3 class="product-detail-title">Product Detail</h3>
    <div class="row">
      <div class="vcol vl-6 vm-6 vc-12">
        <div class="product-detail-img">
          <p class="product-detail-img-small">
            <img
              :src="DO_MAIN + productDetail.frontPhoto"
              alt=""
              @click="imgSelect = productDetail.frontPhoto"
            />
            <img
              :src="DO_MAIN + productDetail.coverPhoto"
              alt=""
              @click="imgSelect = productDetail.coverPhoto"
            />
            <img
              :src="DO_MAIN + productDetail.backPhoto"
              alt=""
              @click="imgSelect = productDetail.backPhoto"
            />
            <img
              v-if="imgSelectTemp !== null"
              :src="DO_MAIN + imgSelectTemp"
              alt=""
              @click="imgSelect = imgSelectTemp"
            />
          </p>
          <p class="product-detail-img-big">
            <img
              :src="
                DO_MAIN +
                (imgSelect === null ? productDetail.frontPhoto : imgSelect)
              "
              alt="#"
            />
          </p>
        </div>
      </div>
      <div class="vcol vl-6 vm-6 vc-12">
        <div class="product-detail-info">
          <h4 class="title">{{ productDetail.nameProduct }}</h4>
          <p class="like">
            <fa class="person-favorite" :icon="['fas', 'heart']" /> Đã có
            {{ productDetail.like }}
            người thích
          </p>
          <div class="color mt-2">
            Màu:
            <div v-for="color in productDetail.listColor" :key="color">
              <label
                :for="color.nameColor"
                class="btn-color"
                :class="{ active: colorProduct === color.idColor }"
                >{{ color.nameColor }}</label
              >
              <input
                class="radioColor"
                type="radio"
                :id="color.nameColor"
                v-model="colorProduct"
                :value="color.idColor"
              />
            </div>
          </div>
          <div class="size mt-2">
            Size:
            <div v-for="size in listSize" :key="size">
              <label
                :for="size.sizeDTO.nameSize"
                class="btn-size mt-1"
                :class="{ active: sizeProduct === size.sizeDTO.idSize }"
              >
                {{ size.sizeDTO.nameSize }}
              </label>
              <input
                class="radioColor"
                type="radio"
                :id="size.sizeDTO.nameSize"
                v-model="sizeProduct"
                :value="size.sizeDTO.idSize"
              />
            </div>
          </div>
          <p class="mt-1">
            Hàng còn:
            {{
              productDetail.amount
                ? productDetail.amount
                : productDetail.totalProduct
            }}
          </p>
          <p class="price mt-1">
            Giá sản phẩm:
            {{
              productDetail.price
                ? productDetail.price
                : productDetail.minPrice
            }}đ
          </p>
          <p class="mt-1">Mô tả : {{ productDetail.descriptionProduct }}</p>

          <!-- <p class="mt-1">
            Số lượng mua: <button class="btn-quantity">-</button>
            <input
              class="input-quantity"
              type="text"
              v-model="quantityProductDetail"
            />
            <button class="btn-quantity">+</button>
          </p> -->
          <hr />
          <p class="mb-2">
            <button @click="addCard(false)" class="btn-add-card">
              Thêm vào giỏ hàng
            </button>
          </p>
          <p class="mb-2">
            <button @click="addCard(true)" class="btn-pay-now">Mua luôn</button>
          </p>
          <p>
            <button @click="onClickGoProduct" class="btn-add-card">
              Quay về trang sản phẩm
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DO_MAIN } from "@/constants/constants";
export default {
  name: "BaseProductDetail",
  components: {},
  props: {},
  data() {
    return {
      DO_MAIN,
      productDetail: {},
      listSize: [],
      colorProduct: null,
      sizeProduct: null,
      imgSelect: null,
      imgSelectTemp: null,
      isShowNotify: false,
      infoNotify: "",
    };
  },
  computed: {},
  watch: {
    colorProduct() {
      if (this.colorProduct !== null) {
        let payload = {
          idProduct: this.productDetail.idProduct,
          idColor: this.colorProduct,
        };
        this.$store
          .dispatch("productModule/showProductDetailFollowColor", payload)
          .then((res) => {
            if (res) {
              (this.sizeProduct = null),
                (this.imgSelectTemp = res.data.data.photoByColor);
              this.imgSelect = res.data.data.photoByColor;
              this.listSize = res.data.data.sizeAndTag;
              this.productDetail.minPrice = res.data.data.minPrice;
              this.productDetail.amount = res.data.data.amount;
            }
          });
      } else {
        this.listSize = [];
      }
    },
    sizeProduct() {
      if (this.sizeProduct !== null) {
        let payload = {
          idProduct: this.productDetail.idProduct,
          idColor: this.colorProduct,
          idSize: this.sizeProduct,
        };
        this.$store
          .dispatch(
            "productModule/showProductDetailFollowColorAndSize",
            payload
          )
          .then((res) => {
            if (res) {
              this.productDetail.price = res.data.data.price;
              this.productDetail.amount = res.data.data.amount;
              this.productDetail.idProductDetail =
                res.data.data.idProductDetail;
            }
          });
      }
    },
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getProductDetail();
    },
    closeNotify() {
      this.isShowNotify = false;
    },
    getProductDetail() {
      let payload = {
        idProduct: this.$route.query.idProduct,
      };
      this.$store
        .dispatch("productModule/getProductDetail", payload)
        .then((res) => {
          if (res) {
            this.productDetail = res.data.data;
            this.getListProductWithCategory();
          }
        });
    },
    onClickGoProduct() {
       document.documentElement.scrollTop = 900;
      document.body.scrollTop = 0;
      this.$router.push({ path: "/product" });
    },
    getListProductWithCategory() {
      let payload = {
        idCategory: this.productDetail.categoryChildDTO.idCategory,
        page: 0,
        limit: 6,
      };
      this.$store.dispatch(
        "productModule/getListProductFollowCategory",
        payload
      );
    },
    addCard(paynow = false) {
      if(!this.productDetail.idProductDetail){
        this.isShowNotify = true;
          this.infoNotify = "Bạn chưa chọn màu hoặc size";
          if (this.isShowNotify) {
            setTimeout(this.closeNotify, 1500);
          }
          return
      }
      let payload = {
        idProductDetail: this.productDetail.idProductDetail,
        idCart: 2,
      };
      this.$store.dispatch("cardModule/addCard", payload).then((res) => {
        if (res) {
          this.isShowNotify = true;
          this.infoNotify = "Sản phẩm đã được thêm vào giỏ hàng thành công";
          if (this.isShowNotify) {
            setTimeout(this.closeNotify, 1500);
            this.colorProduct = null;
            this.sizeProduct = null;
            this.getProductDetail();
          }
          if (paynow) {
            setTimeout(() => {
              this.$router.push({ path: "/card" });
            }, 1800);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.product-detail {
  padding: 2%;
  &-title {
    text-align: center;
    padding: 50px 0 50px 0;
    color: #0cb4ce;
  }
  &-img {
    display: flex;
    &-small {
      width: 22%;
      max-height: 620px;
      height: 70.5vh;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 0 !important;
        display: none;
      }
      & img {
        cursor: pointer;
        width: 100%;
        padding: 1%;
      }
    }
    &-big {
      width: 78%;
      margin-left: 1%;
      justify-content: center;
      align-items: center;
      & img {
        width: 69%;
      }
    }
    // &-small {
    //   border-bottom: 1px solid #0cb4ce;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   & img {
    //     cursor: pointer;
    //     width: 23%;
    //     padding: 1%;
    //   }
    // }
  }
  &-info {
    padding: 5%;
  }
}
.btn-color {
  cursor: pointer;
  margin-right: 10px;
  margin-left: 5px;
  padding: 5px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.09);
  &:hover {
    border: 1px solid red;
    color: red;
  }
}
.btn-size {
  @extend .btn-color;
}
.btn-quantity {
  @extend .btn-color;
  margin-right: 0px;
  margin-left: 0px;
}
.input-quantity {
  border: 1px solid rgba(0, 0, 0, 0.09);
  width: 10%;
  padding: 5px;
  text-align: center;
}
.btn-add-card {
  padding: 10px;
  background: transparent;
  border: 1px solid black;
  color: black;
  &:hover {
    background: black;
    color: white;
    border: 1px solid black;
  }
}
.btn-pay-now {
  padding: 10px;
  background: black;
  color: white;
  &:hover {
    background: transparent;
    color: black;
    border: 1px solid black;
  }
}

@media (max-width: 740px) {
  .product-detail-img-small {
    height: 38.5vh;
  }
}
@media (min-width: 740px) and (max-width: 1023px) {
  .product-detail-img-small {
    height: 30vh;
  }
}
.color {
  display: flex;
}
.size {
  display: flex;
}
.radioColor {
  display: none;
}
.active {
  border: 1px solid red;
  color: red;
}
</style>