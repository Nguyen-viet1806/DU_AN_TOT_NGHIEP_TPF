<template>
  <section>
    <base-slide-product v-bind:isShowSlideProductHot="isShowSlideProductHot" />
    <shop-flow-gender />
    <base-slide-product v-bind:isShowSlideProductNew="isShowSlideProductNew" />
    <base-category-bottom />
    <base-news-bottom />
    <!-- <embed src="https://webcoban.vn/html/the-embed-trong-html.html"  width="500px" height="400px"/> -->
  </section>
</template>

<script>
import BaseSlideProduct from "@/components/common/BaseSlideProduct.vue";
import ShopFlowGender from "@/components/component/componentsHome/ShopFlowGender.vue";
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
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getListProductHot();
      this.getListProductNew();
    },
    getListProductHot() {
      this.$store.dispatch("productModule/getListProductHot", { limit: 9 });
    },
    getListProductNew() {
      this.$store.dispatch("productModule/getListProductNew", { limit: 3 });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>