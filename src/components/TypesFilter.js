import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/pokemonActions';

class TypesFilter extends Component
{
    selectCheckbox(selected) {
        if(selected.target.checked){
            this.props.selectTypes(selected.target.nextSibling.data, this.props.filteredPokemons);
        }
    }

    render(){
        return (
            <div className='type-criteria' onChange={this.selectCheckbox.bind(this)}>
                <h5>Type:</h5>
                <Checkbox>Fire</Checkbox>
                <Checkbox>Water</Checkbox>
                <Checkbox>Bug</Checkbox>
                <Checkbox>Normal</Checkbox>
                <Checkbox>Rock</Checkbox>
                <Checkbox>Dragon</Checkbox>
                <Checkbox>Psychic</Checkbox>
                <Checkbox>Poison</Checkbox>
            </div>
        );
    };
}
function mapStateToProps(state) {
    return {
        filteredPokemons: state.filteredPokemons
    };
}

export default connect(mapStateToProps, actionCreators)(TypesFilter);