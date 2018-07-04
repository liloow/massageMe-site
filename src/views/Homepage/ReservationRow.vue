<template>
  <section class="hero is-medium is-light">
    <div class="hero-body">
      <div class="container">
        <div class="columns address-row">
          <div class="column">
            <enter-address></enter-address>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import EnterAddress from '@/views/Homepage/EnterAddress';
export default {
  name: 'ReservationRow',

  data() {
    return {};
  },
  components: { EnterAddress },
};
</script>
<style lang="css" scoped>


</style>
<style lang="css" scoped>
.hero {
  background: url(../../assets/img/large/massage-no-face.jpg);
  background-size: cover;
  background-position: center;
}

.is-light {

  z-index: 8;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.white {
  background-color: white;
}

.columns>.column.background-image {
  background-size: cover;
  background-position: center;
}


.columns>.content {
  padding: 60px;
}

</style>
