import { SET_LIST, SET_SURAH } from './actionTypes'
import mainState from './state'

const mainReducer = (state = mainState, { type, payload }) => {
  switch (type) {
    case SET_LIST:
      return {
        ...state,
        list: payload,
      }

    case SET_SURAH:
      return {
        ...state,
        surah: {
          ...state.surah,
          [payload.number]: payload,
        },
      }

    default:
      return state
  }
}

export default mainReducer
