<template>
  <div id="app">
    <nav-bar></nav-bar>
    <section class="container-fluid main">
      <router-view></router-view>
    </section>
    <footer-vue></footer-vue>
  </div>
</template>
<script>
import NavBar from '@/components/HighCompo/NavBar';
import FooterVue from '@/components/HighCompo/FooterVue';
import {mapGetters} from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      user: 'getUser',
      isLoggedIn: 'getLoggedInStatus',
    }),
  },
  data() {
    return {
      dyno: null,
    };
  },
  methods: {},
  created() {
    this.$store.dispatch('init');
    this.$store.dispatch('fetchData');
  },
  components: {
    NavBar,
    FooterVue,
  },
};
</script>
<style type="text/scss">
@import './assets/stylesheets/typo.css';
#app {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ghostwhite;
  --mm: #044169;
  --nav: 8vh;
  --foot: 10vh;

  font-family: PT Sans, Consolas, Menlo, monospace;
}
/* font-family: MontserratThin; */
/*
font-family: Source Code Pro, Consolas, Menlo, monospace;
font-family: 'Rubik', sans-serif;
font-family: 'Quattrocento', Arial, sans-serif;
font-family: "small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em";
font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
font-family: 'Quattrocento', Arial, sans-serif;
font-family: 'Oswald', Arial, sans-serif;
font-family: 'Quattrocento', Arial, sans-serif;
font-family: 'Rubik', sans-serif;
font-family: OpenSans;
font-family: MontserratThin;
font-family: 'Dosis';
font-family: 'Oswald', Arial, sans-serif;
font-family: 'Quattrocento', Arial, sans-serif;
font-family: 'Quattrocento', Arial, sans-serif;
font-family: "small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em";
font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
font-family: 'FontAwesome';
font-family': 'Quattrocento, Arial, sans-serif',
}
/*font-family: 'Quattrocento', Arial, sans-serif;*/
.main {
  margin-top: var(--nav);
  min-height: calc(100vh - var(--nav) - var(--foot));
}
</style>
