<template>
  <section>
    <div class="container-padded">
      <ul class="breadcrumb-counter-nav">
        <li class="breadcrumb-counter-nav-item"><a href="#">Setup</a></li>
        <li class="breadcrumb-counter-nav-item current"><a href="#">Sample Analysis</a></li>
        <li class="breadcrumb-counter-nav-item"><a href="#">Sort Layout</a></li>
        <li class="breadcrumb-counter-nav-item"><a href="#">Sort</a></li>
        <li class="breadcrumb-counter-nav-item"><a href="#">Reporting</a></li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: 'BookingTrail',

  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
  <style type="text/css">
  /*! CSS Used from: https://foundation.zurb.com/building-blocks/building-block/app.css?rev=a5ec5f9f2ba34e0735e1bdf8744d4a54 */

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  a:active,
  a:hover {
    outline-width: 0;
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

  div,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  a {
    line-height: inherit;
    color: #1779ba;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover,
  a:focus {
    color: #1468a0;
  }

  ul {
    margin-bottom: 1rem;
    list-style-position: outside;
    line-height: 1.6;
  }

  li {
    font-size: inherit;
  }

  ul {
    margin-left: 1.25rem;
    list-style-type: disc;
  }

  @media print {
    * {
      background: transparent!important;
      box-shadow: none!important;
      color: black!important;
      text-shadow: none!important;
    }
    a,
    a:visited {
      text-decoration: underline;
    }
    a[href]:after {
      content: " (" attr(href) ")";
    }
    a[href^='#']:after {
      content: '';
    }
  }

  .container-padded {
    padding: 1rem 0;
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
  /*! CSS Used from: https://foundation.zurb.com/building-blocks/building-block/breadcrumb-counter-nav/breadcrumb-counter-nav.css?rev=1fa9568ac95916452d7a904d618b7bb8 */

  body {
    counter-reset: section;
  }

  .breadcrumb-counter-nav {
    margin: 0;
    padding: 0;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    list-style: none;
    background: #2C3E50;
  }

  .breadcrumb-counter-nav .breadcrumb-counter-nav-item {
    position: relative;
    -webkit-flex: 1 0 auto;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    padding: 1rem 2rem;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
  }

  .breadcrumb-counter-nav .breadcrumb-counter-nav-item:hover {
    background: #1a252f;
  }

  .breadcrumb-counter-nav .breadcrumb-counter-nav-item::before {
    counter-increment: section;
    content: counter(section);
    position: relative;
    background: #507192;
    color: #fff;
    right: 0.8rem;
    border-radius: 50%;
    padding: 0.2em 0.55em;
  }

  .breadcrumb-counter-nav .breadcrumb-counter-nav-item.current {
    background: #1a252f;
  }

  .breadcrumb-counter-nav .breadcrumb-counter-nav-item.current::after {
    content: '';
    position: absolute;
    top: 0;
    right: -1rem;
    width: 0;
    height: 0;
    border-top: 1.75rem solid transparent;
    border-bottom: 1.75rem solid transparent;
    border-left: 1rem solid #1a252f;
    z-index: 300;
  }

  .breadcrumb-counter-nav .breadcrumb-counter-nav-item.current::before {
    background-color: #88a4bf;
  }

  .breadcrumb-counter-nav .breadcrumb-counter-nav-item a {
    color: #fff;
    font-size: 0.875rem;
  }

  @media only screen and (max-width: 52em) {
    .breadcrumb-counter-nav {
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }
  </style>

</style>
