<template>
  <section>
    <massage-step v-if="BOOKING_STEP === 1 && !dyno"></massage-step>
    <slot-step v-if="BOOKING_STEP === 2 || BOOKING_STEP === 3"></slot-step>
    <login-step v-if="BOOKING_STEP === 4"></login-step>
    <payment-step v-if="BOOKING_STEP === 5"></payment-step>
    <homemade-modal @close="preventClose($event)" v-if="dyno">
      <component @continueProgress="continueProgress()" @resetProgress="resetProgress()" @close="close($event)" :is="dyno" />
    </homemade-modal>
  </section>
</template>
<script>
import MassageStep from './BookingSteps/MassageStep';
import SlotStep from './BookingSteps/SlotStep';
import TherapistStep from './BookingSteps/TherapistStep';
import LoginStep from './BookingSteps/LoginStep';
import PaymentStep from './BookingSteps/PaymentStep';
import HomemadeModal from '@/components/HighCompo/HomemadeModal';
import EnterAddress from '@/components/EnterAddress';
import AskIfContinue from '@/components/AskIfContinue';
import {mapGetters} from 'vuex';
import {fetchPayment, getPaymentStatus} from '../../api';
export default {
  name: 'BookingSteps',
  computed: {
    ...mapGetters({
      BOOKING_STEP: 'getBookingStep',
      steps: 'getSteps',
    }),
  },
  data() {
    return {
      EnterAddress: EnterAddress,
      dyno: null,
      sessionProgress: {},
    };
  },
  methods: {
    close(e) {
      this.dyno = null;
    },
    preventClose(e) {
      this.$router.push('/');
    },
    continueProgress() {
      this.$store.commit('storeStep', this.sessionProgress);
      this.appendDyno();
    },
    resetProgress() {
      this.$store.dispatch('cleanSlate');
      this.appendDyno();
    },
    appendDyno(sessionProgress) {
      if (
        sessionProgress &&
        sessionProgress.steps &&
        sessionProgress.steps.address &&
        !this.steps.address
      ) {
        this.sessionProgress = sessionProgress;
        this.dyno = AskIfContinue;
      } else if (!this.steps.address && (this.BOOKING_STEP === 0 || this.BOOKING_STEP === 1)) {
        this.dyno = EnterAddress;
      } else this.dyno = null;
    },
  },
  mounted() {
    if (this.$route.query.id) {
      this.$store.commit('backToStep', 4);
    }
    const sessionProgress = JSON.parse(window.sessionStorage.getItem('steps')) || {};
    sessionProgress.BOOKING_STEP = JSON.parse(window.sessionStorage.getItem('BOOKING_STEP'));
    this.appendDyno(sessionProgress);
  },
  components: {
    MassageStep,
    SlotStep,
    TherapistStep,
    LoginStep,
    PaymentStep,
    HomemadeModal,
    EnterAddress,
    AskIfContinue,
  },
};
</script>
<style lang="css" scoped>


</style>
