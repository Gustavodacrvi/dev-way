<script>
  import { toasts } from './../store/'

  let toast = null

</script>


<div class="wrapper">
  {#if toast}
    <div class="toast cb rb">
      <span class="name">{ toast.name }</span>
    </div>
  {/if}
</div>

<style>

.wrapper {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}

.toast {
  position: absolute;
  bottom: 30px;
  left: 50%;
  padding: 16px;
  transform: translateX(-50%);
}

</style>
