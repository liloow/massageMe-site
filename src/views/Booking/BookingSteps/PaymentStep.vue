<template>
  <section>
    <div class="container">
      <div class="payment-wrapper">
        <div class="payment-tabs"></div>
        <div id="paypal" class="payment-method">
          <div class="container">
            <div id="paypal-button" class="row"></div>
          </div>
        </div>
        <div id="bancontact" class="payment-method">
          <div class="container">
            <form @input="check($event)">
              <div data-locale-reversible>
                <div class="row">
                  <div class="field">
                    <input id="name" class="input empty" type="text" placeholder="185 Berry St" required="" autocomplete="name">
                    <label for="name" data-tid="elements_examples.form.address_label">Name</label>
                    <div class="baseline"></div>
                  </div>
                </div>
                <div class="row">
                  <div class="field">
                    <input id="email" class="input empty" type="email" placeholder="185 Berry St" required="" autocomplete="email">
                    <label for="email" data-tid="elements_examples.form.address_label">Email</label>
                    <div class="baseline"></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="field">
                  <input id="address" class="input empty" type="text" placeholder="185 Berry St" required="" autocomplete="address-line1">
                  <label for="address" data-tid="elements_examples.form.card_number_label">Adresse</label>
                  <div class="baseline"></div>
                </div>
              </div>
              <div class="row">
                <div class="field half-width">
                  <input id="postal-code" class="input empty" type="text" placeholder="185 Berry St" required="" autocomplete="postal-code">
                  <label for="postal-code" data-tid="elements_examples.form.card_expiry_label">Code Postal</label>
                  <div class="baseline"></div>
                </div>
                <div class="field half-width">
                  <input id="city" class="input empty" type="text" placeholder="Bruxelles" required="" autocomplete="city">
                  <label for="city" data-tid="elements_examples.form.card_cvc_label">Ville</label>
                  <div class="baseline"></div>
                </div>
              </div>
              <button class="btn btn-filled" id="bancontact-button">Payer {{order.price}} EUR</button>
            </form>
          </div>
        </div>
      </div>
      <div id="credit-card" class="payment-method ">
        <div class="container">
          <form @input="check($event)">
            <div data-locale-reversible>
              <div class="row">
                <div class="field">
                  <input id="address" class="input empty" type="text" placeholder="185 Berry St" required="" autocomplete="address-line1">
                  <label for="address" data-tid="elements_examples.form.address_label">Name</label>
                  <div class="baseline"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="field">
                <input id="card-number" class="input empty" type="text" placeholder="185 Berry St" required="" autocomplete="address-line1">
                <label for="card-number" data-tid="elements_examples.form.card_number_label">Card number</label>
                <div class="baseline"></div>
              </div>
            </div>
            <div class="row">
              <div class="field half-width">
                <input id="card-expiry" class="input empty" type="text" placeholder="185 Berry St" required="" autocomplete="address-line1">
                <label for="card-expiry" data-tid="elements_examples.form.card_expiry_label">Expiration</label>
                <div class="baseline"></div>
              </div>
              <div class="field half-width">
                <input id="card-cvc" class="input empty" type="number" placeholder="" required="" autocomplete="address-line1">
                <label for="card-cvc" data-tid="elements_examples.form.card_cvc_label">CVC</label>
                <div class="baseline"></div>
              </div>
            </div>
            <button class="btn btn-filled" type="submit" data-tid="elements_examples.form.pay_button">Payer {{order.price}} EUR</button>
            <button id="loader" class="btn btn-loading" aria-busy="true" aria-label="Loading" role="progressbar">
              <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
                <span>Processing...</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const stripe = Stripe('pk_test_hRfWeiE7MuT5fINhdlIWyh9n');
const elements = stripe.elements({
  locale: 'auto',
});
export default {
  name: 'PaymentStep',

  data() {
    return {
      order: {
        price: 60,
      },
    };
  },
  methods: {
    check(e) {
      if (e.target.value.length === 0) e.target.classList.add('empty');
      else e.target.classList.remove('empty');
    },
    handleFocus(e) {
      if (e.target.nodeName === 'INPUT') {
        if (e.type === 'focus') e.target.classList.add('focused');
        else e.target.classList.remove('focused');
      }
    },
  },
  mounted() {
    // Floating labels
    const inputs = document.querySelectorAll('.payment-method .input');
    Array.prototype.forEach.call(inputs, input => {
      input.addEventListener('focus', e => this.handleFocus(e));
      input.addEventListener('blur', e => this.handleFocus(e));
    });
    paypal.Button.render(
      {
        env: 'production', // Or 'sandbox',

        commit: true, // Show a 'Pay Now' button

        style: {
          color: 'blue',
          size: 'responsive',
          shape: 'rect',
        },

        payment: function(data, actions) {
          /*
           * Set up the payment here
           */
        },

        onAuthorize: function(data, actions) {
          /*
           * Execute the payment here
           */
        },

        onCancel: function(data, actions) {
          /*
           * Buyer cancelled the payment
           */
        },

        onError: function(err) {
          /*
           * An error occurred during the transaction
           */
        },
      },
      '#paypal-button'
    );
  },
};
</script>
<style lang="scss" scoped>
.payment-method {
  background-color: #fafafa;
  width: 85%;
  margin: auto;
}

.payment-method * {
  font-family: Source Code Pro, Consolas, Menlo, monospace;
  font-size: 1.1em;
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
  bottom: 3px;
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
  display: block;
  width: 60%;
  height: 3em;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
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
</style>
