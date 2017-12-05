import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemons } from '../actions/pokemonActions';

class PokemonContainer extends Component
{
    componentWillMount() {
        this.props.dispatch(getPokemons());
    };

    createPokemonCards() {
        return this.props.pokemons.map((pokemon) => {
            return (
                <div key={pokemon.id} className="thumbnail">
                    <div className="card-block">
                    <h4 className="card-title">{pokemon.name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{pokemon.height}</h6>
                    </div>
                </div>
            )
        });
    };

    render(){
        return(
            <div className='pokemon-container'>
                {
                    !this.props.isLoading && this.props.pokemons.length > 0 ? this.createPokemonCards() : ''
                }
                
                <div className={` spinner ${this.props.isLoading ? 'is-loading' : ''} `}>
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
    return state;
}

/*This way we are taking the component and making it aware of the store
  it is connected to (pokemon data) - now it is a smart component. 
  Otherwise it would be just a dumb component that doesn't know anything  */
export default connect(mapStateToProps)(PokemonContainer);