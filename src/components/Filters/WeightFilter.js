import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio } from 'react-bootstrap';
import * as actionCreators from '../../actions/pokemonActions';

class WeightFilter extends Component
{
    selectRadioBtn(selected) {
        switch (selected.target.id) {
            case 'radio1':
                this.props.selectWeight(50, this.props.pokemons, this.props.filteredPokemons);
                break;
            case 'radio2':
                this.props.selectWeight(200, this.props.pokemons, this.props.filteredPokemons);
                break;
            case 'radio3':
                this.props.selectWeight(1000, this.props.pokemons, this.props.filteredPokemons);
                break;
            case 'radio4':
                this.props.selectWeight(5000, this.props.pokemons, this.props.filteredPokemons);
                break;
            default:
                console.log('Error choosing the weight filter');
                break;
        }
    }

    render(){
        return (
            <div className='moves-criteria'>
                <h4>Weight (less than):</h4>
                <div onChange={this.selectRadioBtn.bind(this)}>
                    <Radio id='radio1' name='radioGroup'>50</Radio>
                    <Radio id='radio2' name='radioGroup'>200</Radio>
                    <Radio id='radio3' name='radioGroup'>1000</Radio>
                    <Radio id='radio4' name='radioGroup'>5000</Radio>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons,
        filteredPokemons: state.filteredPokemons,
        selectedWeight: state.selectedWeight
    };
}

export default connect(mapStateToProps, actionCreators)(WeightFilter);