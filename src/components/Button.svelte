<script>

  export let value
</script>

<button class="btn">{value}</button>

<style>

.btn {
  border-radius: 6px;
  background-color: var(--primary);
  padding: 14px 58px;
  box-shadow: 0 1px 4px var(--primary);
  color: white;
  font-size: 1.1em;
  border: none;
  cursor: pointer;
  outline: none;
  transition-duration: .3s;
}

.btn:hover {
  box-shadow: 0 4px 12px var(--primary);
}

</style>
