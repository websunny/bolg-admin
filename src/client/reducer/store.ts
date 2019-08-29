import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

export default function configureStore (initialState:any) {
    return createStore(rootReducer, initialState, compose(applyMiddleware(thunk)))
}

