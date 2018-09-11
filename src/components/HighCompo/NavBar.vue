<template>
  <header id="header" class="header" @keydown.esc="close($event)">
    <nav class="navbar fixed" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item brand" to="/">
          <img src="../../assets/img/logo/Full.svg" alt="MassageMe" class="brand">
        </router-link>
        <input type="checkbox" v-model="burgerState" id="menu-toggle" />
        <label id="trigger" for="menu-toggle" class="navbar-burger"></label>
        <label id="burger" for="menu-toggle" class="navbar-burger"></label>
        <ul id="menu" class="navbar-burger">
          <li class="nav" @click="closeBurger">
            <router-link class="nav" to="/book"> > Reserver un massage
              < </router-link>
          </li>
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
        <div class="navbar-item book">
          <router-link class="btn btn" to="/book">Reserver</router-link>
        </div>
        <div class="navbar-start">
          <ul class="navbar-start">
            <li v-for="(link, index) in navbarLinks" class="navbar-item" :key="index">
              <router-link :to="link.location" :class="{'is-page': $route.path === link.location, 'navbar-item': true}">
                {{ link.text }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="navbar-item" v-if="!isLoggedIn" @click.prevent="openModal">Sign In/Up</a>
          <a class="navbar-item" @click.prevent="logout()" v-if="isLoggedIn">Logout</a>
        </div>
      </div>
    </nav>
    <HomemadeModal @close="close" v-if="dyno">
      <component @login-successful="close()" :is="dyno" />
    </HomemadeModal>
  </header>
</template>
<script>
import {logout} from '@/api';
import {mapGetters} from 'vuex';
import SignupLogin from '@/components/SignupLogin';
import HomemadeModal from '@/components/HighCompo/HomemadeModal';
export default {
  name: 'NavBar',
  computed: {
    ...mapGetters({
      user: 'getUser',
      isLoggedIn: 'getLoggedInStatus',
    }),
  },
  data() {
    return {
      navbarLinks: [
        {
          location: '/massages',
          text: 'Massages',
        },
        {
          location: '/business',
          text: 'Entreprises',
        },
        {
          location: '/therapists',
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
  methods: {
    logout() {
      this.$store.dispatch('registerLogout');
      this.closeBurger();
      this.$router.push('/');
    },
    close() {
      this.closeBurger();
      this.dyno = null;
    },
    escape(e) {
      if (event.keyCode == 27) {
        this.close();
      }
    },
    closeBurger() {
      this.burgerState = false;
    },
    openModal() {
      this.dyno = SignupLogin;
    },
  },
  mounted() {
    window.addEventListener('keydown', this.escape);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.escape);
  },
  components: {
    HomemadeModal,
    SignupLogin,
  },
};
</script>
<style scoped lang="scss">
$mm: var(--mm);

#header {
  height: var(--nav);
  position: absolute;
  top: 0;
  width: 100%;
}

header {
  color: $mm;
  display: block;
  font-family: 'Raleway';
}

.navbar-item.book {
  margin: auto;
  flex: 0.8;
  display: flex;
  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    border: solid 0.2rem $mm;
    color: $mm;
    margin: auto;
  }
  &:hover a {
    transform: scale(1.1);
    background-color: $mm;
    color: white;
  }
}

.navbar-start,
.navbar-end {
  a.navbar-item {
    cursor: pointer;
    &:hover:not(.is-page) {
      color: $mm;
      transform: scale(1.2);
    }
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
  background-color: ghostwhite;
  height: 3.25rem;
  position: relative;
  text-align: center;
  z-index: 100;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 100%;
  flex: 1 1 0px;
}

.navbar {
  background-color: ghostwhite;
  min-height: 7vh;
  position: relative;
  flex: 1 1 0px;
  padding-left: 5%;
}

.navbar-brand {
  max-height: 100%;
  margin: 0;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-negative: 0;
  min-height: 7vh;
  padding-right: 1rem;
}

.navbar-start {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-left: 1rem;
  flex: 3.5;
  .navbar-item {
    margin: auto;
    display: block;
    font-size: 1.2rem;
  }
}

.navbar-menu {
  display: none;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  -ms-flex-negative: 0;
  flex: 4;
}

.navbar-item {
  text-decoration: none;
  color: $mm;
  line-height: 1.5;
  padding: 0.5rem;
  font-size: 1rem;
  position: relative;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  &.brand {
    padding: 0;
  }
}

.navbar-end {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  flex: 1.5;
  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    border: 0;
    color: $mm;
    margin: auto;
    padding: 0;
  }
}

.brand-burger {
  height: 10vh;
}

.is-page {
  border-bottom: solid 0.2rem var(--mm);
  font-weight: bold;
  padding: 0 0.7vw 0.7vh;
  margin-bottom: 0.5vh;
  margin-top: 1vh;
}

.fixed {
  top: 0;
  left: 0;
  right: 0;
  z-index: 97;
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
  color: $mm;
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
  color: $mm;
  background-color: ghostwhite;
  transition: all 2.5s;
}

#burger,
#burger:after,
#burger:before,
#trigger {
  text-align: right;
  width: 7vw;
  height: 1.2vw;
  transition: 0.5s ease;
  cursor: pointer;
  z-index: 100;
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
  margin: 6vh 0 2vh;
  a {
    font-weight: 600;
  }
}

#menu {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  width: 9vh;
  height: 9vh;
  background-color: ghostwhite;
  border-bottom-left-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  -webkit-animation: not-checked-anim-data-v-35cd069c 0.2s both;
  animation: not-checked-anim-data-v-35cd069c 0.2s both;
  transition: 0.2s;
  z-index: 98;
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
  .navbar-burger {
    li {
      a {
        font-weight: 550;
      }
    }
  }
  .navbar-menu {
    background-color: ghostwhite;
    box-shadow: 0 8px 16px hsla(0, 0%, 4%, 0.1);
    padding: 0.5rem 0;
  }
}

@media screen and (min-width: 1024px) {
  .navbar,
  .navbar-end,
  .navbar-menu,
  .navbar-start {
    display: flex;
  }
}

.navbar {
  min-height: 7vh;
}

@media screen and (max-width: 1324px) {
  .navbar,
  .navbar-end,
  .navbar-menu,
  .navbar-start {
    a.navbar-item,
    .navbar-item {
      &.book {
        display: none;
      }
      a {
        font-size: 0.9rem;
      }
    }
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
    flex-shrink: 1;
    text-align: center;
  }
  .navbar-start {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    margin-right: auto;
    padding-right: 1vw;
  }
  .navbar-end {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-left: auto;
    padding-right: 1vw;
    white-space: nowrap;
  }
}
</style>
