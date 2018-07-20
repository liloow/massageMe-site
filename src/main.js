import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import '@/assets/scss/utils.scss';
import '@/assets/scss/typo.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
