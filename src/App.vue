<template>
  <div>
    <navbar />
    <banner />
     <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/component/Navbar.vue";
import Banner from "@/components/component/Banner.vue";
import Footer from "@/components/component/Footer.vue";
export default {
  name: "App",
  components: { Navbar, Banner, Footer },
  props: {},
  data() {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@import url("./Grid.scss");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Space+Mono:ital@1&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.2s linear;
  font-family: "Nunito", sans-serif;
  font-family: "Space Mono", monospace;
}
p {
  margin: 0;
}
html,
body {
  height: auto;
}
html {
  scroll-behavior: smooth;
}
</style>
