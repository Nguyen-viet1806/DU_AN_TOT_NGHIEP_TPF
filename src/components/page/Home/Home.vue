<template>
  <section>
    <navbar />
    <banner />
    <base-slide-product v-bind:isShowSlideProductHot="isShowSlideProductHot" />
    <shop-flow-gender />
    <base-slide-product v-bind:isShowSlideProductNew="isShowSlideProductNew" />
    <base-category-bottom />
    
    <Footer />
    
  </section>
</template>

<script>
import Navbar from "@/components/component/Navbar.vue";
import Banner from "@/components/component/Banner.vue";
import BaseSlideProduct from "@/components/common/BaseSlideProduct.vue";
import ShopFlowGender from "@/components/component/ShopFlowGender.vue";
import BaseCategoryBottom from "@/components/common/BaseCategoryBottom.vue";
import Footer from "@/components/component/Footer.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Banner,
    BaseSlideProduct,
    ShopFlowGender,
    BaseCategoryBottom,
    Footer,
  },

  props: {},
  data() {
    return {
      isShowSlideProductHot: true,
      isShowSlideProductNew: true,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
  },
};
</script>

<style lang="scss" scoped>
</style>