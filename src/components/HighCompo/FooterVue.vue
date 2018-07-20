<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="footer-block">
        <div class="footer-list">
          <h4>Decouvrir</h4>
          <ul>
            <li><a href="/help">Centre d'aide</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/teamjoin">Become a therapist</a></li>
            <li><a href="/business">Corporate massage</a></li>
            <li><a href="/press">Presse</a></li>
          </ul>
        </div>
        <div class="footer-list">
          <h4>La boite</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/reviews-testimonials">Reviews</a></li>
            <li><a href="/legal">Legal</a></li>
            <li><a href="/cookies">Cookie Policy</a></li>
            <li><a href="/contact" target="_blank">Contactez-nous</a></li>
          </ul>
        </div>
        <div class="footer-list">
          <h4>Les massages</h4>
          <ul>
            <li><a href="/massages#relaxation">Massage Relaxation</a></li>
            <li><a href="/massages#deeptissue">Massage Deep-tissue</a></li>
            <li><a href="/massages#sportif">Massage Sportif</a></li>
          </ul>
        </div>
        <div class="footer-list">
          <h4>Villes</h4>
          <ul>
            <li><a href="/locations/liege" title="Liege">Liege</a></li>
          </ul>
        </div>
      </div>
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
<style lang="scss" scoped>
#footer {
  bottom: 0;
  left: 0;
  position: relative;
  width: 100%;
}

.row {
  text-align: left;
}

.footer {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: flex-end;
  min-height: var(--foot);
  color: #fff;
  padding: 2rem 0 5rem;
  font-weight: 300;
  line-height: 2rem;
  background-color: rgba(20, 20, 20, 1);
  font-family: 'Rubik', sans-serif;
  .footer-block {
    display: flex;
    flex-flow: row;
    margin: auto;
    .footer-list {
      width: 25%;
      h4 {
        margin-bottom: 1em;
      }
      ul {
        list-style: none;
        li {
          margin: auto;
          padding: 0em;
          a {
            color: white;
            font-weight: 200;
            font-size: 0.8rem;
            text-decoration: none;
          }
        }
      }
    }
  }
}

.container {
  position: relative;
  height: 100%;
  padding: 2 2rem;
  max-width: 1170px;
  margin: 2rem auto 0;
  &:before {
    content: '';
    display: table;
    clear: both;
  }
}
</style>
