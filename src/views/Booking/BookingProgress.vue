<template>
  <section class="container-fluid">
    <div class="step-wrapper">
      <ul class="steps">
        <li class="step">
          <h5 class="step-title">Ou ?</h5>
          <p  v-if="steps.address" class="step-body">
          {{steps.address.name}} <br>
          {{steps.address.postcode}} {{steps.address.city}}
        </p>
        </li>
        <li class="step">
          <h5 class="step-title">Quoi ?</h5>
          <p class="step-body">{{steps.massage ? steps.massage.name : null}}</p>
        </li>
        <li class="step">
          <h5 class="step-title">Quand ?</h5>
          <p class="step-body">
            {{steps.date}} <br>
            {{steps.timeslot}}
          </p>
        </li>
        <li class="step">
          <h5 class="step-title">Qui ?</h5>
          <p v-if="steps.therapist" class="step-body">{{steps.therapist.name}}</p>
        </li>
        <li class="step">
          <h5 class="step-title">Combien ?</h5>
          <p class="step-body">{{steps.payment}}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'BookingProgress',
  computed: {
    ...mapGetters({
      steps: 'getSteps',
    }),
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  padding: 0;
}

.step-wrapper {
  margin-top: 0.5em;
  display: block;
  ul.steps {
    display: flex;
    width: 100%;
    list-style: none;
    flex-flow: row nowrap;
    justify-content: space-between;
    li.step {
      flex: 1 0 0px;
      margin: 0 0.2em;
      padding: 0.2em 0.5em;
      display: inline-block;
      // border: solid 1px black;
      -webkit-box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
      -moz-box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
      box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 13px 1px;
      h5,
      p {
        margin: 0;
      }
      h5 {
        font-family: 'Oswald', Arial, sans-serif;
        font-weight: 600;
        font-size: 1.2em;
        text-decoration: underline;
      }
    }
  }
}
</style>
