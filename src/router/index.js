import Vue from 'vue';
import Router from 'vue-router';
import LoginStep from '@/views/Booking/BookingSteps/LoginStep';
import BookingWrapper from '@/views/BookingWrapper.vue';
import MassagesList from '@/views/Massages/MassagesList.vue';
import HomePage from '@/views/HomePage.vue';
import AboutBusiness from '@/views/AboutBusiness.vue';
import ContactForm from '@/views/Contact/ContactForm.vue';
import VoucherForm from '@/views/Vouchers/VoucherForm.vue';
import TherapistsList from '@/views/Therapists/TherapistsList.vue';
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
    {
      path: '/massages',
      name: 'massages',
      component: MassagesList,
    },
    {
      path: '/therapists',
      name: 'therapists',
      component: TherapistsList,
    },
    {
      path: '/business',
      name: 'business',
      component: AboutBusiness,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactForm,
    },
    {
      path: '/vouchers',
      name: 'vouchers',
      component: VoucherForm,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  const LOGGED_IN = store.state.users.LOGGED_IN;
  console.log(LOGGED_IN);
  setTimeout(() => {
    return next(), 300;
  });
});

export default router;
