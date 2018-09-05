<template>
  <section class="hero is-large">
    <div class="columns-fluid">
      <div class="column-fluid hero-body">
        <div class="row is-picture">
        </div>
      </div>
      <div class="column-fluid hero-body">
        <div class="row is-table">
          <div class="is-title-row">
            <h6>Nos Massages</h6>
          </div>
          <div class="is-table-row" v-for="(massage, index) in featured" :key="`featured-${massage.id}`">
            <div v-if="index === 1" class="pic-cell">
              <img class="cover" :src="massage.img_url" />
            </div>
            <figcaption class="text-cell" :class="index === 1 ? 'left' : 'right'">
              <h6>{{massage.name}}</h6>
              <p>{{massage.short}}</p>
              <button class="btn btn-filled">Book now</button>
            </figcaption>
            <div v-if="index !== 1" class="pic-cell">
              <img class="cover" :src="massage.img_url" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: 'ServicesRow',
  computed: {
    ...mapGetters({
      massages: 'getMassages',
    }),
    featured() {
      if (this.massages) {
        const copy = [...this.massages];
        const arr = [];
        for (let i = 1; i <= 3; i++) {
          const index = Math.round(Math.random() * copy.length - i);
          arr.push(copy.splice(index, 1)[0]);
        }
        return arr;
      }
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.columns-fluid {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  margin: 0;
  flex: 1;
  min-width: 20rem;
  .column-fluid {
    display: table-cell;
    display: flex;
    width: 50%;
    flex: 1;
    .row {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      position: relative;
      margin: 1% 0;
      &.is-table {
        display: flex;
        flex-flow: column;
        margin: 0 1rem 1rem;
        padding-left: 20%;
        .is-title-row {
          height: 10%;
          text-align: center;
          font-size: 1.2rem;
        }
        .is-table-row {
          display: flex;
          max-height: 30%;
          padding-top: 1%;
          .pic-cell {
            border-radius: 0.5rem;
            overflow: hidden;
            width: auto;
          }
          figcaption.left {
            padding-right: 10%;
          }
          .rigth {
            padding-left: 10%;
          }
          .text-cell {
            flex: 4;
            display: flex;
            flex-flow: column nowrap;
            width: unset;
            p {
              font-size: 0.8rem;
              padding: 0.5rem;
            }
            button {
              margin: auto;
              padding: 2% 5%;
              width: 50%;
            }
          }
        }
      }
      &.is-picture {
        background-image: url('../../assets/img/large/tshirt.jpg');
        background-size: cover;
        background-position: center 0;
        pointer-events: none;
      }
      h6,
      button {
        opacity: 1;
        transition: opacity 1.5s ease;
        &.faded {
          opacity: 0;
        }
      }
      .body-content {
        width: 80%;
        display: flex;
        flex: 1.8;
        margin: auto;
        flex-flow: column nowrap;
        h6 {
          text-align: center;
          margin: auto;
          font-size: 1.4vw;
          width: 90%;
          flex: 1;
          &.spacy {
            letter-spacing: 1rem;
          }
          &.biggie {
            flex: 3;
            font-size: 1.8vw;
            width: 100%;
          }
        }
      }
      .body-footer {
        text-align: center;
        margin: auto;
        bottom: 5%;
        position: relative;
        .btn {
          font-size: 1.4vw;
          font-family: 'Raleway';
          padding: 0.8rem 1.5rem;
          white-space: nowrap;
          text-transform: uppercase;
          margin: auto;
          font-weight: 200;
          &:hover {
            transform: translate(1px, 1px);
          }
          &:not(.faded) {
            animation: emphase 2s ease 0s;
          }
        }
      }
    }
  }
}

@keyframes emphase {
  0% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 1024px) {
  .columns-fluid {
    .column-fluid {
      &.hero-body.is-picture {
        padding: 0;
        height: auto;
      }
      .row {
        figcaption {
          flex: 1;
        }
        .body-content {
          padding-top: 1rem;
          h6 {
            font-size: 1.2rem;
            &.biggie {
              font-size: 1.8rem;
            }
          }
        }
        .body-footer {
          .btn {
            font-size: 1.4rem;
            padding: 0.8rem 1.6rem;
          }
        }
      }
    }
  }
}
</style>
