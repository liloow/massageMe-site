<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="columns">
          <div class="column static is-one-quarter-desktop is-one-third-widescreen">
            <div class="row">
              <img class="logo" src="../assets/img/logo/Full.svg" alt="Logo">
            </div>
            <div class="row">
              <p>N'hésitez pas à nous contacter pour toutes vos questions.</p>
              <p> Laissez-nous un message; nous y répondrons dans les plus brefs délais.</p>
            </div>
            <div class="row">
              <p>
                <br>Tel: 0498.82 39 31
                <br> E-mail: infos@massageme.be
                <br> N° compte: BE13 0018 0837 4939
              </p>
            </div>
          </div>
          <div class="column userfields">
            <div class="form-group">
              <h2 class="heading">Vos informations</h2>
              <div class="controls">
                <input type="text" id="firstname" icon="account_circle" class="floatLabel" v-model="form.firstName" placeholder @focus="a($event)" @blur="a($event)">
                <label for="firstname">Prenom</label>
              </div>
              <div class="controls">
                <input type="text" id="lastname" icon="person" class="floatLabel" v-model="form.lastName" placeholder @focus="a($event)" @blur="a($event)">
                <label for="lastname">Nom </label>
              </div>
              <div class="controls">
                <input type="email" id="email" icon="mail" class="floatLabel" v-model="form.email" placeholder @focus="a($event)" @blur="a($event)">
                <label for="email">Email</label>
              </div>
              <div class="controls">
                <input type="tel" id="phoneNo" icon="phone_android" class="floatLabel" v-model="form.tel" placeholder @focus="a($event)" @blur="a($event)">
                <label for="phoneNo">Telephone</label>
              </div>
              <div class="controls">
                <input type="tel" id="phoneNo" icon="phone_android" class="floatLabel" v-model="form.tel" placeholder @focus="a($event)" @blur="a($event)">
                <label for="phoneNo">Telephone</label>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <!--  Details -->
          <div class="form-group">
            <h2 class="heading">Votre message</h2>
            <b-field class="controls">
              <input type="text" id="subject" class="floatLabel" icon="priority_high" v-model="form.subject" placeholder @focus="a($event)" @blur="a($event)" expanded>
              <label for="subject">Sujet</label>
            </b-field>
            <b-field class="controls">
              <textarea name="message" class="floatLabel" id="message" placeholder @focus="a($event)" @blur="a($event)"></textarea>
              <label for="message">Message</label>
            </b-field>
            <button @click="sendForm($event)" class="button" type="button" icon="send">Envoyer</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Contact',

  data() {
    return {
      isActive: false,
      message: '',
      form: {
        firstname: '',
        lastName: '',
        email: '',
        tel: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    sendForm(event) {
      console.log(event.target.labels[0].classList);
      console.log(this.form);
    },
    a(e) {
      !e.target.value ? e.target.labels[0].classList.toggle('active') : 'He free now';
      e.target.placeholder === ''
        ? (e.target.placeholder = `Enter your ${e.target.id}`)
        : (e.target.placeholder = '');
    },
  },
};
</script>
<style lang="css" scoped>
@import '../../assets/stylesheets/formStyle.css';
.column {
  margin: 0.5rem;
}

.heading {
  margin-bottom: 1rem
}

.controls {
  padding: 0.6rem;
  justify-content: center
}

.userfields .controls input {
  padding: 0.5rem;
  width: 90%;
}

.static {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo {
  max-width: 100%;
}

</style>
