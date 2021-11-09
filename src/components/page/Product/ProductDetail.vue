<template>
  <div>
    <base-product-detail ref="BaseProductDetail" />
    <product-with-category-click />
  </div>
</template>

<script>
import BaseProductDetail from "@/components/common/BaseProductDetail.vue";
import ProductWithCategoryClick from "@/components/component/componentsProduct/ProductWithCategoryClick.vue";

export default {
  name: "ProductDetail",
  components: { BaseProductDetail, ProductWithCategoryClick },
  props: {},
  data() {},
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.setscoll();
    },
    setscoll() {
      document.documentElement.scrollTop = 900;
      document.body.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>