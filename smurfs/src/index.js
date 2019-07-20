import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
