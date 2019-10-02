<template>
  <button class="Button">{{ value }}</button>
</template>

<script>

export default {
  props: ['value'],
}

</script>

<style scoped>

.Button {
  border: none;
  padding: 14px 38px;
  font-size: 1.1em;
  border-radius: 6px;
  cursor: pointer;
  background-color: var(--orange);
  color: white;
  box-shadow: 0 1px 4px var(--orange);
  transition-duration: .2s;
}

.Button:hover {
  box-shadow: 0 4px 8px var(--orange);
}

</style>
