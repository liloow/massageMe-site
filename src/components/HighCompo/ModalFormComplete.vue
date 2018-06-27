<style scoped>
@import "https://fonts.googleapis.com/css?family=Dosis|Roboto:300,400";
form {
  position: absolute;
  text-align: center;
  background: #f9f9f9;
  min-width: 320px;
  width: auto;
  height: 60vh;
  border-radius: 5px;
  box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  left: 0;
  top: 0;
}

p {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  font-size: 12px;
  color: #ff9a58;
  margin-bottom: 40px;
}

p > span {
  padding-top: 3px;
  display: block;
  font-weight: 400;
  font-size: 9px;
}

h3 {
  font-family: "Dosis";
  font-size: 50px;
  text-transform: uppercase;
  color: #ff9a58;
  margin: 0vh 0vh;
  letter-spacing: 0.2rem;
}

button.fb {
  background: #3b5998;
  width: 160px;
  height: 25px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: #f9f9f9;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid #29487d;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.3s linear;
}

button.fb:hover {
  background: #f9f9f9;
  color: #3b5998;
}

button.form-btn {
  position: absolute;
  width: 50%;
  height: 60px;
  bottom: 0;
  border: 0;
  font-family: "Dosis";
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
}

button.form-btn.sx {
  left: 0;
  border-radius: 0 0 0 5px;
  background-color: rgba(255, 125, 0, 0.35);
  color: #f9f9f9;
  transition: all 0.3s linear;
}

button.form-btn.sx:hover {
  background-color: rgba(255, 125, 0, 0.65);
  color: #f9f9f9;
}

button.form-btn.sx.back {
  background-color: rgba(0, 0, 0, 0.15);
  transition: all 0.3s linear;
}

button.form-btn.sx.back:hover {
  background-color: rgba(0, 0, 0, 0.35);
}

button.form-btn.dx {
  right: 0;
  border-radius: 0 0 5px 0;
  background-color: #ff9a58;
  color: #f9f9f9;
}

.signIn ::-webkit-input-placeholder {
  color: #ffc185;
  font-family: "Roboto";
  font-weight: 50;
  font-size: 1rem;
}

.signIn :-moz-placeholder {
  color: #ffc185;
  font-family: "Roboto";
  font-weight: 50;
  font-size: 1rem;
}

.signIn ::-moz-placeholder {
  color: #ffc185;
  font-family: "Roboto";
  font-weight: 50;
  font-size: 1rem;
}

.signIn :-ms-input-placeholder {
  color: #ffc185;
  font-family: "Roboto";
  font-weight: 50;
  font-size: 1rem;
}

.signUp input:focus::-webkit-input-placeholder {
  color: #f9f9f9;
  font-family: "Roboto";
  font-weight: 50;
  font-size: 1rem;
}

.signUp input:focus:-moz-placeholder {
  color: #f9f9f9;
  font-family: "Roboto";
  font-weight: 50;
  font-size: 1rem;
}

.signUp input:focus:-moz-placeholder {
  color: #f9f9f9;
  font-family: "Roboto";
  font-weight: 50;
  font-size: 1rem;
}

.signUp input:focus:-ms-input-placeholder {
  color: #f9f9f9;
  font-family: "Roboto";
  font-weight: 50;
  font-size: 1rem;
}

.signIn {
  z-index: 1;
  transform: perspective(9vw) translate3d(9vw, 0px, -30px);
  opacity: 0.5;
}

.signUp {
  z-index: 2;
  padding: 0vh 2vw;
}

.active-dx {
  animation-name: foregrounding-dx;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.active-sx {
  animation-name: foregrounding-sx;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.inactive-dx {
  animation-name: overshadowing-dx;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.inactive-sx {
  animation-name: overshadowing-sx;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes overshadowing-dx {
  0% {
    z-index: 2;
    transform: perspective(9vw) translate3d(0px, 0px, 0px);
    opacity: 1;
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.25);
  }
  100% {
    z-index: 1;
    transform: perspective(9vw) translate3d(9vw, 0px, -30px);
    opacity: 0.5;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);
  }
}

@keyframes overshadowing-sx {
  0% {
    z-index: 2;
    transform: perspective(9vw) translate3d(0px, 0px, 0px);
    opacity: 1;
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.25);
  }
  100% {
    z-index: 1;
    transform: perspective(9vw) translate3d(-9vw, 0px, -30px);
    opacity: 0.5;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);
  }
}

@keyframes foregrounding-dx {
  0% {
    z-index: 1;
    transform: perspective(9vw) translate3d(9vw, 0px, -30px);
    opacity: 0.5;
  }
  50% {
    z-index: 2;
    transform: perspective(9vw) translate3d(400px, 0px, -30px);
  }
  100% {
    z-index: 2;
    transform: perspective(9vw) translate3d(0px, 0px, 0px);
    opacity: 1;
  }
}

@keyframes foregrounding-sx {
  0% {
    z-index: 1;
    transform: perspective(9vw) translate3d(-9vw, 0px, -30px);
    opacity: 0.5;
  }
  50% {
    z-index: 2;
    transform: perspective(9vw) translate3d(-400px, 0px, -30px);
  }
  100% {
    z-index: 2;
    transform: perspective(9vw) translate3d(0px, 0px, 0px);
    opacity: 1;
  }
}

.signIn input {
  border: none;
  width: 85%;
  font-family: "Roboto";
  color: #ff9a58;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 100;
  margin-bottom: 26px;
  background-color: #f9f9f9;
  line-height: 200%;
}

