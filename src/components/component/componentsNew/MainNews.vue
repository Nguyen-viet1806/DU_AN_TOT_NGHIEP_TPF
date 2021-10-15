<template>
  <div class="vgrid main-news">
    <h2>News</h2>
    <div class="vrow">
      <div class="vcol vl-12 vm-12 vc-12">
        <base-news-unit/>
      </div>
      <div class="vcol vl-12 vm-12 vc-12">
        <base-news-unit/>
      </div>
      <div class="vcol vl-12 vm-12 vc-12">
        <base-news-unit/>
      </div>
      <div class="vcol vl-12 vm-12 vc-12">
        <base-news-unit/>
      </div>
      <div class="vcol vl-12 vm-12 vc-12">
        <base-news-unit/>
      </div>
      <div class="vcol vl-12 vm-12 vc-12">
        <base-news-unit/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseNewsUnit from "@/components/common/BaseNewsUnit.vue";

export default {
  name: "MainNews",
  components: {BaseNewsUnit},
  props: {},
  data() {
  },
  computed: {},
  watch: {},
  mounted() {
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.main-news {
  padding: 10px;

  & h2 {


    font-weight: bold;
  }
}
</style>