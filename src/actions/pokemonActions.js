import axios from 'axios';

export function getPokemons() {
    return function(dispatch) {
        var pokemons = [];
        for (let i = 0; i < 15; i++) {
            //first request them so UI can show loading spinner
            dispatch({type: 'REQUEST_POKEMON'})
            
            axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800) + 1}/`)
                .then((response) => {
                    pokemons.push(response.data);
                })
                .catch((err) => {
                    dispatch({type: 'ERROR_RECEIVING_POKEMON', payload: err});
                });
        }
        //Wait for pokemons to come, than dispatch an action to save them to state
        setTimeout(function(){ 
            dispatch({type: 'RECEIVED_POKEMON', payload: pokemons})
        }, 10000);
    }
}

//Takes selected weight and (maybe) filtered pokemons.
//Returns filtered pokemons
export function selectWeight(weight, pokemons){
    return function(dispatch) {
        //Filter all pokemons that have more weight than weight parameter
        const filteredPokemons = pokemons.filter(pokemon => pokemon.weight < weight);
        dispatch({
            type: 'FILTER_BY_WEIGHT', 
            payload: filteredPokemons
        });
    }
};

//Takes selected type and (maybe) filtered pokemons.
//Checks if every pokemon's types match the selected type
//Returns pokemons of selected type
export function selectTypes(typeName, pokemons){
    return function(dispatch) {
        let typesMatch = false;
        const filteredPokemons = [];

        pokemons.forEach(pokemon => {
            pokemon.types.forEach(type => {
                if(type.type.name === typeName.toLowerCase())
                    typesMatch=true;
            });
            if(typesMatch) filteredPokemons.push(pokemon);
            typesMatch = false;
        });
        dispatch({type: 'FILTER_BY_TYPE', payload: filteredPokemons});
    }
}

export function selectBaseXP(baseXP, pokemons){
    return function(dispatch) {
        console.log("Pokemons length: " +pokemons.length);
        if(pokemons.length === 0)
            dispatch({type: 'FILTER_BY_BASEXP', payload: []});

        const filteredPokemons = pokemons.filter(pokemon => pokemon.base_experience < baseXP);

        dispatch({
            type: 'FILTER_BY_BASEXP', 
            payload: filteredPokemons
        });
    }
}

//Resets all filters by changing filteredPokemons array back to
//all fetched pokemons array. Takes all 15 pokemons as parameter.
export function resetFilters(pokemons) {
    return function(dispatch) {
        dispatch({type: 'RESET_FILTERS', payload: pokemons});
    }
}