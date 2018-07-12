<template>
  <section class="container-fluid">
    <div class="row">
    <date-step @dateSelected="handleDateSelection($event)"></date-step>
    </div>
    <div class="row">
      <div class="column fourth">
        <time-slots v-if="date" @slotSelected="handleTimeSelection($event)"></time-slots>
      </div>
      <div class="column three-fourth">
        <therapist-step v-if="timeslot" :date="date" :timeslot="timeslot" :therapists="therapists" @therapistSelected="handleTherapistSelection($event)"></therapist-step>
      </div>
    </div>
  </section>
</template>

<script>
import DateStep from './DateStep';
import TimeSlots from './TimeSlots';
import TherapistStep from './TherapistStep';
export default {
  name: 'SlotStep',
  props: ['therapists'],
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
      this.date = null;
      this.therapist = null;
      this.timeslot = null;
      setTimeout(() => (this.date = e), 0);
    },
    handleTimeSelection(e) {
      this.timeslot = null;
      this.therapist = null;
      setTimeout(() => (this.timeslot = e), 0);
      this.storeSlot(this.date, e);
    },
    storeSlot(date, timeslot) {
      this.$store.commit('storeStep', { date: date });
      this.$store.commit('storeStep', { timeslot: timeslot });
    },
    handleTherapistSelection(e) {
      this.therapist = e;
      this.$store.commit('storeStep', { therapist: e });
      this.$store.dispatch('nextStep');
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  width: 100%;
}

.row {
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
