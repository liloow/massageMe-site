<template>
  <div class="column">
    <p>Your name:
      <strong>{{voucher.senderName}}</strong>
    </p>
    <br>
    <p>Your E-mail:
      <strong>{{voucher.senderEmail}}</strong>
    </p>
    <br>
    <p>The gifted Name:
      <strong>{{voucher.recipientName}}</strong>
    </p>
    <br>
    <p>The sending method:
      <strong>{{voucher.method}}</strong>
    </p>
    <div v-if="voucher.method==='2'">
      <p>Addresse
        <br>
        <p>Nom :
          <strong>{{voucher.recipientAddress.name}}</strong>
        </p>
        <br>
        <p>Adresse ligne 1 :
          <strong>{{voucher.recipientAddress.line1}}</strong>
        </p>
        <br>
        <p>Adresse ligne 2 :
          <strong>{{voucher.recipientAddress.line2}}</strong>
        </p>
        <br>
        <p>Code Postal :
          <strong>{{voucher.recipientAddress.postalCode}}</strong>
        </p>
        <br>
        <p>Ville :
          <strong>{{voucher.recipientAddress.city}}</strong>
        </p>
        <br>
      </p>
    </div>
    <div v-if="voucher.method==='1'">
      <p>Recipient email :
        <strong> {{rvoucher.recipientEmail}}</strong>
      </p>
    </div>
    <p>Your Message :
      <br>
      <strong>{{voucher.message}}</strong>
    </p>
    <br>
    <button type="submit">Réserver</button>
  </div>
</template>
<script>
export default {
  name: 'VoucherConfirm',

  data() {
    return {};
  },
  props: {
    voucher: Object,
  },
};
</script>
<style lang="css" scoped>


</style>
