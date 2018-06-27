<template>
  <section class="container">
    <div class="title">
      <h1>Selectionnez votre masseur</h1>
    </div>
    <div class="container-flex">
      <div class="cards container">
        <div v-for="massage in therapistsComputed" class="card-wrapper" :key="massage.name">
          <figure class="card">
            <div class="image"><img src="@/assets/img/staff/avatar1.png" />
            </div>
            <figcaption>
              <h2>{{massage.name}}</h2>
              <p>{{massage.short}}</p>
              <div class="price">
              </div>
            </figcaption>
            <div class="card-footer">
              <button class="reserve btn btn-filled"> {{massage.price}} Choisir ce masseur</button>
            </div>
          </figure>
        </div>
        <div class="row card-title">
          <h4 class="title">
            </h4>
        </div>
        <div class="row card-body">
          <p class="card-text">
          </p>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TherapistStep',
  props: ['therapists'],
  computed: {
    therapistsComputed: function() {
      return this.therapists.map(el => {
        el.short = el.bio.length > 175 ? `${el.bio.match(/(^([^]{175}))[^\W]*/g)[0]}...` : el.bio;
        return el;
      });
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="css" scoped="">
@import url(https://fonts.googleapis.com/css?family=Oswald);
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Quattrocento);
.card {
  font-family: 'Quattrocento', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px 1%;
  width: 250px;
  color: #141414;
  text-align: left;
  line-height: 1.4em;
  font-size: 0.8em;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.5em;
}

.cards .card-wrapper {
  flex-basis: 0;
  height: auto;
  margin: 0 auto;
  flex-grow: 0.4;
  flex-shrink: 0;
}

.card img {
  width: 100%;
  vertical-align: top;
  justify-content: center;
  pointer-events: none;
}

.card figcaption {
  width: 100%;
  padding: 0 0.5em 0.5em;
  position: relative;
  margin: auto;
  height: 11.5em;
}

.card h2,
.card p {
  margin: 0.7em;
}

.card h2 {
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1.2em;
  font-family: 'Oswald', Arial, sans-serif;
  text-transform: uppercase;
}

.card p {
  font-size: 0.9em;
  letter-spacing: 1px;
  opacity: 0.9;
}

.card i {
  padding: 10px 5px;
  display: inline-block;
  font-size: 24px;
  color: #141414;
  opacity: 0.65;
}

.card i:hover {
  opacity: 1;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: row;
}

.card {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.card-footer {
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 0 0 1em
}


.btn {
  padding: 10px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: transparent;
  position: absolute;
}

.btn,
.btn .btn-icon {
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  position: relative;
}

.btn .btn-icon {
  z-index: 100;
  display: block;
  font-size: 18px;
}

.btn .btn-backgroundx {
  border-radius: 50%;
  width: 10px;
  position: absolute;
  height: 10px;
  z-index: 0;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-box-shadow: inset 0 0 60px 0 hsla(0, 0%, 100%, .5);
  box-shadow: inset 0 0 60px 0 hsla(0, 0%, 100%, .5);
}

.btn .btn-text {
  position: relative;
  color: inherit;
  display: inline-block;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
}

.btn-filled:hover {
  -webkit-box-shadow: 0 9px 28px -9px;
  box-shadow: 0 9px 28px -9px;
}

.btn.btn-filled {
  background: var(--mm);
}

.btn.btn-filled:hover {
  opacity: 0.8;
  -webkit-box-shadow: 0 8px 25px -8px var(--mm);
  box-shadow: 0 8px 25px -8px var(--mm);
}

</style>
