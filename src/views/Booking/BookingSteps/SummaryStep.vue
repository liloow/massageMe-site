<template>
  <section class="container">
    <div class="step-wrapper">
      <h2 @click="collapsed = !collapsed">Resume de votre commande</h2>
      <ul :class="collapsed ? 'collapsed' : ''" class="steps">
        <li class="step">
          <div class="row">
            <h5 class="step-title">L'adresse : </h5>
            <p v-if="steps.address" class="step-body">
              {{steps.address.name}}
              <br> {{steps.address.postcode}} {{steps.address.city}}
            </p>
          </div>
        </li>
        <li class="step">
          <div class="row">
            <h5 class="step-title">Le massage : </h5>
            <p class="step-body">{{steps.massage ? steps.massage.name : null}}</p>
          </div>
        </li>
        <li class="step">
          <div class="row">
            <h5 class="step-title">Date et heure : </h5>
            <p class="step-body">
              {{steps.date.formattedDate}} a {{steps.timeslot.time}}
            </p>
          </div>
        </li>
        <li class="step">
          <div class="row">
            <h5 class="step-title">Par : </h5>
            <p class="step-body">{{steps.therapist.fullname}}</p>
          </div>
        </li>
        <li class="step">
          <div class="row">
            <h5 class="step-title">Total : </h5>
            <p class="step-body">60 EUR.</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="step-wrapper">
      <ul class="steps">
        <li class="step">
          <button v-if="state === 'processing'" id="loader" class="btn btn-loading" aria-busy="true" aria-label="Loading" role="progressbar">
            <div class="spinner">
              <div class="bounce1"></div>
              <div class="bounce2"></div>
              <div class="bounce3"></div>
              <span>Processing...</span>
            </div>
          </button>
          <button v-else class="btn btn-filled" :class="state === 'success' ? 'success' : ''" @click="confirm($event)">{{state === 'success' ? 'Success !!' : 'Valider'}}
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: 'SummaryStep',
  props: {
    status: {
      type: String,
    },
  },
  computed: {
    ...mapGetters({
      steps: 'getSteps',
    }),
  },
  data() {
    return {
      collapsed: false,
      state: 'idle',
    };
  },
  methods: {
    confirm(e) {
      this.collapsed = true;
      this.state = 'processing';
      // this.$emit('clientAgreed', e);
    },
  },
  mounted() {
    if (this.$route.query.id && this.state !== 'success') this.state = 'processing';
  },
  updated() {
    if (this.status === 'success') this.state = 'success';
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: none;
  width: 60%;
  min-width: 500px;
}

.collapsed {
  max-height: 0px !important;
  transition: max-height 1s;
}

.step-wrapper {
  width: 95%;
  min-width: 400px;
  max-width: 600px;
  margin-top: 0.5em;
  margin: auto;
  padding: 1em;
  display: block;
  -webkit-box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
  -moz-box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
  box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
  h2 {
    font-family: 'Oswald', Arial, sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 0.2em;
    &:before {
      padding-right: 3rem;
      content: '>';
      font-size: 2rem;
      line-height: 2rem;
      margin-left: -2rem;
    }
    &:after {
      transition: transform 0.5s ease-in-out;
      transform: rotate(90deg);
    }
  }
  ul.steps {
    display: flex;
    overflow: hidden;
    list-style: none;
    flex-flow: column nowrap;
    justify-content: space-between;
    max-height: 50vh;
    transition: max-height 1s;
    li.step {
      flex: 1 1 0px;
      margin: 0 auto;
      width: 80%;
      padding: 0.1em 0.5em;
      display: inline-block; // border: solid 1px black;
      button {
        padding-left: 2em;
        padding-right: 2em;
        display: block; // width: 60%;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        margin-bottom: 0;
        &.btn-filled.success {
          background-color: green;
          transform: scale(1.5);
          margin-bottom: 1rem;
        }
      }
      #loader.btn-loading {
        color: var(--mm);
        border: solid 2px var(--mm);
        border-style: solid;
        white-space: nowrap;
      }
      .spinner {
        text-align: center;
        margin-right: 15%;
        span {
          margin-left: 15%;
        }
      }
      .spinner > div {
        width: 18px;
        height: 18px;
        background-color: var(--mm);
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      }
      .spinner .bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
      }
      .spinner .bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
      }
      @-webkit-keyframes sk-bouncedelay {
        0%,
        80%,
        100% {
          -webkit-transform: scale(0);
        }
        40% {
          -webkit-transform: scale(1);
        }
      }
      @keyframes sk-bouncedelay {
        0%,
        80%,
        100% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        40% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
      .row {
        display: flex;
        margin: auto;
        padding-top: 1em;
        p {
          display: flex;
          flex: 1.5;
          justify-content: flex-start;
          margin: auto;
          padding-left: 5em;
          text-align: left;
        }
        h5 {
          display: flex;
          flex: 1;
          justify-content: flex-end;
          font-family: 'Oswald', Arial, sans-serif;
          font-weight: 600;
          font-size: 1.2em;
          text-decoration: underline;
          margin: 0;
        }
      }
    }
  }
}
</style>
