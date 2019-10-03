<template>
  <div class="Mobile">
    <div class="wrapper">
      <Icon class="icon" name='menu' width="60px"/>
      <h3 class="title">DEV WAY</h3>
    </div>
  </div>
</template>

<script>

import IconVue from '../Icon.vue'

export default {
  components: {
    Icon: IconVue
  }
}

</script>

<style scoped>

.Mobile {
  display: flex;
  align-items: center;
  height: 100%;
}

.wrapper {
  margin: 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.icon {
  cursor: pointer;
}

.title {
  margin: 0;
  font-size: 1.7em;
}

</style>
