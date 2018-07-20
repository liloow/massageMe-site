<style scoped>
@import 'https://fonts.googleapis.com/css?family=Dosis|Roboto:300,400';
form {
    position: absolute;
    text-align: center;
    background: ghostwhite;
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
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    text-transform: uppercase;
    font-size: 12px;
    color: #ff9a58;
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
    color: #ff9a58;
    margin: -10vh 0vh 0;
    letter-spacing: 0.2rem;
    padding: 2vh 0vh;
}

button.fb {
    background: #3b5998;
    width: 50px;
    height: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: ghostwhite;
    text-transform: uppercase;
    border-radius: 4px;
    border: 1px solid #29487d;
    cursor: pointer;
    margin: 20px 7px 20px;
    transition: all 0.3s linear;
}

button.fb:hover {
    background: ghostwhite;
    color: #3b5998;
}

button.form-btn {
    position: absolute;
    width: 50%;
    height: 60px;
    bottom: 0;
    border: 0;
    font-family: 'Dosis';
    font-size: 24px;
    text-transform: uppercase;
    cursor: pointer;
}

button.form-btn.sx {
    left: 0;
    border-radius: 0 0 0 5px;
    background-color: rgba(255, 125, 0, 0.35);
    color: ghostwhite;
    transition: all 0.3s linear;
}

button.form-btn.sx:hover {
    background-color: rgba(255, 125, 0, 0.65);
    color: ghostwhite;
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
    color: ghostwhite;
}

.signIn ::-webkit-input-placeholder {
    color: #ffc185;
    font-family: 'Roboto';
    font-weight: 50;
    font-size: 1rem;
}

.signIn :-moz-placeholder {
    color: #ffc185;
    font-family: 'Roboto';
    font-weight: 50;
    font-size: 1rem;
}

.signIn ::-moz-placeholder {
    color: #ffc185;
    font-family: 'Roboto';
    font-weight: 50;
    font-size: 1rem;
}

.signIn :-ms-input-placeholder {
    color: #ffc185;
    font-family: 'Roboto';
    font-weight: 50;
    font-size: 1rem;
}

.signUp ::-webkit-input-placeholder {
    color: #ffc185;
    font-family: 'Roboto';
    font-weight: 50;
    font-size: 1rem;
}

.signUp :-moz-placeholder {
    color: #ffc185;
    font-family: 'Roboto';
    font-weight: 50;
    font-size: 1rem;
}

.signUp ::-moz-placeholder {
    color: #ffc185;
    font-family: 'Roboto';
    font-weight: 50;
    font-size: 1rem;
}

.signUp :-ms-input-placeholder {
    color: #ffc185;
    font-family: 'Roboto';
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
    padding: 0vh 0vw;
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
        transform: perspective(7vw) translate3d(0px, 0px, 0px);
        opacity: 1;
        box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.25);
    }
    100% {
        z-index: 1;
        transform: perspective(7vw) translate3d(7vw, 0px, -30px);
        opacity: 0.5;
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);
    }
}

@keyframes overshadowing-sx {
    0% {
        z-index: 2;
        transform: perspective(7vw) translate3d(0px, 0px, 0px);
        opacity: 1;
        box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.25);
    }
    100% {
        z-index: 1;
        transform: perspective(7vw) translate3d(-7vw, 0px, -30px);
        opacity: 0.5;
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);
    }
}

@keyframes foregrounding-dx {
    0% {
        z-index: 1;
        transform: perspective(7vw) translate3d(7vw, 0px, -30px);
        opacity: 0.5;
    }
    50% {
        z-index: 2;
        transform: perspective(7vw) translate3d(300px, 0px, -30px);
    }
    100% {
        z-index: 2;
        transform: perspective(7vw) translate3d(0px, 0px, 0px);
        opacity: 1;
    }
}

