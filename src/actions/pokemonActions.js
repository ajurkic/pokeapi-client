import axios from 'axios';

var pokemons = [];

export function getPokemons() {
    return function(dispatch) {
        for (let i = 0; i < 2; i++) {
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
        setTimeout(function(){ 
            dispatch({type: 'RECEIVED_POKEMON', payload: pokemons})
        }, 4000);
    }
}

export function selectWeight(weight){
    return function(dispatch) {
        dispatch({type: 'WEIGHT_SELECTED', payload: weight});
    }
};