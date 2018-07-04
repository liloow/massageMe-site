<template>
  <section class="container">
    <div class="title">
      <h2>
        Selectionnez un creneau
      </h2>
    </div>
    <div class="list">
      <ul class="slots">
        <li class="slot" v-for="slot in slots" :slot-index="slots.indexOf(slot)" :key="slot" @click="selectTimeSlot($event, slot)" :selected="pickedSlot === slot">
          <p>{{slot}}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimeSlots',

  data() {
    return {
      slots: ['8:00', '9:30', '11:00', '13:00', '14:30', '16:00', '17:30', '19:00', '20:30'],
      pickedSlot: null,
    };
  },
  methods: {
    selectTimeSlot(e, slot) {
      this.pickedSlot = slot;
      this.$emit('slotSelected', this.pickedSlot);
    },
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
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  .slot {
    display: inline-block;
    padding: 1em 2em;
    border: solid 1px black;
    margin: 0.5em 0;
    &:hover {
      background-color: var(--mm);
      color: white;
    }
    &[selected] {
      background-color: var(--mm);
      color: white;
      p {
        transform: scale(1.5);
        transition: all 0.4s ease;
        text-align: center;
      }
    }
    p {
      margin: 0;
      pointer-events: none;
    }
  }
}
</style>
