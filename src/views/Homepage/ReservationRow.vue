<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container-fluid centered">
        <enter-address></enter-address>
      </div>
    </div>
  </section>
</template>
<script>
import EnterAddress from '@/components/EnterAddress';
export default {
  name: 'ReservationRow',
  data() {
    return {};
  },
  components: {EnterAddress},
};
</script>
<style lang="scss" scoped>
.hero {
  background: url(../../assets/img/large/massage-no-face.webp);
  background-size: cover;
  background-position: center;
}

.is-large {
  z-index: 8;
}
.hero-body {
  position: relative;
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media screen and (max-width: 769px) {
  .hero {
    background: url(../../assets/img/large/massage-no-face.small.webp);
    background-size: cover;
    background-position: center;
    .hero-body {
      height: 70vh;
    }
  }
}
</style>
