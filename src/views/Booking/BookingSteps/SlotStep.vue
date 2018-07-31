<template>
  <section class="container-fluid">
    <div class="row">
    <date-step @dateSelected="handleDateSelection($event)"></date-step>
    </div>
    <div class="row row-mg">
      <div class="column fourth">
        <time-slots v-if="date" :date="date.raw" @slotSelected="handleTimeSelection($event)" @slotCleared="handleTimeSelection()" :slotsAvailable="slotsAvailable"></time-slots>
      </div>
      <div class="column three-fourth">
        <therapist-step v-if="BOOKING_STEP === 3 && date && timeslot" :date="date.raw" :timeslot="timeslot" :therapists="therapists" @therapistSelected="handleTherapistSelection($event)"></therapist-step>
      </div>
    </div>
  </section>
</template>
<script>
import DateStep from './DateStep';
import TimeSlots from './TimeSlots';
import TherapistStep from './TherapistStep';
import {mapGetters} from 'vuex';
import {prebook} from '@/api';
export default {
  name: 'SlotStep',
  props: ['therapists'],
  computed: {
    ...mapGetters({
      steps: 'getSteps',
      BOOKING_STEP: 'getBookingStep',
      slotsAvailable: 'getSlotsAvailable',
    }),
  },
  data() {
    return {
      date: null,
      timeslot: null,
      therapist: null,
    };
  },
  components: {
    DateStep,
    TimeSlots,
    TherapistStep,
  },
  methods: {
    handleDateSelection(e) {
      this.$store.dispatch('fetchSlotsAvailable', e.raw);
      this.$store.commit('backToStep', 2);
      this.date = null;
      this.therapist = null;
      this.timeslot = null;
      this.$store.commit('storeStep', {timeslot: this.timeslot});
      setTimeout(() => (this.date = e), 0);
    },
    handleTimeSelection(e) {
      this.timeslot = null;
      this.therapist = null;
      setTimeout(() => (this.timeslot = e), 0);
      this.storeSlot(this.date, e);
      this.$store.dispatch('fetchSlotsAvailable', this.date.raw);
      if (!e) this.$store.dispatch('previousStep');
    },
    storeSlot(date, timeslot) {
      this.$store.commit('storeStep', {date: date});
      this.$store.commit('storeStep', {timeslot: timeslot});
      if (this.BOOKING_STEP === 2) this.$store.dispatch('nextStep');
    },
    handleTherapistSelection(e) {
      this.therapist = e;
      prebook(this.therapist.id, this.timeslot.fullDate);
      this.$store.commit('storeStep', {therapist: e});
      this.$store.dispatch('nextStep');
    },
  },
  mounted() {
    this.date = this.steps.date;
    this.timeslot = this.steps.timeslot;
    if (this.date) this.$store.dispatch('fetchSlotsAvailable', this.date.raw);
  },
};
</script>
<style lang="scss" scoped>
.row.row-mg {
  margin: auto;
}

.row {
  display: flex;
  width: 95%;
  margin: auto;
  .column {
  }
  .column.fourth {
    width: 25%;
  }
  .column.three-fourth {
    width: 75%;
  }
}
</style>
