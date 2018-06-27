import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    TODAY: new Date(),
    NUMBER_OF_DAYS: 14,
    NUMBER_OF_MONTH: 8,
    NUMBER_OF_YEARS: 4,
    DAYS: ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'],
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
