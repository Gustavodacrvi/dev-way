<script>
  import { toastsQueue } from './../store/'

  let toast = null
  let toasts = []

  toastsQueue.subscribe(arr => {toasts = arr})

  const addToast = (t) => {
    toast = t
    if (t.seconds)
      setTimeout(() => {
        toast = null
      }, t.seconds * 1000)
  }

  $: {
    if (toasts.length > 0) addToast(toasts.pop())
  }

</script>


{#if toast}
  <div class="wrapper">
      <div class={toast.type + " toast cb rb"}>
        <span class="name">{ toast.name }</span>
      </div>
  </div>
{/if}

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

.error {
  border: 1px solid red;
}

</style>
