<template>
  <section>
  </section>
</template>

<script>
import google from './google';
import favico from './FavicoMeta';
import social from './SocialNetworks';
import cookie from './CookiePolicy.js';
export default {
  name: 'HtmlHead',
  data() {
    return {};
  },
  head: {
    readyToAppend: `
    ${google}
    ${favico}
    ${social}
    ${cookie}
    `,
  },
};
</script>

<style lang="css" scoped>
</style>
