<template>
  <div >
    <div v-if="isShowProduct" class="product-unit">
      <div id="img-product" class="product-unit-img">
        <div class="favorite" v-on:click="onCickFavoriteProduct">
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
      <p class="product-unit-name">Tobekind Varsity Jacket - Olive</p>
      680.000đ
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
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    onCickFavoriteProduct() {
      this.isFavorite = !this.isFavorite;
    },
    onmouseoverImg() {
      let imgProduct = document.getElementById("img-product");
      imgProduct.style.backgroundImage =
        "url('../../assets/img/tobekind-varsity-jacket-pink-331299_1080x.jpg')";
    },

    onmouseoutImg() {
      let imgProduct = document.getElementById("img-product");
      imgProduct.style.backgroundImage =
        "url('../../assets/img/tobekind-varsity-jacket-pink-949779_1000x.jpg')";
    },
    
  },
};
</script>

<style lang="scss" scoped>
.product-unit {
  width: 100%;

  &-img {
    position: relative;
    cursor: pointer;
    height: 430px;
    width: 100%;
    background-image: url("../../assets/img/tobekind-varsity-jacket-pink-331299_1080x.jpg");
    background-position: center center;
    background-size: cover;
    &:hover {
      animation: shake 0.5s;
      animation-iteration-count: infinite;
    }

    & .product-favorite {
      cursor: pointer;
      position: absolute;
      right: 2%;
      top: 1%;
    }
  }
  &-name {
    cursor: pointer;
  }
}
.category-bottom-product {
  margin: 10px 0 10px 0;
  display: flex;
  padding: 0 2% 0 2%;
  & .name-product {
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
</style>