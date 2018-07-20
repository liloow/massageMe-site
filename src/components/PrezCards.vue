<template>
  <div class="card-wrapper">
    <figure class="card" :style="cardStyle">
      <div v-if="closeIcon" @click="$emit('close', $event)" class="close"></div>
      <div class="image">
        <img :src="cardImg" />
      </div>
      <figcaption>
        <h5>{{cardTitle}}</h5>
        <p>{{cardBody}}<a v-if="!cardButton" href="#" @click.prevent="$emit('cardLinkClicked', $event)">voir la suite</a></p>
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
    cardStyle: Object,
    closeIcon: Boolean,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Oswald);
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Quattrocento);

.scale {
  > .card {
    left: calc(50% - 200px) !important;
    transform: scale(1) !important;
  }
}

.card {
  font-family: 'Quattrocento', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px 0.7vw;
  min-width: 230px;
  max-width: 250px;
  width: 100%;
  color: #141414;
  text-align: left;
  line-height: 1.4em;
  font-size: 0.8em;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.5em;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  text-rendering: optimizeLegibility;

  .close {
    opacity: 0.5;
    color: black;
    font-family: sans-serif;

    &:hover {
      opacity: 1;
    }
    &:before {
      content: 'X';
      position: absolute;
      top: 0;
      right: 0;
      margin: 1em;
      cursor: pointer;
      font-weight: 1000;
      font-size: 1.3em;
    }
  }
}

.cards {
  &.card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-direction: row;
    flex-basis: 0;
    height: auto;
    margin: 0 0.5em;
    flex-shrink: 0;
  }
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
  height: 12.5em;
}

.card h5 {
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1.2em;
  font-family: 'Oswald', Arial, sans-serif;
  text-transform: uppercase;
}

.card p {
  font-size: 0.9em;
  letter-spacing: 1px;
  opacity: 1;
  margin: auto;
  width: 95%;
}

.card-footer {
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 0;
}

.btn.btn-filled {
  margin: 0 auto 1em;
}
</style>