.signUp input {
  border: none;
  font-family: "Roboto";
  color: #ff9a58;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 100;
  background-color: #f9f9f9;
  line-height: 1.7;
  border-bottom: solid 1px #ff9a58;
  outline: none;
  outline-offset: -2px;
  transition: all 0.3s;
  border-radius: 3px;
}

.small {
  font-size: 0.7rem;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  flex-shrink: 1;
  padding: 0;
}

.signIn input:focus,
.signIn input:hover,
.hasContent {
  border-bottom: solid 1px #ff9a58;
  outline: none;
  outline-offset: -2px;
  transition: all 0.3s;
  border-radius: 3px;
}

.inactive-dx input,
.inactive-sx input {
  pointer-events: none;
}

.horizontal {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: row;
  align-items: center;
  text-align: left;
}

.signUp label {
  padding: 2vh;
  text-align: left;
}
</style>
<template>
    <section click="toggle($event)" @keydown.esc="close($event)">
        <form @submit.prevent="processForm" :class="{'signUp':true,'active-dx':signupCard, 'inactive-sx':loginCard, 'flex':true}">
            <h3>S'inscrire</h3>
            <div class=" field is-grouped">
                <div class="control">
                    <label class="label small" for="firstname">Prenom</label>
                    <input class="input small signUp" v-model="form.firstname" id="firstname" type="text" placeholder="Enter your firstname" required autocomplete/>
                </div>
                <div class="control">
                    <label class="label small" for="lastname">Nom</label>
                    <input class="input small signUp" v-model="form.lastname" id="lastname" type="text" placeholder="Enter your lastname" required autocomplete/>
                </div>
            </div>
            <div class=" field is-grouped">
                <div class="control">
                    <label class="label small">Je suis un/une </label>
                    <div class="select dropdown">
                        <select name="gender" id="gender" v-model="form.gender">
                            <option value="female">Femme</option>
                            <option value="male">Homme</option>
                        </select>
                    </div>
                </div>
                <div class="control">
                    <label class="label small" for="birthDate">Date de naissance </label>
                    <input class=" input signUp" v-model="form.birthDate" id="birthDate" type="text" placeholder="Enter your date of birth" required autocomplete/>
                </div>
            </div>
            <div class="control has-icons-left">
                <label class="label small" for="phone">Telephone </label>
                <input class="input small signUp" v-model="form.phone" id="phone" type="text" placeholder="Enter your phone number" required autocomplete/>
            </div>
            <div class="control has-icons-left">
                <label class="label small" for="email">Adresse email </label>
                <input class="input small signUp" v-model="form.email" id="email" type="email" placeholder="Enter your email" required autocomplete/>
                <span class="icon is-small is-left">
      <i class="fa fa-envelope"></i>
    </span>
            </div>
            <div class="control has-icons-left">
                <label class="label small" for="password">Mot de passe</label>
                <input class="input small signUp" v-model="form.password" id="password" type="password" placeholder="Insert Password" required />
                <span class="icon is-small is-left">
      <i class="fa fa-lock"></i>
   </span>
            </div>
            <div class="control has-icons-left">
                <label class="label small" for="confirm">Confirmer le mot de passe</label>
                <input class="signUp input" v-model="form.confirm" id="confirm" type="password" placeholder="Verify Password" required />
            </div>
            <div class="control">
                <label class="checkbox">
                    <input type="checkbox"> J'ai lu et j'accepte les <a target="about_blank" href="/legal"> conditions générales de vente </a>
                </label>
            </div>
            <button @click="toggleView" class="form-btn sx log-in" type="button">Already a member?</button>
            <button class="form-btn dx" type="submit">Sign Up</button>
        </form>
        <form @submit.prevent="processForm" :class="{'signIn':true,'active-sx':loginCard, 'inactive-dx':signupCard, 'flex':true}">
            <h3>Welcome  Back !</h3>
            <input class="flex w100" :class="{'hasContent': form.email}" size="30" icon="mail" type="email" placeholder="Enter your email" autocomplete required v-model="form.email" />
            <input class="flex w100" :class="{'hasContent': form.email}" size="30" type="password" icon="lock" placeholder="Insert Password" required password-reveal />
            <p>- or -</p>
            <button class="fb" type="button">Log In With Facebook</button>
            <button @click="toggleView" class="form-btn sx back" type="button">Signup</button>
            <button class="form-btn dx" type="submit">Log In</button> --></form>
    </section>
</template>
<script>
export default {
  name: 'ModalForm',

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
    toggle(e) {
      console.log(e);
      if (
        e.path[0].className.split(' ')[0] === 'signUp' ||
        e.path[0].className.split(' ')[0] === 'signIn'
      )
        this.toggleView();
    },
    close(e) {
      console.log(e.path);
      if (e.path[0].className === 'fullscreen') this.$emit('close');
    },
    toggleView() {
      this.loginCard = !this.loginCard;
      this.signupCard = !this.signupCard;
    },
    processForm() {
      if (loginCard) {
        login(this, form.email, this, form.password, this.$root)
          .then(r => this.$emit('loggedIn', r))
          .catch(err => {
            this.error = err.response.data.error;
            console.error('Login error', err);
          });
      }
      if (signupCard) {
        signup(this.form)
          .then(r => login(r.email, r.password, this.$root))
          .then(r => this.$emit('loggedIn', r))
          .catch(err => {
            this.error = err.response.data.error;
            console.error('Signup err', err);
          });
      }
    },
  },
};
</script>
