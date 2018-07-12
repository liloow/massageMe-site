<template>
  <section class="container card-wrapper address-input">
    <div class="card appointment">
      <header class="card-title">
        <h2 class="card-header-title title is-3 is-centered">
          Entrez votre addresse pour recevoir votre massage à domicile !
        </h2>
      </header>
      <div class="card-content">
        <div class="container">
          <places-autocomplete @addressIsChosen="storeAdress($event)" ></places-autocomplete>
        </div>
      </div>
      <footer v-if="notYetThere" class="card-footer">
        <div class="validator">
          <p>{{message}}</p>
          <form @submit.prevent="registerEmail">
            <div>
              <input type="email" v-model="guestmail" label="Votre Email" placeholder="Enter your email"></b-input>
            </div>
            <div>
            </div>
          </form>
        </div>
        <p v-if="successAdd">Merci pour votre intérêt ! Nous vous recontactons dès aue possible.</p>
      </footer>
      <button type="submit" class="btn btn-filled">Valider</button>
    </div>
  </section>
</template>
<script>
import PlacesAutocomplete from '@/components/PlacesAutocomplete';
export default {
  name: 'EnterAddress',
  data() {
    return {
      name: '',
      selected: null,
      citiesWeOperate: [],
      state: 0,
      message: null,
      guestmail: '',
      successAdd: false,
      notYetThere: false,
    };
  },
  methods: {
    storeAdress(e) {
      this.$store.commit('storeStep', { address: e });
      this.$router.push('/book');
    },
    fakeSearch(res = 0) {
      this.state = 1;

      let t = setTimeout(() => {
        this.state = !res ? 3 : 2;
        if (this.state === 2) this.$router.push('/reserve');
        if (this.state === 3)
          this.message =
            'Malheureusement, nous ne sommes pas encore présents dans votre ville. Laissez-nous votre e-mail via le formulaire ci-dessous et nous vous previendrons dès que seront présents près de chez vous !';
      }, 3000);
    },
    registerEmail() {
      addToMailList(this.guestmail).then(r => {
        this.successAdd = true;
      });
    },
  },
  computed: {
    filteredDataArray() {
      function ignore(s) {
        return s
          .replace(/á/g, 'a')
          .replace(/é/g, 'e')
          .replace(/è/g, 'e')
          .replace(/í/g, 'i')
          .replace(/ó/g, 'o')
          .replace(/ú/g, 'u');
      }

      return this.data
        .filter(option => {
          return (
            ignore(option)
              .toString()
              .toLowerCase()
              .indexOf(ignore(this.name).toLowerCase()) === 0
          );
        })
        .sort();
    },
  },
  created() {},
  components: {
    PlacesAutocomplete,
  },
};
</script>
<style lang="css" scoped>
.appointment {
  margin: 5rem;
}

.validator {
  text-align: center;
  padding: 5vh,
}

.input {
  padding-top: 3vh;
}

.card {
  font-family: 'Quattrocento', Arial, sans-serif;
  position: relative;
  margin: 10px 1%;
  width: 100%;
  text-align: left;
  line-height: 1.4em;
  font-size: 0.8em;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.5em;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
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
  padding: 0 0
}

.address-input {
  max-width: 800px;
  width: 75%;
  text-align: center;
  margin: auto;
  flex: 1 0 0px;
}

</style>
