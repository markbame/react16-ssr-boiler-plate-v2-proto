import Home from './components/home'
import Grid from './components/grid'
import { fetchPopularRepos } from './api'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: async (path = '') => await fetchPopularRepos(path.split('/').pop())
  }
]

export default routes
