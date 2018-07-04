import Vue from 'vue';
import Router from 'vue-router';
import LoginStep from '@/views/Booking/BookingSteps/LoginStep';
import BookingWrapper from '@/views/BookingWrapper.vue';
import HomePage from '@/views/HomePage.vue';
import store from '../store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/signup',
      name: 'signu[',
      component: LoginStep,
    },
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/book',
      name: 'booking',
      component: BookingWrapper,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(store.state);
  const user = store.state.users.USER_INFOS;
  console.log(user);
  next();
});

export default router;
