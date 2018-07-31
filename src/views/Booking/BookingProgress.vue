<template>
  <section class="container-fluid">
    <div class="step-wrapper">
      <ul class="steps">
        <li class="step" @click="gotBackToStep(0)">
          <h5 class="step-title">Ou ?</h5>
          <p v-if="steps.address" class="step">
          {{steps.address.name}} <br>
          {{steps.address.postcode}} {{steps.address.city}}
          </p>
        </li>
        <li class="step" @click="gotBackToStep(1)">
          <h5 class="step-title">Quoi ?</h5>
          <p  v-if="steps.massage" class="step-body">Massage <strong>{{steps.massage.name}}</strong></p>
        </li>
        <li class="step" @click="gotBackToStep(2)">
          <h5 class="step-title">Quand ?</h5>
          <p v-if="steps.date" class="step-body">
            {{steps.date.formattedDate | capitalize }} <br>
            <span v-if="steps.timeslot">A {{steps.timeslot.time}}</span>
          </p>
        </li>
        <li class="step" @click="gotBackToStep(3)">
          <h5 class="step-title">Qui ?</h5>
          <p v-if="steps.therapist" class="step-body">{{steps.therapist.fullname}}</p>
        </li>
        <li class="step" @click="gotBackToStep(4)">
          <h5 class="step-title">Confirmation</h5>
          <p class="step-body">{{steps.payment}}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import {mapGetters, mapState} from 'vuex';
import {capitalize} from '@/filters';
export default {
  name: 'BookingProgress',
  filters: {
    capitalize,
  },
  computed: {
    ...mapGetters({
      steps: 'getSteps',
      BOOKING_STEP: 'getBookingStep',
    }),
    progressInc() {
      if (this.BOOKING_STEP > this.progress) this.progress = this.BOOKING_STEP;
      return this.progress;
    },
  },
  data() {
    return {
      progress: 0,
    };
  },
  methods: {
    gotBackToStep(step) {
      if (step <= this.progressInc) this.$store.commit('backToStep', step);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  padding: 0;
}

.step-wrapper {
  margin-top: 0.5em;
  display: block;
  ul.steps {
    display: flex;
    width: 100%;
    list-style: none;
    flex-flow: row nowrap;
    justify-content: space-between;
    li.step {
      flex: 1 0 0px;
      margin: 0 0.2em;
      padding: 0.2em 0.5em;
      display: inline-block;
      // border: solid 1px black;
      -webkit-box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
      -moz-box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
      box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
      p {
        margin: 0 0.2rem;
      }
      h5 {
        font-weight: 700;
        font-size: 1rem;
        text-decoration: underline;
        padding-bottom: 0;
        letter-spacing: 0.05rem;
      }
    }
  }
}
</style>
