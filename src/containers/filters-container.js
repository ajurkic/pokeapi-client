import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/pokemonActions';

import WeightFilter from '../components/WeightFilter';
import TypesFilter from '../components/TypesFilter'
import BaseXPFilter from '../components/BaseXPFilter';

class FiltersContainer extends Component
{
    render(){
        return (
            <div className='filter-container'>
                <WeightFilter />
                <BaseXPFilter />
                <TypesFilter />
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons
    };
}

export default connect(mapStateToProps, actionCreators)(FiltersContainer);