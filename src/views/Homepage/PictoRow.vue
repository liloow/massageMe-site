<template>
  <section class="hero is-small">
    <div class="hero-body">
      <div class="container picto">
        <div class="picto-card">
          <img src="../../assets/img/picto/step1.png" alt="">
          <h3 class="title-2">Détente</h3>
          <div class="desc">
            Une envie de détente, de décompresser sans bouger de chez soi ? Une solution : Massage-Me !
          </div>
        </div>
        <div class="picto-card">
          <img src="../../assets/img/picto/step2.png" alt="">
          <h3 class="title-2">Mobilité</h3>
          <div class="desc">
            Quelques clics suffisent pour réserver une séance avec l'un de nos praticien. Pas d'espace ? Notre masseur vient directement avec sa propre table !</div>
        </div>
        <div class="picto-card">
          <img src="../../assets/img/picto/step3.png" alt="">
          <h3 class="title-2">Massage-Me</h3>
          <div class="desc">
            Vous n'avez plus qu'a vous détendre et profiter de votre séance en toute quiétude. Jamais se détendre n'a été aussi facile </div>
        </div>
      </div>
      <div class="columns is-half is-centered no-gap">
        <div class="column picto">
            <button class="btn btn-filled" @click="scrollToAddress($event)">
             RESERVER MAINTENANT
           </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'PictoRow',
  computed: {
    ...mapGetters({
      addressInputElement: 'getAddressInputElement',
    }),
  },
  data() {
    return {};
  },
  methods: {
    scrollToAddress(e) {
      document.querySelector('#address-input').focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>
<style lang="scss" scoped>
.hero-body {
  padding: 3rem 1.5rem;
}

.picto {
  max-width: 90rem;
  margin-right: auto;
  margin-left: auto;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  img {
    max-width: 100%;
  }
}

.picto-card {
  flex: 1 0 0px;
  padding-right: 1rem;
  padding-left: 1rem;
  min-width: initial;
  text-align: center;
  margin: 1rem;
}

.columns {
}

a:-webkit-any-link {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}
</style>
