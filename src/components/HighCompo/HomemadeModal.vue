<template>
  <section @keydown.esc="close($event)">
    <div class="fullscreen" @click="close($event)">
      <div class="modal-wrapper">
        <modal-form @close="$emit('close',$event)"></modal-form>
      </div>
    </div>
  </section>
</template>
<script>
import ModalForm from '@/components/ModalForm';
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
      console.log(e.path);
      if (e.path[0].className === 'fullscreen') this.$emit('close');
    },
  },
  created() {
    this.scroll = document.getElementsByTagName('html')[0].scrollHeight;
    document.getElementsByTagName('html')[0].style.height = '100%';
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  },
  components: {
    ModalForm,
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
  z-index: 5;
}

.modal-wrapper {
  min-width: 640px;
  margin: 20vh 40vw;
  position: absolute;
  transform: translateX(-50%);
}

</style>
