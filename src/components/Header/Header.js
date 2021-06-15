import { useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setLang } from 'store/modules/global/actions'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const mapStateToProps = ({ global }) => ({
  lang: global.lang,
})

const mapDispatchToProps = (dispatch) => ({
  setLang: (lang) => dispatch(setLang(lang)),
})

function Header({ lang, setLang }) {
  const { i18n } = useTranslation()

  const [selectedLang, setSelectedLang] = useState(lang)

  const langChangeHandler = useCallback((e) => {
    const newLang = e.target.value

    // Change lang state.
    setLang(newLang)

    // Change lang local input.
    setSelectedLang(newLang)

    // Change lang in i18n.
    i18n.changeLanguage(newLang)
  })

  return (
    <div className="py-3 mb-5 flex justify-between">
      {/* Logo */}
      <Link to="/">
        <p className="m-0 text-2xl text-green-800">Al-Quran Digital</p>
      </Link>

      {/* Lang */}
      <select
        className="bg-white py-2 px-3 rounded-md focus:outline-none focus:ring focus:ring-green-500 hover:cursor-pointer transition-all"
        onChange={langChangeHandler}
        value={selectedLang}
      >
        <option value="id">Indonesia</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}

Header.propTypes = {
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
