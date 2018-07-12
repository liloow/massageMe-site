export default {
  state: {
    steps: {
      address: null,
      massage: null,
      date: null,
      timeslot: null,
      therapist: null,
      payment: null,
    },
    BOOKING_STEP: 0,
    addressInputElement: null,
  },
  getters: {
    getStep: (state, step) => state.steps[step],
    getSteps: state => state.steps,
    getBookingStep: state => state.BOOKING_STEP,
  },
  mutations: {
    storeStep(state, payload) {
      state.steps = { ...state.steps, ...payload };
    },
    nextStep(state) {
      state.BOOKING_STEP === 5 ? (state.BOOKING_STEP = 0) : (state.BOOKING_STEP += 1);
    },
  },
  actions: {
    nextStep({ commit, state }) {
      console.log(JSON.stringify(state.steps));
      window.sessionStorage.setItem('steps', JSON.stringify(state.steps));
      commit('nextStep');
    },
  },
};
