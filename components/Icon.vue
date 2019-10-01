<template>
  <div class="Icon">
    <svg-icon class="icon" :name="name" :width="getWidth" :height="getHeight"/>  
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script>

export default {
  props: ['width', 'height', 'name', 'title'],
  computed: {
    getHeight() {
      return this.height ? this.height : '20px'
    },
    getWidth() {
      return this.width ? this.width : '20px'
    }
  }
}

</script>

<style scoped>

.Icon {
  display: inline-block;
  position: relative;
}

.title {
  position: absolute;
  top: 100%;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(5px);
  font-size: .9em;
  background-color: var(--light-gray);
  padding: 14px;
  transition-delay: 0s;
  transition-duration: .3s;
}

.icon {
  transition-duration: .2s;
}

.Icon:hover .title {
  opacity: 1;
  transition-delay: .4s;
  visibility: visible;
  transform: translateY(0px);
}

.hover {
  transition: color .2s;
  cursor: pointer;
}

.hover:hover .icon {
  fill: black !important;
}

</style>
