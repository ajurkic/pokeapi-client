const initialState = {
    isLoading: true,
    pokemons: [],
    filteredPokemons: []
}

//catching the pokemon got from pokemonActions.js
export default function PokemonsReducer(state=initialState, action) {
    switch (action.type) {
        case 'REQUEST_POKEMON': {
            return { ...state, isLoading: true }
        }
        case 'RECEIVED_POKEMON': {
            return Object.assign({}, state, {
                isLoading: false, 
                pokemons: action.payload,
                filteredPokemons: action.payload
            });
        }
        case 'ERROR_RECEIVING_POKEMON': {
            return { ...state, isLoading: true }
        }
        case 'FILTER_BY_WEIGHT': {
            return {
                ...state,
                filteredPokemons: action.payload
            }
        }
        case 'FILTER_BY_TYPE': {
            return {
                ...state, 
                filteredPokemons: action.payload
            }
        }
        case 'FILTER_BY_BASEXP': {
            return {
                ...state,
                filteredPokemons: action.payload
            }
        }
        case 'RESET_FILTERS': {
            return {
                ...state,
                pokemons: action.payload,
                filteredPokemons: action.payload
            }
        }
        default:
            return state;
    }
}