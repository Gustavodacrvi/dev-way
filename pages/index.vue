<template>
  <div class="index">
    <ButtonApp value="Sign in" @click="$store.dispatch('pushPopup', {comp: 'Login'})"/>
    <ButtonApp value="Sign up" @click="$store.dispatch('pushPopup', {comp: 'Signup'})"/>

    <div class="center">
      <PostCard class="post"
        title="Svelte é hype"
        author='Vinícius Bispo'
        date="dia 19"
        duration="4 min"
        descr="Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se "
        views="31"
        upvotes="3"
        shares="2"
        comments="1"
      />
    </div>
  </div>
</template>

<script>

import ButtonVue from '../components/Auth/Button.vue'
import PostCardVue from '../components/PostCard.vue'

export default {
  components: {
    ButtonApp: ButtonVue,
    PostCard: PostCardVue,
  }
}

</script>

<style scoped>

.center {
  display: flex;
  justify-content: center;
}

.post {
  flex-basis: 700px;
}

</style>
