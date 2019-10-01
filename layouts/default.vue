<template>
  <div>
    <NavBar/>
    <div style="height: 80px"></div>
    <Popup/>
    
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
  } 
}

</script>
