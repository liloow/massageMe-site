<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view class="main"></router-view>
    <footer-vue></footer-vue>
  </div>
</template>
<script>
import NavBar from '@/components/HighCompo/NavBar2.0';
import FooterVue from '@/components/HighCompo/FooterVue';
import { mapGetters, mapState } from 'vuex';

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
  created() {},
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
  background-color: #fafafa;
  --mm: #044169;
  --nav: 8vh;
  --foot: 20vh;
}
.main {
  margin-top: var(--nav);
  min-height: calc(100vh - var(--nav) - var(--foot));
}
</style>
