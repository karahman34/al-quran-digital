import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import Surah from 'components/Surah/Surah'

function ListSurah({ list }) {
  const { t } = useTranslation()

  if (!list.length) {
    return (
      <div className="mt-8 text-center w-full text-xl lg:text-2xl text-green-800">
        <i className="mdi mdi-emoticon-sad-outline mr-2"></i>
        <span>{t('list.not_found')}</span>
      </div>
    )
  } else {
    return (
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((surah) => (
          <Surah key={surah.number} surah={surah} />
        ))}
      </div>
    )
  }
}

ListSurah.propTypes = {
  list: PropTypes.array.isRequired,
}

export default ListSurah
