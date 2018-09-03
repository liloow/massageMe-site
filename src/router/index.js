import Vue from 'vue';
import Router from 'vue-router';
// import LoginStep from '@/views/Booking/BookingSteps/LoginStep';
// import BookingWrapper from '@/views/BookingWrapper';
// import MassagesList from '@/views/Massages/MassagesList';
// import HomePage from '@/views/HomePage';
// import AboutBusiness from '@/views/AboutBusiness';
// import ContactForm from '@/views/Contact/ContactForm';
// import VoucherWrapper from '@/views/Vouchers/VoucherWrapper';
// import TherapistsList from '@/views/Therapists/TherapistsList';

Vue.use(Router);

export function createRouter() {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomePage'),
      },
      {
        path: '/book',
        name: 'booking',
        component: () => import('@/views/BookingWrapper'),
      },
      {
        path: '/massages',
        name: 'massages',
        component: () => import('@/views/Massages/MassagesList'),
      },
      {
        path: '/therapists',
        name: 'therapists',
        component: () => import('@/views/Therapists/TherapistsList'),
      },
      {
        path: '/jointheteam',
        name: 'jointheteam',
        component: () => import('@/views/Contact/JoinTeam'),
      },
      {
        path: '/business',
        name: 'business',
        component: () => import('@/views/AboutBusiness'),
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact/ContactForm'),
      },
      {
        path: '/vouchers',
        name: 'vouchers',
        component: () => import('@/views/Vouchers/VoucherWrapper'),
      },
    ],
  });
  // router.beforeEach((to, from, next) => {
  //   router.isLoggedIn = !!JSON.parse(window.localStorage.getItem('user'));
  //   setTimeout(() => {
  //     return next(), 300;
  //   });
  // });
  return router;
}
