const { fetchMassages, fetchTherapists } = require('../api');

export default {
  state: {
    massages: null,
    therapists: null,
  },
  getters: {
    getMassages: state => state.massages,
    getTherapists: state => state.therapists,
  },
  mutations: {
    storeMassages(state, payload) {
      state.massages = payload;
    },
    storeTherapists(state, payload) {
      state.therapists = payload;
    },
  },
  actions: {
    async fetchData({ commit }) {
      const massages = (await fetchMassages()).data.map(el => {
        el.short =
          el.description.length > 175
            ? `${el.description.match(/(^([^]{175}))[^\W]*/g)[0]}...`
            : el.description;
        return el;
      });
      const therapists = (await fetchTherapists()).data;
      console.log(massages);
      commit('storeMassages', massages);
      commit('storeTherapists', therapists);
    },
  },
};
