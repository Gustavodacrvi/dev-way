<script>
  import { fade } from 'svelte/transition'

</script>

<main class="main" transition:fade={{duration: 150}}>
  <h1>posts</h1>
</main>

<style>

.main {
  position: absolute;
  margin: 0 150px;
}

</style>
