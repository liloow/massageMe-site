<template>
<section class="marketing-site-three-up">
      <h2 class="marketing-site-three-up-headline">Furry, Reliable, Cuddly</h2>
      <div class="row medium-unstack">
        <div class="columns">
          <i class="fa fa-gg" aria-hidden="true"></i>
          <h4 class="marketing-site-three-up-title">Keyless Entry</h4>
          <p class="marketing-site-three-up-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.</p>
        </div>
        <div class="columns">
          <i class="fa fa-user-o" aria-hidden="true"></i>
          <h4 class="marketing-site-three-up-title">Invincible Igloo</h4>
          <p class="marketing-site-three-up-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.</p>
        </div>
        <div class="columns">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
          <h4 class="marketing-site-three-up-title">Stereo System</h4>
          <p class="marketing-site-three-up-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.</p>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  name: 'PictoRow',

  data() {
    return {};
  },
};
</script>
<style lang="css" scoped>
.  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .fa-check-square-o:before {
    content: "\f046";
  }

  .fa-gg:before {
    content: "\f260";
  }

  .fa-user-o:before {
    content: "\f2c0";
  }
  /*! CSS Used from: https://foundation.zurb.com/building-blocks/building-block/app.css?rev=a84ea2ed567f22790d2a37d9dafa8561 */

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  section {
    display: block;
  }

  .foundation-mq {
    font-family: "small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em";
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background: #fefefe;
    font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    font-weight: normal;
    line-height: 1.5;
    color: #0a0a0a;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .row {
    max-width: 75rem;
    margin-right: auto;
    margin-left: auto;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
  }

  .columns {
    -webkit-flex: 1 1 0px;
    -ms-flex: 1 1 0px;
    flex: 1 1 0px;
    padding-right: 0.625rem;
    padding-left: 0.625rem;
    min-width: initial;
  }

  @media print,
  screen and (min-width: 40em) {
    .columns {
      padding-right: 0.9375rem;
      padding-left: 0.9375rem;
    }
  }

  .row.medium-unstack>.columns {
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
  }

  @media print,
  screen and (min-width: 40em) {
    .row.medium-unstack>.columns {
      -webkit-flex: 1 1 0px;
      -ms-flex: 1 1 0px;
      flex: 1 1 0px;
    }
  }

  div,
  h2,
  h4,
  p {
    margin: 0;
    padding: 0;
  }

  p {
    margin-bottom: 1rem;
    font-size: inherit;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }

  i {
    font-style: italic;
    line-height: inherit;
  }

  h2,
  h4 {
    font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    color: inherit;
    text-rendering: optimizeLegibility;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1.125rem;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  @media print,
  screen and (min-width: 40em) {
    h2 {
      font-size: 2.5rem;
    }
    h4 {
      font-size: 1.5625rem;
    }
  }

  @media print {
    * {
      background: transparent!important;
      box-shadow: none!important;
      color: black!important;
      text-shadow: none!important;
    }
    p,
    h2 {
      orphans: 3;
      widows: 3;
    }
    h2 {
      page-break-after: avoid;
    }
  }
  /*! CSS Used from: Embedded */

  body {
    background-color: #E6E8EB;
    padding: 16px;
  }

  @media screen and (min-width: 40em) {
    body {
      padding: 20px;
    }
  }

  @media screen and (min-width: 64em) {
    body {
      padding: 50px;
    }
  }
  /*! CSS Used from: https://foundation.zurb.com/building-blocks/building-block/marketing-site-three-up/marketing-site-three-up.css?rev=8c6255b35dd2aa84896f1296c4386314 */

  .marketing-site-three-up {
    text-align: center;
    padding: 2rem 0;
  }

  .marketing-site-three-up .row {
    max-width: 900px;
  }

  .marketing-site-three-up .columns {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 40em) {
    .marketing-site-three-up .columns {
      margin-bottom: 0;
    }
  }

  .marketing-site-three-up .fa {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #1779ba;
  }

  .marketing-site-three-up-headline {
    margin-bottom: 2rem;
    font-size: 24px;
  }
  /*! CSS Used fontfaces */

  @font-face {
    font-family: 'FontAwesome';
    src: url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);
    src: url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0) format('embedded-opentype'), url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format('woff2'), url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format('woff'), url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format('truetype'), url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format('svg');
    font-weight: normal;
    font-style: normal;
  }
</style>
