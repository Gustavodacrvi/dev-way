<template>
  <div class="Input">
    <input
      class="input"
      autocomplete="off"
      :placeholder="placeholder"
      @focus="focus = true"
      @blur="focus = false"
    >
    <div class="line" :class="{focus}"></div>
  </div>
</template>

<script>

export default {
  props: ['placeholder', 'type', 'borderLine'],
  data() {
    return {
      focus: false,
    }
  }
}

</script>

<style scoped>

.Input {
  position: relative;
}

.input {
  font-size: 1em;
}

.input:focus {
  outline: none;
}

.search .input {
  border: none;
  border-radius: 100px;
  padding: 10px 16px;
  width: 190px;
  box-sizing: border-box;
  background-color: var(--light-gray);
}

.form .input {
  padding: 10px;
  border: none;
  width: 100%;
  border-bottom: 1px solid var(--light-gray);
}

.line {
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 2px;
  background-color: var(--orange);
  transition: width .5s;
  width: 0;
}

.focus {
  width: 100%;
}

</style>
