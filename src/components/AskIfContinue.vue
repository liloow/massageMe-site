<template>
  <section class="container card-wrapper address-input">
    <div class="card appointment">
      <header class="card-title">
        <h2 class="card-header-title title is-3 is-centered">
          Il semblerait qu'un precedent processus de reservation n'aie pas ete valide. Voulez-vous recuperer votre progression ?
        </h2>
      </header>
      <div class="card-content">
        </footer>
        <button type="button" @click="$emit('continueProgress')" class="btn btn-filled">Continuer</button>
        <button type="button" @click="$emit('resetProgress')" class="btn btn-filled">Remettre a 0</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AskIfContinue',
  data() {
    return {};
  },
};
</script>
<style lang="css" scoped>
.appointment {
  margin: 5rem;
}

.validator {
  text-align: center;
  padding: 5vh,
}

.input {
  padding-top: 3vh;
}

.card {
  position: relative;
  margin: 10px 1%;
  width: 100%;
  text-align: left;
  line-height: 1.4em;
  font-size: 0.8em;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.5em;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.cards .card-wrapper {
  flex-basis: 0;
  height: auto;
  margin: 0 auto;
  flex-grow: 0.4;
  flex-shrink: 0;
}

.card-title h2 {
  font-weight: 300;
  font-size: 2.2em;
  line-height: 1.2em;
  font-family: 'Oswald', Arial, sans-serif;
  text-transform: uppercase;
  text-align: center;
}

.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: row;
}

.card-footer {
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 0 0
}

.address-input {
  max-width: 800px;
  width: 75%;
  text-align: center;
  margin: auto;
  flex: 1 0 0px;
}

</style>
