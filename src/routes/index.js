import Home from 'pages/Home/Home'
import Surah from 'pages/Surah/Surah'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/surah/:number/:surah',
    exact: true,
    component: Surah,
  },
]

export default routes
