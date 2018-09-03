<template>
  <section class="cointainer">
    <voucher-form v-if="state===1"></voucher-form>
  </section>
</template>
<script>
import VoucherForm from './VoucherForm';
export default {
  name: 'VoucherWrapper',
  data() {
    return {
      state: 1,
    };
  },
  methods: {},
  components: {
    VoucherForm,
  },
};
</script>
<style lang="css" scoped>


</style>
