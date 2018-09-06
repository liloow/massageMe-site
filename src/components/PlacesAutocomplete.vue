<template>
  <label>
    <input id="address-input" ref="places">
  </label>
</template>
<script>
import places from 'places.js';
import {mapGetters} from 'vuex';
export default {
  name: 'PlacesAutocomplete',
  computed: {
    ...mapGetters({
      steps: 'getSteps',
    }),
  },
  data() {
    return {
      config: {
        container: null,
        type: 'address',
        countries: ['BE'],
        style: {
          'font-size': '1rem',
        },
        useDeviceLocation: false,
      },
      adress: null,
    };
  },
  mounted() {
    this.config.container = this.$refs.places;
    const placesAutocomplete = places(this.config);
    if (this.steps.address && this.steps.address.value) {
      this.$emit('addressExists', this.steps.address);
      placesAutocomplete.setVal(this.steps.address.value);
    }
    placesAutocomplete.on('change', e => {
      this.$emit('addressIsChosen', e.suggestion);
    });
    this.$refs.places.addEventListener('focus', e => {
      if (this.config.useDeviceLocation) return false;
      this.config.useDeviceLocation = true;
      navigator.geolocation.watchPosition(() => places(...this.config));
    });
  },
};
</script>
<style lang="css" scoped>
/* The algolia-places input */
.ap-input, .ap-hint {
  font-size: 1rem;
  font-weight: 400;
  height: 3rem;
}
</style>
