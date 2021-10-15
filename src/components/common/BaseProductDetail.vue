<template>
  <div class="vgrid product-detail">
    <h3 class="product-detail-title">Product Detail</h3>
    <div class="row">
      <div class="vcol vl-6 vm-6 vc-12">
        <div class="product-detail-img">
          <p class="product-detail-img-big">
            <img
              src="../../assets/img/tobekind-varsity-jacket-pink-331299_1080x.jpg"
              alt="#"
            />
          </p>
          <p class="product-detail-img-small">
            <img
              src="../../assets/img/tobekind-varsity-jacket-pink-331299_1080x.jpg"
              alt=""
            />
            <img
              src="../../assets/img/tobekind-varsity-jacket-pink-331299_1080x.jpg"
              alt=""
            />
            <img
              src="../../assets/img/tobekind-varsity-jacket-pink-331299_1080x.jpg"
              alt=""
            />
          </p>
        </div>
      </div>
      <div class="vcol vl-6 vm-6 vc-12">
        <div class="product-detail-info">
          <h4 class="title">Suede Hoodie - Dark Taupe</h4>
          <p class="like">
            <fa class="person-favorite" :icon="['fas', 'heart']" /> Đã có 100
            người thích
          </p>
          <p class="price">Giá:1110</p>
          <p class="color">
            Màu:
            <button class="btn-color">Xanh</button>
            <button class="btn-color">Xanh</button>
            <button class="btn-color">Xanh</button>
          </p>
          <p>
            Size: <button>Xanh</button> <button>Xanh</button>
            <button>Xanh</button>
          </p>
          <p>
            Số lượng: <button>-</button> <button>1</button> <button>+</button>
          </p>
          <p>Mô tả : ádhiaudfhaifaiaufhasifgaiu</p>
          <hr />
          <p><button>Thêm vào giỏ hàng</button></p>
          <p><button>Mua luôn</button></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseProductDetail",
  components: {},
  props: {},
  data() {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
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
    &-big {
      display: flex;
      justify-content: center;
      align-items: center;
      & img {
        width: 69%;
      }
    }
    &-small {
      border-bottom: 1px solid #0cb4ce;
      display: flex;
      justify-content: center;
      align-items: center;
      & img {
        cursor: pointer;
        width: 23%;
        padding: 1%;
      }
    }
  }
  &-info {
    padding: 5%;
  }
}
</style>