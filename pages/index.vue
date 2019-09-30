<template>
  <div class="index">
    <ButtonApp value="Venha se divertir!"/>

    <div class="center">
      <PostCard class="post"
        title="Svelte é hype"
        author='Vinícius Bispo'
        date="dia 19"
        duration="4 min"
        descr="Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se Foda-se "
      />
    </div>

    <svg-icon name="inbox"/>

  </div>
</template>

<script>

import ButtonVue from '../components/Button.vue'
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
