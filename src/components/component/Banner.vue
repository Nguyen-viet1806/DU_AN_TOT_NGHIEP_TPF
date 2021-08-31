<template>
  <div class="banner">
    <h1 class="banner-info-title">Hãy đến với chúng tôi</h1>
    <p class="banner-info-small">Vẻ đẹp của bạn để chúng tôi lo</p>
    <p><button class="banner-btn-paynow">Mua ngay</button></p>
  </div>
</template>

<script>
export default {
  name: "Banner",
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
.banner {
  // height: 980px;
  padding: 400px 0 300px 0;
  background-image: url("../../assets/img/banner.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
  color: white;
  & p {
    padding: 20px 0 20px 0;
  }
  &-info-title {
    font-size: 80px;
    font-weight: 600;
    letter-spacing: 1px;
    animation: textBanner ease-in 1s ;
  }
  &-info-small {
    font-size: 20px;
    font-weight: 500;
    animation: textBanner ease-in 1s ;
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
@media (max-width: 1400px) {
  .banner {
    padding: 300px 0 150px 0;
    height: 696px;
    &-info-title {
      font-size: 50px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
}

@media (max-width: 1135px) {
  .banner {
    background-image: url("../../assets/img/banner-mobile.jpg");
    background-position-x: center;
  }
}
@media (max-width: 768px) {
  .banner {
    &-info-title {
      font-size: 30px;
      font-weight: 500;
    }
    &-info-small {
      font-size: 15px;
      font-weight: 500;
    }
    &-btn-paynow {
      width: 145px;
      height: 40px;
      border-radius: 80px;
    }
  }
}

@keyframes textBanner {
  0%{
    opacity: 0;
    transform: translate(0,-100px);
  }

  80%{
    transform: translate(0,-20px);
  }

  100%{
    opacity: 1;
    transform: translate(0,0);
  }
}
</style>