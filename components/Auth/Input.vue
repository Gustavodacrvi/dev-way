<template>
  <div class="Input" :class="platform">
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
import { mapGetters } from 'vuex'

export default {
  props: ['placeholder', 'type', 'borderLine'],
  data() {
    return {
      focus: false,
    }
  },
  computed: {
    ...mapGetters(['platform'])
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
  width: 120%;
  border-bottom: 1px solid var(--light-gray);
}

.Input.mobile .input {
  padding: 20px;
  font-size: 1.1em;
}

.line {
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width .5s;
  width: 0;
}

.focus {
  width: 150%;
}

</style>
