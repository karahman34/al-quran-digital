import { SET_LANG } from './actionTypes'
import globalState from './state'

const globalReducer = (state = globalState, { type, payload }) => {
  switch (type) {
    case SET_LANG:
      return {
        ...state,
        lang: payload,
      }

    default:
      return state
  }
}

export default globalReducer
