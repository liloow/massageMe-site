<template>
    <section class="section">
        <div class="row">
            <div class="columns">
                <div class="column">
                    <voucher-form v-if="state===1"></voucher-form>
                    <voucher-confirm v-if="state==2"></voucher-confirm>
                    <voucher-pay v-if="state===3"></voucher-pay>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import VoucherForm from './VoucherForm';
import VoucherConfirm from './VoucherConfirm';
import VoucherPay from './VoucherPay';
export default {
  name: 'Voucher',
  data() {
    return {
      state: 1,
    };
  },
  methods: {},
  components: {
    VoucherPay,
    VoucherConfirm,
    VoucherForm,
  },
  created() {
    scrollTo(top);
  },
};
</script>
<style lang="css" scoped>


</style>
