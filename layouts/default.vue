<template>
  <div>
    <NavBar/>
    <div style="height: 80px"></div>
    <!-- <Popup/> -->

    <nuxt/>
  </div>
</template>

<script>

import NavbarVue from '../components/Navbar.vue'
import PopupVue from '../components/Popup/Popup.vue'

export default {
  components: {
    NavBar: NavbarVue,
    Popup: PopupVue,
  },
  data() {
    return {
      asdf: 0,
    }
  },
  fetch(context) {
    this.asdf = 'nullaçlskjdf'
    const saveScreenWidth = () => this.$store.dispatch('saveWidth')
    saveScreenWidth()
    window.addEventListener('resize', saveScreenWidth)
  }
}

</script>
