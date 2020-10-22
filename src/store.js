import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import resourceReducer from './reducers/resourceReducer'
import personReducer from './reducers/personReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
    resources: resourceReducer,
    persons: personReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

store.subscribe(() => console.log(store.getState()))

export default store