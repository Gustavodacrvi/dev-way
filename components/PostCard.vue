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
      <div class="group">
        <Icon class="hover o" name="view" title="Views"/>
        <span class="o">{{ views }}</span>
      </div>
      <div class="group">
        <Icon class="hover o" name="upvote" title="Upvotes"/>
        <span class="o">{{ upvotes }}</span>
      </div>
      <div class="group">
        <Icon class="hover o" name="comment" title="Comments"/>
        <span class="o">{{ comments }}</span>
      </div>
      <div class="group">
        <Icon class="hover o" name="share" title="Shares"/>
        <span class="o">{{ shares }}</span>
      </div>
    </div>
  </div>
</template>

<script>

import IconVue from './Icon.vue'

export default {
  props: ['title', 'author', 'date', 'duration', 'descr',
  'views', 'views', 'upvotes', 'comments', 'shares'],
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

.group {
  display: inline-block;
  margin-right: 18px;
  display: inline-flex;
  align-items: center;
}

.o {
  margin-right: 10px;
}

</style>
