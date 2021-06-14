import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'home.header.search': 'Find Surah',
      'c.search.placeholder': 'Insert surah name..',
      't.see_more': 'See More..',
      't.verse': 'verses',
    },
  },
  id: {
    translation: {
      'home.header.search': 'Cari Surat',
      'c.search.placeholder': 'Masukan nama surat..',
      't.see_more': 'Selengkapnya..',
      't.verse': 'ayat',
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
