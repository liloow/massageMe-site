<template>
  <section>
    <div class="container">
      <form @input="check($event)" class="borderless">
        <div class="row">
          <div class="columns">
            <div class="column third">
              <div class="row">
                <img class="logo" src="../../assets/img/logo/Full.svg" alt="Logo">
              </div>
              <div class="row">
                <p>N'hésitez pas à nous contacter pour toutes vos questions.</p>
              </div>
              <div class="row">
                <p> Laissez-nous un message; nous y répondrons dans les plus brefs délais.</p>
              </div>
              <div class="row">
                <p>
                  Tel: 0498.82 39 31
                  <br> E-mail: infos@massageme.be
                  <br> N° compte: BE13 0018 0837 4939
                </p>
              </div>
            </div>
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
          </div>
        </div>
        <div class="row">
          <div class="container 1em">
            <div class="field full block">
              <textarea id="message" rows="1" class="empty textarea input" type="message" resizable="false" placeholder="Salut Massage-Me !" required="true" autocomplete="message" @input="handleResize($event)"></textarea>
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
  </section>
</template>
<script>
import CustomSelect from '@/components/CustomSelect';
export default {
  name: 'Contact',

  data() {
    return {
      status: 'idle',
      isActive: false,
      message: '',
      form: {
        fullname: '',
        email: '',
        tel: '',
        subject: '',
        message: '',
      },
      txtScroll: 0,
    };
  },
  methods: {
    sendForm(event) {
      console.log(event.target.labels[0].classList);
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
.borderless {
  width: 95%;
  padding-top: 0;
  button.bottom {
    position: absolute;
    left: 50%;
    bottom: 12.5vh;
    transform: translateX(-50%);
  }
  .row {
    display: flex;
    flex-direction: column;
    height: unset;
    .columns {
      display: flex;
      margin: auto;
      .column {
        margin: 0 auto;
      }
      .column.third {
        width: 40%;
        .logo {
          max-width: 100%;
        }
        p {
          font-size: 1rem;
          font-family: 'Quattrocento', Arial, sans-serif;
        }
      }
      .column.two-third {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 60%;
        padding-top: 10%;
        .row {
          display: flex;
          flex-direction: row;
          height: unset;
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
          }
        }
      }
    }
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
