import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'

import App from './App/App'
import './index.scss'

import reducers from './reducers'

const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, enhancer)}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
