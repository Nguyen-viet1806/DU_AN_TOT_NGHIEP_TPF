<template>
  <div>
    <div class="vgrid news">
      <h1 id="first-news">
        Product ALL!!!
        <hr />
      </h1>
      <div class="vrow">
        <div class="vcol vl-3 vm-12 vc-12 filter">
          <filter-product
            @search="search"
            @getProductParentFilter="getProductParentFilter"
          />
        </div>
        <div class="vcol vl-9 vm-12 vc-12">
          <product-all ref="productAll" @getProductParent="getProductParent" />
        </div>
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
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getProductParent();
      this.getCategoryExists();
    },

    getCategoryExists() {
      this.$store.dispatch("categoryModule/getDanhSachCategoryParentExists");
    },

    getProductParent() {
      this.$refs["productAll"].isLoading = true;
      let payload = {
        userId: JSON.parse(localStorage.getItem("UserInfo")) && JSON.parse(localStorage.getItem("UserInfo")).idUser ? JSON.parse(localStorage.getItem("UserInfo")).idUser :  -1,
        page: this.$refs["productAll"].pageable,
        limit: 9,
      };
      this.$store
        .dispatch("productModule/getListProductParent", payload)
        .then((res) => {
          if (res) {
            this.$refs["productAll"].isLoading = false;
          }
        });
    },

    search(name) {
      this.$refs["productAll"].isLoading = true;
      let payload = {
        userId: JSON.parse(localStorage.getItem("UserInfo")) && JSON.parse(localStorage.getItem("UserInfo")).idUser ? JSON.parse(localStorage.getItem("UserInfo")).idUser :  -1,
        page: this.$refs["productAll"].pageable,
        name: name,
        limit: 9,
      };
      this.$store.dispatch("productModule/search", payload).then((res) => {
        if (res) {
          this.$refs["productAll"].isLoading = false;
        }
      });
    },

    getProductParentFilter(param) {
      this.$refs["productAll"].isLoading = true;
      let payload = {
        userId: JSON.parse(localStorage.getItem("UserInfo")) && JSON.parse(localStorage.getItem("UserInfo")).idUser ? JSON.parse(localStorage.getItem("UserInfo")).idUser :  -1,
        ...param,
        page: this.$refs["productAll"].pageable,
        limit: 9,
      };
      this.$store
        .dispatch("productModule/getListProductSort", payload)
        .then((res) => {
          if (res) {
            this.$refs["productAll"].isLoading = false;
          }
        });
    },
  },
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