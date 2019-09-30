<template>
  <svg-icon :name="name" :width="getWidth" :height="getHeight"/>  
</template>

<script>

export default {
  props: ['width', 'height', 'name'],
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
