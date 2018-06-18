import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store/index'
import App from '../app'
import { BrowserRouter } from 'react-router-dom'

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
