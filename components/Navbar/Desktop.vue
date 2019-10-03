<template>
  <div class="Desktop">
    <div class="wrapper">
      <div class="logo">DEV WAY</div>
      <div>
        <nuxt-link class="link" to="/">Home</nuxt-link>
        <nuxt-link class="link" to="/posts">Posts</nuxt-link>
        <nuxt-link class="link" to="/contato">Contato</nuxt-link>
      </div>
      <div class="search">
        <InputApp
          class="search"
          placeholder="Pesquisar..."
          type="text"
        />
      </div>
      <div class="navbar-line">
      </div>
    </div>
  </div>
</template>

<script>

import InputVue from './../Auth/Input.vue'

export default {
  components: {
    InputApp: InputVue,
  },
  mounted() {
    this.moveLine()
    window.addEventListener('resize', this.moveLine)
  },
  methods: {
    moveLine() {
      const line = this.$el.getElementsByClassName('navbar-line')[0]
      const active = this.$el.getElementsByClassName('nuxt-link-exact-active')[0]
      
      if (line && active) {
          line.style.width = active.offsetWidth + 'px'
          line.style.left = active.offsetLeft + 'px'
      }
    }
  },
  watch: {
    $route() {
      setTimeout(() => {
        this.moveLine()
      })
    }
  }
}

</script>

<style scoped>

.Desktop {
  height: 100%;
}

.wrapper {
  margin: 0 100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo {
  font-size: 2.2em;
}

.link {
  text-decoration: none;
  color: rgba(100, 100, 100, .7);
  display: inline-block;
  padding: 0 24px;
  transition-duration: .3s;
  font-size: 1.1em;
}

.navbar-line {
  position: absolute;
  bottom: -2px;
  height: 3px;
  width: 100px;
  border-radius: 3px;
  background-color: var(--orange);
  transition-duration: .2s;
}

.nuxt-link-exact-active, .link:hover {
  color: var(--orange);
}

</style>
