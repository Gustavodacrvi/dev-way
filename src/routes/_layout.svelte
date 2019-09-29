<script>
  import { onMount } from 'svelte'

  import NavBar from '../components/NavBar.svelte'
  import Popup from '../components/Popup/Popup.svelte'

  export let segment
</script>

<NavBar {segment}/>
<Popup {segment}/>

<main class="main">
	<slot></slot>
</main>

<style>

.main {
  position: relative;
  z-index: 1;
}

</style>
