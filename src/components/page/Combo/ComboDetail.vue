<template>
  <div>
    <base-combo-detail ref="BaseComboDetail" />
  </div>
</template>

<script>
import BaseComboDetail from "@/components/common/BaseComboDetail.vue";
export default {
  name: "ComboDetail",
  components: { BaseComboDetail },
  props: {},
  data() {},
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.setscoll();
    },
    setscoll() {
      document.documentElement.scrollTop = 900;
      document.body.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>