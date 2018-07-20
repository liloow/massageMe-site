const {appendToUserHistory} = require('../api');

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
    ABSOLUTE_PROGRESS: 0,
    addressInputElement: null,
  },
  getters: {
    getStep: (state, step) => state.steps[step],
    getSteps: state => state.steps,
    getBookingStep: state => state.BOOKING_STEP,
  },
  mutations: {
    storeStep(state, payload) {
      state.steps = {...state.steps, ...payload};
    },
    nextStep(state) {
      state.BOOKING_STEP += 1;
    },
    previousStep(state) {
      state.BOOKING_STEP -= 1;
    },
    clearProgress(state) {
      state.BOOKING_STEP = 0;
      state.steps = {
        address: null,
        massage: null,
        date: null,
        timeslot: null,
        therapist: null,
        payment: null,
      };
    },
    backToStep(state, payload) {
      state.BOOKING_STEP = payload;
    },
    refreshABS(state) {
      state.ABSOLUTE_PROGRESS = Object.keys(state.steps).filter(Boolean).length;
    },
  },
  actions: {
    nextStep({commit, state}) {
      // console.log(JSON.stringify(state.steps));
      window.sessionStorage.setItem('steps', JSON.stringify(state.steps));
      if (state.BOOKING_STEP > window.sessionStorage.getItem('BOOKING_STEP')) {
        window.sessionStorage.setItem('BOOKING_STEP', JSON.stringify(state.BOOKING_STEP));
      }
      commit('nextStep');
      commit('refreshABS');
    },
    previousStep({commit, state}) {
      // console.log(JSON.stringify(state.steps));
      window.sessionStorage.setItem('steps', JSON.stringify(state.steps));
      window.sessionStorage.setItem('BOOKING_STEP', JSON.stringify(state.BOOKING_STEP - 1));
      commit('previousStep');
      commit('refreshABS');
    },
    cleanSlate({commit}) {
      commit('clearProgress');
      window.sessionStorage.setItem('BOOKING_STEP', 0);
      window.sessionStorage.setItem(
        'steps',
        JSON.stringify({
          address: null,
          massage: null,
          date: null,
          timeslot: null,
          therapist: null,
          payment: null,
        })
      );
      commit('refreshABS');
    },
    async processBooking({dispatch, commit, state}) {
      dispatch('cleanSlate');
      const done = await appendToUserHistory(state);
      if (done) {
        // const email = await sendNoticeToTherapist()
        commit('clearProgress');
      }
    },
  },
};
