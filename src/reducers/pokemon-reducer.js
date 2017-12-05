const initialState = {
    isLoading: true,
    pokemons: []
}

//catching the pokemon got from pokemonActions.js
export default function PokemonsReducer(state=initialState, action) {
    switch (action.type) {
        case 'REQUEST_POKEMON': {
            return { ...state, isLoading: true }
        }
        case 'RECEIVED_POKEMON': {
            return { ...state, 
                    isLoading: false, 
                    pokemons: action.payload 
                }
        }
        case 'ERROR_RECEIVING_POKEMON': {
            return { ...state, isLoading: true }
        }
        default:
            return state;
    }
}