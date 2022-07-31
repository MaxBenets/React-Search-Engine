import { combineReducers, createStore, applyMiddleware} from "redux";

import thunkMiddleware from "redux-thunk"

import searchBarReducer from "./reducers/searchBarReducer.js"
import outputReducer from "./reducers/outputReducer.js"

let reducers = combineReducers({
    search: searchBarReducer,
    output: outputReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store