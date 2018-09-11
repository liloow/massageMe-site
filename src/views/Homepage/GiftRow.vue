<template>
  <section class="hero is-large">
    <div class="columns-fluid">
      <div class="column-fluid hero-body">
        <div class="row is-text">
          <div class="body-content">
            <h6 class="body faded">Envie de faire plaisir de manière originale à un ami ou à un proche ?</h6>
            <h6 class="spacy faded">...</h6>
            <h6 class="biggie faded">Offrez lui l'expérience Massage-Me à domicile.</h6>
          </div>
          <div class="body-footer">
            <button @click.prevent="$router.push('/vouchers')" class="button btn btn-filled faded">Offrir un massage</button>
          </div>
        </div>
      </div>
      <div class="column-fluid hero-body">
        <div v-if="loaded" class="row is-picture" :style="{'background-image': `url(${require('../../assets/img/large/story1.700.webp')})`}">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {smoothAppear} from '@/Mixins';
export default {
  name: 'GiftRow',
  mixins: [smoothAppear],
  computed: {},
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    window.addEventListener('load', () => (this.loaded = true));
  },
};
</script>
<style lang="scss" scoped>
.columns-fluid {
  flex-flow: row nowrap;
  width: 100%;
  margin: 0;
  flex: 1;
  min-width: 20rem;
  .column-fluid {
    display: flex;
    flex: 1;
    .row {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      position: relative;
      &.is-text {
        margin: 7% 5%;
      }
      &.is-picture {
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
        padding: 10% 0 5%;
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
        bottom: 10%;
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
