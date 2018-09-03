const {fetchMassages, fetchTherapists, fetchSlotsAvailable} = require('../api');

export default {
  state: {
    massages: null,
    therapists: null,
    slotsAvailable: null,
  },
  getters: {
    getMassages: state => state.massages,
    getTherapists: state => state.therapists,
    getSlotsAvailable: state => state.slotsAvailable,
  },
  mutations: {
    storeMassages(state, payload) {
      state.massages = payload;
    },
    storeTherapists(state, payload) {
      state.therapists = payload;
    },
    storeSlots(state, payload) {
      state.slotsAvailable = payload;
    },
  },
  actions: {
    async fetchData({dispatch}) {
      await Promise.all([dispatch('fetchMassages'), dispatch('fetchTherapists')]);
    },
    async fetchMassages({commit}) {
      const massages = (await fetchMassages()).data.map(el => {
        el.short =
          el.description.length > 175
            ? `${el.description.match(/(^([^]{175}))[^\W]*/g)[0]}...`
            : el.description;
        return el;
      });
      commit('storeMassages', massages);
    },
    async fetchTherapists({commit}) {
      const therapists = (await fetchTherapists()).data.map(el => {
        el.short = el.bio.length > 175 ? `${el.bio.match(/(^([^]{175}))[^\W]*/g)[0]}...` : el.bio;
        return el;
      });
      commit('storeTherapists', therapists);
    },
    async fetchSlotsAvailable({commit}, raw) {
      const slots = (await fetchSlotsAvailable(raw)).data;
      commit('storeSlots', slots);
    },
  },
};
