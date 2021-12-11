<template>
  <div>
    <div class="vgrid news">
      <h1 id="first-news">
        Combo!!!
        <hr />
      </h1>
      <div class="vrow">
        <div class="vcol vl-3 vm-12 vc-12 filter">
          <filter-combo @search="search" />
        </div>
        <div class="vcol vl-9 vm-12 vc-12">
          <combo-all ref="comboAll" @getCombo="getCombo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComboAll from "@/components/component/componentsCombo/ComboAll.vue";
import FilterCombo from "@/components/component/componentsCombo/FilterCombo.vue";
export default {
  name: "Combo",
  components: { ComboAll, FilterCombo },
  props: {},
  data() {},
  computed: {},
  watch: {},
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getCombo();
    },

    getCombo() {
      this.$refs["comboAll"].isLoading = true;
      let payload = {
        page: this.$refs["comboAll"].pageable,
        limit: 9,
      };
      this.$store.dispatch("comboModule/getAllCombo", payload).then((res) => {
        if (res) {
          this.$refs["comboAll"].isLoading = false;
        }
      });
    },

    search(name) {
      this.$refs["comboAll"].isLoading = true;
      let payload = {
        page: this.$refs["comboAll"].pageable,
        name: name,
      };
      this.$store.dispatch("comboModule/search", payload).then((res) => {
        if (res) {
          this.$refs["comboAll"].isLoading = false;
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