<style lang="css" scoped>
.picto {
  display: flex;
  justify-content: space-around;
  flex-grow: 0;
  text-align: center;
  font-weight: bold;
  font-size: 0.9rem;
}

.padding-2 {
  margin: 3vh;
}



.raise:hover,
.raise:focus {
  box-shadow: 1 1.5em 1.5em -0.4em var(--hover);
  -webkit-transform: translateY(-0.25em);
  transform: translateY(-0.25em);
}

.pulse:hover,
.pulse:focus {
  -webkit-animation: pulse 1s;
  animation: pulse 1s;
  box-shadow: 0 0 0 3em rgba(255, 255, 255, 0);
}



@-webkit-keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}

.pulse {
  --color: #FCA17D;
  --hover: #FFB27F;
}

.raise {
  --color: #FCA17D;
  --hover: #FFB27F;
}

button {
  color: var(--color);
  -webkit-transition: 0.25s;
  transition: 0.25s;
}

button:hover,
button:focus {
  border-color: var(--hover);
  color: #fff;

  -webkit-transition: all 0.1s;
  -moz-transition: all 0.1s;
  transition: all 0.1s;

  -webkit-box-shadow: 0px 6px 0px #d35400;
  -moz-box-shadow: 0px 6px 0px #d35400;
  box-shadow: 0px 6px 0px #d35400;
}

.reserve:active {
  -webkit-box-shadow: 0px 2px 0px #d35400;
  -moz-box-shadow: 0px 2px 0px #d35400;
  box-shadow: 0px 2px 0px #d35400;
  position: relative;
  top: 4px;
}



button.reserve {
  background-color: rgb(255, 0, 0, 0.5);
  line-height: 1;
  margin: 0vw;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  color: ghostwhite;
  border-radius: 1vh;
  border: solid 1px #f39c12;
  background: var(--mm);
  text-align: center;
}

.text-snip {
  padding: 10vh;
  margin: auto;
}

.content {
  margin: 5vh auto;
}

.row-footer {
  text-align: right;
  margin-top: 5vh;
}

.motto {

  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-style: italic;
}

</style>
<template>
  <section class="hero">
        <div class="motto hero-body hero is-primary ">
          <h1 class="title is-1">"Laissez le massage venir a vous"</h1>
        </div>
    <div class="columns is-multiline is-gapless">
      <div class="column is-4-desktop is-12-tablet content">
        <div class="row ">
          <article class="text-snip">
            <h2 class="title is-2 bold">Offrez un massage</h2>
            <p class="content ">Envie de faire plaisir de manière originale à un ami ou à un proche ? Offrez lui l'expérience MassageMe à domicile.</p>
            <div class="row-footer">
              <router-link to="/vouchers">
                <button class="button reserve">Offrir un massage</button>
              </router-link>
            </div>
          </article>
        </div>
      </div>
      <div class="column is-8-desktop is-12-tablet ">
        <img src="../../assets/img/large/tshirt.jpg" alt="">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'GiftRow',

  data() {
    return {};
  },
};
</script>
