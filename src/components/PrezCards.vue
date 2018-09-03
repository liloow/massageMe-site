<template>
  <div class="card-wrapper">
    <figure class="card" :style="cardStyle">
      <div v-if="closeIcon" @click="$emit('close', $event)" class="close"></div>
      <div class="image" :style="pictureStyle">
        <img :src="cardImg" :style="roundPic ? {borderRadius:'100%', margin: 'auto', border: 'solid 0.5rem #044169'} : {}"/>
      </div>
      <figcaption>
        <h5>{{cardTitle}}</h5>
        <p>{{cardBody}}<a v-if="cardLink" href="#" @click.prevent="$emit('cardLinkClicked', $event)">voir la suite</a></p>
      </figcaption>
      <div class="card-footer" v-if="cardButton">
        <button class="btn btn-filled" @click="$emit('cardButtonClicked', $event)"> {{cardButton}}</button>
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
    cardLink: Boolean,
    cardImg: String,
    cardStyle: Object,
    closeIcon: Boolean,
    pictureStyle: {
      type: Object,
      default: () => ({}),
    },
    roundPic: Boolean,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.scale {
  > .card {
    left: calc((50% + 200px) * 0.9) !important;
    transform: scale(1) !important;
  }
}

.card {
  font-family: 'Roboto', Arial, sans-serif;
  overflow: hidden;
  min-width: 230px;
  max-width: 250px;
  width: 100%;
  color: #141414;
  text-align: left;
  line-height: 1.5;
  font-size: 0.8rem;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.5em;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  text-rendering: optimizeLegibility;
  display: flex;
  flex-flow: column;
  flex: 1;
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

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  margin: 0.01rem;
}

.card img {
  width: 100%;
  vertical-align: top;
  justify-content: center;
  margin: -20% auto 0;
  pointer-events: none;
}

.card figcaption {
  width: 95%;
  position: relative;
  margin: auto;
  display: flex;
  flex-flow: column;
  flex: 1.3;
  margin-bottom: 0.5rem;
  a {
    font-size: 0.8rem;
  }
  h5 {
    flex: 0;
    padding: 1rem;
  }
  p {
    font-size: 0.8rem;
    letter-spacing: 0.5px;
    opacity: 1;
    margin: auto;
    width: 95%;
    flex: 5;
  }
}

.card-footer {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  .btn {
    margin: 0.2rem auto 1rem;
  }
}
</style>
