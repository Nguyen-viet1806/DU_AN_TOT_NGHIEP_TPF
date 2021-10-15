<template>
  <div>
    <div v-if="isShowSlideProductHot" class="wrapper">
      <span>P</span>
      <span>R</span>
      <span>O</span>
      <span>D</span>
      <span>U</span>
      <span>C</span>
      <span>T</span>
      <span>^</span>
      <span>H</span>
      <span>O</span>
      <span>T</span>
    </div>
    <div
      v-if="isShowSlideProductHot"
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          aria-current="true"
          class="active"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="vgrid product-slide">
            <div class="vrow product-slide-body">
              <div class="vcol vl-4 vm-4 vc-12">
                <base-product-unit v-bind:isShowProduct="isShowProduct"/>
              </div>
              <div class="vcol vl-4 vm-4 vc-12">
                <base-product-unit v-bind:isShowProduct="isShowProduct"/>
              </div>
              <div class="vcol vl-4 vm-4 vc-12">
                <base-product-unit v-bind:isShowProduct="isShowProduct"/>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="vgrid product-slide">
            <div class="vrow product-slide-body">
              <div class="vcol vl-4 vm-4 vc-12">
                <base-product-unit v-bind:isShowProduct="isShowProduct"/>
              </div>
              <div class="vcol vl-4 vm-4 vc-12">
                <base-product-unit v-bind:isShowProduct="isShowProduct"/>
              </div>
              <div class="vcol vl-4 vm-4 vc-12">
                <base-product-unit v-bind:isShowProduct="isShowProduct"/>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="vgrid product-slide">
            <div class="vrow product-slide-body">
              <div class="vcol vl-4 vm-4 vc-12">
                <base-product-unit v-bind:isShowProduct="isShowProduct"/>
              </div>
              <div class="vcol vl-4 vm-4 vc-12">
                <base-product-unit v-bind:isShowProduct="isShowProduct"/>
              </div>
              <div class="vcol vl-4 vm-4 vc-12">
                <base-product-unit v-bind:isShowProduct="isShowProduct"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isShowSlideProductNew" class="wrapper">
      <span>P</span>
      <span>R</span>
      <span>O</span>
      <span>D</span>
      <span>U</span>
      <span>C</span>
      <span>T</span>
      <span>^</span>
      <span>N</span>
      <span>E</span>
      <span>W</span>
    </div>
    <div v-if="isShowSlideProductNew" class="slide">
      <div class="vgrid product-slide">
        <div class="vrow product-slide-body">
          <div class="vcol vl-4 vm-4 vc-12">
            <base-product-unit v-bind:isShowProduct="isShowProduct"/>
          </div>
          <div class="vcol vl-4 vm-4 vc-12">
            <base-product-unit v-bind:isShowProduct="isShowProduct"/>
          </div>
          <div class="vcol vl-4 vm-4 vc-12">
            <base-product-unit v-bind:isShowProduct="isShowProduct"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseProductUnit from "@/components/common/BaseProductUnit.vue";
export default {
  name: "BaseSlideProduct",
  components: { BaseProductUnit },
  props: {
    isShowSlideProductHot: {
      type: Boolean,
      default: false,
    },
    isShowSlideProductNew: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return{
      isShowProduct: true,
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Titan+One&display=swap");

.wrapper {
  text-align: center;
  span {
    -webkit-text-stroke-width: 1.25px;
    -webkit-text-stroke-color: #000;
    font-size: 50px;
    text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
    transform: translate(0, 80%) rotate(4deg);
    animation: textProductHot 2s ease-in-out infinite;
    display: inline-block;
    font-family: "Titan One", cursive;
    color: #fff;

    @for $i from 1 through 7 {
      &:nth-child(#{$i}) {
        animation-delay: 100ms * $i;
      }
    }
  }
}

@media screen and (max-height: 200px) {
  .wrapper {
    transform: scale(0.3, 0.3);
  }
}
@media screen and (max-width: 576px) {
  .wrapper {
    span {
      font-size: 30px;
    }
  }
}
.slide {
  margin-top: 80px;

}
.product-slide {
  padding: 5% !important;
  &-body {
  }
}

.vcol {
  background-clip: content-box;
  margin-top: 8px;
  margin-bottom: 8px;
}
.carousel-indicators {
  & button {
    height: 10px !important;
    width: 10px !important;
    border-radius: 50%;
    background-color: gray !important;
  }
}

@keyframes textProductHot {
  33% {
    text-shadow: 0 30px #f37121, 0 120px #f2aaaa;
  }
  50% {
    transform: translate(0, 10%) rotate(-4deg);
    text-shadow: 0 10px #8fc0a9, 0 100px #84a9ac;
  }
  66% {
    text-shadow: 0 10px #d54062, 0 80px #8fc0a9;
  }
}
</style>