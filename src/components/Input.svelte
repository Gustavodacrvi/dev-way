<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let placeholder
  export let value
  export let type = "text"

  let str = value

  const emitEvent = () => {
    dispatch('update', {str})
  }

</script>

<div class="wrapper">
  <input class="input" autocomplete="off" placeholder bind:value={str} on:input={emitEvent}>
</div>

<style>

.wrapper {
  margin: 14px 0;
}

.input {
  outline: none;
  background: none;
  border: none;
  font-family: 'Work Sans';
  font-size: 1em;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(60,60,60);
  color: var(--white);
}

</style>
