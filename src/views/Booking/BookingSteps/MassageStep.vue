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
      console.log(e, massage);
      this.$store.commit('storeStep', {massage: massage});
      this.$store.dispatch('nextStep');
    },
  },
  components: {PrezCards},
};
</script>
<style lang="css" scoped="">
@import url(https://fonts.googleapis.com/css?family=Oswald);
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Quattrocento);

</style>
