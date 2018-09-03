<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="footer-block">
        <div class="footer-list">
          <h3>Decouvrir</h3>
          <ul>
            <li><a href="/help">Centre d'aide</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><router-link to="/jointeam">Become a therapist</router-link></li>
            <li><router-link to="/business">Corporate massage</router-link></li>
            <li><a href="/press">Presse</a></li>
          </ul>
        </div>
        <div class="footer-list">
          <h3>La boite</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><router-link to="/therapists">Team</router-link></li>
            <li><a href="/conditions.pdf" target="_blank">Conditions Generales</a></li>
            <li><a href="/reviews-testimonials">Reviews</a></li>
            <li><a href="/cookies">Cookie Policy</a></li>
            <li><router-link to="/contact" target="_blank">Contactez-nous</router-link></li>
          </ul>
        </div>
        <div class="footer-list">
          <h3>Les massages</h3>
          <ul>
            <li><router-link to="/massages#relaxation">Massage Relaxation</router-link></li>
            <li><router-link to="/massages#deeptissue">Massage Deep-tissue</router-link></li>
            <li><router-link to="/massages#sportif">Massage Sportif</router-link></li>
          </ul>
        </div>
        <div class="footer-list">
          <h3>Villes</h3>
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
        <a class="bd-fb-button button" data-social-network="Facebook" data-social-action="fb" data-social-target="https://www.massageme.be" target="_blank" rel="noreferrer" href="https://www.facebook.com/MassageMe-728496217299957/">
          <i name="facebook">Facebook</i>
          Suivez-nous sur Facebook!
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
  a {
    color: white;
  }
}

.footer {
  background-color: rgba(0, 0, 0, 1);
  color: white;
  display: flex;
  justify-content: flex-end;
  min-height: var(--foot);
  color: #0086de;
  padding: 2rem 0 5rem;
  font-weight: 300;
  line-height: 2rem;
  font-family: 'Rubik', sans-serif;
  .footer-block {
    display: flex;
    flex-flow: row;
    margin: auto;
    .footer-list {
      width: 25%;
      h3 {
        margin-bottom: 1em;
        color: #0086de;
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
