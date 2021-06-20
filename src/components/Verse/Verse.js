import { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import VerseStyles from './Verse.module.scss'

const mapStateToProps = (state) => ({
  lang: state.global.lang,
})

function Verse({ verse, lang }) {
  const { t } = useTranslation()
  const [tafsirOpened, setTafsirOpened] = useState(false)

  const tafsirEl = useRef(null)

  function toggleTafsir() {
    if (tafsirOpened) {
      setTafsirOpened(false)
      tafsirEl.current.style.maxHeight = 0
    } else {
      setTafsirOpened(true)
      tafsirEl.current.style.maxHeight = tafsirEl.current.scrollHeight + 'px'
    }
  }

  return (
    <div
      className={`${VerseStyles.verse} relative pt-4 pb-0 bg-white w-full rounded-xl`}
    >
      <div className="px-4">
        {/* Number */}
        <div className="h-8 w-8 mr-2 flex justify-center items-center bg-green-400 rounded-full text-white font-bold absolute -left-2 -top-2">
          <p>{verse.number.inSurah}</p>
        </div>

        {/* Text Arab */}
        <p className={`${VerseStyles.textArab} text-right`}>
          {verse.text.arab}
        </p>
      </div>

      <div className="px-4">
        {/* Transliteration */}
        <p className="mt-3 md:text-lg text-gray-700">
          {verse.text.transliteration['en']}
        </p>

        {/* Translation */}
        <div className="mt-2 text-gray-500 ">
          <span>&quot;{verse.translation[lang]}&quot;</span>
        </div>

        {/* Audio */}
        <audio controls className="mt-3 w-full">
          <source src={verse.audio.primary} type="audio/mp3"></source>
        </audio>
      </div>

      {/* Tafsir */}
      <div className="mt-4 border-t overflow-hidden rounded-b-xl">
        {/* Toggle */}
        <div
          className="py-2 px-4 flex justify-between items-center border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={toggleTafsir}
        >
          {/* Text */}
          <span className="text-gray-700">
            {tafsirOpened ? t('hide_tafsir') : t('show_tafsir')}
          </span>

          {/* Icon */}
          <i
            className={`mdi mdi-${
              tafsirOpened ? 'chevron-down' : 'chevron-up'
            } text-xl`}
          ></i>
        </div>

        {/* Text */}
        <div
          ref={tafsirEl}
          className={`${VerseStyles.tafsir} ${
            tafsirOpened ? 'mb-3' : 'mb-0'
          } tafsir text-gray-500 italic px-4`}
        >
          {verse.tafsir[lang]
            ? verse.tafsir[lang].short
            : verse.tafsir['id'].short}
        </div>
      </div>
    </div>
  )
}

Verse.propTypes = {
  verse: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Verse)
