<template>
  <section @keydown.esc="close($event)">
    <div class="fullscreen" @click="close($event)">
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
      this.$emit('close', e);
    },
  },
  mounted() {
    this.scroll = document.getElementsByTagName('html')[0].scrollHeight;
    // window.addEventListener(
    //   'keydown',
    //   e => {
    //     if (e.key === 'Escape') {
    //       this.close(e);
    //     }
    //   },
    //   { capture: true }
    // );
    document.getElementsByTagName('html')[0].style.height = '100%';
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  },
  components: {
    // ModalForm,
  },
};
</script>
<style lang="css" scoped>
.fullscreen {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0vh;
  z-index: 1000;
}

.modal-wrapper {
  min-width: 640px;
  bottom: 50%;
  left: 50%;
  margin: auto;
  position: absolute;
  transform: translateX(-50%);
  display: flex;
}

</style>
