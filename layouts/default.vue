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

import { mapGetters } from 'vuex'

export default {
  components: {
    NavBar: NavbarVue,
    Popup: PopupVue,
  },
  created() {
    setTimeout(() => {
      this.$store.dispatch('popup/pushPopup', {comp: 'Login'})
    }, 1000)
  },
  data() {
    return {
      asdf: 0,
    }
  },
  computed: {
    ...mapGetters({
      isPopupOpened: 'popup/isPopupOpened',
    }),
  }
/*   fetch(context) {
    this.asdf = 'nullaçlskjdf'
    const saveScreenWidth = () => this.$store.dispatch('saveWidth')
    saveScreenWidth()
    window.addEventListener('resize', saveScreenWidth)
  } */
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
