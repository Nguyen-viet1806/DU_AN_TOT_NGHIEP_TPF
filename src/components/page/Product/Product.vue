<template>
  <div>
    <div class="vgrid news">
      <h1 v-if="isLike" id="first-news">
        Product Like!!!
        <hr />
      </h1>
      <h1 v-else-if="isSale" id="first-news">
        Product Sale!!!
        <hr />
      </h1>
      <h1 v-else id="first-news">
        Product All!!!
        <hr />
      </h1>
      <div class="vrow">
        <div v-if="!isLike && !isSale" class="vcol vl-3 vm-12 vc-12 filter">
          <filter-product
            @search="search"
            @getProductParentFilter="getProductParentFilter"
          />
        </div>
         <div v-if="isLike" class="vcol vl-o-2 vl-8 vm-12 vc-12">
          <product-all
            ref="productAll"
            @getProductParent="getProductParent"
            :ListProductsParent="ListProductsParentLike"
          />
        </div>
        <div v-else-if="isSale" class="vcol vl-o-2 vl-8 vm-12 vc-12">
          <product-all
            ref="productAll"
            @getProductParent="getProductParent"
            :ListProductsParent="ListProductsSale"
          />
        </div>
        <div v-else class="vcol vl-9 vm-12 vc-12">
          <product-all
            ref="productAll"
            @getProductParent="getProductParent"
            :ListProductsParent="ListProductsParent"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductAll from "@/components/component/componentsProduct/ProductAll.vue";
import FilterProduct from "@/components/component/componentsProduct/FilterProduct.vue";
import { mapGetters } from "vuex";
export default {
  name: "Product",
  components: { ProductAll, FilterProduct },
  props: {},
  data() {},
  computed: {
    ...mapGetters({
      ListProductsParent: "productModule/getListProductsParent",
      ListProductsParentLike: "productModule/getListProductsParentLike",
      ListProductsSale: "productModule/getListProductsSale",
    }),
    isLike() {
      return this.$route.query.isLike;
    },
    isSale() {
      return this.$route.query.isSale;
    },
  },
  watch: {
    isLike() {
      this.getProductParent();
    },
    isSale() {
      this.getProductParent();
    },
  },
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
      if (this.$route.query.isLike) {
        let payload = {
          idUser:
            JSON.parse(localStorage.getItem("UserInfo")) &&
            JSON.parse(localStorage.getItem("UserInfo")).idUser
              ? JSON.parse(localStorage.getItem("UserInfo")).idUser
              : -1,
          page: this.$refs["productAll"].pageable,
          limit: 9,
        };
        this.$store
          .dispatch("productModule/getListProductLike", payload)
          .then((res) => {
            if (res) {
              this.$refs["productAll"].isLoading = false;
            }
          });
      } else if (this.$route.query.isSale) {
        let payload = {
          userId:
            JSON.parse(localStorage.getItem("UserInfo")) &&
            JSON.parse(localStorage.getItem("UserInfo")).idUser
              ? JSON.parse(localStorage.getItem("UserInfo")).idUser
              : -1,
          page: this.$refs["productAll"].pageable,
          limit: 9,
        };
        this.$store
          .dispatch("productModule/getListProductSale", payload)
          .then((res) => {
            if (res) {
              this.$refs["productAll"].isLoading = false;
            }
          });
      } else {
        console.log(1231231231231231231238888);
        let payload = {
          userId:
            JSON.parse(localStorage.getItem("UserInfo")) &&
            JSON.parse(localStorage.getItem("UserInfo")).idUser
              ? JSON.parse(localStorage.getItem("UserInfo")).idUser
              : -1,
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
      }
    },

    search(name) {
      this.$refs["productAll"].isLoading = true;
      let payload = {
        userId:
          JSON.parse(localStorage.getItem("UserInfo")) &&
          JSON.parse(localStorage.getItem("UserInfo")).idUser
            ? JSON.parse(localStorage.getItem("UserInfo")).idUser
            : -1,
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
        userId:
          JSON.parse(localStorage.getItem("UserInfo")) &&
          JSON.parse(localStorage.getItem("UserInfo")).idUser
            ? JSON.parse(localStorage.getItem("UserInfo")).idUser
            : -1,
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