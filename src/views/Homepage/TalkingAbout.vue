<template>
  <section class="hero is-small filled">
    <div class="hero-body">
      <div>
        <h1 class="title">Ils parlent de nous !</h1>
      </div>
      <div>
        <ul>
          <li>
            <img v-if="loaded" src="../../assets/img/logo/logoCCIMAG.webp">
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
    this.loaded = true;
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
      li {
        list-style: none;
        padding: 1rem;
        img {
          max-width: 20%;
        }
      }
    }
  }
}
</style>
