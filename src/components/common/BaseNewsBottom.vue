<template>
  <div class="vgrid new-bottom">
    <h1>News</h1>
    <div class="vrow">
      <div class="vcol vl-4 vm-12 vc-12">
        <base-news-unit />
      </div>
      <div class="vcol vl-4 vm-12 vc-12">
        <base-news-unit />
      </div>
      <div class="vcol vl-4 vm-12 vc-12">
        <base-news-unit />
      </div>
    </div>
  </div>
</template>

<script>
import BaseNewsUnit from "@/components/common/BaseNewsUnit.vue";
export default {
  name: "BaseNewsBottom",
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
.new-bottom{
 padding: 0 2% 50px 5%;
 & h1{
   color: #0cb4ce;
   margin-bottom: 80px;
   text-align: center;
 }
}
</style>