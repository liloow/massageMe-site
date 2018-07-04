<style lang="css" scoped>
.service-box figure {
  position: relative;
  margin: auto;
  border-radius: 50%;
  -webkit-transition: .3s;
  transition: .3s;
  text-align: center;
  height: auto;
  overflow: hidden;
  justify-content: space-around;
}

.service-box:hover figure {
  box-shadow: -3.758px 26.737px 43px 0px rgba(42, 57, 63, 0.15);
}

.service-box figure figcaption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  padding: 0 15px;
  z-index: 2;
  -webkit-transform: scale(0);
  transform: scale(0);
}

.service-box:hover figure figcaption {
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

.service-box figure:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2c3145;
  opacity: .7;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
  border-radius: 50%;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  visibility: hidden;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  -webkit-transform: scale(0);
  transform: scale(0);
}

.service-box:hover figure:after {
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: .7;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
  visibility: visible;
}

.service-box figure figcaption .boxed-btn {
  padding: 14px 24px;
  color: #fff;
}

.service-box h4 {
  margin-top: 2vh;
  margin-bottom: 2vh;
}

.service-box p {
  margin: 1vw 1vh;
}

.service-box p.price {
  margin-bottom: 0;
}

.massage-thumb {
  vertical-align: middle;
  width: 100%;
  margin: auto;
}

.text-center {
  text-align: center;
  margin: auto 2vw;
}

.boxed-btn {
    display: inline-block;
    color: #fff;
    border-radius: 23px;
    padding: 11px 34px;
    position: relative;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    background: var(--mm);
}

.boxed-btn:before,
.boxed-btn:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    border-radius: 0;
    z-index: -1;
    height: 100%;
    background: #fff;
    will-change: transform;
    -webkit-transform: skew(-45deg) scaleX(0);
    transform: skew(-45deg) scaleX(0);
    -webkit-transition: -webkit-transform .3s ease-in-out;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
}

.boxed-btn:before {
    right: 75%;
    margin-right: -1px;
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
}

.boxed-btn:after {
    width: 70%;
    left: 75%;
    margin-left: -1px;
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
}

.boxed-btn:hover {
    box-shadow: 0px 16px 35px 0px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

.boxed-btn:hover:before,
.boxed-btn:hover:after {
    -webkit-transform: skew(-45deg) scaleX(1.5);
    transform: skew(-45deg) scaleX(1.5);
}

.section-title {
  text-align: center;
  margin: 2vh auto;
}

</style>
<template>
  <section id="services" class="hero is-small">
    <div class="container hero-body">
      <div class="row">
        <div class="hero-head section-title">
          <h2 class="title is-2 bold">Nos Massages</h2>
        </div>
      </div>
      <div class="columns row">
        <div class="column text-center" v-for="massage in massages">
          <div class="service-box">
            <figure class="">
              <img class="massage-thumb image" :src="massage.picture">
              <figcaption>
                <div class="inner-text is-primary">
                  <a href="#" class="boxed-btn primary">Book now</a>
                </div>
              </figcaption>
            </figure>
            <h4>{{massage.name}}</h4>
            <p>{{massage.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Services',

  data() {
    return {
      massages: [],
    };
  },
  methods: {},
  created() {
    getMassages().then(r => (this.massages = [r[0], r[1], r[2]]));
  },
  components: {},
};
</script>
