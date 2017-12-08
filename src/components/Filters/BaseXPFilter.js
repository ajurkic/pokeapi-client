import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/pokemonActions';

import { DropdownButton, MenuItem } from 'react-bootstrap';

class BaseXPFilter extends Component
{
    selectedItem(selected) {
        this.props.selectBaseXP(Number(selected.target.text), this.props.filteredPokemons);
    }
    render(){
        return (
            <div className='abilities-criteria'>
                <h3>Base exp:</h3>
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
        selectedBaseXP: state.selectedBaseXP,
        filteredPokemons: state.filteredPokemons
    };
}

export default connect(mapStateToProps, actionCreators)(BaseXPFilter);