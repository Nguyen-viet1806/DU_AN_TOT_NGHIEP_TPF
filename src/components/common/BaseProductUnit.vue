<template>
  <div>
    <div v-if="isShowProduct" class="product-unit">
      <div
        id="img-product"
        class="product-unit-img"
        :style="[
          'background-image: url(' + DO_MAIN + product.frontPhoto + ');',
        ]"
      >
       <p v-if="product.listTag.includes(1)" class="sale-product"><span class="badge bg-warning text-dark">Sale</span></p>
        <p v-if="product.listTag.includes(2)" class="sale-product"><span class="badge bg-danger">Hot</span></p>
        <div class="favorite" v-on:click="listDislikeProduct">
          <fa
            v-if="isFavorite"
            class="product-favorite"
            :icon="['fas', 'heart']"
          />
          <fa
            v-if="!isFavorite"
            class="product-favorite"
            :icon="['far', 'heart']"
          />
        </div>
      </div>
      <p class="product-unit-name" @click="onCLickProduct(product.idProduct)">
        {{ product.nameProduct }}
      </p>
      <p>{{ product.minPrice }}.đồng ~ {{ product.maxPrice }}.đồng</p>
      <p>
        <fa class="person-favorite" :icon="['fas', 'heart']" /> Đã có
        {{ product.like + isFavorite ? 1 : 0 }} người thích
      </p>
    </div>

    <div v-if="isShowCombo" class="product-unit">
      <div
        id="img-product"
        class="product-unit-img"
        :style="['background-image: url(' + DO_MAIN + combo.frontPhoto + ');']"
      ></div>
      <p class="product-unit-name" @click="onCLickCombo(combo.idCombo)">
        {{ combo.nameCombo }}
      </p>
      <p>{{ combo.price }}.đồng</p>
    </div>

    <div v-if="isShowProductSmallFlowCategory" class="category-bottom-product">
      <div class="img-product">
        <img
          src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2020/05/product-snow-20b-min-300x400.jpg"
          width="40"
        />
      </div>
      <p class="name-product">
        Swash Multicolor
        <br />
        <small>690đ</small>
      </p>
    </div>
  </div>
</template>

<script>
import { DO_MAIN } from "@/constants/constants";
export default {
  name: "BaseProductUnit",
  components: {},
  props: {
    isShowProduct: {
      type: Boolean,
      default: false,
    },
    isShowProductSmallFlowCategory: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object,
      default: () => {},
    },
    combo: {
      type: Object,
      default: () => {},
    },
    isShowCombo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      DO_MAIN,
      isFavorite: this.product?.isLike,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    onCLickProduct(idProduct) {
      if (idProduct) {
        this.$router.push({
          path: "/product-detail",
          query: {
            idProduct: idProduct,
          },
        });
      }
    },
    onCLickCombo(idCombo) {
      if (idCombo) {
        this.$router.push({
          path: "/combo-detail",
          query: {
            idCombo: idCombo,
          },
        });
      }
    },
    // onmouseoverImg() {
    //   let imgProduct = document.getElementById("img-product");
    //   imgProduct.style.backgroundImage =
    //     "url('../../assets/img/tobekind-varsity-jacket-pink-331299_1080x.jpg')";
    // },

    // onmouseoutImg() {
    //   let imgProduct = document.getElementById("img-product");
    //   imgProduct.style.backgroundImage =
    //     "url('../../assets/img/tobekind-varsity-jacket-pink-949779_1000x.jpg')";
    // },
    listDislikeProduct() {
      this.isFavorite = !this.isFavorite;
      let payload = {
        idUser: JSON.parse(localStorage.getItem("UserInfo"))?.idUser,
        idProduct: this.product.idProduct,
        idCombo: null,
        isLike: this.isFavorite,
      };
      this.$store.dispatch("productModule/listDislikeProduct", payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-unit {
  width: 100%;
  margin-top: 50px;
  &-img {
    position: relative;
    height: 430px;
    width: 100%;
    background-position: center center;
    background-size: cover;
    &:hover {
      animation: shake 0.5s;
      animation-iteration-count: infinite;
    }

    & .product-favorite {
      font-size: 22px;
      color: red;
      cursor: pointer;
      position: absolute;
      right: 2%;
      top: 1%;
    }
  }
  &-name {
    font-weight: bold;
    color: #0cb4ce !important;
    cursor: pointer;
    &:hover {
      font-size: 18px;
    }
  }
}
.person-favorite {
  color: red;
}
.category-bottom-product {
  margin: 10px 0 10px 0;
  display: flex;
  padding: 0 2% 0 2%;
  & .name-product {
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    margin-left: 5px;
  }
}
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
.sale-product{
  width: 10%;
  z-index: 998;
}
.badge{
  padding: 5px 15px 5px 15px;
}
</style>