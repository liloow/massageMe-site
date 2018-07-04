<template>
  <input id="address-input">
</template>
<script>
import places from 'places.js';
export default {
  name: 'PlacesAutocomplete',

  data() {
    return {
      config: {
        container: document.querySelector('#address-input'),
        type: 'address',
        countries: ['BE'],
        style: {},
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
      console.log(e);
      this.$emit('addressIsChosen', e.suggestion);
    });
  },
};
</script>

<style lang="css" scoped>
</style>
