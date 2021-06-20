import { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchQuran } from 'store/modules/main/actions'
import { setLang } from 'store/modules/global/actions'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import InitialLoader from 'components/InitialLoader/InitialLoader'

const mapDispatchToProps = (dispatch) => ({
  fetchQuran: () => dispatch(fetchQuran()),
  setLang: (lang) => dispatch(setLang(lang)),
})

function Tasks({ children, fetchQuran, setLang }) {
  const { i18n } = useTranslation()
  const [tasks, setTasks] = useState(['fetchQuran', 'setCurrentLang'])

  const getQuran = useCallback(async () => {
    fetchQuran()
      .catch(() => {
        alert('Failed to fetch quran')
      })
      .finally(() => {
        setTasks((prev) => {
          const clone = [...prev]
          clone.splice(clone.indexOf('fetchQuran'), 1)

          return clone
        })
      })
  }, [])

  const setCurrentLang = useCallback(() => {
    const currentLang = localStorage.getItem('lang')

    if (currentLang) {
      setLang(currentLang)
      i18n.changeLanguage(currentLang)
    }

    setTasks((prev) => {
      const clone = [...prev]
      clone.splice(clone.indexOf('setCurrentLang'), 1)

      return clone
    })
  })

  useEffect(() => {
    if (tasks.length) {
      // Fetch Quran
      if (tasks.includes('fetchQuran')) {
        getQuran()
      }

      // Set current lang
      if (tasks.includes('setCurrentLang')) {
        setCurrentLang()
      }
    }
  }, [tasks])

  return tasks.length ? <InitialLoader /> : children
}

Tasks.propTypes = {
  children: PropTypes.node,
  setLang: PropTypes.func.isRequired,
  fetchQuran: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Tasks)
