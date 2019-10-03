<template>
  <div>
    <NavBar @open-menu='menu = true' :showMobileMenu='!menu'/>
    <div style="height: 80px"></div>
    <transition name="fade">
      <Popup v-if="isPopupOpened"/>
    </transition>

    <div @click="menu = false">
      <nuxt class="nuxt" :class="{hideNuxt: menu}"/>
    </div>
    <MenuApp class="menu" :class="{showMenu: menu}" @close='menu = false'/>
  </div>
</template>

<script>

import NavbarVue from '../components/Navbar/Navbar.vue'
import PopupVue from '../components/Popup/Popup.vue'

import { mapGetters, mapState } from 'vuex'
import MenuVue from '../components/Navbar/Menu.vue'

export default {
  components: {
    NavBar: NavbarVue,
    Popup: PopupVue,
    MenuApp: MenuVue,
  },
  data() {
    return {
      menu: false,
    }
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
    showingMenu() {
      return this.$route.path === '/menu'
    },
  },
  watch: {
    $route(newRoute, old) {
      if (!this.$store.getters.isDesktop && old.name === 'popup')
        this.$store.commit('pushPopup', null)
    },
    menu() {
      const s = document.body.style
      if (this.menu) {
        s.backgroundColor = 'var(--primary)'
      } else {
        s.backgroundColor = 'white'
      }
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

.nuxt {
  margin-top: 4px;
  transform: translate(0, 0) scale(1,1);
  transition-duration: .3s;
  background-color: white;
  border-radius: 4px;
}

.menu {
  position: fixed;
  left: -270px;
  transition: opacity left .3s;
  opacity: 0;
  visibility: hidden;
}

.showMenu {
  left: 0;
  opacity: 1;
  visibility: visible;
}

.hideNuxt {
  transform: translate(250px, 80px)  scale(.8);
} 

</style>
