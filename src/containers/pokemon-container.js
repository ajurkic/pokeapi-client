import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/pokemonActions';

class PokemonContainer extends Component
{
    componentWillMount() {
        this.props.getPokemons();
    };

    createPokemonCards() {
        return this.props.pokemons.map((pokemon) => {
            return (
                <div key={pokemon.id} className={`thumbnail ${this.props.selectedWeight < pokemon.weight ? 'hidden' : ''} `}>
                    <div className="card-block">
                    <h4 className="card-title">{pokemon.name}</h4>
                    {/* <img src={pokemon.sprites.front_default} alt="pokemon"/> */}
                    <h6 className="card-subtitle mb-2 text-muted">Height(inch): {pokemon.height}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Weight(lb): {pokemon.weight}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Base experience: {pokemon.base_experience}</h6>
                    <h5 className="card-subtitle text-muted">Type:</h5>
                    <ul>
                        {pokemon.types.map((type) => {
                            return <li key={type.slot} className="text-muted">
                                        {type.type.name}
                                    </li>
                        })}
                    </ul>
                    </div>
                </div>
            )
        });
    };

    render(){
        return(
            <div className='pokemon-container'>
                { !this.props.isLoading ? this.createPokemonCards() : '' }

                <div className={` spinner ${this.props.isLoading ? 'is-loading' : ''} `}>
                    <h4>Fetching the pokemons...</h4>
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        );
    };
}

//takes application state(part of store) and passes it as a prop to a component
//so i can access it in component via this.props.pokemons
function mapStateToProps(state) {
    //state here is array of pokemons coming from reducer
    return {
        isLoading: state.isLoading,
        pokemons: state.pokemons,
        selectedWeight: state.selectedWeight
    };
}

/*This way we are taking the component and making it aware of the store
  it is connected to (pokemon data) - now it is a smart component. 
  Otherwise it would be just a dumb component that doesn't know anything  */
export default connect(mapStateToProps, actionCreators)(PokemonContainer);