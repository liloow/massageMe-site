<template>
  <section class="container">
    <div class="title">
      <h2>Notre equipe</h2>
    </div>
    <div class="container">
      <div class="cards">
        <prez-cards v-if="therapists" v-for="(therapist, index) in therapists" :key="therapist.title" :card-img="therapist.profile_pic" :card-title="therapist.fullname" :card-body="therapist.short" @cardLinkClicked="handleClick($event, therapist)" :data-card="therapist.id" :picture-style="pictureStyle" :roundPic=true :hack="!h4ck3d &&index + 1 === therapists.length ? setHeight() : null"></prez-cards>
        <prez-cards v-if="therapists" :card-img="recruit.img_url" :card-title="recruit.title" :card-body="recruit.short" :card-button="recruit.button" @cardButtonClicked="recruitThemAll($event)" :picture-style="pictureStyle" :roundPic=true></prez-cards>
      </div>
    </div>
  </section>
</template>
<script>
import PrezCards from '@/components/PrezCards';
import {mapGetters} from 'vuex';
export default {
  name: 'TherapistList',
  computed: {
    ...mapGetters({
      therapists: 'getTherapists',
    }),
  },
  data() {
    return {
      pictureStyle: {
        width: '90%',
        margin: '5% 5% 0',
      },
      recruit: {
        title: '... Et toi ?',
        img_url: Math.random() > 0.5 ? '/man.png' : '/woman.png',
        short:
          "Tu as un diplome de kine ou tu l'etudie en ce moment ? Tu as envie de rejoindre notre equipe ?",
        button: 'Carrement!',
      },
      h4ck3d: false,
    };
  },
  methods: {
    setHeight() {
      if (this['h4ck3d'] || !this.$el) return false;
      const cards = [...this.$el.querySelectorAll('.card-wrapper')];
      const max = `${Math.max(...cards.map(el => el.clientHeight))}px`;
      cards.forEach(card => (card.style.minHeight = max));
      this['h4ck3d'] = !!cards.length;
      return true;
    },
    recruitThemAll(e) {
      this.$router.push('/jointheteam');
    },
  },
  mounted() {
    if (!this.therapists) this.$store.dispatch('fetchTherapists');
    if (!this.h4ck3d) this.setHeight();
  },
  components: {
    PrezCards,
  },
};
</script>
<style lang="scss" scoped>
</style>
