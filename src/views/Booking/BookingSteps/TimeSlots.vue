<template>
  <section class="container">
    <div class="title">
      <h2>
        Selectionnez un creneau
      </h2>
    </div>
    <div class="list">
      <ul class="slots">
        <li class="slot" v-for="slot, i in slotsForDay" :slot-index="slotsForDay.indexOf(slot)" :key="slot.full_date" @click="selectTimeSlot($event, slot)" :selected="pickedSlot ? slot.time === pickedSlot.time : false">
          <p>{{slot.time}}</p>
        </li>
        <li v-if="slotsForDay.length === 0" class="error">Malheureusement, tous nos masseurs sont deja occupes pour cette date...</li>
      </ul>
    </div>
  </section>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: 'TimeSlots',
  props: {
    slotsAvailable: {type: Array, default: () => []},
    date: {type: Array, default: () => ['year', 'month', 'day']},
  },
  computed: {
    ...mapGetters({
      steps: 'getSteps',
    }),
    slotsForDay() {
      if (this.slotsAvailable) {
        return this.slotsAvailable.filter(
          el => el.day == this.date[2] && el.month - 1 == this.date[1]
        );
      }
      return [];
    },
  },
  data() {
    return {
      pickedSlot: null,
    };
  },
  methods: {
    selectTimeSlot(e, slot) {
      let exist = document.querySelector('[selected="selected"]');
      if (e.target === exist && this.pickedSlot) {
        this.pickedSlot = [];
        return this.$emit('slotCleared');
      }
      this.pickedSlot = slot;
      this.$emit('slotSelected', this.pickedSlot);
    },
  },
  mounted() {
    if (this.steps.timeslot) {
      let a = document
        .querySelector(
          `[slot-index="${this.slots.findIndex(
            el => el[0] === this.steps.timeslot[0] && el[1] === this.steps.timeslot[1]
          )}"]`
        )
        .setAttribute('selected', 'selected');
    }
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin: auto;
  text-align: center;
}

ul {
  list-style: none;
  margin: auto;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
  justify-content: space-evenly;
  .slot {
    display: flex;
    width: 40%;
    padding: 0.25em;
    border: solid 1px black;
    margin: 0.5em 0;
    min-width: 100px;
    max-width: 120px;
    &:hover {
      background-color: var(--mm);
      color: white;
    }
    &[selected] {
      background-color: var(--mm);
      color: white;
      p {
        transform: scale(1.5);
        transition: 0.3s all ease;
        text-align: center;
      }
    }
    p {
      margin: auto;
      pointer-events: none;
    }
  }
}

.error {
  font-style: italic;
}
</style>
