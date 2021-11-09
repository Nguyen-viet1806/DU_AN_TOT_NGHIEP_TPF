<template>
  <div class="vgrid wide product-category mb-5">
    <div v-if="ListProductsParent && ListProductsParent.lenght > 0">
      <hr />
      <h3 class="title">Sản phẩm cùng danh mục</h3>
      <div class="vrow product-category-body">
        <div
          v-for="product in ListProductsParent"
          :key="product"
          class="vcol vl-4 vm-4 vc-12"
        >
          <base-product-unit
            :product="product"
            v-bind:isShowProduct="isShowProduct"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseProductUnit from "@/components/common/BaseProductUnit.vue";
export default {
  name: "ProductWithCategoryClick",
  components: { BaseProductUnit },
  props: {},
  data() {
    return {
      isShowProduct: true,
    };
  },
  computed: {
    ...mapGetters({
      ListProductsParent: "productModule/getListProductsParent",
    }),
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  color: #0cb4ce;
}
</style>