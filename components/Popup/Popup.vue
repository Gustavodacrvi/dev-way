<template>
  <div class="Popup rb" @click="hide">
    <component class="comp" :class="platform" :is="popup.comp"/>
  </div>
</template>

<script>

import LoginVue from './Login.vue'
import SignupVue from './Signup.vue'

import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    Login: LoginVue,
    Signup: SignupVue,
  },
  methods: {
    hide() {
      if (this.$store.getters.isDesktop)
        this.$store.dispatch('pushPopup', null)
      else this.$router.go(-1)
    }
  },
  computed: {
    ...mapState({
      popup: state => state.popup,
    }),
    ...mapGetters(['platform'])
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

.comp.mobile {
  width: 100%;
  height: 100%;
  margin: 0;
}

</style>
