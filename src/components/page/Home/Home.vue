<template>
  <section>
    <navbar />
    <banner />
  </section>
</template>

<script>
import Navbar from "@/components/component/Navbar.vue";
import Banner from "@/components/component/Banner.vue";
export default {
  name: "Home",
  components: { Navbar, Banner },
  props: {},
  data() {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>