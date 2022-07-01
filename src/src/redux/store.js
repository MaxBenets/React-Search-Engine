import {createStore, combineReducers, applyMiddleware} from "redux"
import Middleware from "redux-thunk"

import cards_reducer from "./reducers/cards-reducer"

const reducers = combineReducers({
    cards: cards_reducer
})

const store = createStore(reducers, applyMiddleware(Middleware))

export default store
window.store = store