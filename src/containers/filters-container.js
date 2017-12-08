import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/pokemonActions';

import WeightFilter from '../components/Filters/WeightFilter';
import TypesFilter from '../components/Filters/TypesFilter'
import BaseXPFilter from '../components/Filters/BaseXPFilter';

class FiltersContainer extends Component
{
    handleBtnClick() {
        this.props.resetFilters(this.props.pokemons);
    }
    render(){
        return (
            <div className='filter-container'>
                <button className="btn btn-primary" onClick={this.handleBtnClick.bind(this)}>Reset</button>
                <WeightFilter />
                <TypesFilter />
                <BaseXPFilter />
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