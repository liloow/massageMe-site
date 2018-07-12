<template>
  <input id="address-input" autofocus="true">
</template>
<script>
import places from 'places.js';
export default {
  name: 'PlacesAutocomplete',
  computed: {},
  data() {
    return {
      config: {
        container: document.querySelector('#address-input'),
        type: 'address',
        countries: ['BE'],
        style: {
          'font-size': '1em',
        },
        useDeviceLocation: 'true  ',
      },
      adress: null,
    };
  },
  methods: {},
  mounted() {
    this.config.container = document.querySelector('#address-input');
    const placesAutocomplete = places(this.config);
    placesAutocomplete.on('change', e => {
      this.$emit('addressIsChosen', e.suggestion);
    });
  },
};
</script>
<style lang="css" scoped>* Main input wrapper */
.algolia-places {
}

/* The algolia-places input */
.ap-input, .ap-hint {
  font-size: 2em;
  font-weight: 550;
  height: 60px;
}

/* The style of the svg icons when the input is on hover */
.ap-input:hover ~ .ap-input-icon svg,
.ap-input:focus ~ .ap-input-icon svg,
.ap-input-icon:hover svg {}

/* The dropdown style */
.ap-dropdown-menu {}

/* The suggestions style */
.ap-suggestion {}

/* The highlighted names style */
.ap-suggestion em {}

/* The addresses style */
.ap-address {}

/* The icons of each suggestions ( can be a building or a pin ) */
.ap-suggestion-icon {}

/* The style of the svg inside the .ap-suggestion-icon */
.ap-suggestion-icon svg {}

/* The icons inside the input ( can be a pin or a cross ) */
.ap-input-icon {}

/* The style of the svg inside the .ap-input-icon */
.ap-input-icon svg {}

/* .a-cursor is the class a suggestion go on hover */
.ap-cursor {}

/* The style of the svg icon, when the .ap-suggestion is on hover */
.ap-cursor .ap-suggestion-icon svg {}

/* The styles of the Algolia Places input footer */
.ap-footer {}

/* The styles of the Algolia Places input footer links */
.ap-footer a {}

/* The styles of the Algolia Places input footer svg icons */
.ap-footer a svg {}

/* The styles of the Algolia Places input footer on hover */
.ap-footer:hover {}


</style>
