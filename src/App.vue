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
    return {};
  },
  methods: {},
  mounted() {
    this.$store.dispatch('init');
    this.$store.dispatch('fetchData');
  },
  components: {
    NavBar,
    FooterVue,
  },
};
</script>
<style lang="scss">
body.frozen {
  height: 100%;
  overflow: hidden;
  position: absolute;
}

body {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ghostwhite;
  --mm: #044169;
  --nav: 8vh;
  --foot: 10vh;
  .main {
    padding-top: var(--nav);
    min-height: calc(100vh - var(--nav) - var(--foot));
  }
}
</style>
