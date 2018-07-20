<template>
  <section class="container">
    <div class="title">
      <h2>Selectionnez votre masseur / masseuse</h2>
    </div>
    <div class="container-fluid">
      <div class="cards">
        <div v-for="therapist in therapistsForSlot" class="card-wrapper" :key="therapist.id" :id="`t${therapist.id}`" @click="handleSelection($event, therapist)" @mouseenter="emphaseCard($event)" @mouseleave="emphaseCard($event)">
          <figure class="card">
            <div class="image"><img src="@/assets/img/staff/avatar1.png" />
            </div>
            <figcaption>
              <h2>{{therapist.fullname}}</h2>
              <p>{{therapist.short}}</p>
            </figcaption>
          </figure>
        </div>
      <div class="ui-helper"></div>
      </div>
    </div>
  </section>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: 'TherapistStep',
  props: {
    date: Array,
    timeslot: Object,
  },
  computed: {
    ...mapGetters({
      steps: 'getSteps',
      slotsAvailable: 'getSlotsAvailable',
      therapists: 'getTherapists',
    }),
    therapistsForSlot() {
      if (this.timeslot) {
        let slot = [...this.slotsAvailable].find(el => el.time === this.timeslot.time);
        if (slot) {
          return Array.from(slot.therapists, id => [...this.therapists].find(t => t.id == id));
        }
      }
    },
  },
  data() {
    return {
      pickedTherapist: null,
    };
  },
  methods: {
    handleSelection(e, therapist) {
      this.pickedTherapist = therapist;
      this.$emit('therapistSelected', this.pickedTherapist);
    },
    emphaseCard(e) {
      let cards = [...document.querySelectorAll('.card-wrapper:not(.hover)')];
      if (e.type === 'mouseleave' && cards) {
        cards.forEach(el => el.classList.remove('fade'));
        e.target.classList.remove('hover', 'fade');
        return;
      }
      e.target.classList.add('hover');
      cards.forEach(el => el.classList.add('fade'));
    },
  },
  components: {},
  mounted() {
    if (this.steps.therapist) {
      let cards = [...document.querySelectorAll('.card-wrapper:not(.hover)')];
      cards.forEach(el => el.classList.add('fade'));
      this.pickedTherapist = this.steps.therapist;
      document.querySelector(`#t${this.steps.therapist.id}`).classList.add('hover');
    }
  },
};
</script>
<style lang="scss" scoped="">
@import url('https://fonts.googleapis.com/css?family=Oswald');
@import url('https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css');
@import url('https://fonts.googleapis.com/css?family=Quattrocento');

.container {
  width: 95%;
}

.cards {
  .ui-helper {
    flex: 1;
  }
  .card-wrapper {
    flex-basis: 0;
    height: auto;
    margin: 2em 1vw 0;
    flex-grow: 0;
    flex-shrink: 0;
    .card {
      font-family: 'Quattrocento', Arial, sans-serif;
      position: relative;
      overflow: hidden;
      margin: 10px 0.5em;
      width: 175px;
      color: #141414;
      text-align: left;
      line-height: 1em;
      font-size: 0.8em;
      justify-content: center;
      background-color: #ffffff;
      border-radius: 0.5em;
      pointer-events: auto;
      transition: 0.5s all ease;
      > div,
      figcaption {
        pointer-events: none;
      }
    }
    &.hover > .card {
      transform: scale(1.2);
    }
    &.fade:not(.hover) > .card {
      opacity: 0.5;
    }
  }
}

.card img {
  width: 100%;
  vertical-align: top;
  justify-content: center;
  pointer-events: none;
}

.card figcaption {
  width: 100%;
  padding: 0 0.5em 0.5em;
  position: relative;
  margin: auto;
  height: auto;
}

.card h2,
.card p {
  margin: 0.7em;
}

.card h2 {
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1.2em;
  font-family: 'Oswald', Arial, sans-serif;
  text-transform: uppercase;
}

.card p {
  font-size: 0.9em;
  letter-spacing: 1px;
  opacity: 0.9;
}

.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: row;
}

.card {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.card-footer {
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 0 0 1em;
}

.no-margin {
  margin: 0;
}

.title {
  display: flex;
  h2 {
    margin: auto;
  }
}
</style>
