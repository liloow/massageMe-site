<template>
  <section class="container-fluid">
    <div class="title">
      <h2>Selectionnez votre masseur</h2>
    </div>
    <div class="container-fluid">
      <div class="cards">
        <div v-for="therapist in therapistsComputed" class="card-wrapper" :key="therapist.name" @click="handleSelection($event, therapist)">
          <figure class="card">
            <div class="image"><img src="@/assets/img/staff/avatar1.png" />
            </div>
            <figcaption>
              <h2>{{therapist.name}}</h2>
              <p>{{therapist.short}}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TherapistStep',
  props: {
    therapists: Array,
    date: String,
    timeslot: String,
  },
  computed: {
    therapistsComputed: function() {
      return this.therapists.map(el => {
        el.short = el.bio.length > 175 ? `${el.bio.match(/(^([^]{175}))[^\W]*/g)[0]}...` : el.bio;
        return el;
      });
    },
  },
  data() {
    return {
      pickedTherapist: null,
    };
  },
  methods: {
    handleSelection(e, therapist) {
      this.pickedTherapist = therapist;
      this.$emit('therapistSelected', this.pickedTherapist);
    },
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
  margin: 10px 0.5em;
  width: 175px;
  color: #141414;
  text-align: left;
  line-height: 1em;
  font-size: 0.8em;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.5em;
}

.cards .card-wrapper {
  flex-basis: 0;
  height: auto;
  margin: 2em auto 0;
  flex-grow: 0;
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
  height: auto;
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

.no-margin {
  margin: 0;
}

.title {
  padding-left: 5em;
}

</style>
