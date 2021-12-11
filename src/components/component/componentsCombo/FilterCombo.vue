<template>
  <div class="filter-product">
    <p>
      <input
        class="filter-product-search"
        type="text"
        placeholder="search"
        v-model="textSearch"
      /><button class="filter-product-btn-filter" @click="search">
        Search
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "FilterCombo",
  components: {},
  props: {},
  data() {
    return {
      textSearch: "",
    };
  },
  computed: {

  },
  watch: {
  },
  mounted() {},
  methods: {
    search() {
      this.$emit("search", this.textSearch);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-product {
  padding-top: 10px;
  width: 100%;
  &-search {
    width: 80%;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 2%;
    border: 1px solid #0cb4ce;
    color: #0cb4ce;
    &::placeholder {
      color: #0cb4ce;
    }
  }
  &-btn {
    background: transparent;
    border-color: #dddddd;
    border-radius: 6px;
    border-style: solid;
    border-width: 1px;
    display: inline-block;
    font-size: 13.3333px;
    letter-spacing: 1px;
    margin: 5px 0px;
    padding: 5px 10px;
    text-align: center;
    text-transform: uppercase;
  }
  &-btn-filter {
    margin-left: 2px;
    background: #0cb4ce;
    font-size: 16px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    padding: 2%;
    &:hover {
      color: #0cb4ce;
      background: transparent;
      border: 1px solid #0cb4ce;
    }
  }
  &-unit {
    padding-left: 0;
    &-menu {
      line-height: 2;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      padding: 2% 0 2% 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      font-size: 16px;
      & .form-select {
        border: none !important;
        box-shadow: none;
        border-radius: 2px !important;
      }
    }
    &-dropdow {
      &-menu {
        list-style: none;
      }
    }
  }
}
</style>