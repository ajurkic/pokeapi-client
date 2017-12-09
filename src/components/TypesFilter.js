import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/pokemonActions';

class TypesFilter extends Component
{
    selectCheckbox(selected) {
        if(selected.target.checked){
            this.props.selectType(selected.target.nextSibling.data, this.props.selectedTypes);
        } else {
            this.props.deselectType(selected.target.nextSibling.data, this.props.selectedTypes);
        }
        var temp = this;
        setTimeout(function(){
            temp.props.filterEngine(temp.props.selectedWeight,
                                    temp.props.selectedBaseXP,
                                    temp.props.selectedTypes,
                                    temp.props.pokemons);
        }, 500);
    }

    render(){
        return (
            <div className='type-criteria' onChange={this.selectCheckbox.bind(this)}>
                <h5>Type:</h5>
                <Checkbox>Fire</Checkbox>
                <Checkbox>Water</Checkbox>
                <Checkbox>Normal</Checkbox>
                <Checkbox>Rock</Checkbox>
                <Checkbox>Dragon</Checkbox>
                <Checkbox>Flying</Checkbox>
                <Checkbox>Psychic</Checkbox>
                <Checkbox>Poison</Checkbox>
            </div>
        );
    };
}
function mapStateToProps(state) {
    return {
        selectedWeight: state.selectedWeight,
        selectedBaseXP: state.selectedBaseXP,
        selectedTypes: state.selectedTypes,
        pokemons: state.pokemons
    };
}

export default connect(mapStateToProps, actionCreators)(TypesFilter);