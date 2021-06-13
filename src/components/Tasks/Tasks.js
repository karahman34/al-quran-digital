import { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchQuran } from 'store/modules/main/actions'
import PropTypes from 'prop-types'
import InitialLoader from 'components/InitialLoader/InitialLoader'

const mapDispatchToProps = (dispatch) => ({
  fetchQuran: () => dispatch(fetchQuran()),
})

function Tasks({ children, fetchQuran }) {
  const [tasks, setTasks] = useState(['fetchQuran'])

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

  useEffect(() => {
    if (tasks.length) {
      // Fetch Quran
      if (tasks.includes('fetchQuran')) {
        getQuran()
      }
    }
  }, [tasks])

  return tasks.length ? <InitialLoader /> : children
}

Tasks.propTypes = {
  children: PropTypes.node,
  fetchQuran: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(Tasks)
