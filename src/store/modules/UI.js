const state = () => ({
  miniState : true,
  scrollThumb: {right: '2px', borderRadius: '5px', background: 'lightgrey', width: '6px', opacity: .6}
})
  
const actions = {

}

const mutations = {
  toggleSidebarState(state){
    state.miniState = !state.miniState
  },
}

const getters = {
  miniState:(state)=>state.miniState,
  scrollThumb:(state)=>state.scrollThumb
}

export default {
  state,
  getters,
  actions,
  mutations
}