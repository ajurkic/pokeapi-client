const initialState = {
    isLoading: true,
    pokemons: [],
    filteredPokemons: [],
    selectedWeight: null,
    selectedBaseXP: null,
    selectedTypes: []
}

//Catching the actions got from pokemonActions.js
export default function PokemonsReducer(state=initialState, action) {
    switch (action.type) {
        case 'REQUEST_POKEMON': {
            return { ...state, isLoading: true }
        }
        case 'RECEIVED_POKEMON':{
            return {
                ...state,
                isLoading: false,
                pokemons: [...state.pokemons, action.payload],
                filteredPokemons: [...state.filteredPokemons, action.payload]
            }
        }
        case 'ERROR_RECEIVING_POKEMON': {
            return { ...state, isLoading: true }
        }
        case 'RESET_FILTERS': {
            return { ...state, isLoading: true, filteredPokemons: action.payload }
        }
        case 'UPDATE_SELECTED_WEIGHT': {
            return { ...state, selectedWeight: action.payload }
        }
        case 'UPDATE_SELECTED_BASE_XP': {
            return { ...state, selectedBaseXP: action.payload }
        }
        case 'ADD_TYPE_TO_SELECTED_TYPES': {
            return { ...state, selectedTypes: action.payload }
        }
        case 'REMOVE_TYPE_FROM_SELECTED_TYPES': {
            return { ...state, selectedTypes: action.payload }
        }
        case 'FILTERED_POKEMONS': {
            return { ...state, isLoading: false, filteredPokemons: action.payload }
        }
        default:
            return state;
    }
}