<template>
  <div class="NavBar" :class="{hide: !showMobileMenu}">
    <Desktop v-if="isDesktop"/>
    <mobile v-else :show='showMobileMenu' @open-menu="$emit('open-menu')"/>
  </div>
</template>

<script>

import DesktopVue from './Desktop.vue'
import MobileVue from './Mobile.vue'

import { mapGetters } from 'vuex'

export default {
  props: ['showMobileMenu'],
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
  background-color: white;
  transform: translateY(0px);
  transition: transform .3s;
}

.hide {
  transform: translateY(-82px);  
}

</style>
