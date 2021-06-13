import quranApi from 'api/quranApi'
import { SET_LIST, SET_SURAH } from './actionTypes'

export const setList = (list) => ({
  type: SET_LIST,
  payload: list,
})

export const setSurah = (surah) => ({
  type: SET_SURAH,
  payload: surah,
})

export const fetchQuran = () => {
  return async (dispatch) => {
    try {
      const res = await quranApi.list()
      const { data } = res

      dispatch(setList(data.data))

      return Promise.resolve(res)
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
