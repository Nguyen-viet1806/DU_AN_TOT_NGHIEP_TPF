<template>
  <div class="vgrid shop-flow-gender">
    <div class="vrow">
      <div class="vcol vl-6 vm-6 vc-12">
        <div class="shop">
          <h3 class="shop-info-title">ĐỒ NAM</h3>
          <p class="shop-info-small">Vẻ đẹp của bạn để chúng tôi lo</p>
          <p>
            <button @click="goProductMale" class="shop-btn-paynow">
              Mua ngay
            </button>
          </p>
        </div>
      </div>
      <div class="vcol vl-6 vm-6 vc-12">
        <div class="shop">
          <h3 class="shop-info-title">ĐỒ NỮ</h3>
          <p class="shop-info-small">Vẻ đẹp của bạn để chúng tôi lo</p>
          <p>
            <button @click="goProductFemale" class="shop-btn-paynow">
              Mua ngay
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopFlowGender",
  components: {},
  props: {},
  data() {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    goProductMale() {
      this.$router.push({ path: "/product", query: { isMale: true }  });
    },
    goProductFemale() {
      this.$router.push({ path: "/product", query: { isFemale: true }  });
    },
  },
};
</script>

<style lang="scss" scoped>
.shop-flow-gender {
  padding: 20px;
  & .shop {
    padding-top: 600px;
    width: 100%;
    height: 1100px;
    background-image: url("../../../assets/img/xxx_42.jpg");
    background-position: center center;
    background-size: cover;
    text-align: center;
    &-info-title {
      font-size: 60px;
      font-weight: 600;
      letter-spacing: 2px;
      animation: textBanner ease-in 1s;
      color: white;
    }
    &-info-small {
      font-size: 20px;
      font-weight: 500;
      animation: textBanner ease-in 1s;
      color: white;
    }
    &-btn-paynow {
      cursor: pointer;
      width: 165px;
      height: 60px;
      border-radius: 100px;
      border-color: white;
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 2px;
      &:hover {
        background: transparent;
        border: 1px solid white;
        color: white;
      }
    }
  }
}
</style>