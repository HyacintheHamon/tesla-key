// Wherever you build your reducers
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import AppNavigation from '../navigation/AppNavigation'
import reducers from '../reducers'
import rootSaga from '../sagas'

const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
  logger,
];

export default function configureStore() {
  const store = createStore(reducers, {}, applyMiddleware(...middleware))
  sagaMiddleware.run(rootSaga)
  return store
}