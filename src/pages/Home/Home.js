import { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import Search from 'components/Search/Search'
import ListSurah from 'components/ListSurah/ListSurah'
import { filterSurah } from 'store/modules/main/getter'

const mapStateToProps = (state) => ({
  list: state.main.list,
  lang: state.global.lang,
  filterSurah: (q) => filterSurah(state)(q),
})

function Home({ list, filterSurah }) {
  const { t } = useTranslation()

  const [listSurah, setListSurah] = useState(list)

  function onSearch(e) {
    const q = e.target.value

    if (q.length < 1) {
      setListSurah(list)
    } else {
      const filteredSurah = filterSurah(q)

      setListSurah(filteredSurah)
    }
  }

  return (
    <div>
      <p className="mb-4 text-3xl md:text-4xl text-green-800 text-center">
        <i className="mdi mdi-magnify mr-2"></i>
        {t('home.header.search')}
      </p>

      {/* Search */}
      <Search onSearch={onSearch} />

      {/* List Surah */}
      <ListSurah list={listSurah}></ListSurah>
    </div>
  )
}

Home.propTypes = {
  list: PropTypes.array.isRequired,
  filterSurah: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(Home)
