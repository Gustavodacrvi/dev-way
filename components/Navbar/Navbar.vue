<template>
  <div class="NavBar">
    <Desktop v-if="isDesktop"/>
    <mobile v-else/>
  </div>
</template>

<script>

import DesktopVue from './Desktop.vue'
import MobileVue from './Mobile.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    Desktop: DesktopVue,
    Mobile: MobileVue,
  },
  computed: {
    ...mapGetters(['isDesktop']),
  }
}

</script>

<style scoped>

.NavBar {
  width: 100%;
  height: 80px;
  position: fixed;
  border-bottom: 1px solid var(--light-gray);
}

</style>
