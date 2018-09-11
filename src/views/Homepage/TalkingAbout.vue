<template>
  <section class="hero is-small filled">
    <div class="hero-body">
      <div>
        <h1 class="title">Ils parlent de nous !</h1>
      </div>
      <div>
        <ul>
          <li>
            <div class="img-wrapper">
              <img v-if="loaded" src="../../assets/img/logo/logoCCIMAG.webp">
            </div>
          </li>
          <li>
            <div class="img-wrapper">
              <img v-if="loaded" src="../../assets/img/logo/logoCCIMAG.webp">
            </div>
          </li>
          <li>
            <div class="img-wrapper">
              <img v-if="loaded" src="../../assets/img/logo/logoCCIMAG.webp">
            </div>
          </li>
          <li>
            <div class="img-wrapper">
              <img v-if="loaded" src="../../assets/img/logo/logoCCIMAG.webp">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TalkingAbout',

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
          img {
            max-width: 100%;
          }
        }
      }
    }
  }
}
</style>
