<template>
  <div class="Popup rb" @click="hide">
    <component :is="popup.comp"/>
  </div>
</template>

<script>

import LoginVue from './Login.vue'

import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    Login: LoginVue,
  },
  methods: {
    hide() {
      this.$store.dispatch('popup/pushPopup', null)
    }
  },
  computed: {
    ...mapState({
      popup: state => state.popup.popup,
      width: state => state.popup.width,
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
  z-index: 100;
}

</style>
