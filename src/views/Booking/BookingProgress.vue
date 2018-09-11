<template>
  <section class="container-fluid">
    <div class="step-wrapper">
      <ul ref="progress" class="steps">
        <li v-if="steps.address" class="step" @click="getBackToStep($event,0)">
          <h5 class="step-title">Ou ?</h5>
          <p class="step-body">
            {{steps.address.name}}
            <br> {{steps.address.postcode}} <span class="accent">{{steps.address.city}}</span>
          </p>
        </li>
        <li v-if="steps.address" class="step" @click="getBackToStep($event,1)">
          <h5 class="step-title">Quoi ?</h5>
          <p v-if="steps.massage" class="step-body">Massage <span class="accent">{{steps.massage.name}}</span></p>
        </li>
        <li v-if="steps.massage" class="step" @click="getBackToStep($event,2)">
          <h5 class="step-title">Quand ?</h5>
          <p v-if="steps.date" class="step-body">
            {{steps.date.formattedDate | capitalize }}
            <br>
            A <span v-if="steps.timeslot" class="accent">{{steps.timeslot.time}}</span>
          </p>
        </li>
        <li v-if="steps.timeslot" class="step" @click="getBackToStep($event,3)">
          <div class="columns">
            <div class="column">
              <h5 class="step-title">Qui ?</h5>
              <p v-if="steps.therapist" class="step-body">{{steps.therapist.fullname}}</p>
            </div>
            <div class="thumb">
              <img v-if="steps.therapist" :src="steps.therapist.profile_pic" />
            </div>
          </div>
        </li>
        <li v-if="steps.therapist" class="step" @click="getBackToStep($event,4)">
          <h4 class="step-title">Payement</h4>
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
    progress() {
      const steps = Object.entries(this.steps).filter(el => el[0] !== 'payment' && el[1]).length;
      if (this.BOOKING_STEP >= steps) {
        return this.BOOKING_STEP;
      } else if (this.hidden) {
        this.hidden = null;
      }
      return steps;
    },
  },
  data() {
    return {
      hidden: null,
      stepsMap: ['address', 'massage', 'date', 'timeslot', 'therapist', 'payment'],
    };
  },
  methods: {
    getBackToStep(e, step) {
      if (step <= this.progress) this.$store.commit('backToStep', step);
    },
    emphase(e) {
      let elems = [...this.$refs.progress.querySelectorAll('li:not(.hover)')];
      if (e.type === 'mouseleave' && elems) {
        elems.forEach(el => el.classList.remove('fade'));
        e.target.classList.remove('hover', 'fade');
        return;
      }
      e.target.classList.add('hover');
      elems.forEach(el => el.classList.add('fade'));
    },
  },
  updated() {
    [...this.$refs.progress.querySelectorAll('li')].forEach(el => {
      el.onmouseenter = this.emphase;
      el.onmouseleave = this.emphase;
    });
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
  width: 95%;
  ul.steps {
    display: flex;
    margin: auto;
    height: 4.5rem;
    list-style: none;
    flex-flow: row nowrap;
    justify-content: space-between;
    position: relative;
    li.step:nth-child(1) {
      position: absolute;
      left: 0%;
    }
    li.step:nth-child(2) {
      animation: grow 1s linear;
      position: absolute;
      left: 25%;
    }
    li.step:nth-child(3) {
      animation: grow 1s linear;
      position: absolute;
      left: 50%;
    }
    li.step:nth-child(4) {
      animation: grow 1s linear;
      position: absolute;
      left: 75%;
    }
    li.step:nth-child(5):last-child {
      position: absolute;
      left: 100%;
      display: none;
    }
    li.step:last-child {
      overflow: hidden;
      opacity: 0.3;
      animation: small-grow 2s linear;
      width: 11%;
      display: flex;
      .column {
        margin: auto;
      }
      h5 {
        padding-top: 0;
        font-size: 2vw;
        text-align: center;
        margin: auto;
      }
      p {
        opacity: 0;
      }
    }
    li.step {
      left: 0;
      position: relative;
      width: 23%;
      animation: grow 0.8s linear;
      transition: all 0.5s ease;
      background-color: ghostwhite;
      height: 4.2rem;
      flex: 1 0 0px;
      margin: 0 0.2em;
      padding: 0.2em 0.5em;
      display: inline-block; // border: solid 1px black;
      -webkit-box-shadow: rgba(0, 0, 0, 0.23) 0px 0.2rem 0.7rem 0.01rem;
      -moz-box-shadow: rgba(0, 0, 0, 0.23) 0px 0.2rem 0.7rem 0.01rem;
      box-shadow: rgba(0, 0, 0, 0.23) 0px 0.2rem 0.7rem 0.01rem;
      overflow: hidden;
      .accent {
        font-weight: bold;
        font-size: 0.88rem;
      }
      > * {
        pointer-events: none;
      }
      &.hover {
        opacity: 1;
        cursor: pointer;
      }
      &.fade:not(.hover) {
        opacity: 0.2;
      }
      .columns {
        display: flex;
        flex: 1;
        .column {
          width: 50%;
          flex: 1;
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
            margin-right: 1rem;
          }
        }
      }
      p {
        margin: 0.1rem 0.2rem 0;
        opacity: 1;
        transition: all 1s ease;
        font-size: 0.9rem;
        line-height: 1.3;
      }
      h5 {
        transition: all 1s ease;
        font-size: 1rem;
        text-decoration: underline;
        letter-spacing: 0.05rem;
        cursor: pointer;
        padding: 0.3rem 0 0.2rem;
      }
    }
  }
  @keyframes grow {
    0% {
      width: 11%;
      h5 {
        font-size: 2vw;
      }
    }
    100% {
      width: 23%;
      h5 {
        font-size: 1rem;
      }
    }
  }
  @keyframes small-grow {
    0% {
      width: 0%;
      opacity: 0;
    }
    50% {
      width: 0%;
      opacity: 0;
    }
    100% {
      width: 11%;
    }
  }
}

@media screen and (max-width: 769px) {
  .step-wrapper {
    ul.steps {
      li.step:last-child {
        width: 23%;
        opacity: 0.7;
      }
      h5 {
        font-size: 1rem;
      }
    }
  }
}
</style>
