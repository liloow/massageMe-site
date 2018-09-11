<template>
  <section class="hero is-large">
    <div class="columns-fluid">
      <div class="column-fluid hero-body">
        <div class="row is-text">
          <div class="body-content">
            <h6 class="biggie faded">Des masseurs mobiles professionnels</h6>
            <p class="spacy faded">Tous les thérapeutes de notre plate-forme sont des spécialistes qualifiés, assurés et spécialisés dans les massages. Ceci afin de vous garantir un niveau professionnel de connaissances et de soins, tout en vous offrant une expérience de premiere classe.</p>
              <mini-card v-if="featured" class="faded" v-for="(therapist, index) in featured" :index="index + 1" :cardTitle="therapist.fullname" :cardImg="therapist.profile_pic" :cardBody="therapist.bio"></mini-card>
          </div>
          <div class="body-footer">
            <button @click.prevent="$router.push('/vouchers')" class="button btn btn-filled faded">Voir nos Masseurs</button>
          </div>
        </div>
      </div>
      <div class="column-fluid hero-body">
        <div v-if="loaded" class="row is-picture" :style="{'background-image': `url(${require('../../assets/img/large/paralax1low.700.webp')})`}">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {smoothAppear} from '@/Mixins';
import {mapGetters} from 'vuex';
import MiniCard from '@/components/MiniCard';
export default {
  name: 'TherapistsRow',
  mixins: [smoothAppear],
  computed: {
    ...mapGetters({
      therapists: 'getTherapists',
    }),
    featured() {
      if (this.therapists) {
        const copy = [...this.therapists];
        const index = Math.round(Math.random() * (copy.length - 1));
        return [copy[index]];
      }
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  components: {
    MiniCard,
  },
  mounted() {
    window.onload = () => (this.loaded = true);
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
        .visible {
          opacity: 1;
        }
        .faded {
          opacity: 0;
        }
        p {
          padding: 5% 0 7%;
          font-style: italic;
          font-size: 0.9rem;
        }
        h6 {
          text-align: center;
          font-size: 1.4vw;
          width: 90%;
          &.spacy {
            letter-spacing: 1rem;
          }
          &.biggie {
            font-size: 2.5vw;
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
