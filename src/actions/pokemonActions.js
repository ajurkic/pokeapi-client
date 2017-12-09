import axios from 'axios';

//Fetches pokemons from pokeapi.co
export function getPokemons() {
    return function(dispatch) {
        for (let i = 0; i < 15; i++) {
            //first - request action so UI can show loading spinner
            dispatch({type: 'REQUEST_POKEMON'})
            
            axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800) + 1}/`)
                .then((response) => {
                    dispatch({type: 'RECEIVED_POKEMON', payload: response.data})
                })
                .catch((err) => {
                    dispatch({type: 'ERROR_RECEIVING_POKEMON', payload: err});
                });
        }
    }
}

//Save selected weight to state so we can track the applied filter
export function selectWeight(weight){
    return function(dispatch) {
        dispatch({
            type: 'UPDATE_SELECTED_WEIGHT', 
            payload: weight
        });
    }
}

//Save selected Base exp s owe can track the applied filter
export function selectBaseXP(baseXP){
    return function(dispatch) {
        dispatch({
            type: 'UPDATE_SELECTED_BASE_XP', 
            payload: baseXP
        });
    }
}

//Handles checking the types, saves checked types as array to state
export function selectType(selectedType, selectedTypesList){
    return function(dispatch) {
        selectedTypesList.push(selectedType);
        dispatch({type: 'ADD_TYPE_TO_SELECTED_TYPES', payload: selectedTypesList});
    }
}

//Handles unchecking the type, saves the rest as array to state
export function deselectType(deselectedType, selectedTypesList){
    return function(dispatch) {
        const tempList = selectedTypesList.filter( type => type !== deselectedType);
        dispatch({type: 'REMOVE_TYPE_FROM_SELECTED_TYPES', payload: tempList});
    }
}

//Resets all filters by changing filteredPokemons array back to
//all fetched pokemons array. Takes all 15 pokemons as parameter.
export function resetFilters(pokemons) {
    return function(dispatch) {
        dispatch({type: 'RESET_FILTERS', payload: pokemons});
    }
}

//Function not exported! It is just used in filterEngine!
function filterByWeight(weight, pokemons){
    if(!weight) return [];

    return pokemons.filter(pokemon => pokemon.weight < weight);
}

//Function not exported! It is just used in filterEngine!
function filterByBaseXP(baseXP, pokemons){
    if(!baseXP) return [];
    return pokemons.filter(pokemon => pokemon.base_experience < baseXP);
}

//Function not exported! It is just used in filterEngine!
function filterByType(selectedTypesList, pokemons){
    if(selectedTypesList.length === 0) return [];

    let typesMatch = false;
    const filteredPokemons = [];

    selectedTypesList.forEach(selectedType => {
        pokemons.forEach(pokemon => {
            pokemon.types.forEach(type => {
                if(type.type.name === selectedType.toLowerCase())
                    typesMatch=true;
            });

            if(typesMatch) filteredPokemons.push(pokemon);
            typesMatch = false;
        });
    });

    return filteredPokemons;
}

//Parameters from state: selectedWeight - selectedBaseXP - selectedTypesList - pokemons
//Filters all 15 pokemons based on filter selection from user
//Activates every time user clicks on filter and always filters from whole list of pokemons
export function filterEngine(weight, baseXP, selectedTypesList, pokemons){
    return function(dispatch) {
        const weightFilteredPokemons = filterByWeight(weight, pokemons);
        const baseXPFilteredPokemons = filterByBaseXP(baseXP, pokemons);
        const typeFilteredPokemons = filterByType(selectedTypesList, pokemons);

        var filteredPokemons = [];

        //All filters active
        if(weight && baseXP && selectedTypesList.length !==0){
            weightFilteredPokemons.forEach(weightPokemon => {
                baseXPFilteredPokemons.forEach(baseXPPokemon=>{
                    if(weightPokemon === baseXPPokemon){
                        typeFilteredPokemons.forEach(typePokemon => {
                            if(baseXPPokemon === typePokemon)
                                filteredPokemons.push(weightPokemon);
                        });
                    }
                });
            });
        }
        //BaseXP and Types active
        if(!weight && baseXP && selectedTypesList.length !== 0){
            baseXPFilteredPokemons.forEach(baseXPPokemon => {
                typeFilteredPokemons.forEach(typePokemon => {
                    if(baseXPPokemon === typePokemon)
                        filteredPokemons.push(baseXPPokemon);
                });
            });
        }
        //Weight and Types active
        if(weight && !baseXP && selectedTypesList.length !== 0){
            weightFilteredPokemons.forEach(weightPokemon => {
                typeFilteredPokemons.forEach(typePokemon => {
                    if(weightPokemon === typePokemon)
                        filteredPokemons.push(weightPokemon);
                });
            });
        }
        //Weight and BaseXP active
        if(weight && baseXP && selectedTypesList.length === 0){
            weightFilteredPokemons.forEach(weightPokemon => {
                baseXPFilteredPokemons.forEach(baseXPPokemon => {
                    if(weightPokemon === baseXPPokemon)
                        filteredPokemons.push(weightPokemon);
                });
            });
        }
        //Only weight filter applied
        if(weight && !baseXP && selectedTypesList.length === 0){
            filteredPokemons = weightFilteredPokemons;
        }
        //Only BaseXP filter applied
        if(!weight && baseXP && selectedTypesList.length === 0){
            filteredPokemons = baseXPFilteredPokemons;
        }
        //Only type filter applied
        if(!weight && !baseXP && selectedTypesList.length !== 0){
            filteredPokemons = typeFilteredPokemons;
        }

        //Remove duplicates, if there are any
        var filteredNoDuplicates = filteredPokemons.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        });

        setTimeout(()=>{
            dispatch({type: 'FILTERED_POKEMONS', payload: filteredNoDuplicates});
        }, 500);
    }
}