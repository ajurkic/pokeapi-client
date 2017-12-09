import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/pokemonActions';

import '../../node_modules/font-awesome/css/font-awesome.min.css';

class GroupsContainer extends Component
{
    handleGroupClick(selected){
        this.props.resetFilters(this.props.pokemons);

        let group = selected.target.firstChild.data;
        var temp = this;

        setTimeout(() => {
            switch (group) {
                case '1':
                    this.props.selectWeight(1000);
                    setTimeout(() => { temp.props.selectType("Rock", this.props.selectedTypes) }, 200);
                    break;
                case '2':
                    this.props.selectWeight(5000);
                    setTimeout(() => { temp.props.selectBaseXP(100) }, 200);  
                    break;
                case '3':
                    this.props.selectType("Water", this.props.selectedTypes);
                    setTimeout(() => { temp.props.selectType("Ground", temp.props.selectedTypes) }, 200);
                    break;
                case '4':
                    this.props.selectType("Psychic", this.props.selectedTypes);
                    setTimeout(() => { temp.props.selectBaseXP(300) }, 200);
                    break;
                default:
                    break;
            }
            setTimeout(function(){
                temp.props.filterEngine(temp.props.selectedWeight,
                                        temp.props.selectedBaseXP,
                                        temp.props.selectedTypes,
                                        temp.props.pokemons);
            }, 300);
        }, 300);
    }
    handleResetClick() {
        this.props.resetFilters();
    }
    render(){
        return(
            <div className='group-container'>
                <div className='btn-container'>
                    <div className='circle-btn' onClick={this.handleGroupClick.bind(this)}>1</div>
                    <h5>Rock + weight(1000)</h5>
                </div>

                <div className='btn-container'>
                    <div className='circle-btn' onClick={this.handleGroupClick.bind(this)}>2</div>
                    <h5>Weight(5000) + Base exp.(100)</h5>
                </div>
                
                <div className='btn-container'>
                    <div className='circle-btn' onClick={this.handleGroupClick.bind(this)}>3</div>
                    <h5>Water + Ground</h5>
                </div>

                <div className='btn-container'>
                    <div className='circle-btn' onClick={this.handleGroupClick.bind(this)}>4</div>
                    <h5>Psychic + Base exp.(300)</h5>
                </div>

                <div className='btn-container'>
                    <div className='circle-btn' style={{"background-color": "#e74c3c"}} onClick={this.handleResetClick()}>R</div>
                    <h5>Reset filters</h5>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons,
        selectedWeight: state.selectedWeight,
        selectedBaseXP: state.selectedBaseXP,
        selectedTypes: state.selectedTypes
    }
}

export default connect(mapStateToProps, actionCreators)(GroupsContainer);