<template>
  <section>
    <div class="container">
      <summary-step @clientAgreed="agreed = true"></summary-step>
      <div class="container">
        <div class="accordion" :class="{notAgreed: agreed ? false : true}">
          <header @click="handleOpenClose($event)">
            <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" class="accordion-title accordionTitle js-accordionTrigger is-collapsed">Carte de Credit</a>
          </header>
          <div class="accordion-content accordionItem is-expanded" :class="agreed ? '' : 'is-collapsed' " id="accordion1" aria-hidden="false">
            <div class="container">
              <div id="credit-card" class="payment-method ">
                <stripe-elements></stripe-elements>
              <!--   <form @input="check($event)">
                  <div data-locale-reversible>
                    <div class="row">
                      <div class="field">
                        <input id="fullName" :class="{input: true, empty: fullname ? false : true}" type="text" placeholder="185 Berry St" required="" v-model="fullname" @blur="check($event)" autocomplete="fullName">
                        <label for="fullName" data-tid="elements_examples.form.address_label">Name</label>
                        <div class="baseline"></div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="field">
                      <input id="card-number" :class="{input: true, empty: cardNumber ? false : true}" type="text" placeholder="185 Berry St" required="" v-model="cardNumber" autocomplete="address-line1">
                      <label for="card-number" data-tid="elements_examples.form.card_number_label">Card number</label>
                      <div class="baseline"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="field half-width">
                      <input id="card-expiry" :class="{input: true, empty: expirationDate ? false : true}" type="text" placeholder="185 Berry St" required="" v-model="expirationDate" autocomplete="address-line1">
                      <label for="card-expiry" data-tid="elements_examples.form.card_expiry_label">Expiration</label>
                      <div class="baseline"></div>
                    </div>
                    <div class="field half-width">
                      <input id="card-cvc" :class="{input: true, empty: address ? false : true}" type="number" placeholder="" required="" v-model="cvc" autocomplete="address-line1">
                      <label for="card-cvc" data-tid="elements_examples.form.card_cvc_label">CVC</label>
                      <div class="baseline"></div>
                    </div>
                  </div>
                  <button v-if="state === 'processing'" id="loader" class="btn btn-loading" aria-busy="true" aria-label="Loading" role="progressbar">
                    <div class="spinner">
                      <div class="bounce1"></div>
                      <div class="bounce2"></div>
                      <div class="bounce3"></div>
                      <span>Processing...</span>
                    </div>
                  </button>
                  <button v-else class="btn btn-filled" type="submit" data-tid="elements_examples.form.pay_button" @click.prevent="">Payer {{order.price}} EUR</button>
                </form> -->
              </div>
            </div>
          </div>
          <header @click="handleOpenClose($event)">
            <a href="#accordion1" aria-expanded="false" aria-controls="accordion2" class="accordion-title accordionTitle js-accordionTrigger is-collapsed">Paypal</a>
          </header>
          <div class="accordion-content accordionItem is-collapsed" id="accordion2" aria-hidden="false">
            <div class="container">
              <!-- <div id="bancontact" class="payment-method">
                <form @input="check($event)">
                  <div data-locale-reversible>
                    <div class="row">
                      <div class="field">
                        <input id="name" :class="{input: true, empty: fullname ? false : true}" type="text" v-model="fullname" placeholder="185 Berry St" required="" autocomplete="name">
                        <label for="name" data-tid="elements_examples.form.address_label">Name</label>
                        <div class="baseline"></div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="field">
                        <input id="email" :class="{input: true, empty: email ? false : true}" type="email" placeholder="185 Berry St" required="" autocomplete="email">
                        <label for="email" data-tid="elements_examples.form.address_label">Email</label>
                        <div class="baseline"></div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="field">
                      <input id="address" :class="{input: true, empty: address ? false : true}" type="text" placeholder="185 Berry St" required="" autocomplete="address-line1">
                      <label for="address" data-tid="elements_examples.form.card_number_label">Adresse</label>
                      <div class="baseline"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="field half-width">
                      <input id="postal-code" :class="{input: true, empty: postalCode ? false : true}" type="text" placeholder="185 Berry St" required="" autocomplete="postal">
                      <label for="postal-code" data-tid="elements_examples.form.card_expiry_label">Code Postal</label>
                      <div class="baseline"></div>
                    </div>
                    <div class="field half-width">
                      <input id="city" :class="{input: true, empty: city ? false : true}" type="text" placeholder="Bruxelles" required="" autocomplete="city">
                      <label for="city" data-tid="elements_examples.form.card_cvc_label">Ville</label>
                      <div class="baseline"></div>
                    </div>
                  </div>
                  <button class="btn btn-filled" id="bancontact-button">Payer {{order.price}} EUR</button>
                </form>
              </div> -->
<form id="payment-form" method="POST" action="https://merchant.com/charge-card">
    <div class="frames-container">
      <!-- form will be added here -->
    </div>
    <!-- add submit button -->
    <button id="pay-now-button" type="submit" disabled>Pay now</button>
  </form>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
<script>
import SummaryStep from './SummaryStep';
import StripeElements from '@/components/StripeElements';
import {mapGetters} from 'vuex';
export default {
  name: 'PaymentStep',
  computed: {
    ...mapGetters({
      user: 'getUser',
    }),
  },
  data() {
    return {
      agreed: false,
      order: {
        price: 60,
      },
      fullname: null,
      email: null,
      cardNumber: null,
      cvc: null,
      expirationDate: null,
      address: null,
      city: null,
      postalCode: null,
      state: 'idle',
    };
  },
  methods: {
    check(e) {
      console.log(e.target);
      if (e.target.value.length === 0) e.target.classList.add('empty');
      else e.target.classList.remove('empty');
    },
    handleFocus(e) {
      if (e.target.nodeName === 'INPUT') {
        if (e.type === 'focus') e.target.classList.add('focused');
        else e.target.classList.remove('focused');
      }
    },
    handleOpenClose(e) {
      let fc = e.target.firstChild.classList;
      let ns = e.target.nextSibling.classList;
      let exist = document.querySelector('.accordion-content.is-expanded');
      if (exist) {
        exist.classList.toggle('is-expanded');
        exist.classList.toggle('is-collapsed');
        exist.previousSibling.firstChild.classList.toggle('is-expanded');
        exist.previousSibling.firstChild.classList.toggle('is-collapsed');
        console.log(e.target, exist);
        if (e.target === exist.previousSibling) return;
      }
      fc.toggle('is-collapsed');
      fc.toggle('is-expanded');
      ns.toggle('is-collapsed');
      ns.toggle('is-expanded');
      e.target.nextSibling.setAttribute(
        'aria-hidden',
        !e.target.nextSibling.getAttribute('aria-hidden')
      );
    },
  },
  mounted() {
    if (this.user) {
      this.email = this.user.email;
      this.fullname = this.user.fullname;
    }
    // Floating labels
    const inputs = [...document.querySelectorAll('.payment-method .input')];
    inputs.forEach(input => {
      input.addEventListener('focus', e => this.handleFocus(e));
      input.addEventListener('blur', e => this.handleFocus(e));
      this.check({target: input});
    });
  },
  components: {
    SummaryStep,
    StripeElements,
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
