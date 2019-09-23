<script>
  import Nav from '../components/Nav.svelte';
  import Popup from '../components/Popup.svelte';

	export let segment;
</script>

<Nav {segment}/>
<Popup/>

<main>
	<slot></slot>
</main>