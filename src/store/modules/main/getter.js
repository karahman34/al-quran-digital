export const findSurahByNumber = (state) => (number) => state.main.surah[number]

export const filterSurah = (state) => (q) =>
  state.main.list.filter((surah) => {
    const { translation, transliteration } = surah.name
    const tafsir = surah.tafsir

    // Find by transliteration
    if (
      transliteration.en.toLowerCase().includes(q) ||
      transliteration.id.toLowerCase().includes(q)
    ) {
      return surah
    }

    // Find by translation
    if (
      translation.en.toLowerCase().includes(q) ||
      translation.id.toLowerCase().includes(q)
    ) {
      return surah
    }

    // Find by tafsir
    if (tafsir.id.toLowerCase().includes(q)) {
      return surah
    }
  })
