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

  const fade = (node, {
    duration = 200,
  }) => {
    const style = getComputedStyle(node)
    const o = style.opacity
    const matrix = new WebKitCSSMatrix(style.transform)
    
    return {
      duration,
      css: t => {
        return `
          transform: translate(-50%,${(1 - t) * 100}px);
          opacity: ${o * t};
        `
      }
    }
  }

</script>


<div class="wrapper" on:click={() => toast = null}>
{#if toast}
  <div class={toast.type + " toast cb rb"} transition:fade>
    <span class="name">{ toast.name }</span>
  </div>
{/if}
</div>

<style>

.wrapper {
  bottom: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  overflow: hidden;
}

.toast {
  position: absolute;
  bottom: 30px;
  left: 50%;
  padding: 16px;
  transform: translate(-50%, 0);
}

.error {
  border: 1px solid var(--red);
}

.warning {
  border: 1px solid var(--yellow);
}

.success {
  border: 1px solid var(--blue);
}

</style>
