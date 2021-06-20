import { useState, useCallback, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setLang } from 'store/modules/global/actions'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import Logo from 'assets/quran.png'

const mapStateToProps = ({ global }) => ({
  lang: global.lang,
})

const mapDispatchToProps = (dispatch) => ({
  setLang: (lang) => dispatch(setLang(lang)),
})

function Header({ lang, setLang }) {
  const { i18n } = useTranslation()

  const [selectedLang, setSelectedLang] = useState(lang)
  const navbarEl = useRef(null)
  const selectLangEl = useRef(null)

  const langChangeHandler = useCallback((e) => {
    const newLang = e.target.value

    // Change lang state.
    setLang(newLang)
  })

  const listenScrollEvent = useCallback(() => {
    document.addEventListener('scroll', () => {
      const y = window.scrollY

      // Set shadow on navbar.
      if (y > 0) {
        // Navbar
        navbarEl.current.classList.add('bg-white')
        navbarEl.current.classList.add('shadow-md')

        // Select lang
        selectLangEl.current.classList.remove('bg-white')
        selectLangEl.current.classList.add('bg-gray-100')
        selectLangEl.current.classList.add('shadow-sm')
      } else {
        // Navbar
        navbarEl.current.classList.remove('bg-white')
        navbarEl.current.classList.remove('shadow-md')

        // Select lang
        selectLangEl.current.classList.add('bg-white')
        selectLangEl.current.classList.remove('bg-gray-100')
        selectLangEl.current.classList.remove('shadow-sm')
        selectLangEl.current.classList.remove('focus:ring-green-500')
      }
    })
  })

  useEffect(() => {
    // Change lang local input.
    setSelectedLang(lang)

    // Change lang in i18n.
    i18n.changeLanguage(lang)

    // Set lang in local storage.
    localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    // Listen scroll event.
    listenScrollEvent()
  }, [])

  return (
    <div
      ref={navbarEl}
      className="py-2 mb-5 w-full sticky top-0 z-50 transition-all"
    >
      {/* Container */}
      <div className="mx-auto container flex justify-between items-center px-3 md:px-0">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Quran Digital"
            className="object-cover h-8 w-8 inline-block"
          />
          <span className="ml-2 text-green-700 text-xl font-medium">
            Quran Digital
          </span>
        </Link>

        {/* Lang */}
        <select
          className="bg-white py-2 px-3 rounded-md focus:outline-none focus:ring focus:ring-green-400 cursor-pointer transition-all"
          ref={selectLangEl}
          onChange={langChangeHandler}
          value={selectedLang}
        >
          <option value="en">English</option>
          <option value="id">Indonesia</option>
        </select>
      </div>
    </div>
  )
}

Header.propTypes = {
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
