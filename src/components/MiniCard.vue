<template>
  <div class="is-table-row"  :hack="index === 2 ? fetchElems() : ''">
    <div v-if="index === 1" class="pic-cell">
      <img class="cover" :src="cardImg" />
    </div>
    <figcaption class="text-cell" :class="index === 1 ? 'left' : 'right'">
      <h6>{{cardTitle}}</h6>
      <p>{{cardBody | firstSentence}}</p>
      <button v-if="cardButton" class="btn btn-filled" @click="$emit('buttonClicked')">{{cardButton}}</button>
    </figcaption>
    <div v-if="index !== 1" class="pic-cell">
      <img class="cover" :src="cardImg" />
    </div>
  </div>
</template>
<script>
import {firstSentence} from '@/filters';
import {smoothAppear} from '@/Mixins';
export default {
  name: 'MiniCard',
  filters: {firstSentence},
  mixins: {smoothAppear},
  props: {
    cardTitle: String,
    cardBody: String,
    cardButton: String,
    cardLink: Boolean,
    cardImg: String,
    index: Number,
    closeIcon: Boolean,
    pictureStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.is-table-row {
  border-top: solid 1px rgba(4, 65, 105, 0.1);
  border-bottom: solid 1px rgba(4, 65, 105, 0.1);
  display: flex;
  max-height: 31%;
  padding: 4% 7%;
  transition: opacity 1.5s ease;
  &.faded {
    opacity: 0;
  }
  .pic-cell {
    display: flex;
    flex: 0;
    background-size: cover;
    background-position: center 0;
    width: fit-content;
    img {
      border-radius: 0.5rem;
    }
  }
  .left {
    padding-left: 5%;
    margin-left: auto;
  }
  .right {
    margin-right: auto;
    padding-right: 5%;
  }
  .text-cell {
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    flex: 1;
    h6 {
      padding-top: 0;
    }
    p {
      font-size: 0.8rem;
      padding: 0.2rem;
      font-weight: bold;
      font-style: italic;
    }
    button {
      margin: auto;
      padding: 2% 5%;
      width: 50%;
    }
  }
}
</style>
