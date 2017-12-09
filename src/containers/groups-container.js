import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/pokemonActions';

class GroupsContainer extends Component
{
    handleGroupClick(selected){
        let group = selected.target.firstChild.data;
        var temp = this;
        switch (group) {
            case '1':
                this.props.selectWeight(1000);
                setTimeout(() => { temp.props.selectType("Rock", this.props.selectedTypes) }, 300);
                break;
            case '2':
                this.props.selectWeight(5000);
                setTimeout(() => { temp.props.selectBaseXP(100) }, 300);  
                break;
            case '3':
                this.props.selectType("Water", this.props.selectedTypes);
                setTimeout(() => { temp.props.selectType("Ground", temp.props.selectedTypes) }, 300);
                break;
            case '4':
                this.props.selectType("Psychic", this.props.selectedTypes);
                setTimeout(() => { temp.props.selectBaseXP(300) }, 300);
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