<template>
  <section class="container">
    <div class="title">
      <h1>Nos Massages</h1>
    </div>
    <div class="container-flex">
      <div class="cards container">
        <prez-cards v-if="massages" v-for="massage in massages" :key="massage.title" :card-img="massage.img_url" :card-title="massage.name" :card-body="massage.short" @cardLinkClicked="handleClick($event, masssage)"></prez-cards>
      </div>
    </div>
    </div>
  </section>
</template>
<script>
import PrezCards from '@/components/PrezCards';
import { mapGetters } from 'vuex';
export default {
  name: 'MassagesList',
  computed: {
    ...mapGetters({
      massages: 'getMassages',
    }),
  },
  data() {
    return {};
  },
  methods: {
    handleClick(e, massage) {
      console.log(e);
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
