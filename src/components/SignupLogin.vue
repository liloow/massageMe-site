<template>
  <section class="container-flex">
    <div id="left" :class="signupCard ? 'panel' : 'panel inactive'">
      <div :class="signupCard ? '' : 'disabled'" @click.self="toggleView()"></div>
      <form @input="check($event)" @submit.prevent="processForm($event)" class="borderless signUp">
        <div class="title">
          <h1>S'inscrire</h1>
        </div>
        <ul class="wrapper">
          <li class="row">
            <div class="field mini">
              <custom-select v-model="form.gender" :options="['M.', 'Mme']"></custom-select>
              <div class="baseline"></div>
            </div>
            <div class="field fill">
              <input class="input empty borderless" v-model="form.fullname" id="fullname" type="text" placeholder="Nom Complet" required autocomplete="name">
              <label for="fullname" data-tid="form.fullname">Nom Complet</label>
              <div class="baseline"></div>
            </div>
          </li>
          <li class="row">
            <div class="field full">
              <input id="emailSignUp" class="input empty borderless" v-model="form.email" type="email" placeholder="playboy007@caramail.com" required autocomplete="email">
              <label for="emailSignUp">Email</label>
              <div class="baseline"></div>
            </div>
          </li>
          <li class="row">
            <div class="field mini">
              <custom-select :options="['+32', '+33']"></custom-select>
              <div class="baseline"></div>
            </div>
            <div class="field fill">
              <input id="phone" class="input empty borderless" type="text" placeholder="467890123" autocomplete="tel-national">
              <label for="phone">Mobile</label>
              <div class="baseline"></div>
            </div>
          </li>
          <li class="row">
            <div class="field full">
              <input id="passwordSignUp" class="input empty borderless" :type="signupPassHidden ? 'password' : 'text'" placeholder="•••••••••" required password-reveal autocomplete="new-password">
              <label for="passwordSignUp" data-tid="form.passwordSignUp">Mot de passe</label>
              <i v-if="signupPassHidden" class="material-icons" @click="signupPassHidden=false">visibility</i>
              <i v-else class="material-icons end" @click="signupPassHidden=true">visibility_off</i>              <div class="baseline"></div>
            </div>
          </li>
          <li class="row">
            <div class="field full">
              <input id="passwordConfirm" class="input empty borderless" v-model="form.passwordSignUp" type="password" icon="lock" placeholder="•••••••••" required password-reveal autocomplete="new-password">
              <label for="passwordConfirm" data-tid="form.passwordConfirm">Confirmer votre mot de passe</label>
              <div class="baseline"></div>
            </div>
          </li>
          <li class="row">
            <p class="small">
              J'ai lu et j'accepte les <a target="about_blank" href="/legal">conditions générales de vente</a>
            </p>
            <input id="legal" type="checkbox" v-model="form.legal" class="checkbox is-narrow" />
            <label for="legal">
              <span />
            </label>
          </li>
        </ul>
        <section class="horizontal">
          <button @click="toggleView" class="form-btn sx log-in" type="button">Se connecter</button>
          <button class="form-btn dx" type="submit" :disabled="!form.legal" @click.prevent="processForm()">Valider</button>
        </section>
      </form>
    </div>
    <div id="right" :class="loginCard ? 'panel' : 'panel inactive'">
      <div :class="loginCard ? '' : 'disabled'" @click.self="toggleView()"></div>
      <form @input="check($event)" @submit.prevent="processForm" class="borderless signIn">
        <div class="title">
          <h1>Se connecter</h1>
        </div>
        <ul class="wrapper">
          <li class="row">
            <div class="field full">
              <input id="emailSignIn" class="input empty borderless" v-model="form.emailSignIn" type="email" placeholder="playboy007@caramail.com" required autocomplete="emailSignIn">
              <label for="emailSignIn">Email</label>
              <div class="baseline"></div>
            </div>
          </li>
          <li class="row">
            <div class="field full">
              <input id="passwordSignIn" class="input empty borderless" v-model="form.passwordSignIn" :type="loginPassHidden ? 'password' : 'text'" placeholder="•••••••••" required autocomplete="new-password">
              <label for="passwordSignIn">Mot de passe</label>
              <i v-if="loginPassHidden" class="material-icons" @click="loginPassHidden=false">visibility</i>
              <i v-else class="material-icons end" @click="loginPassHidden=true">visibility_off</i>
              <div class="baseline"></div>
            </div>
          </li>
          <li class="row-col">
            <div class="field full">
              <p class="small">
                Maintenir ma session ouverte
              </p>
              <input id="persist" type="checkbox" v-model="form.persist" class="checkbox is-narrow" />
              <label for="persist">
                <span />
              </label>
            </div>
            <div class="field full">
              <p class="small">
                <a href="#">Mot de passe oublie ?</a>
              </p>
            </div>
          </li>
        </ul>
        <section class="horizontal">
          <button @click="toggleView" class="form-btn sx back" type="button">S'inscrire</button>
          <button class="form-btn dx" type="submit" @click="logIn(form.emailSignIn, form.passwordSignIn, form.persist)">Log In</button>
        </section>
      </form>
    </div>
    </div>
  </section>
