<template>
  <section class="container">
    <div class="title">
      <h1>Selectionnez votre massage</h1>
    </div>
    <div class="container-flex">
      <div class="cards container">
        <prez-cards v-for="massage in massagesComputed" :key="massage.title" card-img="../assets/img/staff/relax.png" :card-title="massage.name" :card-body="massage.short" card-button="Choisir ce massage" @cardButtonClicked="handleSelection($event, massage)"></prez-cards>
      </div>
    </div>
    </div>
  </section>
</template>
<script>
import PrezCards from '@/components/PrezCards';
export default {
  name: 'MassageStep',
  props: ['massages'],
  computed: {
    massagesComputed: function() {
      return this.massages.map(el => {
        el.short =
          el.description.length > 175
            ? `${el.description.match(/(^([^]{175}))[^\W]*/g)[0]}...`
            : el.description;
        return el;
      });
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSelection(e, massage) {
      console.log(e, massage);
      this.$store.commit('storeStep', { massage: massage });
      this.$store.commit('nextStep');
    },
  },
  components: { PrezCards },
};
</script>
<style lang="css" scoped="">
@import url(https://fonts.googleapis.com/css?family=Oswald);
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Quattrocento);

</style>
