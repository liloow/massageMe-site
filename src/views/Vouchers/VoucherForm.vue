<template>
  <div class="container">
    <div id="credit-card" class="borderless ">
      <form class="borderless" @input="check($event)">
        <div class="row">
          <div class="field full">
            <input id="fullName" type="text" placeholder="185 Berry St" required="required" autocomplete="fullName" class="input empty">
            <label for="fullName" data-tid="elements_examples.form.address_label">Name</label>
            <div class="baseline"></div>
          </div>
        </div>
        <div class="row">
          <div class="field full">
            <input id="card-number" type="text" placeholder="185 Berry St" required="required" autocomplete="address-line1" class="input empty">
            <label for="card-number" data-tid="elements_examples.form.card_number_label">Card number</label>
            <div class="baseline"></div>
          </div>
        </div>
        <div class="row">
          <div class="field half-width">
            <input id="card-expiry" type="text" placeholder="185 Berry St" required="required" autocomplete="address-line1" class="input empty">
            <label for="card-expiry" data-tid="elements_examples.form.card_expiry_label">Expiration</label>
            <div class="baseline"></div>
          </div>
          <div class="field half-width">
            <input id="card-cvc" type="number" placeholder="BOOOOOOOOOOOOOOOOOs" required="required" autocomplete="address-line1" class="input empty">
            <label for="card-cvc" data-tid="elements_examples.form.card_cvc_label">CVC</label>
            <div class="baseline"></div>
          </div>
        </div>
        <button type="submit" data-tid="elements_examples.form.pay_button" class="btn btn-filled">Payer 60 EUR</button>
      </form>
    </div>
    <form @input="check($event)" class="borderless">
      <div class="column two-third">
        <div class="row">
          <div class="field mini">
            <custom-select :options="['M.', 'Mme']"></custom-select>
            <div class="baseline"></div>
          </div>
          <div class="field fill">
            <input id="address" class="input empty" type="text" placeholder="" required="true" autocomplete="fullname">
            <label for="address" data-tid="elements_examples.form.address_label">Nom Complet</label>
            <div class="baseline"></div>
          </div>
        </div>
        <div class="row">
          <div class="field full">
            <input id="email" class="input empty" type="email" placeholder="playboy007@caramail.com" required="true" autocomplete="email">
            <label for="email" data-tid="form.email">Email</label>
            <div class="baseline"></div>
          </div>
        </div>
        <div class="row">
          <div class="field mini">
            <custom-select :options="['+32', '+33']"></custom-select>
            <div class="baseline"></div>
          </div>
          <div class="field fill">
            <input id="phone" class="input empty" type="text" placeholder="" required="true" autocomplete="mobile">
            <label for="phone">Mobile</label>
            <div class="baseline"></div>
          </div>
          <div class="field fill fourth">
            <input id="postalCode" class="input empty fourth" type="text" placeholder="4000" required="true" autocomplete="postalCode">
            <label for="postalCode">Code Postal</label>
            <div class="baseline"></div>
          </div>
        </div>
        <div class="row">
          <div class="field full">
            <input id="subject" class="input empty" type="text" placeholder="Demande de renseignement, question,..." required="true" autocomplete="subject">
            <label for="subject" data-tid="form.subject">Sujet</label>
            <div class="baseline"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container 1em">
          <div class="field full block">
            <textarea id="message" rows="1" class="empty textarea input" type="message" placeholder="Salut Massage-Me !" required="true" autocomplete="message" @input="handleResize($event)"></textarea>
            <label for="message" data-tid="form.message">Message</label>
            <div class="baseline"></div>
          </div>
        </div>
      </div>
      <!-- <div class="field full btn"> -->
      <button v-if="status === 'loading'" class="btn btn-loading bottom">
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
          <span>Processing...</span>
        </div>
      </button>
      <button v-else class="btn btn-filled bottom" type="submit">Envoyer</button>
      <!-- </div> -->
    </form>
  </div>
</template>
<script>
import CustomSelect from '@/components/CustomSelect';
export default {
  name: 'VoucherForm',
  data() {
    return {
      voucher: {
        senderName: '',
        senderEmail: '',
        recipientName: '',
        method: 'Sélectionner le type de livraison',
        recipientAddress: {
          name: '',
          line1: '',
          line2: '',
          postalCode: '4000',
          city: 'Liège',
        },
        recipientEmail: '',
        message: '',
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
    const inputs = [
      ...document.querySelectorAll('.borderless input'),
      ...document.querySelectorAll('.borderless textarea'),
    ];
    console.log(inputs);
    inputs.forEach(input => {
      input.addEventListener('focus', e => this.handleFocus(e));
      input.addEventListener('blur', e => this.handleFocus(e));
      this.check({target: input});
    });
  },
  components: {
    CustomSelect,
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Oxygen');
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
@import url('https://fonts.googleapis.com/css?family=Lato');
@import url('https://fonts.googleapis.com/css?family=Oswald');
@import url('https://fonts.googleapis.com/css?family=PT+Sans');
@import url('https://fonts.googleapis.com/css?family=Lora');

$font: 1rem;
$line-height: 1.5;
$scale: 0.9;
$translate: $font * $line-height;
$height: $translate + $font + $line-height * $scale;

* {
  font-family: 'PT Sans';
  font-size: $font;
}

.borderless {
  background-color: #fdfdfd;
  width: 85%;
  padding: 2em 2em 0.2em;
  margin: auto;
  font-family: Source Code Pro, Consolas, Menlo, monospace;
  font-size: 1.1rem;
  font-weight: 500;
  .row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    margin: 0 auto 10px;
    width: 90%;
    height: $height;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .field {
      position: relative;
      display: flex;
      height: $height / 2;
      &.full {
        width: 100%;
      }
      &.half-width {
        width: 48%;
      }
      &.fill {
        flex: 1;
        margin: auto;
        margin-left: 2%;
      }
      &.mini {
        margin: auto;
        padding: 0 0.2rem;
      }
      input,
      textarea {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        color: var(--mm);
        background-color: transparent;
        line-height: $line-height;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        padding: 0 0 0.3rem 0.5rem;
        border-style: none;
        -webkit-animation: 1ms void-animation-out;

        &::-webkit-input-placeholder {
          color: transparent;
          -webkit-transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          &:not(.empty) {
            opacity: 1;
          }
        }
        &::-moz-placeholder {
          color: transparent;
          -webkit-transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          &:not(.empty) {
            opacity: 1;
          }
        }
        &:-ms-input-placeholder {
          color: transparent;
          -webkit-transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          &:not(.empty) {
            opacity: 1;
          }
        }
        &:not(.empty) + label,
        &.focused + label {
          color: #aab7c4;
          -webkit-transform: scale($scale) translateY(-$translate);
          transform: scale($scale) translateY(-$translate);
          cursor: default;
        }
      }
      label {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 15%;
        color: var(--mm);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        cursor: text;
        font-weight: 300;
        -webkit-transition-property: color, -webkit-transform;
        transition-property: color, -webkit-transform;
        transition-property: color, transform;
        transition-property: color, transform, -webkit-transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
        transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      .baseline {
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 1px;
        background-color: var(--mm);
        opacity: 0.2;
        -webkit-transition: background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition: background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: 100;
      }
    }
  }
}
</style>
