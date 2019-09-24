<script>
  export let value
</script>

<button class="btn" on:click>{value}</button>

<style>

.btn {
  font-family: 'Work Sans';
  color: white;
  padding: 10px 100px;
  font-size: 1.1em;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: none;
  transition-duration: .2s;
  cursor: pointer;
  border: none;
  background-image: linear-gradient(to right,#7184A8, #3D6FD0);
}

.btn:hover {
  box-shadow: 0 4px 10px rgba(61,111,208, .6);
}

</style>
