<template>
  <div class="card-wrapper">
    <figure class="card">
      <div class="image"><img :src="cardImg" />
      </div>
      <figcaption>
        <h2>{{cardTitle}}</h2>
        <p>{{cardBody}}<a v-if="!cardButton" href="#" @click.prevent="$emit('cardLinkClicked', $event)">voir la suite</a></p>
        <div class="price">
        </div>
      </figcaption>
      <div class="card-footer">
        <button v-if="cardButton" class="btn btn-filled" @click="$emit('cardButtonClicked', $event)"> {{cardButton}}</button>
      </div>
    </figure>
  </div>
</template>
<script>
export default {
  name: 'PrezCards',
  props: {
    cardTitle: String,
    cardBody: String,
    cardButton: String,
    cardImg: String,
  },
  data() {
    return {};
  },
};
</script>
<style lang="css" scoped>
@import url(https://fonts.googleapis.com/css?family=Oswald);
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Quattrocento);
.card {
  font-family: 'Quattrocento', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px 1vw;
  min-width: 230px;
  max-width: 315px;
  width: 100%;
  color: #141414;
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
  margin: 0 0.5em;
  flex-shrink: 0;
}

.card img {
  width: 100%;
  vertical-align: top;
  justify-content: center;
  margin: -20% auto 0;
  pointer-events: none;
}

.card figcaption {
  width: 100%;
  padding: 0 0.5em 0.5em;
  position: relative;
  margin: auto;
  height: 11.5em;
}

.card h2,
.card p {
  margin: 0.7em;
}

.card h2 {
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1.2em;
  font-family: 'Oswald', Arial, sans-serif;
  text-transform: uppercase;
}

.card p {
  font-size: 0.9em;
  letter-spacing: 1px;
  opacity: 0.9;
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
  padding: 0 0 1em
}


</style>
