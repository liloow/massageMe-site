<template>
  <section>
    <SignupLogin @login-sucessful="loggedIn" />
  </section>
</template>
<script>
import {mapGetters} from 'vuex';
import SignupLogin from '@/components/SignupLogin';
export default {
  name: 'LoginStep',
  computed: {
    ...mapGetters({
      user: 'getUser',
      isLoggedIn: 'getLoggedInStatus',
      BOOKING_STEP: 'getBookingStep',
    }),
    nextStep() {
      if (this.isLoggedIn && this.BOOKING_STEP === 4) return this.$store.dispatch('nextStep');
      else if (this.isLoggedIn) return this.$router.push('/');
      else return {};
    },
  },
  data() {
    return {};
  },
  mounted() {
    // BOOKING
    if (this.isLoggedIn) this.$store.dispatch('nextStep');
  },
  methods: {
    loggedIn() {
      if (this.isLoggedIn && this.user) this.$store.dispatch('nextStep');
    },
  },
  components: {
    SignupLogin,
  },
};
</script>
<style lang="scss" scoped>
</style>
