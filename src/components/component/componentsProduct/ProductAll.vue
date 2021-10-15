<template>
  <div class="vgrid product-all">
    <div class="vrow product-all-body">
      <div class="vcol vl-4 vm-4 vc-12">
        <base-product-unit v-bind:isShowProduct="isShowProduct" />
      </div>
      <div class="vcol vl-4 vm-4 vc-12">
        <base-product-unit v-bind:isShowProduct="isShowProduct" />
      </div>
      <div class="vcol vl-4 vm-4 vc-12">
        <base-product-unit v-bind:isShowProduct="isShowProduct" />
      </div>
      <div class="vcol vl-4 vm-4 vc-12">
        <base-product-unit v-bind:isShowProduct="isShowProduct" />
      </div>
      <div class="vcol vl-4 vm-4 vc-12">
        <base-product-unit v-bind:isShowProduct="isShowProduct" />
      </div>
      <div class="vcol vl-4 vm-4 vc-12">
        <base-product-unit v-bind:isShowProduct="isShowProduct" />
      </div>
      <div class="vcol vl-4 vm-4 vc-12">
        <base-product-unit v-bind:isShowProduct="isShowProduct" />
      </div>
      <div class="vcol vl-4 vm-4 vc-12">
        <base-product-unit v-bind:isShowProduct="isShowProduct" />
      </div>
      <div class="vcol vl-4 vm-4 vc-12">
        <base-product-unit v-bind:isShowProduct="isShowProduct" />
      </div>
      <div class="vcol vl-4 vm-4 vc-12">
        <base-product-unit v-bind:isShowProduct="isShowProduct" />
      </div>
      <div class="vcol vl-4 vm-4 vc-12">
        <base-product-unit v-bind:isShowProduct="isShowProduct" />
      </div>
      <div class="vcol vl-4 vm-4 vc-12">
        <base-product-unit v-bind:isShowProduct="isShowProduct" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseProductUnit from "@/components/common/BaseProductUnit.vue";
export default {
  name: "ProductAll",
  components: { BaseProductUnit },
  props: {},
  data() {
    return {
      isShowProduct: true,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>