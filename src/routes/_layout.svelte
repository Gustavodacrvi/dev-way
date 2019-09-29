<script>
  import NavBar from '../components/NavBar.svelte'

	export let segment
</script>

<NavBar {segment}/>

<main class="main">
	<slot></slot>
</main>

<style>

.main {
  position: relative;
  z-index: 1;
}

</style>
