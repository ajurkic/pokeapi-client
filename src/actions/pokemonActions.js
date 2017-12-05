import axios from 'axios';

var promises = [];
var pokemons = [];

export function getPokemons() {
    return function(dispatch) {

        for (let i = 0; i < 2; i++) {
            //first request them so UI can show loading spinner
            dispatch({type: 'REQUEST_POKEMON'})
            
            var promise = axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800) + 1}/`)
                                .then((response) => {
                                    pokemons.push(response.data);
                                })
                                .catch((err) => {
                                    dispatch({type: 'ERROR_RECEIVING_POKEMON', payload: err});
                                });
            
            promises.push(promise);
        }
        dispatch({type: 'RECEIVED_POKEMON', payload: pokemons})
        // return Promise.all(promises);
    }
}

// function doSomething() {
//     return dispatch => axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800) + 1}/`)
//     .then((response) => {
//         dispatch({type: 'RECEIVED_POKEMON', payload: response.data})
//     })
//     .catch((err) => {
//         dispatch({type: 'ERROR_RECEIVING_POKEMON', payload: err});
//     });
// }

// Promise.all([
//     dispatch(doSomething()),
//     dispatch(doSomething()),
//     dispatch(doSomething()),
//     dispatch(doSomething()),
//     dispatch(doSomething()),
//     dispatch(doSomething()),
//     dispatch(doSomething()),
//     dispatch(doSomething()),
//     dispatch(doSomething()),
//     dispatch(doSomething()),
//     dispatch(doSomething()),
//     dispatch(doSomething()),
//     dispatch(doSomething()),
//     dispatch(doSomething()),
//     dispatch(doSomething())
//   ]).then(() => {
//     console.log('I did everything!');
//   })