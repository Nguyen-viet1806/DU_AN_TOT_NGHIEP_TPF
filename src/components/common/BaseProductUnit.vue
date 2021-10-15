<template>
  <div>
    <div v-if="isShowProduct" v-on:click="test" class="product-unit">
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
      <p>680.000đ</p>
      <p>
        <fa class="person-favorite" :icon="['fas', 'heart']" /> Đã có 100 người
        thích
      </p>
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
    test() {
      // var a = {a: "ádasd"}
      // var b = a
      // b.a="123"
      // console.log(a)
      // console.log(a.a===b.a)
      let person1 = { name: "Việt", skill: { coding: "Javascript" } };
      let person2 = { ...person1 };
      console.log(person1.skill === person2.skill); 
      // person1.name = "ádadasdsa"
      // console.log(person1.name); 
      // console.log(person2.name); 
      // console.log(person1=== person2); 
      // person2.skill.coding =  "HTML";
      // console.log(person1.skill); 
      // console.log(person2.skill); 
      // console.log(person1.skill === person2.skill); 
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
      font-size: 22px;
      color: red;
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
</style>