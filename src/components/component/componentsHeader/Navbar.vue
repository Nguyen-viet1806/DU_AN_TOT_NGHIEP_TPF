<template>
  <div>
    <div class="navbar" id="scoll-navbar">
      <div class="navbar-icons">
        <a href="#" class="navbar-icons-logo"
          ><fa :icon="['fab', 'facebook']"
        /></a>
        <a href="#" class="navbar-icons-logo"
          ><fa :icon="['fab', 'twitter']"
        /></a>
        <a href="#" class="navbar-icons-logo"
          ><fa :icon="['fab', 'youtube']"
        /></a>
        <a href="#" class="navbar-icons-logo"
          ><fa :icon="['fab', 'github']"
        /></a>
        <a href="#home" class="navbar-icons-logo" id="logo-main"
          ><img class="icon" src="@/assets/logoTpf.svg" width="45" height="45"/></a>
      </div>

      <nav class="navbar-menu" id="menu-bars">
        <router-link v-on:click="setscoll" to="/" class="menu-left">Home</router-link>
        <router-link v-on:click="setscoll" to="/product" class="menu-left" href="#home">Product</router-link>
        <router-link v-on:click="setscoll" to="/news" class="menu-left" href="#home"
          >News</router-link
        >
        <a href="#home" id="logo"
          ><img class="icon" src="@/assets/logoTpf.svg" width="45" height="45"/></a>
        <router-link to="/product-detail" class="menu-right" href="#home">home</router-link>
        <a class="menu-right" href="#home">home</a>
        <a class="menu-right" href="#home">home</a>
      </nav>

      <div class="navbar-icons-main">
        <a href="#" class="navbar-icons-main-logo"
          ><fa :icon="['fas', 'search']"
        /></a>
        <a href="#" class="navbar-icons-main-logo"
          ><fa :icon="['fas', 'user-alt']"
        /></a>
        <a href="#" class="navbar-icons-main-logo"
          ><fa :icon="['fas', 'heart']"
        /></a>
        <router-link  to="/card" class="navbar-icons-main-logo"
          ><fa :icon="['fas', 'shopping-cart']"
        /></router-link>
        <a
          v-on:click="showMenuBar"
          class="navbar-icons-main-logo"
          id="icons-bars"
          ><fa :icon="['fas', 'bars']" />
        </a>
      </div>
    </div>
    <a href="#first-position">
      <button class="btn-go-up"><fa :icon="['fas', 'angle-up']" /></button>
    </a>
  </div>
</template>

<script>

window.onscroll = function () {
  setBackground();
};
function setBackground() {
  var scollNarbar = document.getElementById("scoll-navbar");

  if (document.documentElement.scrollTop > 28 || document.body.scrollTop > 28) {
    scollNarbar.style.background = "white";
    scollNarbar.style.color = "black";
  } else {
    scollNarbar.style.background = "transparent";
    scollNarbar.style.color = "white";
  }
}

export default {
  name: "Navbar",
  components: {},
  props: {},
  data() {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    showMenuBar() {
      let menuBar = document.querySelector("#menu-bars");
      menuBar.classList.toggle("active");
    },
    setscoll() {
      document.documentElement.scrollTop = 900;
      document.body.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  padding: 0 35px 0 35px;
  width: 100%;
  height: 95px;
  background: transparent;
  color: white;
  & a:hover {
    color: #7d7d7d;
  }
  &-icons {
    & #logo-main {
      display: none;
    }
    &-logo {
      line-height: 95px;
      padding: 0 10px 0 10px;
      color: inherit;
    }
  }

  &-icons-main {
    &-logo {
      line-height: 95px;
      padding: 0 10px 0 10px;
      color: inherit;
    }
    & #icons-bars {
      display: none;
    }
  }
  & .active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  &-menu {
    & a {
      width: 100%;
      text-decoration: none;
      padding: 0 10px 0 10px;
      color: inherit;
      font-weight: bold;
    }
    & .menu-left {
      animation: menuLeft ease-in 2s;
    }
    & .menu-right {
      animation: menuRight ease-in 2s;
    }
  }
}
.btn-go-up {
  position: fixed;
  top: 88%;
  right: 2%;
  z-index: 1000;
  width: 50px;
  height: 50px;
  background: #0cb4ce;
  color: white;
  font-weight: bold;
  font-size: 25px;
  border-radius: 5px;
}

@media (max-width: 800px) {
  .navbar {
    padding: 0 15px 0 25px;
    background: rgba(255, 255, 255, 0.2);
    &-menu {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.2);
      border-top: 0.2px solid rgba(0, 0, 0, 0.2);
      border-bottom: 0.2px solid rgba(0, 0, 0, 0.2);
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
      & a {
        display: block;
        padding: 10px 10px 10px 35px;
        &:hover {
          background: red;
        }
      }
      & #logo {
        display: none;
      }
    }

    &-icons {
      & #logo-main {
        font-size: 30px;
        display: inline-block;
      }
      &-logo {
        display: none;
      }
    }
    &-icons-main {
      & #icons-bars {
        display: inline-block;
      }
    }
  }
  .btn-go-up {
    width: 30px;
    height: 40px;
  }
}
.scollNarbar {
  background: red !important;
}

@keyframes menuLeft {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  80% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

@keyframes menuRight {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  80% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
</style>