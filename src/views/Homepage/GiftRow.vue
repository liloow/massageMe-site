<template>
  <section class="hero is-medium">
    <div class="columns-fluid">
      <div class="column-fluid hero-body">
        <div class="row ">
          <div class="body-content">
            <h6 class="body faded">Envie de faire plaisir de manière originale à un ami ou à un proche ?</h6>
            <h6 class="spacy faded">...</h6>
            <h6 class="biggie faded">Offrez lui l'expérience Massage-Me à domicile.</h6>
          </div>
          <div class="body-footer">
            <button @click.prevent="$router.push('/vouchers')" class="button btn btn-filled faded">Offrir un massage</button>
          </div>
        </div>
      </div>
      <div class="column-fluid">
        <div class="row">
          <figcaption>
            <img class="cover" src="../../assets/img/large/tshirt.jpg" alt="">
          </figcaption>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'GiftRow',
  computed: {},
  data() {
    return {
      breakpoints: [],
      lock: null,
    };
  },
  methods: {
    handleScroll(e) {
      while (
        !this.lock &&
        this.faded[0] &&
        window.scrollY + window.innerHeight > this.faded[0].offsetTop + this.faded[0].clientHeight
      ) {
        console.log('NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
        this.faded[0].classList.remove('faded');
        this.faded.splice(0, 1);
        this.lock = 'locked';
        setTimeout(() => {
          this.lock = null;
          this.handleScroll();
        }, 1000);
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, false);
    this.faded = [...this.$el.querySelectorAll('.faded')];
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll, false);
  },
};
</script>
<style lang="scss" scoped>
@mixin absolutecenter($axis: 'both') {
  position: absolute;
  @if $axis == 'y' {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  @if $axis == 'x' {
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  @if $axis == 'both' {
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}

.columns-fluid {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 0;
  flex: 1;
  min-width: 20rem;
  .column-fluid {
    display: flex;
    min-width: 400px;
    width: 50%;
    flex: 1;
    .row {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      img.cover {
        max-width: 100%;
        pointer-events: none;
      }
      h6,
      button {
        opacity: 1;
        transition: opacity 1.5s ease;
        &.faded {
          opacity: 0;
        }
      }
      .body-title {
        display: flex;
        flex: 1;
        text-align: center;
        margin: auto;
      }
      .body-content {
        width: 85%;
        display: flex;
        flex: 1.8;
        margin: auto;
        flex-flow: column nowrap;
        h6 {
          text-align: center;
          margin: auto;
          font-size: 1.4rem;
          width: 90%;
          &.spacy {
            letter-spacing: 1rem;
          }
          &.biggie {
            font-size: 2rem;
            margin-top: 3rem;
            width: 100%;
          }
        }
      }
      .body-footer {
        text-align: center;
        margin: auto;
        position: relative;
        flex: 1.3;
        .btn {
          font-size: 1.5rem;
          font-family: 'Raleway';
          padding: 1rem 2rem;
          white-space: nowrap;
          text-transform: uppercase;
          margin: auto;
          top: 75%;
          // @include absolutecenter(x);
          &:not(.faded) {
            animation: emphase 2s ease 0s;
          }
        }
      }
    }
  }
}

@keyframes emphase {
  0% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
