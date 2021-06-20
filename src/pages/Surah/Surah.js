import { useEffect, useState, useCallback, useMemo } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { findSurahByNumber } from 'store/modules/main/getter'
import { fetchSurah } from 'store/modules/main/actions'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import Verse from 'components/Verse/Verse'

const mapStateToProps = (state) => ({
  findSurahByNumber: (number) => findSurahByNumber(state)(number),
  lang: state.global.lang,
})

const mapDispatchToProps = (dispatch) => ({
  fetchSurah: (number) => dispatch(fetchSurah(number)),
})

function Surah({ lang, findSurahByNumber, fetchSurah }) {
  const { t } = useTranslation()

  const { number } = useParams()
  const [loading, setLoading] = useState(true)

  const surah = useMemo(() => findSurahByNumber(number), [loading])

  const getSurah = useCallback(async () => {
    try {
      await fetchSurah(number)
    } catch (err) {
      alert('Failed to fetch surah')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!surah && loading) {
      getSurah()
    }
  }, [surah, loading])

  // Loader.
  if (!surah && loading) {
    return (
      <div className="text-green-800 text-xl lg:text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <i className="mdi mdi-loading mdi-spin mr-3"></i>
        <span>Fetching surah...</span>
      </div>
    )
  }

  // Not found.
  if (!surah && !loading) {
    return (
      <div className="text-center text-3xl text-green-800 mt-20">
        <i className="mdi mdi-emoticon-sad-outline mr-2"></i>
        <span>Surah Not Found.</span>
      </div>
    )
  }

  return (
    <div className="mx-auto lg:4/5 xl:w-3/5">
      {/* Surah */}
      <div className="p-4 bg-white w-full rounded-xl">
        <div className="flex justify-between">
          {/* Number */}
          <div className="h-8 w-8 flex justify-center items-center bg-green-400 rounded-full text-white font-bold">
            <p>{surah.number}</p>
          </div>

          <div className="flex flex-col items-end">
            {/* Name in arab */}
            <p className="text-4xl">{surah.name.short}</p>

            {/* Transliteration */}
            <p className="mt-1 text-xl text-gray-700">
              {surah.name.transliteration[lang]}
            </p>

            <div className="text-gray-500">
              {/* Translation */}
              <span>&ldquo;{surah.name.translation[lang]}&ldquo;</span>

              {/* Verses */}
              <span className="ml-1">
                ({surah.numberOfVerses} {t('t.verse')})
              </span>
            </div>
          </div>
        </div>

        {/* Tafsir */}
        <div className="mt-2">Tafsir: </div>
        <div className="tafsir text-gray-500 italic">
          {surah.tafsir[lang] ? surah.tafsir[lang] : surah.tafsir['id']}
        </div>
      </div>

      {/* Verse Text */}
      <div className="mt-2 mb-3 text-green-800 text-2xl capitalize">
        {t('t.verse')}:
      </div>

      {/* List of verse */}
      <div className="flex flex-col space-y-4">
        {surah.verses.map((verse, index) => (
          <Verse key={index} verse={verse} />
        ))}
      </div>
    </div>
  )
}

Surah.propTypes = {
  lang: PropTypes.string.isRequired,
  fetchSurah: PropTypes.func.isRequired,
  findSurahByNumber: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Surah)
