<script>
  import Nav from '../components/Nav.svelte'
  import Popup from '../components/Popup.svelte'
  import Toast from '../components/Toast.svelte'

	export let segment
</script>

<Nav {segment}/>
<Popup/>
<Toast/>

<main>
	<slot></slot>
</main>