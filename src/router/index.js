import Vue from 'vue';
import Router from 'vue-router';
import LoginStep from '@/views/Booking/BookingSteps/LoginStep';
import BookingWrapper from '@/views/BookingWrapper';
import MassagesList from '@/views/Massages/MassagesList';
import HomePage from '@/views/HomePage';
import AboutBusiness from '@/views/AboutBusiness';
import ContactForm from '@/views/Contact/ContactForm';
import VoucherWrapper from '@/views/Vouchers/VoucherWrapper';
import TherapistsList from '@/views/Therapists/TherapistsList';

Vue.use(Router);

//eslint-disable-line
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: LoginStep,
      beforeEnter: (to, from, next) => {
        console.log(router.isLoggedIn);
        if (router.isLoggedIn) return router.push('/');
        next();
      },
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
      component: VoucherWrapper,
    },
  ],
});

router.beforeEach((to, from, next) => {
  router.isLoggedIn = !!JSON.parse(window.localStorage.getItem('user'));
  setTimeout(() => {
    return next(), 300;
  });
});

export default router;
