import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/index.js'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const makeStore = () => {
  return createStore(rootReducer, withDevTools(applyMiddleware(sagaMiddleware)))
}

const store = makeStore()

sagaMiddleware.run(rootSaga)

export default store
