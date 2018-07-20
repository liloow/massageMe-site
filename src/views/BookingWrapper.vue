<template>
  <section>
    <booking-progress></booking-progress>
      <booking-steps></booking-steps>
  </section>
</template>
<script>
import BookingSteps from './Booking/BookingSteps';
import BookingProgress from './Booking/BookingProgress';
export default {
  name: 'BookingWrapper',

  data() {
    return {};
  },
  components: {
    BookingSteps,
    BookingProgress,
  },
};
</script>
<style lang="css" scoped>

</style>
