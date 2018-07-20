<template>
  <section class="container-flex">
    <div>
      <h2>Le bien être au travail grâce aux massages</h2>
    </div>
    <div class="container-flex">
      <div class="mini-row">
        <h3>Massage assis</h3>
      </div>
      <div class="row">
        <div class="column onethird">
          <img src="../assets/img/staff/sit-BIG.png">
        </div>
        <div class="column fill">
          <p>Notre chaise spéciale s’adapte à des environnements variés. Elle nous permet de vous offrir une relaxation de qualité, quel que soit le lieu que vous choisissez.</p>
          <p> Ce massage se réalise avec les vêtements et uniquement au moyen de pressions effectuées par notre praticien. L'ensemble de nos masseurs sont diplomés en kinésithérapie. Habituellement, nous organisons des sessions de 15 minutes par employés. Ceci est parfait pour alléger une longue journée de travail tout en restant productif.</p>
          <p> Pour plus d'information ou réservation, merci de nous contacter par mail infos@massageme.be ou au +32(0)498823931
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="baseline"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Business',

  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.container-flex {
  flex-flow: column;
  max-width: 1500px;
}

.column {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  justify-content: space-between;
  margin: auto 3vw;
  &.onethird {
    flex: 1;
    width: 33%;
  }
  &.fill {
    display: flex;
    flex-flow: column;
    flex: 2;
    p {
      padding-top: 0.3em;
    }
  }
}

.mini-row {
  margin: auto auto auto 3vh;
  min-height: 7vh;
  display: flex;
  text-align: left;
  width: 90%;
}

.row {
  margin: auto;
  width: 100%;
  position: relative;
  display: flex;
  min-height: 10vh;
  flex-flow: row;
}

.baseline {
  position: absolute;
  display: flex;
  bottom: 0%;
  flex: 1;
  width: 60%;
  height: 2px;
  background-color: var(--mm);
  opacity: 0.3;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
}
</style>
