<template>
  <section>
    <massage-step v-if="BOOKING_STEP === 0" :massages="massages"></massage-step>
    <date-step v-if="BOOKING_STEP === 1"></date-step>
    <therapist-step :therapists="therapists" v-if="BOOKING_STEP === 2"></therapist-step>
    <login-step v-if="BOOKING_STEP === 3"></login-step>
    <payment-step v-if="BOOKING_STEP === 4"></payment-step>
  <!-- <summary-step></summary-step> -->
  </section>
</template>
<script>
import MassageStep from './BookingSteps/MassageStep';
import DateStep from './BookingSteps/DateStep';
import TherapistStep from './BookingSteps/TherapistStep';
import LoginStep from './BookingSteps/LoginStep';
import PaymentStep from './BookingSteps/PaymentStep';
export default {
  name: 'BookingSteps',

  data() {
    return {
      massages: [
        {
          name: 'Relaxation',
          description:
            "Parfait pour se libérer de son stress. Votre praticien procédera à des mouvements fluides sur l'ensemble du corps pour un relâchement total des tensions tant physiques que psychiques.Parfait pour se libérer de son stress. Votre praticien procédera à des mouvements fluides sur l'ensemble du corps pour un relâchement total des tensions tant physiques que psychiques.",
          price: '60€',
          picture: '/static/assets/img/picture/relax.png',
        },
        {
          name: 'Deep-Tissue',
          description:
            'Idéal pour relâcher les tensions musculaires. Votre praticien vous offrira un massage profond pour détendre et rendre la souplesse à vos muscles noués.',
          price: '60€',
          picture: '/static/assets/img/picture/deep.png',
        },
        {
          name: 'Sportif',
          description:
            'Indiqué pour préparer le corps à une activité sportive ou pour améliorer la récupération après un effort physique. Votre praticien favorisera votre circulation sanguine par différentes techniques.',
          price: '60€',
          picture: '/static/assets/img/picture/sport.png',
        },
        {
          name: 'Massage assis',
          description:
            'Notre chaise spéciale s’adapte à des environnements variés. Elle nous permet de vous offrir une relaxation de qualité, quel que soit le lieu que vous choisissez.Pour toute réservation, merci de nous contacter à infos@massageme.be',
          price: '60€',
          picture: '/static/assets/img/picture/sit.png',
        },
      ],
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
      BOOKING_STEP: 1,
    };
  },
  components: {
    MassageStep,
    DateStep,
    TherapistStep,
    LoginStep,
    PaymentStep,
  },
};
</script>
<style lang="css" scoped>


</style>
