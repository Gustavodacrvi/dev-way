<template>
  <div>
    <NavBar/>
    <div style="height: 80px"></div>
    <nuxt/>
  </div>
</template>

<script>

import NavbarVue from '../components/Navbar.vue'

export default {
  components: {
    NavBar: NavbarVue
  } 
}

</script>
