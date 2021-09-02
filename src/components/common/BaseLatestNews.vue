<template>
  <div class="vgrid latest-news">
    <h2>Latest News</h2>
    <hr />
    <div class="vrow">
      <div class="vcol vl-12 vm-12 vc-12">
        <base-news-unit />
      </div>
      <div class="vcol vl-12 vm-12 vc-12">
        <base-news-unit />
      </div>
      <div class="vcol vl-12 vm-12 vc-12">
        <base-news-unit />
      </div>
      <div class="vcol vl-12 vm-12 vc-12">
        <base-news-unit />
      </div>
      <div class="vcol vl-12 vm-12 vc-12">
        <base-news-unit />
      </div>
      <div class="vcol vl-12 vm-12 vc-12">
        <base-news-unit />
      </div>
    </div>
  </div>
</template>

<script>
import BaseNewsUnit from "@/components/common/BaseNewsUnit.vue";
export default {
  name: "BaseLatestNews",
  components: { BaseNewsUnit },
  props: {},
  data() {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.latest-news {
  border: 1px solid #e3e5ec;
  padding: 10px 3% 10px 3%;
  & h2 {
    text-align: center;
  }
  & hr {
    height: 2px;
    width: 100%;
    border: 1px solid black;
    opacity: 1;
  }
}


@media (max-width:1113px){
.latest-news {
     padding: 10px 10% 10px 10%;
}
}
</style>