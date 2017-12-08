import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/pokemonActions';

class GroupsContainer extends Component
{
    handleGroupClick(selected){
        this.props.resetFilters(this.props.filteredPokemons);

        let group = selected.target.firstChild.data;
        var temp = this;
        switch (group) {
            case '1':
                this.props.selectTypes('Rock', this.props.filteredPokemons);
                setTimeout(function() {
                    temp.props.selectWeight(1000, temp.props.filteredPokemons);
                }, 300);
                break;
            case '2':
                this.props.selectWeight('5000', this.props.filteredPokemons);
                setTimeout(function() {
                    temp.props.selectBaseXP(100, temp.props.filteredPokemons);
                }, 300);                
                break;
            case '3':
                this.props.selectTypes('Water', this.props.filteredPokemons);
                setTimeout(function() {
                    temp.props.selectTypes('Ground', temp.props.filteredPokemons);
                }, 300);
                break;
            case '4':
                this.props.selectTypes('Psychic', this.props.filteredPokemons);
                setTimeout(function() {
                    temp.props.selectBaseXP(300, temp.props.filteredPokemons);
                }, 300);
                break;
            default:
                break;
        }
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
        filteredPokemons: state.filteredPokemons
    }
}

export default connect(mapStateToProps, actionCreators)(GroupsContainer);