</template>
<script>
import {login, signup} from '../api';
import {mapGetters} from 'vuex';
import CustomSelect from '@/components/CustomSelect';
export default {
  name: 'SignupLogin',
  data() {
    return {
      loginPassHidden: true,
      signupPassHidden: true,
      loginCard: true,
      signupCard: false,
      form: {
        fullname: '',
        name: '',
        emailSignUp: '',
        emailSignIn: '',
        stayLoggedIn: false,
        gender: '',
        phone: '',
        passwordSignIn: '',
        passwordSignUp: '',
        terms: false,
        countryCode: '+32',
        confirm: '',
        persist: true,
        legal: false,
      },
      error: null,
    };
  },
  methods: {
    async logIn(email, password, persist) {
      const {session, userInfos} = await login({email, password});
      if (session && userInfos) {
        this.$store.dispatch('registerLogin', {session, userInfos, persist});
        this.$emit('login-successful');
      }
    },
    toggleView() {
      this.loginCard = !this.loginCard;
      this.signupCard = !this.signupCard;
    },
    async processForm(e) {
      let success = (await signup({
        fullname: this.form.fullname,
        phone: this.form.phone,
        email: this.form.emailSignUp,
        password: this.form.passwordSignUp,
      })).data;
      if (success) return this.logIn(this.form.emailSignUp, this.form.passwordSignUp);
    },
    check(e) {
      if (e.target.value.length === 0) e.target.classList.add('empty');
      else e.target.classList.remove('empty');
    },
    handleFocus(e) {
      if (e.target.nodeName === 'INPUT' || 'TEXTAREA') {
        if (e.type === 'focus') e.target.classList.add('focused');
        else e.target.classList.remove('focused');
      }
    },
  },
  mounted() {
    // Floating labels
    const inputs = document.querySelectorAll('.borderless .input');
    inputs.forEach(input => {
      input.addEventListener('focus', e => this.handleFocus(e));
      input.addEventListener('blur', e => this.handleFocus(e));
    });
    // BOOKING
    if (this.isLoggedIn) this.$store.dispatch('nextStep');
  },
  components: {
    CustomSelect,
  },
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  .field.fill,
  .field.full {
    flex: 1 1 0px;
    width: initial;
    &.fourth {
      width: 25%;
      flex: 0.5 1 0px;
    }
    i {
      position: absolute;
      right: 0;
      cursor: pointer;
    }
  }
  .fill {
    margin-left: 3%;
  }
}
.row-col {
  margin: auto;
  .field.full {
    margin: auto;
    margin-bottom: 1em;
  }
}
.panel {
  width: 50%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  margin: 5vh auto;
  position: relative;
  transform: scale(1);
  transition: all 0.5s;
  min-height: 650px;
  pointer-events: auto;
  &#right {
    margin-left: 1em;
    .horizontal-center {
      margin: auto;
    }
    .title {
      flex: 2.5;
    }
    .wrapper {
      margin: auto;
      flex: 4.5;
      li {
        flex: 2;
        &.row-col {
          width: 90%;
          flex: 3;
        }
        .small {
          margin: auto;
          padding-bottom: 1em;
        }
      }
    }
  }
  &#left {
    margin-right: 2em;
  }
}

