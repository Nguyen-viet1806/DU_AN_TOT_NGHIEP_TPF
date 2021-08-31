<template>
  <PageHome/>
</template>

<script>
import PageHome from "@/views/PageHome.vue"
export default {
  name: "App",
  components: {PageHome},
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
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Space+Mono:ital@1&display=swap');
* {
box-sizing: border-box;
margin: 0;
padding: 0;
border: none;
outline: none;
text-decoration: none;
text-transform: capitalize;
transition: all .2s linear;
font-family: 'Nunito', sans-serif;
font-family: 'Space Mono', monospace;
}
p{
  margin: 0;
}
html,body{
  height: auto;
}

</style>
