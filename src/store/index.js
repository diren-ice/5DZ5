import {combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "@redux-devtools/extension";
import todoReducer from './todoReducers'


const rootReducer = combineReducers({
    todos: todoReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store