.field.full.block {
  height: auto;
  label {
    top: 0;
    z-index: 30;
    overflow: visible;
  }
}

.field.full.btn {
  height: auto;
  .btn.btn-filled {
    position: absolute;
    bottom: 100%;
  }
}

.baseline {
  position: absolute;
  bottom: -3px;
  width: 100%;
  height: 1px;
  background-color: var(--mm);
  opacity: 0.5;
}

.borderless {
  background-color: #fafafa;
  width: 100%;
  margin: auto;
  max-width: 1200px;
  max-height: calc(100vh - var(--nav) - var(--foot));
  > ul {
    margin: auto;
    display: flex;
    flex-flow: column;
    flex: 1;
    justify-content: space-evenly;
    list-style: none;
    width: 80%;
  }
}

.borderless .row {
  width: 100%;
}

.borderless .field {
  display: flex;
  position: relative;
  height: 1.5em;
}

.borderless .field.half-width {
  width: 48%;
}

.anchor .borderless .baseline {
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

.borderless label {
  position: absolute; // width: 100%;
  left: 0;
  bottom: 20%;
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
  opacity: 0.7;
}

.borderless .input {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  color: var(--mm);
  background-color: transparent;
}

.borderless .input::-webkit-input-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.borderless .input::-moz-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.borderless .input:-ms-input-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.borderless .input.focused,
.borderless .input:not(.empty) {
  opacity: 1;
}

.borderless .input.focused::-webkit-input-placeholder,
.borderless .input:not(.empty)::-webkit-input-placeholder {
  color: #cfd7df;
}

.borderless .input.focused::-moz-placeholder,
.borderless .input:not(.empty)::-moz-placeholder {
  color: #cfd7df;
}

.borderless .input.focused:-ms-input-placeholder,
.borderless .input:not(.empty):-ms-input-placeholder {
  color: #cfd7df;
}

.borderless .input.focused + label,
.borderless .input:not(.empty) + label {
  color: #aab7c4;
  transform: scale(0.85) translateY(-25px);
  cursor: default;
  opacity: 1;
}

.borderless textarea.input.focused + label,
.borderless textarea.input:not(.empty) + label {
  color: var(--mm);
  transform: scale(0.85) translateY(-25px);
  cursor: default;
  opacity: 1;
}

.borderless .input.focused + label {
  color: var(--mm);
  opacity: 1;
}

.borderless .input.invalid + label {
  color: #ffa27b;
}

.borderless .input.focused + label + .baseline {
  background-color: var(--mm);
  opacity: 0.7;
}

.borderless .input.focused.invalid + label + .baseline {
  background-color: #e25950;
}

.borderless input,
.borderless textarea,
.borderless button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-style: none;
}

.borderless input:-webkit-autofill {
  -webkit-text-fill-color: #e39f48;
  transition: background-color 100000000s;
  -webkit-animation: 1ms void-animation-out;
}

.borderless input,
.borderless button {
  -webkit-animation: 1ms void-animation-out;
}

.borderless button {
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

.disabled {
  opacity: 0.2;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: black;
  z-index: 10;
  border-radius: 1em;
}

.inactive {
  transform: scale(0.95, 0.95);
  transition: all 0.5s;
}

form {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  background: ghostwhite;
  min-width: 380px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  left: 0;
  top: 0;
  border-radius: 1em;
}

p {
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--mm);
  margin: 2vh 0;
}

