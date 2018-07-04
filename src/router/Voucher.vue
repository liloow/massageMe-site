<style lang="css" scoped>


</style>
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
import VoucherForm from '@/components/reservation/voucher/VoucherForm';
import VoucherConfirm from '@/components/reservation/voucher/VoucherConfirm';
import VoucherPay from '@/components/reservation/voucher/VoucherPay';

export default {
  name: 'Voucher',
  data() {
    return {
      state: 1,
    };
  },
  methods: {},
  components: {
    VoucherForm,
    VoucherConfirm,
    VoucherPay,
  },
  created() {
    scrollTo(top);
  },
};
</script>
