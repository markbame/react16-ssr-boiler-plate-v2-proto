'use strict'
export default (
  state = { value: [], loading: false, error: false },
  action
) => {
  switch (action.type) {
    case 'LOADING':
      state = { ...state, loading: true, error: false }
      return state
    case 'USER_AUTHENTICATED':
      state = {
        ...state,
        value: { user: action.user },
        loading: false,
        error: false
      }
      return state
    case 'USER_LOGOUT':
      state = { ...state, loading: false, error: false, value: [] }
      return state
    case 'USER_ERROR':
      state = { ...state, loading: false, error: action }
      return state
    default:
      return state
  }
}
