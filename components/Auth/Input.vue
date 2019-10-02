<template>
  <input class="input" :placeholder="placeholder" autocomplete="off">
</template>

<script>

export default {
  props: ['placeholder'] 
}

</script>

<style scoped>

.search {
  border: none;
  border-radius: 100px;
  padding: 10px 16px;
  width: 190px;
  box-sizing: border-box;
  background-color: var(--light-gray);
}

.input:focus {
  outline: none;
}

</style>
