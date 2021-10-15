<template>
  <div>
    <div class="vgrid news">
      <h1 id="first-news">
        Product ALL!!!
        <hr />
      </h1>
      <div class="vrow">
        <div class="vcol vl-3 vm-12 vc-12 filter"><filter-product /></div>
        <div class="vcol vl-9 vm-12 vc-12"><product-all /></div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductAll from "@/components/component/componentsProduct/ProductAll.vue";
import FilterProduct from "@/components/component/componentsProduct/FilterProduct.vue";
export default {
  name: "Product",
  components: { ProductAll, FilterProduct },
  props: {},
  data() {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.news {
  padding: 2%;
  & h1 {
    color: #0cb4ce;
    margin: 80px 0 80px 0;
    text-align: center;
    text-transform: uppercase;
  }
}
.filter {
  position: sticky;
  top: 100px;
  height: calc(100vh - 100px);
  overflow-y: auto;
  padding-right: 20px;
  &::-webkit-scrollbar {
    width: 0 !important;
    display: none;
  }
}
@media (max-width: 1113px) {
  .filter {
    position: relative;
    height: auto;
    overflow-y: none;
    top: 0;
  }
}
</style>