<template>
  <section>
    <booking-progress></booking-progress>
    <!-- <booking-adress></booking-adress> -->
    <booking-steps></booking-steps>
  </section>
</template>
<script>
import BookingSteps from './Booking/BookingSteps';
import BookingAdress from './Booking/BookingAdress';
import BookingProgress from './Booking/BookingProgress';
export default {
  name: 'BookingWrapper',

  data() {
    return {};
  },
  components: {
    BookingSteps,
    BookingAdress,
    BookingProgress,
  },
};
</script>
<style lang="css" scoped>

</style>
