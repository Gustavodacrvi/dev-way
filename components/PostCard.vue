<template>
  <div class="PostCard">
    <h3 class="title">{{ title }}</h3>
    <div class="info">
      <span>{{ author }}</span> .
      <span>{{ date }}</span> .
      <span>{{ duration }}</span>
    </div>
    <p class="descr">{{ descr }}</p>
    <div class="icons">
      <Icon name="comment"/>
      <Icon name="upvote"/>
    </div>
  </div>
</template>

<script>

import IconVue from './Icon.vue'

export default {
  props: ['title', 'author', 'date', 'duration', 'descr',
  'views'],
  components: {
    Icon: IconVue,
  }
}

</script>

<style scoped>

.PostCard {
  border: 1px solid var(--light-gray);
  border-radius: 6px;
  padding: 24px;
}

.title {
  margin: 14px 0;
  font-size: 2.3em;
  cursor: pointer;
}

.title:hover {
  text-decoration: underline;
}

.info {
  opacity: .6;
}

.descr {
  opacity: .8;
}

</style>
