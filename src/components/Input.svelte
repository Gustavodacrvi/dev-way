<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let placeholder
  export let value
  export let type = "text"

  let str = value

</script>

<div class="wrapper">
  <input
    class="input"
    autocomplete="off"
    {placeholder}
    bind:value={str}
    on:input={() => dispatch('update', {str})}>
</div>

<style>

.wrapper {
  margin: 12px 0;
}

.input {
  outline: none;
  background: none;
  border: none;
  font-family: 'Work Sans';
  font-size: 1em;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(60,60,60);
  color: var(--white);
}

</style>
