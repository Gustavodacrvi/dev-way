<template>
  <div class="Popup">
    <div class="card">
      {{ isPopupOpened }}
    </div>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  created() {
    setTimeout(() => {
      this.$store.dispatch('popup/pushPopup', {comp: 'asdf'})
    }, 1000)
  },
  computed: {
    ...mapGetters({
      isPopupOpened: 'popup/isPopupOpened'
    }),
  }
}

</script>

<style scoped>

.Popup {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
