
export const state = () => ({
  popup: null,
})

export const getters = {
  isPopupOpened(st) {
    return st.popup !== null
  }
}

export const mutations = {
  pushPopup(state, popup) {
    state.popup = popup
  }
}

export const actions = {
  /* 
    {
      comp: string,
      payload: any
    }
   */
  pushPopup({commit}, popup) {
    commit('pushPopup', popup)
  },
}
