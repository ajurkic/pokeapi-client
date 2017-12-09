import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio } from 'react-bootstrap';
import * as actionCreators from '../actions/pokemonActions';

class WeightFilter extends Component
{
    //On every weight select changes the selectedWeight state
    //and calls filterEngine with selected filters
    selectRadioBtn(selected) {
        switch (selected.target.id) {
            case 'radio1':
                this.props.selectWeight(50);
                break;
            case 'radio2':
                this.props.selectWeight(200);
                break;
            case 'radio3':
                this.props.selectWeight(1000);
                break;
            case 'radio4':
                this.props.selectWeight(5000);
                break;
            default:
                console.log('Error choosing the weight filter');
                break;
        }
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
            <div className='moves-criteria'>
                <h5>Weight (less than):</h5>
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
        selectedWeight: state.selectedWeight,
        selectedBaseXP: state.selectedBaseXP,
        selectedTypes: state.selectedTypes,
        pokemons: state.pokemons
    };
}

export default connect(mapStateToProps, actionCreators)(WeightFilter);