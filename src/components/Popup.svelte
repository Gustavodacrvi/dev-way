<script>
  import Login from './Popups/Login.svelte'
  import Forgot from './Popups/Forgot.svelte'
  import { fade } from 'svelte/transition'

  import { popUp, pushPopup } from '../store'

  let options = {
    Login, Forgot,
  }
  $: component = options[$popUp.comp]

  const hidePopup = () => {
    pushPopup({name: null})
  }

</script>

{#if component}
<div class="wrapper" transition:fade={{duration: 100}}>
  <svelte:component this={component}/>
  <div class="margin" on:click={hidePopup}></div>
</div>
{/if}

<style>

.margin {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 49;
}

.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

</style>
