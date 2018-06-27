<template>
  <header id="header" class="header" @keydown.esc="close($event)">
    <nav class="navbar fixed" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="../../assets/img/logo/Full.svg" alt="MassageMe" class="brand">
        </router-link>
        <input type="checkbox" v-model="burgerState" id="menu-toggle" />
        <label id="trigger" for="menu-toggle" class="navbar-burger"></label>
        <label id="burger" for="menu-toggle" class="navbar-burger"></label>
        <ul id="menu" class="navbar-burger">
          <li v-for="(link, index) in navbarLinks" class="nav" @click="closeBurger">
            <router-link class="nav" :key="index" :to="link.location"> {{ link.text }}</router-link>
          </li>
          <li class="nav" @click="closeBurger">
            <a @click.prevent="dyno='HomemadeModal'" v-if="!$root.user" class="nav">Sign In/Up</a>
            <a class="nav" @click.prevent="logout" v-if="$root.user">Logout</a>
          </li>
        </ul>
      </div>
      <input type="checkbox" id="nav-toggle-state" hidden />
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link v-for="(link, index) in navbarLinks" :key="index" :to="link.location" :class="{'is-page': $route.path === link.location, 'navbar-item': true}">
            {{ link.text }}
          </router-link>
        </div>
        <div class="navbar-end">
          <a @click.prevent="dyno='HomemadeModal'" v-if="!$root.user" class="navbar-item">Sign In/Up</a>
          <a class="navbar-item" @click.prevent="logout" v-if="$root.user">Logout</a>
        </div>
      </div>
    </nav>
    <component @close="close($event)" :is="dyno"></component>
  </header>
</template>
<script>
// import { logout } from "@/api/auth";
// import HomemadeModal from '@/components/HomemadeModal';

export default {
  name: 'NavBar',
  data() {
    return {
      navbarLinks: [
        {
          location: '/massages',
          text: 'Massages',
        },
        {
          location: '/business',
          text: 'Massages en entreprise',
        },
        {
          location: '/team',
          text: "L'équipe",
        },
        {
          location: '/vouchers',
          text: 'Bon cadeau',
        },
        {
          location: '/contact',
          text: 'Contact',
        },
      ],
      connectedUser: Object,
      data: null,
      keepFirst: true,
      name: '',
      selected: null,
      dyno: null,
      /*      listener: (e) => this.close(e),
       */
      burgerState: false,
    };
  },
  props: {
    rule: String,
  },
  mounted() {
    document.addEventListener('keyup', this.escape);
  },
  unmount() {
    document.removeEventListener('keyup', this.escape);
  },
  methods: {
    logout() {
      logout(this.$root);
      this.closeBurger();
      this.$router.push('/');
    },
    close(e) {
      this.closeBurger();
      document.getElementsByTagName('html')[0].style.height = 'auto';
      document.getElementsByTagName('html')[0].style.overflow = 'visible';
      this.dyno = null;
    },
    escape(event) {
      if (event.keyCode == 27) {
        this.close();
      }
    },
    closeBurger() {
      this.burgerState = false;
    },
  },

  computed: {},
  created() {},
  components: {
    // HomemadeModal
  },
};
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400, 700');

#header {
  height: var(--nav);
  position: absolute;
  top: 0;
  width: 100%;
}

header {
  color: #f9f9f9;
  display: block;
}

a {
  color: #00d1b2;
  cursor: pointer;
  &:hover {
    color: #363636;
  }
}

