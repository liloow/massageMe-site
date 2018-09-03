<template>
  <section class="hero is-small filled">
    <div class="hero-body">
        <span class="quote">«</span><h1 class="quote">Laissez le massage venir a vous ...</h1><span class="quote">»</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MotoBanner',

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.filled {
  background-color: var(--mm);
  .hero-body {
    display: flex;
    margin: auto;
    .quote {
      color: white;
      text-transform: uppercase;
      text-decoration: unset;
      font-style: italic;
      text-align: center;
      padding: 3rem 0;
      user-select: none;
      word-spacing: 0.5rem;
    }
    span.quote {
      text-decoration: none;
      font-size: 3.5rem;
      padding: 3rem 1rem;
    }
  }
}
</style>
