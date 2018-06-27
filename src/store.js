import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BOOKING_STEP: 0,
    user: {
      firstname: null,
      lastname: null,
      adresses: null,
      phone: null,
      postal_code_coverage: null,
      profile_pic: null,
      payment_mean: null,
      email: null,
    },
    appointmentAddress: {
      street: null,
      number: null,
      postalCode: null,
      city: null,
      country: null,
    },
    TODAY: new Date(),
    NUMBER_OF_DAYS: 14,
    NUMBER_OF_MONTH: 8,
    NUMBER_OF_YEARS: 4,
    MONTHS: [
      'JANVIER',
      'FÉVRIER',
      'MARS',
      'AVRIL',
      'MAI',
      'JUIN',
      'JUILLET',
      'AOÛT',
      'SEPTEMBRE',
      'OCTOBRE',
      'NOVEMBRE',
      'DÉCEMBRE',
    ],
  },
  getter: {
    getUser: () => this.state.user,
    getBookingStep: () => this.state.BOOKING_STEP,
  },
  mutations: {
    storeUser: user => (this.state.user = user),
    nextStep: () =>
      this.state.BOOKING_STEP === 5
        ? (this.state.BOOKING_STEP = 0)
        : (this.state.BOOKING_STEP += 1),
  },
  actions: {},
});
