<template>
  <div>
    <NavBar/>
    <div style="height: 80px"></div>
    <transition name="fade">
      <Popup v-if="isPopupOpened"/>
    </transition>

    <nuxt/>
  </div>
</template>

<script>

import NavbarVue from '../components/Navbar.vue'
import PopupVue from '../components/Popup/Popup.vue'

import { mapGetters, mapState } from 'vuex'

export default {
  components: {
    NavBar: NavbarVue,
    Popup: PopupVue,
  },
  created() {
    if (process.browser) {
      this.saveWidth()
      window.addEventListener('resize', this.saveWidth)
    }
  },
  methods: {
    saveWidth() {
      this.$store.commit('saveWidth', document.body.offsetWidth)
    },
  },
  computed: {
    ...mapGetters({
      isPopupOpened: 'isPopupOpened',
    }),
  },
  watch: {
    $route(newRoute, old) {
      if (!this.$store.getters.isDesktop && old.name === 'popup')
        this.$store.commit('pushPopup', null)
    }
  }
}

</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-leave, .fade-enter-to {
  opacity: 1;
}

</style>
