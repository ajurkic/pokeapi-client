import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/pokemonActions';

import { DropdownButton, MenuItem } from 'react-bootstrap';

class BaseXPFilter extends Component
{
    selectedItem(selected) {
        this.props.selectBaseXP(Number(selected.target.text));
        var temp = this;
        setTimeout(function(){
            temp.props.filterEngine(temp.props.selectedWeight,
                                    temp.props.selectedBaseXP,
                                    temp.props.selectedTypes,
                                    temp.props.pokemons);
        }, 300);
    }
    render(){
        return (
            <div className='abilities-criteria'>
                <h5>Base exp:</h5>
                <DropdownButton id='dropdown' title='Choose...'>
                    <MenuItem onClick={this.selectedItem.bind(this)}>20</MenuItem>
                    <MenuItem onClick={this.selectedItem.bind(this)}>50</MenuItem>
                    <MenuItem onClick={this.selectedItem.bind(this)}>100</MenuItem>
                    <MenuItem onClick={this.selectedItem.bind(this)}>300</MenuItem>
                </DropdownButton>
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

export default connect(mapStateToProps, actionCreators)(BaseXPFilter);