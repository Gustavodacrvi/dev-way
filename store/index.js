
const MIMIMUM_DESKTOP_WIDTH = 820

export const state = () => ({
  width: 0,
  popup: null,
  toasts: [],
})

export const getters = {
  isDesktop(st) {
    return st.width > MIMIMUM_DESKTOP_WIDTH
  },
  platform(st, getters) {
    if (getters.isDesktop) return 'desktop'
    return 'mobile'
  },
  isPopupOpened(st) {
    return st.popup !== null
  },
}

export const mutations = {
  saveWidth(st, width) {
    st.width = width
  },
  pushPopup(state, popup) {
    state.popup = popup
  },
  moveToastQueue(state) {
    state.toasts.pop()
  },
  pushToast(state, toast) {
    console.log(state)
    state.toasts.unshift(toast)
  },
}

export const actions = {
  pushPopup({commit, getters}, popup) {
    commit('pushPopup', popup)
    if (!getters.isDesktop)
      this.app.router.push('/popup')
  },
}

