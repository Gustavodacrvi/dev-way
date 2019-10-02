<template>
  <div class="Popup">
    <component v-if="isPopupOpened" :is="popup.comp"/>
  </div>
</template>

<script>

import LoginVue from './Login.vue'

import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    Login: LoginVue,
  },
  created() {
    setTimeout(() => {
      this.$store.dispatch('popup/pushPopup', {comp: 'Login'})
    }, 1000)
  },
  computed: {
    ...mapState({
      popup: state => state.popup.popup,
      width: state => state.popup.width,
    }),
    ...mapGetters({
      isPopupOpened: 'popup/isPopupOpened',
    }),
  }
}

</script>

<style scoped>

.Popup {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {

}

</style>
