<template>
  <div class="vgrid category-bottom">
    <div class="category-bottom-title">
      <base-icon />
    </div>

    <div class="vrow">
      <div class="vcol vl-3 vm-6 vc-12">
        <h5 class="title-category">Product hot</h5>
        <base-product-unit
          v-for="product in listProductsFT.productHot"
          :key="product"
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
          :productFT="product"
        />
      </div>
      <div class="vcol vl-3 vm-6 vc-12">
        <h5 class="title-category">Product new</h5>
        <base-product-unit
          v-for="product in listProductsFT.productNew"
          :key="product"
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
          :productFT="product"
        />
      </div>
      <div class="vcol vl-3 vm-6 vc-12">
        <h5 class="title-category">Product new</h5>
        <base-product-unit
          v-for="product in listProductsFT.productNewNew"
          :key="product"
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
          :productFT="product"
        />
      </div>
      <div class="vcol vl-3 vm-6 vc-12">
        <h5 class="title-category">Product top</h5>
        <base-product-unit
          v-for="product in listProductsFT.productTop"
          :key="product"
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
          :productFT="product"
        />
        <div class="category-bottom-title">
          <base-icon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseIcon from "@/components/common/BaseIcon.vue";
import BaseProductUnit from "@/components/common/BaseProductUnit.vue";
export default {
  name: "BaseCategoryBottom",
  components: { BaseProductUnit, BaseIcon },
  props: {},
  data() {
    return {
      isShowProductSmallFlowCategory: true,
    };
  },
  computed: {
    ...mapGetters({
      listProductsFT: "productModule/getListProductsFt",
    }),
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.category-bottom {
  padding: 0 2% 50px 5%;
  &-title {
    margin-bottom: 28px;
  }

  & .title-category {
    font-weight: bold;
    margin-bottom: 10px;
  }
}

.vcol {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>