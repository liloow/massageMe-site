<template>
  <section @keydown.esc="close($event)">
    <div id="overlay" class="fullscreen" @click="close($event)">
        <div class="modal-wrapper">
          <!-- <modal-form @close="$emit('close',$event)"></modal-form> -->
          <slot></slot>
      </div>
    </div>
  </section>
</template>
<script>
// import ModalForm from '@/components/ModalForm';
export default {
  name: 'HomemadeModal',

  data() {
    return {
      scroll: 0,
    };
  },
  ref: 'dynoComp',
  methods: {
    close(e) {
      if (e.type === 'click' && e.target.id !== 'overlay') return;
      console.log(e);
      this.$emit('close', e);
    },
  },
  mounted() {
    window.addEventListener('keyup', e => (e.key === 'Escape' ? this.close(e) : null), false);
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  },
  beforeDestroy() {
    window.removeEventListener('keyup', e => (e.key === 'Escape' ? this.close(e) : null), false);
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
  },
  components: {
    // ModalForm,
  },
};
</script>
<style lang="scss" scoped>
.fullscreen {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}

.modal-wrapper {
  min-width: 400px;
  width: 95vw;
  bottom: 50%;
  left: 50%;
  margin: auto;
  position: absolute;
  transform: translate(-50%);
  display: flex;
  .modal-wrapper {
    max-width: 800px;
  }
}
</style>
