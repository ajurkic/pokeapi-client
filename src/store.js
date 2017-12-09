import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import PokemonReducer from './reducers/pokemon-reducer';

//logger was removed due to finished working with states
const middleware = applyMiddleware(promise(), thunk)

export default createStore(PokemonReducer, middleware)