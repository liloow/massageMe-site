<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view class="main"></router-view>
    <footer-vue></footer-vue>
  </div>
</template>
<script>
import Home from '@/views/Home';
import BookingWrapper from '@/views/BookingWrapper';
import NavBar from '@/components/HighCompo/NavBar2.0';
import FooterVue from '@/components/HighCompo/FooterVue';

export default {
  name: 'app',
  data() {
    return {
      dyno: null,
    };
  },
  methods: {},
  created() {},
  components: {
    Home,
    BookingWrapper,
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
