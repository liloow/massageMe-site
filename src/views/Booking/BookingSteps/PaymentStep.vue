<template>
  <section>
    <div class="container">
      <summary-step :status="state" @clientAgreed="initPayment($event)" />
    </div>
  </section>
</template>
<script>
import SummaryStep from './SummaryStep';
import {mapGetters} from 'vuex';
import {createPayment, storePaymentAttempt, fetchPayment, getPaymentStatus} from '@/api';
export default {
  name: 'PaymentStep',
  computed: {
    ...mapGetters({
      user: 'getUser',
      steps: 'getSteps',
    }),
  },
  data() {
    return {
      state: 'idle',
    };
  },
  methods: {
    async initPayment(e) {
      await storePaymentAttempt({order: this.steps, paymentId: this.steps.payment.paymentId});
      window.location.href = this.steps.payment._links.checkout.href;
    },
  },
  async mounted() {
    if (this.$route.query.id) {
      this.state = 'loading';
      const steps = (await fetchPayment(this.$route.query.id)).data.full_order;
      this.$store.commit('storeStep', steps);
      const status = (await getPaymentStatus(steps.payment.id)).data.status;
      if (status === 'paid') this.state = 'success';
      else this.state = 'failure';
    }
    const payment = (await createPayment({
      value: this.steps.massage.price.toFixed(2),
      currency: 'EUR',
      description: this.steps.massage.description,
      redirectUrl: window.location.href,
      webhookUrl: `${window.location.protocol}//5.39.77.184/webhookUrl`,
    })).data;
    this.$store.commit('storeStep', {payment});
  },
  components: {
    SummaryStep,
  },
};
</script>
<style lang="scss" scoped>
$mm: #044169;
.payment-method {
  background-color: #fdfdfd;
  width: 85%;
  padding: 2em 2em 0.2em;
  margin: auto;
}

.payment-method * {
  font-family: Source Code Pro, Consolas, Menlo, monospace;
  font-size: 1.1rem;
  font-weight: 500;
}

.payment-method .row {
  display: -ms-flexbox;
  display: flex;
  margin: 0 auto 10px;
  width: 90%;
  justify-content: space-between;
}

.payment-method .field {
  position: relative;
  width: 100%;
  height: 3em;
}

.payment-method .field.half-width {
  width: 48%;
}

.payment-method .baseline {
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  bottom: 1px;
  background-color: var(--mm);
  opacity: 0.2;
  transition: background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 100;
}

.payment-method label {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 25%;
  color: var(--mm);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transform-origin: 0 50%;
  cursor: text;
  font-weight: 300;
  transition-property: color, transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.payment-method .input {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  color: var(--mm);
  background-color: transparent;
  line-height: 1.5;
}

.payment-method .input::-webkit-input-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.payment-method .input::-moz-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.payment-method .input:-ms-input-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.payment-method .input.StripeElement {
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: opacity;
}

.payment-method .input.focused,
.payment-method .input:not(.empty) {
  opacity: 1;
}

.payment-method .input.focused::-webkit-input-placeholder,
.payment-method .input:not(.empty)::-webkit-input-placeholder {
  color: #cfd7df;
}

.payment-method .input.focused::-moz-placeholder,
.payment-method .input:not(.empty)::-moz-placeholder {
  color: #cfd7df;
}

.payment-method .input.focused:-ms-input-placeholder,
.payment-method .input:not(.empty):-ms-input-placeholder {
  color: #cfd7df;
}

.payment-method .input.focused + label,
.payment-method .input:not(.empty) + label {
  color: #aab7c4;
  transform: scale(0.85) translateY(-25px);
  cursor: default;
}

.payment-method .input.focused + label {
  color: var(--mm);
}

.payment-method .input.invalid + label {
  color: #ffa27b;
}

.payment-method .input.focused + label + .baseline {
  background-color: var(--mm);
  opacity: 0.7;
}

.payment-method .input.focused.invalid + label + .baseline {
  background-color: #e25950;
}

.payment-method input,
.payment-method button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-style: none;
}

.payment-method input:-webkit-autofill {
  -webkit-text-fill-color: #e39f48;
  transition: background-color 100000000s;
  -webkit-animation: 1ms void-animation-out;
}

.payment-method .StripeElement--webkit-autofill {
  background: transparent !important;
}

.payment-method input,
.payment-method button {
  -webkit-animation: 1ms void-animation-out;
}

.payment-method button {
  display: block; // width: 60%;
  height: 3em;
  margin-top: 2em;
  padding-left: 3em;
  padding-right: 3em;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 0;
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

////////////////////////////////////////////
.notAgreed {
  opacity: 0.5;
  pointer-events: none;
}

.accordion,
.accordion-list {
  border: 1px solid #ddd;
  &:after {
    content: '';
    display: block;
    height: 1em;
    width: 100%;
    background-color: darken($mm, 10%);
  }
  max-width: 1200px;
  margin: auto;
}

.accordion header,
.accordion__panel {
  background-color: #fdfdfd;
  font-size: 1em;
  line-height: 1.5em;
}

.accordion p {
  padding: 1em 2em 1em 2em;
}

.accordion {
  position: relative;
  background-color: #fdfdfd;
  a {
    pointer-events: none;
  }
}

.accordionTitle,
.accordion__Heading {
  background-color: var(--mm);
  text-align: center;
  font-weight: 700;
  padding: 1.2em;
  display: block;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.5s ease-in-out;
  border-bottom: 1px solid darken($mm, 5%);
  &:before {
    content: '+';
    font-size: 1.5em;
    line-height: 0.5em;
    float: left;
    transition: transform 0.5s ease-in-out;
  }
  &:hover {
    background-color: darken($mm, 10%);
  }
}

.accordionTitleActive,
.accordionTitle.is-expanded {
  background-color: darken($mm, 10%);
  &:before {
    transform: rotate(-225deg);
  }
}

.accordionItem {
  height: auto;
  overflow: hidden; //SHAME: magic number to allow the accordion to animate
  max-height: 50em;
  transition: max-height 1s;

  @media screen and (min-width: 48em) {
    max-height: 100vh;
    transition: max-height 1s;
  }
}

.accordionItem.is-collapsed {
  max-height: 0;
}

.no-js .accordionItem.is-collapsed {
  max-height: auto;
}

.animateIn {
  animation: accordionIn 0.45s normal ease-in-out both 1;
}

.animateOut {
  animation: accordionOut 0.45s alternate ease-in-out both 1;
}

@keyframes accordionIn {
  0% {
    opacity: 0;
    transform: scale(0.9) rotateX(-60deg);
    transform-origin: 50% 0;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes accordionOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9) rotateX(-60deg);
  }
}
</style>
