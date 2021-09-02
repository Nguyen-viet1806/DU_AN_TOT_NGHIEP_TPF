<template>
  <div>
    <div class="vgrid news">
      <h1 id="first-news">
        Don't miss the latest product news!
        <hr />
      </h1>
      <div class="vrow">
        <div class="vcol vl-3 vm-12 vc-12">
          <base-latest-news />
        </div>
        <div class="vcol vl-9 vm-12 vc-12">
          <a href="#first-news">
            <main-news v-if="isShowMainNews" v-on:click="onClickMainNews" />
          </a>
          <detailed-news
            v-if="isShowDetailedNews"
            v-on:onClickBack="onClickBack"
          />
        </div>
      </div>
    </div>
    <base-category-bottom />
  </div>
</template>

<script>
import BaseLatestNews from "@/components/common/BaseLatestNews.vue";
import MainNews from "@/components/component/MainNews.vue";
import DetailedNews from "@/components/component/DetailedNews.vue";
import BaseCategoryBottom from "@/components/common/BaseCategoryBottom.vue";
export default {
  name: "News",
  components: {
    BaseLatestNews,
    MainNews,
    DetailedNews,
    BaseCategoryBottom,
  },
  props: {},
  data() {
    return {
      isShowMainNews: true,
      isShowDetailedNews: false,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    onClickMainNews() {
      this.isShowMainNews = false;
      this.isShowDetailedNews = true;
    },
    onClickBack() {
      this.isShowMainNews = true;
      this.isShowDetailedNews = false;
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
  & a{
    color: initial;
    text-decoration: none;
  }
}
</style>