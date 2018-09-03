<template>
  <section @keydown.esc="close($event)">
    <div id="overlay" class="fullscreen" @click="close($event)">
        <div class="modal-wrapper">
          <slot></slot>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomemadeModal',
  computed: {
    currentTab() {
      return this.tabbable[0];
    },
    nextTab() {
      return this.tabbable[this.tabbable.length - 1];
    },
    prevTab() {
      if (this.tabbable.length < 2) return this.tabbable[0];
      return this.tabbable[1];
    },
  },
  data() {
    return {
      tabbable: [],
    };
  },
  ref: 'dynoComp',
  methods: {
    dispatchEvent(e) {
      if (e.key === 'Escape') return this.$emit('close');
      if (e.key === 'Tab') return this.handleTab(e);
      return false;
    },
    close(e) {
      if (e.type === 'click' && e.target.id !== 'overlay' && e.target.parentNode.id !== 'overlay')
        return;
      return this.$emit('close', e);
    },
    handleTab(e) {
      e.preventDefault();
      if (this.tabbable.length === 0) return false;
      if (e.shiftKey) {
        this.currentTab.blur();
        this.prevTab.focus();
        this.tabbable.push(this.tabbable.shift());
      } else {
        this.currentTab.blur();
        this.nextTab.focus();
        this.tabbable.unshift(this.tabbable.pop());
      }
    },
  },
  mounted() {
    document.body.classList.add('frozen');
    this.tabbable = [...document.querySelectorAll('#overlay *')].filter(el => el.autofocus != null);
    window.addEventListener('keydown', this.dispatchEvent, false);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.dispatchEvent, false);
    document.body.classList.remove('frozen');
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.fullscreen {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}

.modal-wrapper {
  min-width: 400px;
  width: 95vw;
  min-height: 35vh;
  top: 50%;
  left: 50%;
  margin: auto;
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: flex-start;
  pointer-events: none;
}
</style>
