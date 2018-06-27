<template>
  <section class="container-flex">
    <div id="left" :class="signupCard ? 'panel' : 'panel inactive'">
      <div :class="signupCard ? '' : 'disabled'"  @click.self="toggleView()" ></div>
      <form @submit.prevent="processForm($event)" class="signUp">
        <div class="title">
          <h3>S'inscrire</h3>
        </div>
        <div class="horizontal-center">
          <input class="flex w100" size="30" v-model="form.firstname" id="firstname" type="text" placeholder="Enter your firstname" required autocomplete/>
          <input class="flex w100" size="30" v-model="form.lastname" id="lastname" type="text" placeholder="Enter your lastname" required autocomplete="off" />
          <input class="flex w100" size="30" :class="{'hasContent': form.email}" icon="mail" type="email" placeholder="Enter your email" autocomplete required v-model="form.email" />
          <input class="flex w100" size="30" v-model="form.password" :class="{'hasContent': form.email}" type="password" icon="lock" placeholder="Insert Password" required password-reveal />
          <input class="flex w100" size="30" v-model="form.confirm" id="confirm" type="password" placeholder="Verify Password" required />
          <div class="flex-row">
            <div class="">
              <p class="small">
                J'ai lu et j'accepte les <a target="about_blank" href="/legal"> conditions générales de vente</a>
              </p>
            </div>
            <div>
              <input type="checkbox" class="checkbox is-narrow" />
            </div>
          </div>
        </div>
        <section class="horizontal">
          <button @click="toggleView" class="form-btn sx log-in" type="button">Already a member?</button>
          <button class="form-btn dx" type="submit">Sign Up</button>
        </section>
      </form>
    </div>
    <div id="right" :class="loginCard ? 'panel' : 'panel inactive'">
      <div :class="loginCard ? '' : 'disabled'"@click.self="toggleView()"></div>
      <form @submit.prevent="processForm" class="signIn">
        <div class="title">
          <h3>Welcome </h3>
          <h3> Back !</h3>
        </div>
        <div class="horizontal-center">
          <input class="flex w100" :class="{'hasContent': form.email}" size="30" icon="mail" type="email" placeholder="Enter your email" autocomplete="off" required v-model="form.email" />
          <input class="flex w100" :class="{'hasContent': form.password}" size="30" type="password" icon="lock" placeholder="Insert Password" required password-reveal v-model="form.password" />
          <p>- or -</p>
          <div class="flex-row">
            <button class="fb" type="button">F</button>
            <button class="fb" type="button">G</button>
            <button class="fb" type="button">L</button>
          </div>
        </div>
        <section class="horizontal">
          <button @click="toggleView" class="form-btn sx back" type="button">Signup</button>
          <button class="form-btn dx" type="submit">Log In</button>
        </section>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: 'LoginStep',
  data() {
    return {
      loginCard: true,
      signupCard: false,
      form: {
        firstname: '',
        name: '',
        email: '',
        gender: '',
        phone: '',
        password: '',
        terms: false,
        countryCode: '+32',
        birthDate: '',
        confirm: '',
      },
      error: null,
    };
  },
  methods: {
    toggleView() {
      this.loginCard = !this.loginCard;
      this.signupCard = !this.signupCard;
    },
    processForm(e) {
      if (this.loginCard) {
        login(this.form.email, this.form.password, this.$root)
          .then(r => this.$emit('close', e))
          .catch(err => {
            this.error = err.response.data.error;
            console.error('Login error', err);
          });
      }
      if (this.signupCard) {
        signup(this.form)
          .then(r => login(r.email, r.password, this.$root))
          .then(r => this.$emit('close', e))
          .catch(err => {
            this.error = err.response.data.error;
            console.error('Signup err', err);
          });
      }
    },
  },
};
</script>
<style scoped>
@import 'https://fonts.googleapis.com/css?family=Dosis|Roboto:300,400';

.panel {
  width: 48%;
  display: flex;
  justify-content: center;
  margin: 5vh auto;
  position: relative;
  transform: scale(1);
  transition: all 0.5s;
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
  text-align: center;
  background: #f9f9f9;
  min-width: 320px;
  width: 100%;
  height: 60vh;
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
  font-size: 12px;
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
  padding: 1em 0vh;
  margin: 2em 0;
}

button.fb {
  background: var(--mm);
  width: 50px;
  height: 50px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #f9f9f9;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid #29487d;
  cursor: pointer;
  margin: 20px 7px 20px;
  transition: all 0.3s linear;
}

button.fb:hover {
  background: #f9f9f9;
  color: #3b5998;
}

button.form-btn {
  width: 50%;
  height: 60px;
  border: 0;
  font-family: 'Dosis';
  font-size: 1.5em;
  text-transform: uppercase;
  cursor: pointer;
}

button.form-btn.sx {
  left: 0;
  border-radius: 0 0 0 5px;
  background-color: var(--mm);
  color: #f9f9f9;
  transition: all 0.3s linear;
  opacity: 0.8;
}

button.form-btn.sx:hover {
  background-color: var(--mm);
  color: #f9f9f9;
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
  color: #f9f9f9;
}

input {
  border: none;
  width: 85%;
  font-family: 'Roboto';
  color: var(--mm);
  text-align: center;
  font-size: 1.3rem;
  font-weight: 100;
  margin: 0vh 0 2vh;
  background-color: #f9f9f9;
  line-height: 200%;
}

.signUp input.checkbox {
  padding: 0 1vw;
  width: auto;
  margin: auto;
}

.flex-row {
  display: flex;
  align-items: center;
  padding: 0 1vw 0;
  justify-content: center;
}

.signUp input:focus,
.signUp input:hover,
.signIn input:focus,
.signIn input:hover,
.hasContent {
  border-bottom: solid 1px var(--mm);
  outline: none;
  outline-offset: -2px;
  transition: all 0.3s;
  border-radius: 3px;
}

.small {
  font-size: 0.7rem;
  text-transform: none;
  padding-right: 2vw;
}

.inactive-dx input,
.inactive-sx input {
  pointer-events: none;
}

.horizontal {
  position: absolute;
  bottom: 0;
  white-space: nowrap;
  width: 100%;
}

.horizontal-center {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
}
</style>
