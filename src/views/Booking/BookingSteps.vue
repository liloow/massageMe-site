<template>
  <section>
    <massage-step v-if="BOOKING_STEP === 0" ></massage-step>
    <slot-step v-if="BOOKING_STEP === 1" :therapists="therapists"></slot-step>
    <!-- <therapist-step v-if="BOOKING_STEP === 2"></therapist-step> -->
    <login-step v-if="BOOKING_STEP === 2"></login-step>
    <payment-step v-if="BOOKING_STEP === 3"></payment-step>
  <!-- <summary-step></summary-step> -->
    <homemade-modal @close.capture,stop="preventClose($event)" v-if="!steps.address"><enter-address></enter-address></homemade-modal>
  </section>
</template>
<script>
import MassageStep from './BookingSteps/MassageStep';
import SlotStep from './BookingSteps/SlotStep';
import TherapistStep from './BookingSteps/TherapistStep';
import LoginStep from './BookingSteps/LoginStep';
import PaymentStep from './BookingSteps/PaymentStep';
import HomemadeModal from '@/components/HighCompo/HomemadeModal';
import { mapGetters, mapState } from 'vuex';
import EnterAddress from '@/components/EnterAddress';
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
      therapists: [
        {
          name: 'Tom',
          email: '',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi lectus, mollis quis augue fermentum, tincidunt interdum tortor. Donec vehicula turpis rhoncus libero maximus, ac placerat nisl tristique. Proin vehicula, ipsum vitae ullamcorper aliquet, ipsum risus imperdiet enim, sit amet fermentum nisi quam eu orci.',
          picture: '/static/assets/img/avatar/1.png',
        },
        {
          name: 'Lara',
          email: '',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi lectus, mollis quis augue fermentum, tincidunt interdum tortor. Donec vehicula turpis rhoncus libero maximus, ac placerat nisl tristique. Proin vehicula, ipsum vitae ullamcorper aliquet, ipsum risus imperdiet enim, sit amet fermentum nisi quam eu orci.',
          picture: '/static/assets/img/avatar/2.png',
        },
        {
          name: 'Laura',
          email: '',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi lectus, mollis quis augue fermentum, tincidunt interdum tortor. Donec vehicula turpis rhoncus libero maximus, ac placerat nisl tristique. Proin vehicula, ipsum vitae ullamcorper aliquet, ipsum risus imperdiet enim, sit amet fermentum nisi quam eu orci.',
          picture: '/static/assets/img/avatar/3.png',
        },
        {
          name: 'Tina',
          email: '',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi lectus, mollis quis augue fermentum, tincidunt interdum tortor. Donec vehicula turpis rhoncus libero maximus, ac placerat nisl tristique. Proin vehicula, ipsum vitae ullamcorper aliquet, ipsum risus imperdiet enim, sit amet fermentum nisi quam eu orci.',
          picture: '/static/assets/img/avatar/4.png',
        },
        {
          name: 'Bast',
          email: '',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi lectus, mollis quis augue fermentum, tincidunt interdum tortor. Donec vehicula turpis rhoncus libero maximus, ac placerat nisl tristique. Proin vehicula, ipsum vitae ullamcorper aliquet, ipsum risus imperdiet enim, sit amet fermentum nisi quam eu orci.',
          picture: '/static/assets/img/avatar/2.png',
        },
      ],
    };
  },
  methods: {
    preventClose(e) {
      // console.log(e);
      this.$router.push('/');
    },
  },
  components: {
    MassageStep,
    SlotStep,
    TherapistStep,
    LoginStep,
    PaymentStep,
    HomemadeModal,
    EnterAddress,
  },
};
</script>
<style lang="css" scoped>


</style>
