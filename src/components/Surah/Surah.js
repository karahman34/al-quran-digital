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
    <Link
      to={`/surah/${surah.number}/${surah.name.transliteration[lang]
        .toLowerCase()
        .replace(/[^a-zA-Z-]/g, '')}`}
    >
      <div className="relative p-4 bg-white rounded-2xl transition-all hover:border-2 hover:border-green-400">
        {/* Number */}
        <div className="float-left h-8 w-8 rounded-full text-white bg-green-400 number flex justify-center items-center font-bold">
          {surah.number}
        </div>

        {/* Name in arab */}
        <div className="name-arab text-right text-arab text-4xl">
          {surah.name.short}
        </div>

        {/* Transliteration */}
        <div className="name text-gray-700 text-right text-lg">
          {surah.name.transliteration[lang]}
        </div>

        {/* Verses */}
        <div className="text-gray-500 ml-1 text-right">
          ({surah.numberOfVerses} {t('t.verse')})
        </div>

        {/* Translation */}
        <p className="mt-1">Translation: </p>
        <div className="translation text-gray-500">
          <span>{surah.name.translation[lang]}</span>
        </div>

        {/* Tafsir */}
        <div className="mt-2">Tafsir: </div>
        <div className="tafsir text-gray-500">
          <span>{tafsir.substr(0, 200)}..</span>
          {tafsirExceedMax && (
            <span className="text-gray-800 ml-2">{t('t.see_more')}</span>
          )}
        </div>
      </div>
    </Link>
  )
}

Surah.propTypes = {
  lang: PropTypes.string.isRequired,
  surah: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(Surah)
