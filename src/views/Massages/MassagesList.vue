<template>
  <section class="container">
    <div class="title">
      <h2>Nos Massages</h2>
    </div>
    <div class="container">
      <div class="cards">
        <prez-cards v-if="massages" v-for="(massage, index) in massages" :key="massage.title" :card-img="massage.img_url" :card-title="massage.name" :card-body="massage.short" @cardLinkClicked="handleClick($event, massage)" :data-card="massage.id" :card-link=true :hack="!h4ck3d && index + 1 === massages.length ? setHeight() : null"></prez-cards>
      </div>
    </div>
    <homemade-modal @close="handleClose($event)" v-if="pickedCard" >
        <prez-cards id="picked" :card-img="pickedCard.img_url" :card-title="pickedCard.name" :card-body="pickedCard.description" @cardLinkClicked="handleClick($event, pickedCard)"  :card-button="'Je reserve !'" :card-style="style" :close-icon="true" @close="handleClose($event)" @cardButtonClicked="handleButtonClick" ></prez-cards>
    </homemade-modal>
  </section>
</template>
<script>
import PrezCards from '@/components/PrezCards';
import HomemadeModal from '@/components/HighCompo/HomemadeModal';
import {mapGetters} from 'vuex';
export default {
  name: 'MassagesList',
  computed: {
    ...mapGetters({
      massages: 'getMassages',
    }),
  },
  data() {
    return {
      pickedCard: null,
      h4ck3d: false,
      style: {
        'max-width': '350px',
        'font-family': 'Quattrocento, Arial, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        margin: '10px 0.7vw',
        'min-width': '230px',
        'max-width': '400px',
        width: '100%',
        color: 'var(--mm)',
        'text-align': 'left',
        'line-height': '1.5',
        'font-size': '1.2rem',
        'justify-content': 'center',
        'background-color': '#ffffff',
        'border-radius': '0.5em',
        'box-shadow': '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
        'text-rendering': 'optimizeLegibility',
        transform: ' scale(0)',
        transition: '1s all ease',
        left: '0',
      },
    };
  },
  methods: {
    handleClick(e, massage) {
      this.style.left = `${-window.screenX / 2 + e.clientX + 200}px`;
      this.modalOpen = !this.modalOpen;
      this.pickedCard = massage;
      setTimeout(() => {
        document.querySelector('#picked').classList.add('scale');
      });
    },
    handleClose(e) {
      console.log(e);
      this.pickedCard = null;
    },
    handleButtonClick() {
      this.$store.commit('storeStep', {massage: this.pickedCard});
      this.handleClose();
      this.$store.dispatch('nextStep');
      this.$router.push('/book');
    },
    setHeight() {
      if (this['h4ck3d'] || !this.$el) return false;
      const cards = [...this.$el.querySelectorAll('.card-wrapper')];
      const max = `${Math.max(...cards.map(el => el.clientHeight))}px`;
      cards.forEach(card => (card.style.minHeight = max));
      this['h4ck3d'] = !!cards.length;
      return true;
    },
  },
  mounted() {
    if (!this.massages) this.$store.dispatch('fetchMassages');
    if (!this.h4ck3d) this.setHeight();
  },
  components: {PrezCards, HomemadeModal},
};
</script>
<style lang="scss" scoped="">
.title {
  margin: 3.5vh 5% 5vh;
  h2 {
    text-align: left;
  }
}
</style>
