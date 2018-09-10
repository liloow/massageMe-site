export const smoothAppear = {
  data() {
    return {
      faded: [],
      lock: null,
    };
  },
  methods: {
    handleScroll() {
      this.fetchElems();
      while (
        !this.lock &&
        this.faded[0] &&
        this.faded[0].getBoundingClientRect().top - window.innerHeight * 0.8 < 0
      ) {
        this.faded[0].classList.remove('faded');
        this.faded.splice(0, 1);
        this.lock = 'locked';
        setTimeout(() => {
          this.lock = null;
          this.handleScroll();
        }, 700);
      }
    },
    fetchElems() {
      this.$nextTick(() => {
        this.faded = [...this.$el.querySelectorAll('.faded')];
        return true;
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, false);
    this.fetchElems();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll, false);
  },
};

export const scrollToAddress = {
  methods: {
    scrollToAddress() {
      document.querySelector('#address-input').focus({preventScroll: true});
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
  },
};
