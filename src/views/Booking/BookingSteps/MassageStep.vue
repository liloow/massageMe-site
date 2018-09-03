<template>
  <section class="container">
    <div class="title">
      <h2>Selectionnez votre massage</h2>
    </div>
    <div class="container-flex">
      <div class="cards container">
        <prez-cards v-if="massages" v-for="massage in massages" :key="massage.title" :card-img="massage.img_url" :card-title="massage.name" :card-body="massage.short" card-button="Choisir ce massage" @cardButtonClicked="handleSelection($event, massage)"></prez-cards>
      </div>
    </div>
    </div>
  </section>
</template>
<script>
import PrezCards from '@/components/PrezCards';
import {mapGetters} from 'vuex';
export default {
  name: 'MassageStep',
  computed: {
    ...mapGetters({
      massages: 'getMassages',
    }),
  },
  data() {
    return {};
  },
  methods: {
    handleSelection(e, massage) {
      this.$store.commit('storeStep', {massage: massage});
      this.$store.dispatch('nextStep');
    },
  },
  mounted() {
    if (!this.massages) this.$store.dispatch('fetchMassages');
  },
  components: {PrezCards},
};
</script>
<style lang="css" scoped="">

</style>
