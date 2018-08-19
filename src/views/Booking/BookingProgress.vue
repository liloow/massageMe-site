<template>
  <section class="container-fluid">
    <div class="step-wrapper">
      <ul class="steps">
        <li v-if="steps.address" class="step" @click="gotBackToStep(0)">
          <h5 class="step-title">Ou ?</h5>
          <p class="step">
          {{steps.address.name}} <br>
          {{steps.address.postcode}} {{steps.address.city}}
          </p>
        </li>
        <li v-if="steps.massage" class="step" @click="gotBackToStep(1)">
          <h5 class="step-title">Quoi ?</h5>
          <p  class="step-body">Massage <strong>{{steps.massage.name}}</strong></p>
        </li>
        <li v-if="steps.date" class="step" @click="gotBackToStep(2)">
          <h5 class="step-title">Quand ?</h5>
          <p class="step-body">
            {{steps.date.formattedDate | capitalize }} <br>
            <span v-if="steps.timeslot">A {{steps.timeslot.time}}</span>
          </p>
        </li>
        <li v-if="steps.therapist" class="step" @click="gotBackToStep(3)">
          <div class="columns">
            <div class="column">
          <h5 class="step-title">Qui ?</h5>
              <p class="step-body">{{steps.therapist.fullname}}</p>
            </div>
            <div class="thumb">
              <img :src="steps.therapist.profile_pic" />
            </div>
          </div>
        </li>
<!--         <li class="step" @click="gotBackToStep(4)">
          <h5 class="step-title">Confirmation</h5>
          <p class="step-body">{{steps.payment}}</p>
        </li> -->
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
  margin: auto;
  margin-top: 1rem;
  display: block;
  height: 5rem;
  &:hover {
    ul.steps {
      li.step:nth-child(1) {
        position: absolute;
        left: 0%;
      }
      li.step:nth-child(2) {
        position: absolute;
        left: 25%;
      }
      li.step:nth-child(3) {
        position: absolute;
        left: 50%;
      }
      li.step:nth-child(4) {
        position: absolute;
        left: 75%;
      }
    }
  }
  ul.steps {
    display: flex;
    width: 95%;
    margin: auto;
    height: 4.5rem;
    list-style: none;
    flex-flow: row nowrap;
    justify-content: space-between;
    li.step {
      left: 0;
      transition: all 1.5s ease;
      position: absolute;
      width: 23%;
      background-color: ghostwhite;
      height: 4.2rem;
      flex: 1 0 0px;
      margin: 0 0.2em;
      padding: 0.2em 0.5em;
      display: inline-block;
      // border: solid 1px black;
      -webkit-box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
      -moz-box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
      box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
      .columns {
        display: flex;
        .column {
          width: 50%;
        }
        .thumb {
          height: 4.2rem;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          img {
            width: 3.6rem;
            border-radius: 1rem;
          }
        }
      }
      p {
        margin: 0 0.2rem;
      }
      h5 {
        font-weight: 700;
        font-size: 1rem;
        text-decoration: underline;
        padding-bottom: 0;
        letter-spacing: 0.05rem;
        cursor: pointer;
      }
    }
  }
}
</style>
