<template>
  <button class="Button" @click="$emit('click')">{{ value }}</button>
</template>

<script>

export default {
  props: ['value'],
}

</script>

<style scoped>

.Button {
  border: none;
  padding: 12px 38px;
  font-size: 1.1em;
  border-radius: 6px;
  cursor: pointer;
  background-color: var(--primary);
  color: white;
  box-shadow: 0 1px 4px var(--primary);
  transition-duration: .2s;
}

.Button:hover {
  box-shadow: 0 4px 8px var(--primary);
}

</style>
