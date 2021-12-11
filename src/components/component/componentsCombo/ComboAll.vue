<template>
  <div class="vgrid product-all">
    <loading v-if="isLoading"/>
    <div class="vrow product-all-body">
        <div
        v-for="combo in listCombo"
        :key="combo"
        class="vcol vl-4 vm-4 vc-12"
      >
        <base-product-unit :combo="combo" :isShowCombo="true"/>
      </div>
    </div>
    <div class="panigation-tpf mt-4">
      <nav class="Page" aria-label="Page navigation example ">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              v-on:click.prevent="pagePre"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" v-on:click.prevent="">{{
              pageable + 1
            }}</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Next"
              v-on:click.prevent="pageNext"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/common/Loading.vue";
import BaseProductUnit from "@/components/common/BaseProductUnit.vue";
import { mapGetters } from "vuex";
export default {
  name: "ComboAll",
  components: { BaseProductUnit, Loading },
  props: {},
  data() {
    return {
      pageable: 0,
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      listCombo: "comboModule/getListCombo",
    }),
  },
  watch: {
    pageable(){
      this.$emit('getCombo')
    }
  },
  mounted() {},
  methods: {
    pageNext() {
      this.pageable++;
    },

    pagePre() {
      if (this.pageable > 0) {
        this.pageable--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.panigation-tpf {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>