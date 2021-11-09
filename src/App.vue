<template>
  <div>
    <navbar />
    <banner />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/component/componentsHeader/Navbar.vue";
import Banner from "@/components/component/componentsHeader/Banner.vue";
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
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: transparent;
  transition: opacity 500ms;
  visibility: visible;
  opacity: 1;
}

.popup {
  box-shadow: #b0b7bd 0px 2px 15px 0px;
  visibility: visible;
  opacity: 1;
  margin: 10px auto;
  padding: 100px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: fixed;
  top: 200px;
  left: 38%;
  transition: all 1s ease-in-out;
  z-index: 1002;
}
.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  cursor: pointer;
  color: #06d85f;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}
@media screen and (max-width: 700px) {
  .box {
    width: 70%;
  }
  .popup {
    width: 70%;
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
