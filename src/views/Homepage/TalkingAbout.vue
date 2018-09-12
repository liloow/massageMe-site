<template>
  <section class="hero is-small filled">
    <div class="hero-body">
      <div>
        <h1 class="title">Ils parlent de nous !</h1>
      </div>
      <div>
        <ul v-if="loaded">
          <li v-for="media in medias">
            <div class="img-wrapper">
              <a :href="media.link" target="_blank" :name="media.name">
                <img :src="media.logo">
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: 'TalkingAbout',
  computed: {
    // ...mapGetters({
    //   medias: 'getMedias',
    // }),
  },
  data() {
    return {
      loaded: false,
      temp: {
        name: 'CCIMAG',
        logo:
          'data:image/png;base64,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',
        link: 'https://www.ccimag.be/2018/01/02/massageme-une-start-up-orientee-detente/',
      },
      medias: [],
    };
  },
  mounted() {
    window.addEventListener('load', () => (this.loaded = true));
    this.medias = [this.temp, this.temp, this.temp, this.temp];
  },
};
</script>
<style lang="scss" scoped>
.filled {
  background-color: var(--mm);
  margin: 2.5% 0;
  .hero-body {
    display: flex;
    flex-flow: column;
    margin: auto;
    .title {
      color: white;
      width: 100%;
      text-decoration: unset;
      text-align: center;
      padding: 1rem 0 2rem 0;
      user-select: none;
      word-spacing: 0.5rem;
      font-size: 2.5rem;
    }
    ul {
      margin: auto;
      display: flex;
      flex-flow: row;
      width: 95%;
      li {
        list-style: none;
        margin: 2rem 5%;
        .img-wrapper {
          background-color: white;
          border-radius: 2%;
          img {
            max-width: 100%;
          }
        }
      }
    }
  }
}
</style>
