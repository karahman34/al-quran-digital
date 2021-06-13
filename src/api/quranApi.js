import axios from 'axios'

const baseURL = 'https://api.quran.sutanlab.id'

const quranApi = {
  list() {
    return axios.get(`${baseURL}/surah`)
  },
  surah(surah) {
    return axios.get(`${baseURL}/${surah}`)
  },
  ayat(surah, ayat) {
    return axios.get(`${baseURL}/${surah}/${ayat}`)
  },
}

export default quranApi
