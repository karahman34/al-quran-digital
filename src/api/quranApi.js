import axios from 'axios'

const baseURL = 'https://api.quran.sutanlab.id'

const quranApi = {
  list() {
    return axios.get(`${baseURL}/surah`)
  },
  surah(number) {
    return axios.get(`${baseURL}/surah/${number}`)
  },
  ayat(number, ayat) {
    return axios.get(`${baseURL}/surah/${number}/${ayat}`)
  },
}

export default quranApi
