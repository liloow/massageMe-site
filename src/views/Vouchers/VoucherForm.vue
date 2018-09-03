<template>
  <section class="container">
      <div class="title">
        <h1>Rejoins-nous !</h1>
      </div>
      <div class="container 1em">
        <form @input="check($event)" class="borderless">
          <div class="row">
            <div class="field mini">
              <custom-select :options="['M.', 'Mme']"></custom-select>
              <div class="baseline"></div>
            </div>
            <div class="field fill">
              <input id="addressVouch" class="input empty" type="text" placeholder="" required="true" autocomplete="fullname">
              <label for="address" data-tid="elements_examples.form.address_label">Nom Complet</label>
              <div class="baseline"></div>
            </div>
          </div>
          <div class="row">
            <div class="field full">
              <input id="emailVouch" class="input empty" type="email" placeholder="playboy007@caramail.com" required="true" autocomplete="email">
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
              <input id="phoneVouch" class="input empty" type="text" placeholder="" required="true" autocomplete="mobile">
              <label for="phone">Mobile</label>
              <div class="baseline"></div>
            </div>
            <div class="field fill fourth">
              <input id="postalCode" class="input empty fourth" type="text" placeholder="4000" required="true" autocomplete="postalCode">
              <label for="postalCode">Code Postal</label>
              <div class="baseline"></div>
            </div>
          </div>
          <div class="row select">
            <div class="field fill">
              <label class="dispatch" for="dispatch" data-tid="form.dispatch">Un CV ? Joins-le ici !</label>
            </div>
            <input id="dispatch" type="radio" name="dispatch" v-model="form.dispatch" hidden>
              <div class="baseline"></div>
            </div>
            <div class="row">
            <div class="container 1em">
              <div class="field full block">
                <textarea id="message" rows="1" class="empty textarea input" type="message" resizable="false" placeholder="Quelles sont tes motivations, ..." required="true" autocomplete="message" @input="handleResize($event)"></textarea>
                <label for="message" data-tid="form.message">Message</label>
                <div class="baseline"></div>
              </div>
            </div>
          </div>
          <button class="btn btn-filled bottom" type="submit">Envoyer</button>
        </form>
      </div>
  </section>
</template>
<script>
import CustomSelect from '@/components/CustomSelect';
export default {
  name: 'VoucherForm',
  data() {
    return {
      status: 'idle',
      isActive: false,
      message: '',
      form: {
        fullname: '',
        email: '',
        tel: '',
        resume: '',
        message: '',
      },
      txtScroll: 0,
    };
  },
  methods: {
    sendForm(event) {
      console.log(this.form);
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
    handleResize(e) {
      if (!this.txtScroll) this.txtScroll = e.target.scrollHeight;
      if (this.txtScroll - e.target.scrollHeight < 0) {
        e.target.setAttribute('rows', Number(e.target.getAttribute('rows')) + 1);
        this.txtScroll = e.target.scrollHeight;
      }
    },
  },
  mounted() {
    // Floating labels
    const inputs = document.querySelectorAll('.borderless .input');
    Array.prototype.forEach.call(inputs, input => {
      input.addEventListener('focus', e => this.handleFocus(e));
      input.addEventListener('blur', e => this.handleFocus(e));
    });
    const textarea = document.querySelector('textarea');
    textarea.addEventListener('focus', e => this.handleFocus(e));
    textarea.addEventListener('blur', e => this.handleFocus(e));
  },
  components: {
    CustomSelect,
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/form.scss';

.1em {
  margin-top: 1em;
}

.title {
  text-align: center;
  padding: 1rem auto;
}

.borderless {
  width: 95%;
  padding-top: 0;
  button.bottom {
    position: absolute;
    left: 50%;
    margin-top: 5rem;
    transform: translateX(-50%);
  }
  .row {
    display: flex;
    flex-direction: column;
    height: unset;
    display: flex;
    flex-direction: row;
    height: unset;
    margin: 2rem;
    &.resume {
      padding-top: 1rem;
      span {
        padding: 0 0.3rem;
      }
    }
    .field.fill,
    .field.full {
      flex: 1 1 0px;
      width: initial;
      &.fourth {
        width: 25%;
        flex: 0.5 1 0px;
      }
    }
    .fill {
      margin-left: 3%;
      label.resume {
        background-color: var(--mm);
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px ridge black;
        height: auto;
        text-align: center;
        color: ghostwhite;
        font-weight: bold;
        &:hover {
          opacity: 0.8;
        }
      }
    }

    .field.full.block {
      height: auto;
      width: 100%;
      margin: auto;
      label {
        top: 0;
        z-index: 30;
        overflow: visible;
      }
    }
  }
}

#message {
  width: 100%;
  position: relative;
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

// .bo
.borderless input,
.borderless textarea,
.borderless button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-style: none;
}

.borderless button {
  display: block;
  width: 40%;
  height: 3em;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
}
</style>
