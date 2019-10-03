<template>
  <div class="Menu" @click="$emit('close')">
    <div class="wrapper">
      <nuxt-link class="link" to="/">Home</nuxt-link>
      <nuxt-link class="link" to="/posts">Posts</nuxt-link>
      <nuxt-link class="link" to="/contato">Contato</nuxt-link>
    </div>
  </div>
</template>

<script>

export default {

}

</script>

<style scoped>

.Menu {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 270px;
}

.wrapper {
  margin-left: 20px;
}

.link {
  display: block;
  color: white;
  margin: 14px;
  font-size: 1.2em;
  text-decoration: none;
}

</style>
