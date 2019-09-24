
import { readable, writable } from 'svelte/store'

const MINIMUM_DESKTOP_SCREEN_WIDTH = 1020

// calculate screen width
export const isDesktop = readable(true, (set) => {

  const getValue = () => {
    set(document.body.clientWidth >= MINIMUM_DESKTOP_SCREEN_WIDTH)
  }
  
  getValue()
  const eventListener = () => {
    getValue()
  }
  window.addEventListener('resize', eventListener)

  return () => {
    window.removeEventListener('resize', eventListener)
  }
})
export const popUp = writable({comp: null})
export const toastsQueue = writable([])

export const pushPopup = (pop) => {
  popUp.update(v => {
    v = pop
    return v
  })
}
export const addToast = (toast) => {
  toastsQueue.update(arr => {
    arr.unshift(toast)
    return arr
  })
}