li,
ul {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

input {
  margin: 0;
}

input[type='checkbox'] {
  vertical-align: baseline;
}

[type='checkbox']:not(:checked),
[type='checkbox']:checked {
  display: none;
}

.nav {
  background-color: #f9f9f9;
  height: 3.25rem;
  position: relative;
  text-align: center;
  z-index: 9999;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.navbar {
  background-color: #f9f9f9;
  min-height: 7vh;
  position: relative;
}

.navbar-brand {
  max-height: 100%;
  margin: 0 5vw;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  min-height: 7vh;
}

.navbar-start {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-left: auto;
}

> a {
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-weight: 700;
}

.navbar-menu {
  display: none;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.navbar-item {
  color: #4a4a4a;
  display: block;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  position: relative;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.navbar-end {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 5vw;
}

img.brand {
  max-height: 6.5vh;
}

.brand-burger {
  height: 10vh;
}

.is-page {
  border-bottom: solid 0.3vh black;
  font-weight: bold;
  margin-bottom: 1vh;
  margin-top: 1vh;
}

.fixed {
  top: 0;
  left: 0;
  right: 0;
  z-index: 9997;
  height: var(--nav);
  border-bottom: solid 2px var(--mm);
}

@keyframes checked-anim {
  100% {
    width: 100vw;
    height: auto;
    border-radius: 0;
  }
}

@keyframes not-checked-anim {
  0% {
    width: 3000px;
    height: 900px;
  }
}

li.nav,
a.nav {
  margin: 0;
  color: var(--mm);
  font: 14pt 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 1.8;
  text-decoration: none;
  text-transform: none;
  list-style: none;
  outline: 0;
  display: none;
}

a.nav:focus {
  display: block;
  color: #333;
  background-color: #f9f9f9;
  transition: all 2.5s;
}

#burger,
#burger:after,
#burger:before,
#trigger {
  text-align: right;
  width: 30px;
  height: 5px;
  transition: 0.5s ease;
  cursor: pointer;
  z-index: 9999;
  position: absolute;
  top: 2.5vw;
  right: 2.5vw;
  background: var(--mm);
}

#trigger {
  height: 25px;
  background: none;
}

#burger:before {
  content: ' ';
  top: 10px;
  right: 0;
}

#burger:after {
  content: ' ';
  top: 20px;
  right: 0;
}

#menu-toggle:checked + #trigger + #burger {
  top: 35px;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

#menu-toggle:checked + #trigger + #burger,
#menu-toggle:checked + #trigger + #burger:before {
  transition: -webkit-transform 1.2s ease;
  transition: transform 1.2s ease;
  transition: transform 1.2s ease, -webkit-transform 1.2s ease;
}

#menu-toggle:checked + #trigger + #burger:before {
  width: 20px;
  top: -2px;
  right: 18px;
  -webkit-transform: rotate(45deg) translateX(-5px);
  transform: rotate(45deg) translateX(-5px);
}

#menu-toggle:checked + #trigger + #burger + #menu {
  -webkit-animation: checked-anim-data-v-35cd069c 1.5s ease both;
  animation: checked-anim-data-v-35cd069c 1.5s ease both;
}

#menu-toggle:checked + #trigger + #burger:after {
  width: 20px;
  top: 2px;
  right: 18px;
  -webkit-transform: rotate(-45deg) translateX(-5px);
  transform: rotate(-45deg) translateX(-5px);
  transition: -webkit-transform 1.2s ease;
  transition: transform 1.2s ease;
  transition: transform 1.2s ease, -webkit-transform 1.2s ease;
}

#menu > li:first-child {
  margin: 8vh 0 0vh;
}

#menu {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  width: 9vh;
  height: 9vh;
  background-color: #f9f9f9;
  border-bottom-left-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  -webkit-animation: not-checked-anim-data-v-35cd069c 0.2s both;
  animation: not-checked-anim-data-v-35cd069c 0.2s both;
  transition: 0.2s;
  z-index: 9998;
}

#menu-toggle:checked + #trigger ~ #menu > li > a,
#menu-toggle:checked + #trigger ~ #menu > li {
  display: block;
}

@-webkit-keyframes checked-anim-data-v-35cd069c {
  to {
    width: 100vw;
    height: auto;
    border-radius: 0;
  }
}

@keyframes checked-anim-data-v-35cd069c {
  to {
    width: 100vw;
    height: auto;
    border-radius: 0;
  }
}

@-webkit-keyframes not-checked-anim-data-v-35cd069c {
  0% {
    width: 3000px;
    height: 900px;
  }
}

@keyframes not-checked-anim-data-v-35cd069c {
  0% {
    width: 3000px;
    height: 900px;
  }
}

@media screen and (max-width: 1023px) {
  .navbar-brand .navbar-item {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .navbar-menu {
    background-color: #f9f9f9;
    box-shadow: 0 8px 16px hsla(0, 0%, 4%, 0.1);
    padding: 0.5rem 0;
  }
}

@media screen and (min-width: 1024px) {
  .navbar,
  .navbar-end,
  .navbar-menu,
  .navbar-start {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}

@media screen and (min-width: 1024px) {
  .navbar,
  .navbar-end,
  .navbar-menu,
  .navbar-start {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .navbar {
    min-height: 7vh;
  }
  .navbar-burger {
    display: none;
  }
  .navbar-item {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .navbar-menu {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .navbar-start {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    margin-right: auto;
  }
  .navbar-end {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-left: auto;
  }
}
</style>
