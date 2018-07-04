<template>
  <section>
    <div class="hero is-small">
      <div class="columns is-gapless picto is-multiline">
        <div class="column is-6-desktop is-12-tablet">
          <img src="../../assets/img/large/type.jpg">
        </div>
        <div class="columns column  is-6-desktop is-12-tablet">
        </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'StaticInfo',

  data() {
    return {
      massages: [],
    };
  },
  methods: {},
  created() {},
  components: {},
};
</script>
<style lang="css" scoped>
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
  color: #f9f9f9;

  -webkit-transition: all 0.1s;
  -moz-transition: all 0.1s;
  transition: all 0.1s;

  -webkit-box-shadow: 0px 0.2rem 0px #d35400;
  -moz-box-shadow: 0px 0.2rem 0px #d35400;
  box-shadow: 0px 0.2rem 0px #d35400;
}

.reserve:active {
  -webkit-box-shadow: 0px 2px 0px #d35400;
  -moz-box-shadow: 0px 2px 0px #d35400;
  box-shadow: 0px 2px 0px #d35400;
  position: relative;
}



button.reserve {
  line-height: 1;
  margin: 0vh;
  padding: 2vh 3.5vw;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  color: #f9f9f9;
  border-radius: 1vh;
  border: solid 1px #f39c12;
  background: var(--mm);
  text-align: center;
  justify-content: center;
}




h3 {}

.square {
  margin: auto;
}

.col {
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;
}


.center {
  display: flex;
  margin: auto;
  justify-content: center;
  flex-direction: row;
}

</style>
