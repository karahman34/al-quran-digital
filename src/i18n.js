import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'home.header.search': 'Find Surah',
      'c.search.placeholder': 'Insert a keyword..',
      't.see_more': 'See More',
      't.verse': 'verses',
      'list.not_found': "Sorry we can't find anything..",
      hide_tafsir: 'Hide Tafsir',
      show_tafsir: 'Show Tafsir',
    },
  },
  id: {
    translation: {
      'home.header.search': 'Cari Surat',
      'c.search.placeholder': 'Masukan kata kunci..',
      't.see_more': 'Selengkapnya',
      't.verse': 'ayat',
      'list.not_found': 'Maaf kami tidak bisa menemukan apapun..',
      hide_tafsir: 'Tutup Tafsir',
      show_tafsir: 'Tampilkan Tafsir',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
