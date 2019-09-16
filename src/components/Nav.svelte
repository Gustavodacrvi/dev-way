<script>
  import { isDesktop } from '../store'

	export let segment
</script>

<style>

.nav {
  background-color: var(--card-color);
  height: 55px;
}

</style>

<nav class="nav">
  { $isDesktop }
</nav>