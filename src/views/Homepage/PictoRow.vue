<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="title">
        <h1>La formule Massage-Me</h1>
      </div>
      <div class="container picto">
        <div class="picto-card">
          <img src="../../assets/img/picto/step1.png" alt="">
          <h5 class="title-2">Détente</h5>
          <div class="desc">
            Une envie de détente, de décompresser sans bouger de chez soi ? Une solution : Massage-Me !
          </div>
        </div>
        <div class="picto-card">
          <img src="../../assets/img/picto/step2.png" alt="">
          <h5 class="title-2">Mobilité</h5>
          <div class="desc">
            Quelques clics suffisent pour réserver une séance avec l'un de nos praticien. Pas d'espace ? Notre masseur vient directement avec sa propre table !</div>
        </div>
        <div class="picto-card">
          <img src="../../assets/img/picto/step3.png" alt="">
          <h5 class="title-2">Massage-Me</h5>
          <div class="desc">
            Vous n'avez plus qu'a vous détendre et profiter de votre séance en toute quiétude. Jamais se détendre n'a été aussi facile </div>
        </div>
        <div class="row">
          <button class="btn btn-filled" @click="scrollToAddress($event)">
            RESERVER MAINTENANT
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {mapGetters} from 'vuex';
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
      document.querySelector('#address-input').focus({preventScroll: true});
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2.8rem;
  }
}
.picto {
  max-width: 95%;
  margin-top: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  padding: 1% 0;
  .row {
    width: 95%;
    margin: auto;
    .btn {
      margin: 1rem auto 0;
      font-size: 1.2rem;
    }
  }
  img {
    max-width: 85%;
  }
  h5 {
    font-size: 2rem;
    padding: 1.5rem 0;
  }
}

.picto-card {
  display: table-cell;
  flex: 1 0 0px;
  padding: 2%;
  min-width: initial;
  text-align: center;
  margin: 0 2%;
  line-height: 1.5;
  min-width: 7rem;
}

.columns {
}

a:-webkit-any-link {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}

@media screen and (max-width: 850px) {
  .picto {
    flex-flow: column nowrap;
    max-width: 700px;
    width: 80%;
  }
}
</style>
