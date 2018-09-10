<template>
    <section class="container-fluid table">
        <reservation-row></reservation-row class="table-row">
        <picto-row></picto-row class="table-row">
        <moto-banner></moto-banner class="table-row">
        <gift-row></gift-row class="table-row">
        <services-row></services-row class="table-row">
        <therapists-row></therapists-row class="table-row">
        <talking-about></talking-about class="table-row">
    </section>
</template>
<script>
// import StaticInfo from '@/views/Homepage/StaticInfo';
import ServicesRow from '@/views/Homepage/ServicesRow';
import ReservationRow from '@/views/Homepage/ReservationRow';
import PictoRow from '@/views/Homepage/PictoRow';
import GiftRow from '@/views/Homepage/GiftRow';
import MotoBanner from '@/views/Homepage/MotoBanner';
import TherapistsRow from '@/views/Homepage/TherapistsRow';
import TalkingAbout from '@/views/Homepage/TalkingAbout';
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
    ServicesRow,
    TherapistsRow,
    TalkingAbout,
  },
};
</script>
<style lang="scss" scoped>
.table {
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 100vh;
  .table-row {
    display: table-row;
  }
}
</style>