p > span {
  padding-top: 3px;
  display: block;
  font-weight: 400;
  font-size: 9px;
}

h3 {
  font-family: 'Dosis';
  font-size: 50px;
  text-transform: uppercase;
  color: var(--mm);
  letter-spacing: 0.2rem;
  line-height: normal;
}

.title {
  padding: 1em 0vh 0;
  margin: 2em 0 0;
  height: 100px;
}

button.form-btn {
  width: 50%;
  height: 60px;
  border: 0;
  font-family: 'Dosis';
  font-size: 1.5em;
  text-transform: uppercase;
  cursor: pointer;
  &[disabled='disabled'] {
    opacity: 0.3;
    cursor: not-allowed;
  }
}

button.form-btn.sx {
  left: 0;
  border-radius: 0 0 0 5px;
  background-color: var(--mm);
  color: ghostwhite;
  transition: all 0.3s linear;
  opacity: 0.8;
}

button.form-btn.sx:hover {
  background-color: var(--mm);
  color: ghostwhite;
}

button.form-btn.sx.back {
  background-color: var(--mm);
  transition: all 0.3s linear;
}

button.form-btn.sx.back:hover {
  background-color: var(--mm);
}

button.form-btn.dx {
  right: 0;
  border-radius: 0 0 5px 0;
  background-color: var(--mm);
  color: ghostwhite;
}

input {
  border: none;
  width: 85%;
  font-family: 'Roboto';
  color: var(--mm);
  text-align: center;
  font-size: 1.3rem;
  font-weight: 100;
  // margin: 0vh 0 2vh;
  background-color: ghostwhite;
  line-height: 120%;
}

.signUp input.checkbox,
.signIn input.checkbox {
  padding: 0 1vw;
  width: auto;
  margin: auto;
}

.flex-row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.small {
  text-transform: none;
  padding-right: 1em;
  padding-left: 1em;
  margin: auto;
  & p,
  & a {
    font-size: 0.78rem;
  }
}

.inactive-dx input,
.inactive-sx input {
  pointer-events: none;
}

.horizontal {
  bottom: 0;
  white-space: nowrap;
  width: 100%;
  display: flex;
}

.horizontal-center {
  width: 100%;
  margin: 0 auto;
  > label {
    position: absolute;
    left: 15%;
    top: 25%;
  }
  &.flex {
    display: flex;
  }
  .field.mini {
    display: flex;
    margin: auto;
    div {
      width: unset;
    }
    & input {
      flex: 4;
      width: 70%;
    }
  }
}

.field.mini {
  display: flex;
}

//Checkbox
*:before,
*:after {
  box-sizing: unset;
}

input[type='checkbox'] {
  display: none;
}

input[type='checkbox'] + label {
  position: relative;
  display: flex;
  margin: auto;
  align-items: center;
}

input[type='checkbox'] + label + div {
  color: #9e9e9e;
  transition: color 50ms cubic-bezier(0.4, 0, 0.23, 1);
}

input[type='checkbox'] + label > span {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  width: 1.2em;
  height: 1.2em;
  background: transparent;
  border: 2px solid #9e9e9e;
  border-radius: 2px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
}

input[type='checkbox']:checked + label > span {
  border: 0.5em solid #ffeb3b;
  animation: shrink-bounce 200ms cubic-bezier(0.4, 0, 0.23, 1);
}

input[type='checkbox']:checked + label > span:before {
  content: '';
  position: absolute;
  top: 0.4em;
  left: 0.2em;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transform: rotate(45deg);
  transform-origin: 0% 100%;
  animation: checkbox-check 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
}

@keyframes checkbox-check {
  0% {
    width: 0;
    height: 0;
    border-color: #212121;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  33% {
    width: 0.2em;
    height: 0;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  100% {
    width: 0.2em;
    height: 0.5em;
    border-color: #212121;
    transform: translate3d(0, -0.5em, 0) rotate(45deg);
  }
}
</style>
