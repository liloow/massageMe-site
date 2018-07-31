<template>
  <section class="container card-wrapper address-input">
    <div class="card appointment">
      <header class="card-title">
        <h2 class="card-header-title title is-3 is-centered">
          Entrez votre addresse pour recevoir votre massage à domicile !
        </h2>
      </header>
      <div class="card-content">
        <div class="container" v-show="!notYetThere">
          <places-autocomplete @addressIsChosen="storeAdress($event)" @addressExists="currentAddress = $event"></places-autocomplete>
        </div>
      </div>
      <footer v-if="notYetThere" class="card-footer">
        <div class="validator">
          <p v-html=message></p>
          <form @submit.prevent="registerEmail">
            <div>
              <input class="ap-input" type="email" v-model="guestmail" label="Votre Email" placeholder="Enter your email"></input>
            </div>
            <div>
            </div>
          </form>
        </div>
        <p v-if="successAdd">Merci pour votre intérêt ! Nous vous recontactons dès aue possible.</p>
      </footer>
      <button type="button" @click="storeAdress(currentAddress)" class="btn btn-filled btn-upper">Valider</button>
    </div>
  </section>
</template>
<script>
import PlacesAutocomplete from '@/components/PlacesAutocomplete';
import {mapGetters, mapState} from 'vuex';
export default {
  name: 'EnterAddress',
  computed: {
    message() {
      return `Malheureusement, nous ne sommes pas encore present dans la region de <strong>${
        this.county
      }</strong>, nous avons toutefois enregistre votre interet. En laissant votre email, vous recevrez une notification des que nos services seront presents dans votre region !`;
    },
  },
  data() {
    return {
      name: '',
      selected: null,
      county: null,
      state: 0,
      guestmail: '',
      successAdd: false,
      notYetThere: false,
      currentAddress: null,
    };
  },
  methods: {
    storeAdress(e) {
      if (e === null) return;
      if (e.postcode >= 4000 && e.postcode < 5000) {
        this.$store.commit('storeStep', {address: e});
        this.$store.commit('backToStep', 0);
        this.$store.dispatch('nextStep');
        this.$emit('close', e);
        return this.$router.push('/book');
      }
      this.county = e.county;
      this.notYetThere = true;
    },
    registerEmail() {
      addToMailList(this.guestmail).then(r => {
        this.successAdd = true;
      });
    },
  },
  created() {
    this.notYetThere = false;
  },
  components: {
    PlacesAutocomplete,
  },
};
</script>
<style lang="scss" scoped>
.appointment {
  margin: 1rem;
}

.validator {
  text-align: center;
  padding: 0.5em 5em 3em;
  width: 90%;
  p {
    font-size: 1.1rem;
    padding-bottom: 1.5em;
  }
  input {
    font-size: 2em;
    font-weight: 550;
    height: 2.5em;
  }
}

.card {
  position: relative;
  margin: 10px 1%;
  width: 100%;
  text-align: left;
  line-height: 1.4em;
  font-size: 0.8em;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.5em;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.cards .card-wrapper {
  flex-basis: 0;
  height: auto;
  margin: 0 auto;
  flex-grow: 0.4;
  flex-shrink: 0;
}

.card-title h2 {
  font-weight: 300;
  font-size: 2.2em;
  line-height: 1.2em;
  font-family: 'Oswald', Arial, sans-serif;
  text-transform: uppercase;
  text-align: center;
}

.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: row;
}

.card-footer {
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 0 0;
}

.address-input {
  max-width: 800px;
  width: 75%;
  text-align: center;
  margin: 0 auto;
  flex: 1 0 0px;
  align-items: flex-start;
}
@media screen and (max-width: 1023px) {
  .address-input {
    width: 100%;
  }
}
</style>
