import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Search from 'components/Search/Search'
import Surah from 'components/Surah/Surah'

const mapStateToProps = (state) => ({
  list: state.main.list,
})

function Home({ list }) {
  return (
    <div>
      <p className="mb-4 text-3xl md:text-4xl text-green-800 text-center">
        <i className="mdi mdi-magnify mr-2"></i>
        Cari surat
      </p>

      {/* Search */}
      <Search />

      {/* List Surah */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((surah) => (
          <Surah key={surah.number} surah={surah} />
        ))}
      </div>
    </div>
  )
}

Home.propTypes = {
  list: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Home)