@keyframes foregrounding-sx {
    0% {
        z-index: 1;
        transform: perspective(7vw) translate3d(-7vw, 0px, -30px);
        opacity: 0.5;
    }
    50% {
        z-index: 2;
        transform: perspective(7vw) translate3d(-300px, 0px, -30px);
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
    font-family: 'Roboto';
    color: #ff9a58;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 100;
    margin: 3vh 0 2vh;
    background-color: ghostwhite;
    line-height: 200%;
}

.signUp input {
    border: none;
    width: 85%;
    font-family: 'Roboto';
    color: #ff9a58;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 100;
    margin: 0vh 0 2vh;
    background-color: ghostwhite;
    line-height: 200%;
}

.signUp input.checkbox {
    padding: 0 1vw;
    width: auto;
    margin: auto;
}

.flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.flex-row {
    display: flex;
    align-items: center;
    padding: 0 1vw 0;
}

.signUp input:focus,
.signUp input:hover,
.signIn input:focus,
.signIn input:hover,
.hasContent {
    border-bottom: solid 1px #ff9a58;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-flow: row;
    align-items: center;
    text-align: left;
}
</style>
<template>
    <section>
        <form @click.self="toggle($event)" @submit.prevent="processForm($event)" :class="{'signUp':true,'active-dx':signupCard, 'inactive-sx':loginCard, 'flex':true}">
            <h3>S'inscrire</h3>
            <input class="flex w100" size="30" v-model="form.firstname" id="firstname" type="text" placeholder="Enter your firstname" required autocomplete/>
            <input class="flex w100" size="30" v-model="form.lastname" id="lastname" type="text" placeholder="Enter your lastname" required autocomplete/>
            <input class="flex w100" size="30" :class="{'hasContent': form.email}" icon="mail" type="email" placeholder="Enter your email" autocomplete required v-model="form.email" />
            <input class="flex w100" size="30" v-model="form.password" :class="{'hasContent': form.email}" type="password" icon="lock" placeholder="Insert Password" required password-reveal />
            <input class="flex w100" size="30" v-model="form.confirm" id="confirm" type="password" placeholder="Verify Password" required />
            <div class="flex-row ">
                <p class="small">J'ai lu et j'accepte les <a target="about_blank" href="/legal"> conditions générales de vente </a> </p>
                <input type="checkbox" class="checkbox is-narrow" />
            </div>
            <button @click="toggleView" class="form-btn sx log-in" type="button">Already a member?</button>
            <button class="form-btn dx" type="submit">Sign Up</button>
        </form>
        <form @click.self="toggle($event)" @submit.prevent="processForm" :class="{'signIn':true,'active-sx':loginCard, 'inactive-dx':signupCard, 'flex':true}">
            <h3>Welcome <br> Back !</h3>
            <input class="flex w100" :class="{'hasContent': form.email}" size="30" icon="mail" type="email" placeholder="Enter your email" autocomplete required v-model="form.email" />
            <input class="flex w100" :class="{'hasContent': form.password}" size="30" type="password" icon="lock" placeholder="Insert Password" required password-reveal v-model="form.password" />
            <p>- or -</p>
            <div class="flex-row">
                <button class="fb" type="button">F</button>
                <button class="fb" type="button">G</button>
                <button class="fb" type="button">L</button>
            </div>
            <button @click="toggleView" class="form-btn sx back" type="button">Signup</button>
            <button class="form-btn dx" type="submit">Log In</button>
        </form>
    </section>
</template>
<script>
import {login, signup} from '@/api/auth';
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
      if (e.path[0].className.split(' ')[0] === 'signUp' && this.loginCard) this.toggleView();
      if (e.path[0].className.split(' ')[0] === 'signIn' && this.signupCard) this.toggleView();
    },
    toggleView() {
      this.loginCard = !this.loginCard;
      this.signupCard = !this.signupCard;
    },
    processForm(e) {
      if (this.loginCard) {
        console.log(e);
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
