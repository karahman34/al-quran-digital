import { combineReducers, applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import globalReducer from './modules/global/reducer'
import mainReducer from './modules/main/reducer'

const reducer = combineReducers({
  global: globalReducer,
  main: mainReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
