import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/pokemonActions';

class PokemonContainer extends Component
{
    componentWillMount() {
        this.props.getPokemons();
    };

    createPokemonCards() {
        return this.props.filteredPokemons.map((pokemon) => {
            return (
                <div key={pokemon.id} className="thumbnail">
                    <div className="card-block">
                        <h4 className="card-title">{pokemon.name.toUpperCase()}</h4>
                        <img src={pokemon.sprites.front_default} alt="pokemon"/>
                        <h6 className="card-subtitle mb-2 text-muted">Height: {pokemon.height} feet</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Weight: {pokemon.weight} lb</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Base experience: {pokemon.base_experience}</h6>
                        <h5 className="card-subtitle text-muted">Type:</h5>
                        <ul className="list-unstyled">
                            {pokemon.types.map((type) => {
                                return <li key={type.slot} className="text-muted mb-2 text-capitalize">
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
                {/*If it is done loading and there is pokemon in filteredPokemons array*/}
                { !this.props.isLoading && this.props.filteredPokemons.length !== 0 
                    ? this.createPokemonCards() 
                    : '' }

                {/*If it is done loading and all pokemons were filtered*/}
                { !this.props.isLoading && this.props.filteredPokemons.length === 0 
                    ? <h3>All pokemons were filtered, hit reset button then try another combination</h3>
                    : ''}

                {/*If it is done loading and no pokemon came from api*/}
                { !this.props.isLoading && this.props.pokemons.length === 0
                    ? <h4>Error fetching pokemon. Please, try refreshing the page. If problem persists pokeapi.co is probably down.</h4> 
                    : ''}

                <div className={` spinner ${this.props.isLoading ? 'is-loading' : ''} `}>
                    <h2><i>Loading the pokemon</i></h2><br/>
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                    <h5><i>(refresh if waiting too long)</i></h5>
                </div>
            </div>
        );
    };
}

//Takes application state (part of store) and passes it as a prop to a component
//so i can access it in component via this.props.pokemons
function mapStateToProps(state) {
    //State parameter is everything coming from reducer that is sent by action
    //"Ok, send this states (isLoading, pokemons, ...) as props to this component"
    return {
        isLoading: state.isLoading,
        pokemons: state.pokemons,
        filteredPokemons: state.filteredPokemons
    };
}

/*This way we are taking the component and making it aware of the store
  it is connected to (pokemon data) - now it is a smart component. 
  Otherwise it would be just a dumb component that doesn't know anything
  and just shows part of webpage. */
export default connect(mapStateToProps, actionCreators)(PokemonContainer);