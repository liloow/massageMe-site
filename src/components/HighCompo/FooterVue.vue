<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="row">
        <p>© 2017 tous droits réservés by MassageMe.</p>
        <p> Il est temps que l'on prenne soin de vous.</p>
      </div>
      <div class="row">
        <a class="bd-fb-button button" data-social-network="Facebook" data-social-action="fb" data-social-target="https://www.massageme.be" target="_blank" href="https://www.facebook.com/MassageMe-728496217299957/">
          <i name="facebook"></i>
        </a>
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterVue',

  data() {
    return {};
  },
};
</script>
<style lang="css" scoped>
#footer {
  bottom: 0;
  left:0;
  position: relative;
  width: 100%
}

.row {
  text-align: left;
}

.footer {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: flex-end;
  padding: 3rem 1.5rem 3rem;
  height: var(--foot);
}

.container {
  margin-bottom: 0
}

</style>
