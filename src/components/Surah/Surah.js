import { useMemo, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => ({
  lang: state.global.lang,
})

function Surah({ surah, lang }) {
  const { t } = useTranslation()

  const [tafsir] = useState(
    surah.tafsir[lang] ? surah.tafsir[lang] : surah.tafsir['id']
  )

  const tafsirExceedMax = useMemo(() => {
    return tafsir.length > 200
  })

  return (
    <Link to="#">
      <div className="relative p-4 bg-white rounded-2xl transition-all hover:border-2 hover:border-green-400">
        {/* Number */}
        <div className="h-8 w-8 rounded-full text-white bg-green-400 number absolute -top-3 -left-2 flex justify-center items-center font-font-bold">
          {surah.number}
        </div>

        {/* Name in arab */}
        <div className="name-arab text-3xl mb-3">{surah.name.short}</div>

        {/* Name in transliteration */}
        <p>Transliteration: </p>
        <div className="name mr-2 text-gray-500">
          <span>{surah.name.transliteration[lang]}</span>
          <span className="ml-1">
            ({surah.numberOfVerses} {t('t.verse')})
          </span>
        </div>

        {/* Translation */}
        <p className="mt-2">Translation: </p>
        <div className="translation text-gray-500">
          {surah.name.translation[lang]}
        </div>

        {/* Tafsir */}
        <div className="mt-2">Tafsir: </div>
        <div className="tafsir text-gray-500">
          <span>{tafsir.substr(0, 200)}</span>
          {tafsirExceedMax && (
            <span className="text-gray-800 ml-2">{t('t.see_more')}</span>
          )}
        </div>
      </div>
    </Link>
  )
}

Surah.propTypes = {
  surah: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Surah)
