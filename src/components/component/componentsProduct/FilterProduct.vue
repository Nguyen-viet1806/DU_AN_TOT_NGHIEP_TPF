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
    <p>
      <button class="filter-product-btn" @click="getProductParentFilter(1)">
        Giá thấp nhất
      </button>
    </p>
    <p>
      <button class="filter-product-btn" @click="getProductParentFilter(0)">
        Giá cao nhất
      </button>
    </p>
    <ul class="filter-product-unit">
      <li class="filter-product-unit-menu">
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="idCategoryParent"
        >
          <option value="-1">Danh mục</option>
          <option
            v-for="category in listCategoryParentExists"
            :key="category"
            :value="category.idCategory"
          >
            {{ category.nameCategory }}
          </option>
        </select>
      </li>
      <li class="filter-product-unit-menu">
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="idCategoryChild"
          :disabled="isDisabledCategoryChild"
        >
          <option value="-1">Thể loại</option>
          <option
            v-for="category in danhSachCategoryChild"
            :key="category"
            :value="category.idCategory"
          >
            {{ category.nameCategory }}
          </option>
        </select>
      </li>
      <li class="filter-product-unit-menu">
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="idGender"
        >
          <option value="-1">Giới tính</option>
          <option value="1">Nam</option>
          <option value="2">Nữ</option>
          <option value="3">Unisex</option>
        </select>
      </li>
    </ul>
    <p>
      <button
        class="filter-product-btn-filter"
        @click="getProductParentFilter(-1)"
      >
        Filter Product
      </button>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FilterProduct",
  components: {},
  props: {},
  data() {
    return {
      textSearch: "",
      idCategoryParent: -1,
      idCategoryChild: -1,
      idGender: -1,
      isDisabledCategoryChild: true,
      danhSachCategoryChild: [],
    };
  },
  computed: {
    ...mapGetters({
      listCategoryParentExists: "categoryModule/getListCategoryParentExists",
    }),
    isMale() {
      return this.$route.query.isMale;
    },
    isFemale() {
      return this.$route.query.isFemale;
    },
  },
  watch: {
    isMale() {
      if (this.isMale) {
        this.idGender = 1;
      }
    },
    isFemale() {
      if (this.isFemale) {
        this.idGender = 2;
      }
    },
    idCategoryParent() {
      if (this.idCategoryParent > 0) {
        this.isDisabledCategoryChild = false;
        this.$store
          .dispatch(
            "categoryModule/getDanhSachCategoryChildExistsByParent",
            Number(this.idCategoryParent)
          )
          .then((res) => {
            if (res) {
              this.danhSachCategoryChild = res.data.data;
            }
          });
      } else if (this.idCategoryParent < 0) {
        this.isDisabledCategoryChild = true;
        this.danhSachCategoryChild = [];
        this.idCategoryChild = -1;
      }
    },
  },
  mounted() {},
  methods: {
    search() {
      this.$emit("search", this.textSearch);
    },
    // sort=&idCategoryParent=&idCategoryChild=&idGender=&minPrice=&maxPrice=&page
    getProductParentFilter(sort) {
      let payload = {
        sort: sort,
        idCategoryParent: this.idCategoryParent,
        idCategoryChild: this.idCategoryChild,
        idGender: this.idGender,
        minPrice: 0,
        maxPrice: 1000000000,
      };
      this.$emit("getProductParentFilter", payload);
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