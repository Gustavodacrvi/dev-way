<template>
  <div class="Input" :class="platform" @click="$emit('click')" @click.stop>
    <input
      v-model="str"
      class="input"
      autocomplete="off"
      :placeholder="placeholder"
      :style="{width, padding}"
      @focus="focus = true"
      @blur="focus = false"
    >
    <div class="line" :class="{focus}"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['placeholder', 'type', 'borderLine', 'width', 'padding', 'value'],
  data() {
    return {
      focus: false,
      str: '',
    }
  },
  computed: {
    ...mapGetters(['platform'])
  },
  watch: {
    str() {
      this.$emit('input', this.str)
    }
  }
}

</script>

<style scoped>

.Input {
  position: relative;
}

.Input .line {
  opacity: 0;
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

.form .line {
  opacity: 0;
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
