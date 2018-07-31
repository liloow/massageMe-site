<template>
  <section class="container">
    <div class="step-wrapper">
      <h2 @click="collapsed = !collapsed">Resume de votre commande</h2>
      <ul :class="collapsed ? 'collapsed' : ''" class="steps">
        <li class="step" >
          <div class="row">
            <h5 class="step-title">L'adresse : </h5>
            <p v-if="steps.address" class="step-body">
              {{steps.address.name}} <br>
              {{steps.address.postcode}} {{steps.address.city}}
            </p>
          </div>
        </li>
        <li class="step" >
          <div class="row">
            <h5 class="step-title">Le massage : </h5>
            <p class="step-body">{{steps.massage ? steps.massage.name : null}}</p>
          </div>
        </li>
        <li class="step" >
          <div class="row">
            <h5 class="step-title">Date et heure : </h5>
            <p class="step-body">
              {{steps.date.formattedDate}} a {{steps.timeslot.time}}
            </p>
          </div>
        </li>
        <li class="step" >
          <div class="row">
            <h5 class="step-title">Par : </h5>
            <p class="step-body">{{steps.therapist.fullname}}</p>
          </div>
        </li>
        <li class="step" >
          <div class="row">
            <h5 class="step-title">Total : </h5>
            <p class="step-body">60 EUR.</p>
          </div>
        </li>
        <li class="step" >
            <button class="btn btn-filled" @click="confirm($event)">Valider</button>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: 'SummaryStep',
  computed: {
    ...mapGetters({
      steps: 'getSteps',
    }),
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    confirm(e) {
      this.collapsed = true;
      this.$emit('clientAgreed');
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: none;
  width: 60%;
  min-width: 500px;
}
.collapsed {
  max-height: 0px !important;
  transition: max-height 1s;
}
.step-wrapper {
  width: 95%;
  min-width: 400px;
  max-width: 600px;
  margin-top: 0.5em;
  margin: auto;
  padding: 1em;
  display: block;
  -webkit-box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
  -moz-box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
  box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
  h2 {
    font-weight: 300;
    font-size: 2.2em;
    line-height: 1.2em;
    font-family: 'Oswald', Arial, sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 0.2em;
    color: var(--mm);
    &:before {
      padding-left: 2rem;
      content: '>';
      font-size: 1.2em;
      line-height: 0.5em;
      float: left;
    }
    &:after {
      transition: transform 0.5s ease-in-out;
      transform: rotate(90deg);
    }
  }
  ul.steps {
    display: flex;
    overflow: hidden;
    list-style: none;
    flex-flow: column nowrap;
    justify-content: space-between;
    max-height: 50vh;
    transition: max-height 1s;
    li.step {
      flex: 1 1 0px;
      margin: 0 auto;
      width: 80%;
      padding: 0.1em 0.5em;
      display: inline-block; // border: solid 1px black;
      button {
        padding-left: 2em;
        padding-right: 2em;
        margin: 0.8em auto 0;
      }
      .row {
        display: flex;
        margin: auto;
        padding-top: 1em;
        p {
          display: flex;
          flex: 1.5;
          justify-content: flex-start;
          margin: auto;
          padding-left: 5em;
          text-align: left;
        }
        h5 {
          display: flex;
          flex: 1;
          justify-content: flex-end;
          font-family: 'Oswald', Arial, sans-serif;
          font-weight: 600;
          font-size: 1.2em;
          text-decoration: underline;
          margin: 0;
        }
      }
    }
  }
}
</style>
