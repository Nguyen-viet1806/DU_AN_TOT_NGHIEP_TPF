<template>
  <div class="vgrid category-bottom">
    <div class="category-bottom-title">
      <base-icon />
    </div>

    <div class="vrow">
      <div class="vcol vl-3 vm-6 vc-12">
        <h5 class="title-category">Featured</h5>
        <base-product-unit
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
        />
        <base-product-unit
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
        />
        <base-product-unit
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
        />
      </div>
      <div class="vcol vl-3 vm-6 vc-12">
        <h5 class="title-category">Featured</h5>
        <base-product-unit
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
        />
        <base-product-unit
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
        />
        <base-product-unit
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
        />
      </div>
      <div class="vcol vl-3 vm-6 vc-12">
        <h5 class="title-category">Featured</h5>
        <base-product-unit
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
        />
        <base-product-unit
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
        />
        <base-product-unit
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
        />
      </div>
      <div class="vcol vl-3 vm-6 vc-12">
        <h5 class="title-category">Featured</h5>
        <base-product-unit
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
        />
        <base-product-unit
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
        />
        <base-product-unit
          v-bind:isShowProductSmallFlowCategory="isShowProductSmallFlowCategory"
        />
        <div class="category-bottom-title">
      <base-icon />
    </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  computed: {},
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