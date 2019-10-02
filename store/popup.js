
const MIMIMUM_DESKTOP_WIDTH = 820

export const state = () => ({
  popup: null,
  width: 0,
})

export const getters = {
  isPopupOpened(st) {
    return st.popup !== null
  },
  isDesktop(st) {
    return st.width > MIMIMUM_DESKTOP_WIDTH
  },
}

export const mutations = {
  pushPopup(state, popup) {
    state.popup = popup
  },
  saveWidth(st) {
    st.width = document.offsetWidth
  },
}

export const actions = {
  pushPopup({commit}, popup) {
    commit('pushPopup', popup)
  },
}
