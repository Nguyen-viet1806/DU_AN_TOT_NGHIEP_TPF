<template>
  <section>
    <base-slide-product v-bind:isShowSlideProductHot="isShowSlideProductHot" />
    <shop-flow-gender />
    <base-slide-product v-bind:isShowSlideProductNew="isShowSlideProductNew" />
    <base-category-bottom />
    <base-news-bottom/>
  </section>
</template>

<script>
import BaseSlideProduct from "@/components/common/BaseSlideProduct.vue";
import ShopFlowGender from "@/components/component/ShopFlowGender.vue";
import BaseCategoryBottom from "@/components/common/BaseCategoryBottom.vue";
import BaseNewsBottom from "@/components/common/BaseNewsBottom.vue";

export default {
  name: "Home",
  components: {
  
    BaseSlideProduct,
    ShopFlowGender,
    BaseCategoryBottom,
    BaseNewsBottom,
    
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