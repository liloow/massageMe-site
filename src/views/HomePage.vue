<template>
    <section class="container-fluid">
        <reservation-row></reservation-row>
        <picto-row></picto-row>
        <moto-banner></moto-banner>
        <gift-row></gift-row>
    </section>
</template>
<script>
// import StaticInfo from '@/views/Homepage/StaticInfo';
// import Services from '@/views/Homepage/Services';
import ReservationRow from '@/views/Homepage/ReservationRow';
import PictoRow from '@/views/Homepage/PictoRow';
import GiftRow from '@/views/Homepage/GiftRow';
import MotoBanner from '@/views/Homepage/MotoBanner';
export default {
  name: 'HomePage',
  data() {
    return {};
  },
  components: {
    ReservationRow,
    PictoRow,
    MotoBanner,
    GiftRow,
  },
};
</script>
<style lang="css" scoped>

</style>
