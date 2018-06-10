import Home from 'components/home'
import Item from 'components/item'
import { fetchPopularRepos } from './api'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/popular/:id',
    component: Item,
    fetchInitialData: async (path = '') => await fetchPopularRepos(path.split('/').pop())
  }
]

export default routes
