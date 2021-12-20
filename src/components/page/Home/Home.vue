<template>
  <section>
    <loading v-if="isLoading" />
    <base-slide-product v-bind:isShowSlideProductHot="isShowSlideProductHot" />
    <shop-flow-gender />
    <base-slide-product v-bind:isShowSlideProductNew="isShowSlideProductNew" />
    <base-category-bottom />
  </section>
</template>

<script>
import BaseSlideProduct from "@/components/common/BaseSlideProduct.vue";
import ShopFlowGender from "@/components/component/componentsHome/ShopFlowGender.vue";
import BaseCategoryBottom from "@/components/common/BaseCategoryBottom.vue";
import Loading from "@/components/common/Loading.vue";
export default {
  name: "Home",
  components: {
    BaseSlideProduct,
    ShopFlowGender,
    BaseCategoryBottom,
    Loading
  },

  props: {},
  data() {
    return {
      isLoading: false,
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
      this.getListProductNew();
      this.getListProductHot();
      document.documentElement.scrollTop = 900;
      document.body.scrollTop = 0;
    },
    getListProductHot() {
      this.isLoading = true
      this.$store.dispatch("productModule/getListProductHot", { limit: 9 ,userId: JSON.parse(localStorage.getItem("UserInfo")) && JSON.parse(localStorage.getItem("UserInfo")).idUser ? JSON.parse(localStorage.getItem("UserInfo")).idUser :  -1}).then(res =>{
        if(res){
          this.isLoading = false;
        }
      });
    },
    getListProductNew() {
      this.$store.dispatch("productModule/getListProductNew", { limit: 3 ,userId: JSON.parse(localStorage.getItem("UserInfo")) && JSON.parse(localStorage.getItem("UserInfo")).idUser ? JSON.parse(localStorage.getItem("UserInfo")).idUser :  -1});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>