<style lang="css">
.navbar-brand {
  margin: 0 5vw;
  padding: 0.5vh;
}

.navbar-item {
  font-size: 1.35rem;
}

</style>
<template>
  <nav class="navbar border-3">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/img/logo/Full.svg" alt="MassageMe" class="brand">
      </router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start is-centered">
        <div class="navbar-item">
          <!-- <router-link class="navbar-item  is-active" to="/"> TODO : Keep or splice
                        Home
                    </router-link> -->
          <router-link class="navbar-item " to="/massages"> Massages </router-link>
          <router-link class="navbar-item " to="/business"> Massages en entreprise </router-link>
          <router-link class="navbar-item " to="/masseuses"> Praticiens </router-link>
          <router-link class="navbar-item " to="/vouchers"> Bon Cadeau </router-link>
          <!-- <router-link class="navbar-item " to="/price"> TODO : Splice or dice
                        Tarifs
                     </router-link> -->
          <router-link class="navbar-item " to="/contact">
            Contact
          </router-link>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link v-if="!$root.user.name" class="navbar-item " to="/login">
            Login / Signup
          </router-link>
          <router-link v-else @click.prevent="logout" class="navbar-item " to="/logout">
            Logout
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { logout } from '@/api/auth';
export default {
  name: 'NavBar',
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    logout() {
      logout(this.$root);
    },
  },
};
</script>
